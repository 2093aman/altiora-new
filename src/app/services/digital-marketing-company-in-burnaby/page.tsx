import { Metadata } from 'next';
import BurnabyMarketingClientPage from './_components/BurnabyMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Burnaby - Altiora Infotech',
  description: 'Trusted digital marketing company in Burnaby offering SEO services, paid advertising and social media marketing.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby",
  },
  openGraph: {
    title: "Digital Marketing Company in Burnaby - Altiora Infotech",
    description: "Trusted digital marketing company in Burnaby offering SEO services, paid advertising and social media marketing.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Burnaby" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Burnaby - Altiora Infotech",
    description: "Trusted digital marketing company in Burnaby offering SEO services, paid advertising and social media marketing.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};


const burnabySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Burnaby",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Burnaby and Metro Vancouver with local SEO, Google Ads, social media management and conversion-focused websites.",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Burnaby", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Brentwood" },
        { "@type": "Place", "name": "Metrotown" },
        { "@type": "Place", "name": "Edmonds" },
        { "@type": "Place", "name": "Burnaby Heights" },
        { "@type": "Place", "name": "Lougheed" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Lead Generation"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby/#service",
      "name": "Digital Marketing Company in Burnaby",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby",
      "description": "Trusted digital marketing company in Burnaby offering local SEO, paid advertising, social media management and conversion-focused websites.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation",
      "areaServed": { "@type": "City", "name": "Burnaby" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Burnaby Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Burnaby" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity and Content Production" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Burnaby", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Burnaby do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Burnaby helps local service businesses, retailers and B2B firms across Metro Vancouver generate qualified leads through local SEO, Google Ads, social media management and conversion-focused websites. Altiora Infotech delivers all of these under one in-house team with measurable monthly reporting."
          }
        },
        {
          "@type": "Question",
          "name": "How long until local SEO produces leads for a Burnaby business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Burnaby clients see ranking improvements within 8 to 12 weeks for moderate-difficulty terms. Competitive verticals like immigration, mortgages and real estate typically need 4 to 6 months of consistent on-page work, local citations and earned backlinks before lead volume stabilises."
          }
        },
        {
          "@type": "Question",
          "name": "Do you only support Metrotown and Brentwood, or every Burnaby neighbourhood?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with businesses across all Burnaby neighbourhoods including Brentwood, Metrotown, Edmonds, Lougheed, Burnaby Heights, Sperling-Duthie and Burnaby Mountain, plus surrounding Metro Vancouver cities."
          }
        },
        {
          "@type": "Question",
          "name": "Which advertising channels convert best for Burnaby service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Search dominates for high-intent service queries. Meta paid social works well for retail, restaurants and lifestyle brands, and LinkedIn drives qualified B2B leads inside the Brentwood and Lougheed tech corridor."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Burnaby?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Burnaby SMBs see strong outcomes from CA$1,500 to CA$4,000 per month in total marketing spend (paid + SEO + content). Larger trades, real estate and professional services typically run CA$5,000 to CA$10,000 per month when aiming to dominate share of voice."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-burnaby",
      "name": "Digital Marketing Company in Burnaby | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function BurnabyMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(burnabySchema) }}
      />
      <BurnabyMarketingClientPage />
    </>
  );
}
