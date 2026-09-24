import { Metadata } from "next";
import SocialMediaAdvertisingClient from "./client";

export const metadata: Metadata = {
  title: "Paid Advertising Services Canada | PPC Experts",
  description: "Paid advertising services in Canada including Google Ads, PPC campaigns and performance marketing designed to drive traffic and conversions.",
  keywords: "Paid Advertising Services Canada, Paid Advertising Services",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/paid-advertisement-services",
  },
  openGraph: {
    title: "Paid Advertising Services Canada | PPC Experts",
    description: "Paid advertising services in Canada including Google Ads, PPC campaigns and performance marketing designed to drive traffic and conversions.",
    url: "https://altiorainfotech.ca/services/paid-advertisement-services",
    siteName: "Altiora Infotech",
    images: [{
      url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      width: 1200,
      height: 630,
      alt: "Paid Advertising Services Canada | PPC Experts"
    }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising Services Canada | PPC Experts",
    description: "Paid advertising services in Canada including Google Ads, PPC campaigns and performance marketing designed to drive traffic and conversions.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"]
  }
};

const paidAdsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/paid-advertisement-services/#service",
      "name": "Paid Advertising Services Canada | PPC Experts",
      "url": "https://altiorainfotech.ca/services/paid-advertisement-services",
      "description": "Paid advertising services in Canada including Google Ads, PPC campaigns and performance marketing designed to drive traffic and conversions.",
      "serviceType": "Paid Advertising, PPC, Performance Marketing",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Paid Advertising Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Search Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Performance Max and Shopping" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "YouTube Video Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta (Facebook and Instagram) Paid Social" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn B2B Lead Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Bing Ads" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TikTok Ads" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page and Conversion Optimization" } }
        ]
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
          "name": "Paid Advertisement Services",
          "item": "https://altiorainfotech.ca/services/paid-advertisement-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What advertising platforms does Altiora Infotech manage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech manages paid advertising campaigns across Google Ads (Search, Display, Shopping, and YouTube), Meta Ads (Facebook and Instagram), LinkedIn Ads, Microsoft (Bing) Ads, and TikTok Ads. Each platform is selected based on where your target audience is most active, ensuring your ad budget is invested where it generates the highest return."
          }
        },
       
        {
          "@type": "Question",
          "name": "What is the difference between PPC and paid social advertising?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PPC (pay-per-click) advertising, such as Google Search Ads, targets users actively searching for specific keywords and only charges when someone clicks on the ad, making it highly effective for capturing demand-ready intent. Paid social advertising on platforms like Facebook, Instagram, and LinkedIn targets users based on demographics, interests, and behaviors, making it ideal for building brand awareness and generating demand among audiences who are not yet actively searching."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can paid ads generate leads for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid advertising campaigns can begin generating leads within the first week of launch, making them one of the fastest digital marketing channels for driving immediate business results. However, campaigns typically require 4 to 8 weeks of data collection and optimization to reach their full efficiency and deliver the lowest cost per lead consistently."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I budget for paid advertising in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Canadian SMBs start at CA$1,500 to CA$5,000 per month in media spend across Google Ads and Meta combined, with management fees on top. Competitive verticals (legal, dental, real estate, SaaS) often run CA$10,000 to CA$50,000 per month in media when share of voice is the objective."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage Google Ads, Meta Ads and LinkedIn under one team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Altiora Infotech runs Google Ads (Search, Performance Max, Shopping, YouTube), Meta paid social, LinkedIn B2B campaigns, Microsoft (Bing) Ads and TikTok Ads under one in-house team. Strategy, creative, landing pages and reporting are coordinated rather than split across multiple agencies."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good ROAS or cost per lead to target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthy ROAS depends on your margin: ecommerce brands typically target 3:1 to 6:1 ROAS, while professional services and B2B SaaS measure cost per qualified lead (CPL) instead, often CA$30 to CA$300 depending on deal size. We model the right target with you before launch rather than borrowing generic benchmarks."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/paid-advertisement-services/#webpage",
      "url": "https://altiorainfotech.ca/services/paid-advertisement-services",
      "name": "Paid Advertising Services Canada | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function SocialMediaAdvertisingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paidAdsSchema) }}
      />
      <SocialMediaAdvertisingClient />
    </>
  );
}