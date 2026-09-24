import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Altiora Infotech | Digital Marketing Experts',
  description: 'Contact Altiora Infotech, a trusted Digital Marketing Company in Canada. Get expert help with SEO, PPC, social media and business growth strategies.',
  alternates: {
    canonical: "https://altiorainfotech.ca/contact",
  },
  openGraph: {
    title: "Contact Altiora Infotech | Digital Marketing Experts",
    description: "Contact Altiora Infotech, a trusted Digital Marketing Company in Canada. Get expert help with SEO, PPC, social media and business growth strategies.",
    url: "https://altiorainfotech.ca/contact",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Contact Altiora Infotech" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Altiora Infotech | Digital Marketing Experts",
    description: "Contact Altiora Infotech, a trusted Digital Marketing Company in Canada. Get expert help with SEO, PPC, social media and business growth strategies.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
