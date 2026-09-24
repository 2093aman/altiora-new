import { Metadata } from "next";
import SEOClient from "./client";

export const metadata: Metadata = {
  title: "SEO Services Canada | Altiora Infotech",
  description: "Professional SEO services in Canada to improve search rankings, organic traffic and online visibility with proven search engine strategies.",
  keywords: "SEO services, search engine optimization, keyword research, on-page SEO, technical SEO, link building, organic traffic, Google rankings",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/seo",
  },
  openGraph: {
    title: "SEO Services Canada | Altiora Infotech",
    description: "Professional SEO services in Canada to improve search rankings, organic traffic and online visibility with proven search engine strategies.",
    url: "https://altiorainfotech.ca/services/seo",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "SEO Services Canada | Altiora Infotech" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Canada | Altiora Infotech",
    description: "Professional SEO services in Canada to improve search rankings, organic traffic and online visibility with proven search engine strategies.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/seo/#service",
      "name": "SEO Services",
      "url": "https://altiorainfotech.ca/services/seo",
      "description": "Professional SEO services in Canada to improve search rankings, organic traffic and online visibility with proven search engine strategies.",
      "serviceType": "Search Engine Optimization",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO Audit and Implementation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research and Search Strategy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-page SEO and Content Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO and Google Business Profile Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building and Digital PR" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Reporting and Performance Tracking" } }
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
          "name": "SEO Services",
          "item": "https://altiorainfotech.ca/services/seo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) is the practice of optimizing a website to rank higher in search engine results pages like Google and Bing. It involves improving technical performance, creating high-quality content, and building authoritative backlinks so that search engines can discover, index, and rank your pages for relevant queries."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO typically takes 3 to 6 months to produce noticeable improvements in rankings and organic traffic, though competitive industries may require 9 to 12 months. The timeline depends on your site's current authority, the competitiveness of your target keywords, and the consistency of optimization efforts applied each month."
          }
        },
        {
          "@type": "Question",
          "name": "What SEO services does Altiora Infotech offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech offers a full suite of SEO services including technical SEO audits, keyword research and strategy, on-page optimization, content creation, link building, local SEO, and monthly performance reporting. Every campaign is tailored to the client's industry, target audience, and business goals to maximize return on investment."
          }
        },
        {
          "@type": "Question",
          "name": "What is technical SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO refers to optimizing the backend structure of a website so that search engine crawlers can efficiently discover, index, and rank its pages. This includes improving site speed, mobile responsiveness, URL structure, crawlability, structured data markup, and Core Web Vitals all of which directly influence how Google evaluates and ranks a site."
          }
        },
        {
          "@type": "Question",
          "name": "How much do SEO services cost in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Canadian SMBs invest between CA$1,500 and CA$5,000 per month for a professional SEO retainer. Competitive verticals such as legal, dental, real estate and SaaS typically run CA$5,000 to CA$15,000 per month when serious share-of-voice growth is the objective."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO, AEO and GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) optimizes a site to rank in traditional search results. AEO (Answer Engine Optimization) optimizes content so AI engines like ChatGPT, Perplexity and Google AI Overviews can confidently quote it. GEO (Generative Engine Optimization) ensures your brand is cited by generative search systems. A modern SEO programme covers all three together."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/seo/#webpage",
      "url": "https://altiorainfotech.ca/services/seo",
      "name": "SEO Services Canada | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      <SEOClient />
    </>
  );
}