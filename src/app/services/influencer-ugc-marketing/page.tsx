import { Metadata } from "next";
import InfluencerUGCClient from "./client";

export const metadata: Metadata = {
  title: "Influencer Marketing Services Canada",
  description: "Influencer and UGC marketing services to build brand trust, increase reach and drive engagement through creator partnerships.",
  keywords: "influencer marketing, UGC marketing, user generated content, creator campaigns, micro influencer, macro influencer, TikTok influencers, Instagram influencers, UGC content, influencer strategy Canada",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/influencer-ugc-marketing",
  },
  openGraph: {
    title: "Influencer Marketing Services Canada",
    description: "Influencer and UGC marketing services to build brand trust, increase reach and drive engagement through creator partnerships.",
    url: "https://altiorainfotech.ca/services/influencer-ugc-marketing",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Influencer Marketing Services Canada" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Services Canada",
    description: "Influencer and UGC marketing services to build brand trust, increase reach and drive engagement through creator partnerships.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const influencerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/influencer-ugc-marketing/#service",
      "name": "Influencer & UGC Marketing Services",
      "url": "https://altiorainfotech.ca/services/influencer-ugc-marketing",
      "description": "Influencer and UGC marketing services to build brand trust, increase reach and drive engagement through creator partnerships.",
      "serviceType": "Influencer Marketing, UGC Marketing, Creator Campaigns",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Influencer & UGC Marketing", "item": "https://altiorainfotech.ca/services/influencer-ugc-marketing" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is UGC marketing and how does it help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UGC (User-Generated Content) marketing involves using content created by real customers or creators such as reviews, unboxings, testimonials, and social posts to promote your brand. UGC builds trust because consumers find peer recommendations 2.4x more credible than branded content, leading to higher conversion rates."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between micro-influencers and macro-influencers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Micro-influencers have 10,000-100,000 followers and typically deliver higher engagement rates and more targeted niche audiences. Macro-influencers have 100,000+ followers and offer broader reach. Altiora Infotech recommends micro-influencers for most Canadian businesses due to their authenticity, affordability, and stronger audience trust."
          }
        },
        {
          "@type": "Question",
          "name": "How do you find the right influencers for my brand in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech uses a data-driven vetting process that evaluates creators on audience demographics, engagement rate, content quality, brand alignment, and past campaign performance. We identify influencers whose audience matches your ideal Canadian customer profile."
          }
        },
        {
          "@type": "Question",
          "name": "Can UGC content be used in paid advertising campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. UGC is one of the highest-performing creative formats for paid ads. Authentic creator content in Meta and TikTok ads typically outperforms polished branded ads in click-through rates and cost-per-acquisition. Altiora Infotech produces UGC specifically designed for use in paid social campaigns."
          }
        }
      ]
    }
  ]
};

export default function InfluencerUGCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(influencerSchema) }}
      />
      <InfluencerUGCClient />
    </>
  );
}
