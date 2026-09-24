import { Metadata } from 'next';
import CalgaryMarketingClientPage from './_components/CalgaryMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Calgary - Altiora Infotech',
  description: 'Digital marketing company in Calgary delivering SEO, PPC campaigns and growth marketing solutions for businesses.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary",
  },
  openGraph: {
    title: "Digital Marketing Company in Calgary - Altiora Infotech",
    description: "Digital marketing company in Calgary delivering SEO, PPC campaigns and growth marketing solutions for businesses.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Calgary" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Calgary - Altiora Infotech",
    description: "Digital marketing company in Calgary delivering SEO, PPC campaigns and growth marketing solutions for businesses.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const calgarySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Calgary",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Calgary and Alberta with paid search, local SEO, conversion-focused websites and B2B lead generation for professional services and trades.",
      "priceRange": "$$$",
      "areaServed": [
        { "@type": "City", "name": "Calgary", "containedInPlace": { "@type": "AdministrativeArea", "name": "Alberta" } },
        { "@type": "Place", "name": "Downtown Calgary" },
        { "@type": "Place", "name": "Beltline" },
        { "@type": "Place", "name": "Kensington" },
        { "@type": "Place", "name": "Inglewood" },
        { "@type": "Place", "name": "Marda Loop" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "LinkedIn Ads", "B2B Lead Generation", "Web Development", "Brand Strategy", "Energy-sector Marketing"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary/#service",
      "name": "Digital Marketing Company in Calgary",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary",
      "description": "Calgary-focused digital marketing company delivering SEO, paid search, B2B lead generation and conversion-focused websites for professional services and trades.",
      "serviceType": "Digital Marketing, SEO, PPC, B2B Lead Generation, Web Development",
      "areaServed": { "@type": "City", "name": "Calgary" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Calgary Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Calgary" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Lead Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity and Video Production" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Calgary", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Calgary do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Calgary helps professional services, energy-adjacent B2B firms, trades, real estate and hospitality brands grow measurable lead flow through paid search, local SEO, conversion-focused websites and disciplined creative. Altiora Infotech delivers reporting tied to revenue, not impressions."
          }
        },
        {
          "@type": "Question",
          "name": "How does Calgary's SEO competitiveness compare with Vancouver or Toronto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calgary sits below Vancouver and Toronto in raw competitiveness but above most other Alberta markets. Energy services, legal, dental, accounting and real estate are highly contested and usually need 4 to 7 months of consistent SEO work. Long-tail and suburb-specific terms can rank in 60 to 120 days."
          }
        },
        {
          "@type": "Question",
          "name": "Does the oil and gas cycle materially affect digital marketing budgets in Calgary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, more than people expect. B2B service providers tied to energy see noticeable budget shifts with commodity cycles. We help Calgary clients plan campaigns that scale up and down cleanly with cycle conditions rather than committing to flat annual spends."
          }
        },
        {
          "@type": "Question",
          "name": "Which Calgary industries see the strongest results from digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional services (legal, accounting, dental, medical), home services and trades, real estate, energy-services SaaS, hospitality and lifestyle brands in Beltline, Kensington and Inglewood consistently see the strongest digital marketing ROI in our experience."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Calgary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calgary SMBs typically invest CA$2,000 to CA$5,000 per month across SEO, paid search and content. Larger professional firms and energy-services B2B companies often run CA$8,000 to CA$25,000 per month when scale is the objective."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary",
      "name": "Digital Marketing Company in Calgary | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function CalgaryMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calgarySchema) }}
      />
      <CalgaryMarketingClientPage />
    </>
  );
}
