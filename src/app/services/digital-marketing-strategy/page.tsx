import { Metadata } from "next";
import DigitalMarketingStrategyClient from "./client";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy Services",
  description: "Digital marketing strategy services designed to help businesses scale with data-driven marketing planning and growth frameworks.",
  keywords: "digital marketing strategy, marketing strategy, strategic planning, digital transformation, marketing consulting, growth strategy, ROI optimization",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-strategy",
  },
  openGraph: {
    title: "Digital Marketing Strategy Services",
    description: "Digital marketing strategy services designed to help businesses scale with data-driven marketing planning and growth frameworks.",
    url: "https://altiorainfotech.ca/services/digital-marketing-strategy",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Strategy Services" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Strategy Services",
    description: "Digital marketing strategy services designed to help businesses scale with data-driven marketing planning and growth frameworks.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const digitalMarketingStrategySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-strategy/#service",
      "name": "Digital Marketing Strategy",
      "url": "https://altiorainfotech.ca/services/digital-marketing-strategy",
      "description": "Digital marketing strategy services designed to help businesses scale with data-driven marketing planning and growth frameworks.",
      "serviceType": "Digital Marketing Strategy, Marketing Consulting",
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
          "name": "Digital Marketing Strategy",
          "item": "https://altiorainfotech.ca/services/digital-marketing-strategy"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a digital marketing strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing strategy is a structured plan that defines how a business will use digital channels including SEO, paid advertising, social media, content marketing, and email to reach its target audience, achieve its marketing objectives, and grow revenue. It translates business goals into prioritized, measurable marketing activities with defined budgets, timelines, and key performance indicators."
          }
        },
        {
          "@type": "Question",
          "name": "What does a digital marketing strategy include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A comprehensive digital marketing strategy from Altiora Infotech includes a competitive landscape analysis, target audience and buyer persona development, channel selection and budget allocation, content and messaging frameworks, campaign roadmaps, KPI definitions, and a reporting structure to track and optimize performance. The deliverable is an actionable document your team can execute or hand off to Altiora for implementation."
          }
        },
        {
          "@type": "Question",
          "name": "Why do Canadian businesses need a digital marketing strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Without a clear digital marketing strategy, Canadian businesses often waste budget on disconnected tactics that fail to build on each other, resulting in inconsistent leads and unpredictable revenue. A strategy ensures that every marketing dollar is allocated to the channels and activities most likely to reach your specific audience, creating a compounding system where each effort supports the next and overall performance improves over time."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a digital marketing strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech typically delivers a complete digital marketing strategy in 3 to 6 weeks, beginning with a discovery session to understand your business, goals, and competitive environment, followed by research, analysis, and strategy development before a final presentation and handoff. The timeline can be compressed for businesses with urgent needs or extended for larger organizations requiring cross-departmental stakeholder input and broader market research."
          }
        }
      ]
    }
  ]
};

export default function DigitalMarketingStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMarketingStrategySchema) }}
      />
      <DigitalMarketingStrategyClient />
    </>
  );
}