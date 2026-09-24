import { Metadata } from "next";
import SearchEngineMarketingClient from "./client";

export const metadata: Metadata = {
  title: "SEM Services Canada | Altiora",
  description: "Search engine marketing services in Canada including PPC management, Google Ads strategy and performance campaigns for growth.",
  keywords: "search engine marketing, SEM, search marketing, Google marketing, Bing marketing, search visibility, search strategy, search optimization",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/search-engine-marketing",
  },
  openGraph: {
    title: "SEM Services Canada | Altiora",
    description: "Search engine marketing services in Canada including PPC management, Google Ads strategy and performance campaigns for growth.",
    url: "https://altiorainfotech.ca/services/search-engine-marketing",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "SEM Services Canada | Altiora" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEM Services Canada | Altiora",
    description: "Search engine marketing services in Canada including PPC management, Google Ads strategy and performance campaigns for growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const semSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/search-engine-marketing/#service",
      "name": "Search Engine Marketing Services",
      "url": "https://altiorainfotech.ca/services/search-engine-marketing",
      "description": "Search engine marketing services in Canada including PPC management, Google Ads strategy and performance campaigns for growth.",
      "serviceType": "Search Engine Marketing, SEM, Google Ads Management",
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
          "name": "Search Engine Marketing Services",
          "item": "https://altiorainfotech.ca/services/search-engine-marketing"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is search engine marketing (SEM)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search engine marketing (SEM) is a digital marketing strategy that uses paid advertising on search engines like Google and Bing to place your business in front of users who are actively searching for your products or services. SEM campaigns are highly targeted, measurable, and scalable, allowing businesses to capture demand at the exact moment a potential customer expresses intent to buy."
          }
        },
        {
          "@type": "Question",
          "name": "How is SEM different from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEM (Search Engine Marketing) delivers immediate visibility through paid search ads that appear at the top of results pages as soon as a campaign launches, whereas SEO (Search Engine Optimization) builds organic rankings over time through content and technical improvements that do not require paying per click. SEM provides instant and controllable traffic at a direct cost, while SEO compounds in value over time and generates traffic without ongoing ad spend once rankings are established."
          }
        },
        {
          "@type": "Question",
          "name": "How much does SEM cost for Canadian businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEM costs for Canadian businesses include both ad spend and management fees. Ad spend varies widely by industry competitive sectors like legal, finance, and home services can see cost-per-click rates of $5 to $30 CAD or more and most small-to-medium businesses invest $1,500 to $10,000 CAD per month in total. Altiora Infotech provides detailed budget recommendations based on your industry, geographic targeting, and revenue goals to ensure every dollar generates measurable return."
          }
        },
        {
          "@type": "Question",
          "name": "What results can I expect from search engine marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With a properly structured SEM campaign, Canadian businesses can expect increased website traffic, higher-quality leads, and improved sales within the first 30 days of launch. Performance metrics such as click-through rate, cost per lead, and return on ad spend improve progressively as Altiora Infotech's team analyzes data, refines targeting, and optimizes bidding strategies typically achieving peak efficiency within 60 to 90 days of campaign launch."
          }
        }
      ]
    }
  ]
};

export default function SearchEngineMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(semSchema) }}
      />
      <SearchEngineMarketingClient />
    </>
  );
}