import { Metadata } from 'next';
import LangleyMarketingClientPage from './_components/LangleyMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Langley - Altiora Infotech',
  description: 'Digital marketing company in Langley providing SEO, PPC advertising and social media marketing services.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-langley",
  },
  openGraph: {
    title: "Digital Marketing Company in Langley - Altiora Infotech",
    description: "Digital marketing company in Langley providing SEO, PPC advertising and social media marketing services.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-langley",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Langley" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Langley - Altiora Infotech",
    description: "Digital marketing company in Langley providing SEO, PPC advertising and social media marketing services.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const langleySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Langley",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Langley City and Township across the Fraser Valley with local SEO, Google Ads, social media management and conversion-focused websites for home services, trades, retail and professional firms.",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Langley", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Willoughby" },
        { "@type": "Place", "name": "Walnut Grove" },
        { "@type": "Place", "name": "Murrayville" },
        { "@type": "Place", "name": "Brookswood" },
        { "@type": "Place", "name": "Fort Langley" },
        { "@type": "Place", "name": "Aldergrove" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Trades Marketing", "Real Estate Marketing"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley/#service",
      "name": "Digital Marketing Company in Langley",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley",
      "description": "Langley-focused digital marketing company helping home services, trades, real estate, restaurants and family-oriented retailers grow with SEO and paid advertising.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation",
      "areaServed": { "@type": "City", "name": "Langley" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Langley Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Langley" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity and Graphic Design" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Langley", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Langley do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Langley helps home services, trades, real estate, restaurants and family-oriented retailers across the Township and City of Langley grow with local SEO, Google Ads, social media and conversion-focused websites. Altiora Infotech sizes campaigns for SMB budgets and family-business decision-making."
          }
        },
        {
          "@type": "Question",
          "name": "Is Langley still a strong market for new businesses to advertise into?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, arguably one of the best in BC right now. Willoughby and Walnut Grove are still expanding rapidly, paid-search costs are lower than Surrey or Vancouver, and there is meaningful room to dominate local SEO rankings before larger competitors fully arrive."
          }
        },
        {
          "@type": "Question",
          "name": "How much should a Langley small business expect to invest each month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Langley SMBs see strong outcomes from CA$1,500 to CA$3,500 per month total marketing spend across paid, SEO and content. Larger trades, real estate and dental practices typically run CA$5,000 to CA$10,000 per month when they want to dominate competitor share of voice."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover both Langley City and Langley Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We run separate geo-targeted campaigns for Langley City (downtown core, City Centre) and Langley Township (Willoughby, Walnut Grove, Aldergrove, Fort Langley) since search intent, demographics and competitor sets are quite different between the two."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-langley",
      "name": "Digital Marketing Company in Langley | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function LangleyMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(langleySchema) }}
      />
      <LangleyMarketingClientPage />
    </>
  );
}
