import { Metadata } from "next";
import AEOGEOClient from "./client";

export const metadata: Metadata = {
  title: "AEO & GEO Optimization Services",
  description: "AI search optimization services including AEO and GEO strategies to improve visibility in AI search engines and modern search experiences.",
  keywords: "AEO, answer engine optimization, GEO, generative engine optimization, AI search optimization, ChatGPT SEO, Google SGE, Google AI Overviews, Perplexity optimization, voice search optimization, AI visibility, featured snippets, structured data",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/aeo-geo",
  },
  openGraph: {
    title: "AEO & GEO Optimization Services",
    description: "AI search optimization services including AEO and GEO strategies to improve visibility in AI search engines and modern search experiences.",
    url: "https://altiorainfotech.ca/services/aeo-geo",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "AEO & GEO Optimization Services" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO & GEO Optimization Services",
    description: "AI search optimization services including AEO and GEO strategies to improve visibility in AI search engines and modern search experiences.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
}
const aeoGeoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/aeo-geo/#service",
      "name": "AEO & GEO Services",
      "url": "https://altiorainfotech.ca/services/aeo-geo",
      "description": "AI search optimization services including AEO and GEO strategies to improve visibility in AI search engines and modern search experiences.",
      "serviceType": "Answer Engine Optimization, Generative Engine Optimization",
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
          "name": "AEO & GEO Services",
          "item": "https://altiorainfotech.ca/services/aeo-geo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AEO (Answer Engine Optimization)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AEO, or Answer Engine Optimization, is the practice of structuring and optimizing website content so it is selected by AI-powered answer engines such as Google AI Overviews, Siri, Alexa, and Perplexity as the direct response to a user's question. It involves using structured data, concise Q&A formats, and authoritative content that AI systems can extract and cite with confidence."
          }
        },
        {
          "@type": "Question",
          "name": "What is GEO (Generative Engine Optimization)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO, or Generative Engine Optimization, is the discipline of optimizing content and brand authority so that large language models like ChatGPT, Google Gemini, and Claude reference and recommend your business in their generated responses. It focuses on building a consistent, credible digital footprint across authoritative sources that AI models draw from during training and retrieval."
          }
        },
        {
          "@type": "Question",
          "name": "How is AEO different from traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional SEO focuses on ranking a webpage in a list of search results so users can click through, while AEO focuses on becoming the definitive answer that search engines and AI platforms deliver directly to users often without requiring a click. AEO prioritizes question-based intent, structured data, and concise factual content, whereas SEO more broadly addresses keyword rankings, backlinks, and site authority."
          }
        },
        {
          "@type": "Question",
          "name": "Why do Canadian businesses need AEO and GEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Canadian consumers increasingly use AI-powered search tools, voice assistants, and generative platforms to find local businesses, services, and expert advice. Without AEO and GEO optimization, Canadian businesses risk being invisible in these high-intent discovery channels and losing customers to competitors who are already optimized for AI-driven search. Altiora Infotech's AEO and GEO services ensure your brand is cited, trusted, and recommended by the AI systems your customers rely on."
          }
        }
      ]
    }
  ]
};

export default function AEOGEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoGeoSchema) }}
      />
      <AEOGEOClient />
    </>
  );
}
