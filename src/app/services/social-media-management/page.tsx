import { Metadata } from "next";
import SocialMediaManagementClient from "./client";

export const metadata: Metadata = {
  title: "Social Media Management | Altiora Infotech",
  description: "Social media management services to grow your brand, engage audiences and drive results across Instagram, Facebook, LinkedIn and more.",
  keywords: "social media management, SMM, Facebook management, Instagram management, LinkedIn management, Twitter management, social media strategy, content creation, community management",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management | Altiora Infotech",
    description: "Social media management services to grow your brand, engage audiences and drive results across Instagram, Facebook, LinkedIn and more.",
    url: "https://altiorainfotech.ca/services/social-media-management",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Social Media Management | Altiora Infotech" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management | Altiora Infotech",
    description: "Social media management services to grow your brand, engage audiences and drive results across Instagram, Facebook, LinkedIn and more.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const socialMediaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/social-media-management/#service",
      "name": "Social Media Management Services",
      "url": "https://altiorainfotech.ca/services/social-media-management",
      "description": "Social media management services to grow your brand, engage audiences and drive results across Instagram, Facebook, LinkedIn and more.",
      "serviceType": "Social Media Management, Content Production, Community Management",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Management Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Strategy and Calendar Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post Creation, Design and Copywriting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instagram, Facebook, LinkedIn, TikTok Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Short-form Video and Reels Production" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community Management and DM Response" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer and UGC Coordination" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Analytics and Performance Reporting" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Social Media Management", "item": "https://altiorainfotech.ca/services/social-media-management" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does social media management include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media management includes content strategy, post creation and scheduling, community engagement, follower growth, hashtag research, analytics reporting, and brand voice consistency across platforms like Instagram, Facebook, LinkedIn, and TikTok."
          }
        },
        {
          "@type": "Question",
          "name": "How often should a business post on social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses see strong results posting 3-5 times per week on Instagram and Facebook, 2-3 times per week on LinkedIn, and daily on TikTok. Consistency and content quality matter more than frequency. Altiora Infotech creates a tailored posting schedule based on your audience and goals."
          }
        },
        {
          "@type": "Question",
          "name": "Why should Canadian businesses outsource social media management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Outsourcing social media management saves time, ensures professional-quality content, and delivers consistent strategy. Altiora Infotech's team handles everything from content creation to community management, allowing Canadian business owners to focus on running their business while building a strong online presence."
          }
        },
        {
          "@type": "Question",
          "name": "Which social media platforms should my business be on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right platforms depend on your industry and target audience. B2C businesses typically benefit most from Instagram, Facebook, and TikTok. B2B companies see the strongest ROI on LinkedIn. Altiora Infotech helps Canadian businesses identify and focus on the platforms where their ideal customers spend the most time."
          }
        },
        {
          "@type": "Question",
          "name": "How much does social media management cost in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Canadian SMBs typically invest CA$1,200 to CA$3,500 per month for managed social media across two to three platforms, including content production. Higher-end programmes with regular short-form video, influencer coordination and paid social management often run CA$4,000 to CA$10,000 per month."
          }
        },
        {
          "@type": "Question",
          "name": "Do you produce the photos, graphics and video, or only post existing content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We produce both. Altiora Infotech's in-house creative team handles graphic design, copywriting, short-form video editing and on-location content shoots when required, so you do not need to source content separately. We can also work with content you already produce in-house."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/social-media-management/#webpage",
      "url": "https://altiorainfotech.ca/services/social-media-management",
      "name": "Social Media Management | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function SocialMediaManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaSchema) }}
      />
      <SocialMediaManagementClient />
    </>
  );
}
