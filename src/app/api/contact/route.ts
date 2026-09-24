import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < now) rateLimitStore.delete(key);
  }
}, 5 * 60 * 1000);

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  return forwarded ? forwarded.split(',')[0].trim() : realIp || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const key = `contact:${ip}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;
  const record = rateLimitStore.get(key);
  if (!record || record.resetTime < now) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }
  if (record.count >= maxRequests) return true;
  record.count++;
  return false;
}

function sanitize(input: string): string {
  return input.trim().replace(/[<>]/g, '').substring(0, 1000);
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);

    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '900' } }
      );
    }

    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    const body = await request.json();
    const { firstName, lastName, email, company, country, phoneCode, phoneNumber, message, attachments } = body;

    // Required field validation
    if (!firstName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: 'First name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // Phone validation
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json(
        { error: 'Phone number must contain only digits and be 10-15 digits long.' },
        { status: 400 }
      );
    }

    const data = {
      firstName: sanitize(firstName),
      lastName: lastName ? sanitize(lastName) : '',
      email: sanitize(email).toLowerCase(),
      company: company ? sanitize(company) : 'Not provided',
      country: country ? sanitize(country) : 'Not provided',
      phone: `${phoneCode ? sanitize(phoneCode) : ''} ${sanitize(phoneNumber)}`.trim(),
      message: message && message.trim() ? sanitize(message) : 'No message provided',
    };

    // Build attachments section for email
    let attachmentsHtml = '';
    let attachmentsText = 'No attachments';
    if (attachments && Array.isArray(attachments) && attachments.length > 0) {
      attachmentsHtml = `<p><strong>Attachments:</strong></p><ul>` +
        attachments.map((a: any) =>
          `<li><a href="${a.r2Url}">${a.originalName}</a> (${(a.fileSize / 1024 / 1024).toFixed(2)} MB)</li>`
        ).join('') + `</ul>`;
      attachmentsText = attachments.map((a: any) =>
        `- ${a.originalName} (${(a.fileSize / 1024 / 1024).toFixed(2)} MB): ${a.r2Url}`
      ).join('\n');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send notification to admin
    await transporter.sendMail({
      from: `"Altiora Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${data.company}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Country:</td><td style="padding: 8px 0;">${data.country}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Submitted:</td><td style="padding: 8px 0;">${new Date().toLocaleString()}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
            <p><strong>Message:</strong></p>
            <p style="background: #f8f9fa; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${data.message}</p>
            ${attachmentsHtml}
          </div>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nCompany: ${data.company}\nCountry: ${data.country}\nPhone: ${data.phone}\nSubmitted: ${new Date().toLocaleString()}\n\nMessage:\n${data.message}\n\nAttachments:\n${attachmentsText}`,
    });

    // Send auto-reply to user (non-critical)
    try {
      await transporter.sendMail({
        from: `"Altiora Infotech" <${process.env.GMAIL_USER}>`,
        to: data.email,
        replyTo: process.env.GMAIL_USER,
        subject: 'Thank you for reaching out to Altiora Infotech',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <img src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_l6diqm.png" alt="Altiora Infotech" style="max-width: 100px; margin-bottom: 12px;">
              <h2 style="color: white; margin: 0;">Altiora Infotech</h2>
              <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0;">Digital Marketing &amp; Technology</p>
            </div>
            <div style="background: #fff; padding: 30px 24px; border: 1px solid #e0e0e0; border-top: none;">
              <p>Hi ${data.firstName},</p>
              <p>Thank you for contacting <strong>Altiora Infotech</strong>. We've received your enquiry and our team will get back to you within <strong>24 hours</strong>.</p>
              <p>To help us respond faster, feel free to share any additional details about your project by replying to this email.</p>
              <p>We'd also be happy to schedule a quick <strong>15-20 minute call</strong>, just let us know your availability.</p>
              <p style="color: #667eea; font-weight: bold;">Looking forward to working with you!</p>
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;">
              <p style="margin: 0;"><strong>Best regards,</strong><br>Altiora Infotech Team<br>
              <a href="mailto:altiorainfotech@gmail.com" style="color: #667eea;">altiorainfotech@gmail.com</a></p>
            </div>
            <div style="background: #f8f9fa; padding: 16px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
              <p style="margin: 0; font-size: 12px; color: #888;">This is an automated response. Please reply directly to this email.</p>
            </div>
          </div>
        `,
        text: `Hi ${data.firstName},\n\nThank you for contacting Altiora Infotech. We've received your enquiry and will get back to you within 24 hours.\n\nBest regards,\nAltiora Infotech Team\naltiorainfotech@gmail.com`,
      });
    } catch {
      // Auto-reply failure is non-critical; admin email was already sent
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Unable to send your message. Please try again or email us directly at altiorainfotech@gmail.com' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
