import { Metadata } from "next";
import WebDesignClient from "./client";

export const metadata: Metadata = {
  title: 'Website Development Services Canada',
  description: 'Website development services in Canada creating high-performance, SEO-optimized and conversion-focused websites for businesses.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/website-development-services",
  },
  openGraph: {
    title: "Website Development Services Canada",
    description: "Website development services in Canada creating high-performance, SEO-optimized and conversion-focused websites for businesses.",
    url: "https://altiorainfotech.ca/services/website-development-services",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Website Development Services Canada" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Services Canada",
    description: "Website development services in Canada creating high-performance, SEO-optimized and conversion-focused websites for businesses.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const websiteDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/website-development-services/#service",
      "name": "Website Development Services",
      "url": "https://altiorainfotech.ca/services/website-development-services",
      "description": "Website development services in Canada creating high-performance, SEO-optimized and conversion-focused websites for businesses.",
      "serviceType": "Website Development, Web Design, Custom Website Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://altiorainfotech.ca/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website Development Services",
          "item": "https://altiorainfotech.ca/services/website-development-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What website development services does Altiora Infotech offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech offers custom website design and development, e-commerce development, landing page design, CMS-based websites (WordPress, Webflow, and headless CMS), website redesigns, performance optimization, and ongoing website maintenance. Every website is built with SEO best practices, mobile responsiveness, and conversion optimization baked in from the start."
          }
        },
      
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard business website typically takes 2 to 4 weeks from project kickoff through design, development, content integration, testing, and launch. More complex websites with custom functionality, e-commerce capabilities, or large content libraries may take 5 to 7 weeks. Altiora Infotech provides a detailed project timeline at the start of each engagement so clients always know what milestone is coming next."
          }
        },
        {
          "@type": "Question",
          "name": "What makes a high-converting website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A high-converting website combines fast load times, clear value propositions, intuitive navigation, trust signals such as testimonials and certifications, and strategically placed calls to action that guide visitors toward a desired outcome. Altiora Infotech applies conversion rate optimization (CRO) principles throughout the design and development process, ensuring every page element is purposefully designed to move visitors through the customer journey and generate measurable business results."
          }
        }
      ]
    }
  ]
};

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteDevelopmentSchema) }}
      />
      <WebDesignClient />
    </>
  );
}

