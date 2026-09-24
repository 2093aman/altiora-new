import { Metadata } from 'next';
import AbbotsfordMarketingClientPage from './_components/AbbotsfordMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Abbotsford - Altiora Infotech',
  description: 'Digital marketing company in Abbotsford providing SEO, paid advertising and social media marketing for local businesses.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford",
  },
  openGraph: {
    title: "Digital Marketing Company in Abbotsford - Altiora Infotech",
    description: "Digital marketing company in Abbotsford providing SEO, paid advertising and social media marketing for local businesses.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Abbotsford" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Abbotsford - Altiora Infotech",
    description: "Digital marketing company in Abbotsford providing SEO, paid advertising and social media marketing for local businesses.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const abbotsfordSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Abbotsford",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Abbotsford and the Fraser Valley with local SEO, bilingual Punjabi creative, Google Ads, social media management and conversion-focused websites for trades, trucking, agriculture and professional services.",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Abbotsford", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Clearbrook" },
        { "@type": "Place", "name": "McMillan" },
        { "@type": "Place", "name": "East Abbotsford" },
        { "@type": "Place", "name": "Aberdeen" },
        { "@type": "Place", "name": "Sumas Mountain" }
      ],
      "knowsAbout": ["Local SEO", "Bilingual Marketing", "Google Ads", "Trucking Marketing", "Agriculture Marketing", "Trades Marketing", "Web Development"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford/#service",
      "name": "Digital Marketing Company in Abbotsford",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford",
      "description": "Abbotsford-focused digital marketing company supporting trades, trucking, agriculture, immigration, legal, healthcare and retail businesses across the Fraser Valley.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation",
      "areaServed": { "@type": "City", "name": "Abbotsford" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Abbotsford Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Abbotsford" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bilingual Punjabi / English Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Abbotsford", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Abbotsford do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Abbotsford supports trades, trucking, agriculture, immigration, legal, healthcare and retail businesses across the Fraser Valley with local SEO, paid search, bilingual Punjabi creative and conversion-focused websites. Altiora Infotech sizes reporting and pricing for Fraser Valley SMB budgets."
          }
        },
        {
          "@type": "Question",
          "name": "How competitive is Abbotsford for local SEO compared with Surrey or Vancouver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Considerably less competitive. Most Abbotsford service businesses can reach top-three local-pack rankings in 3 to 5 months for moderate keywords. Trucking, agriculture, immigration and legal verticals are the exceptions and need closer to 6 to 9 months."
          }
        },
        {
          "@type": "Question",
          "name": "Do you produce bilingual Punjabi creative for Abbotsford businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build Punjabi-English landing pages, Google Ads campaigns and social creative for Abbotsford clients in immigration, trucking, legal, real estate and trades, verticals where Punjabi creative consistently outperforms English-only."
          }
        },
        {
          "@type": "Question",
          "name": "Which Abbotsford industries see the strongest digital marketing ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trades and home services (HVAC, roofing, renovations), trucking and logistics, immigration consultants, legal firms, dental practices and agricultural retailers consistently see the strongest returns from a paid-search plus local-SEO combination."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford",
      "name": "Digital Marketing Company in Abbotsford | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function AbbotsfordMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(abbotsfordSchema) }}
      />
      <AbbotsfordMarketingClientPage />
    </>
  );
}
