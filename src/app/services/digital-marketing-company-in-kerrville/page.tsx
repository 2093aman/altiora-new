import { Metadata } from 'next';
import KerrvilleMarketingClientPage from './_components/KerrvilleMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Kerrville - Altiora Infotech',
  description: 'Digital marketing company in Kerrville offering SEO, paid advertising and growth marketing services.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville",
  },
  openGraph: {
    title: "Digital Marketing Company in Kerrville - Altiora Infotech",
    description: "Digital marketing company in Kerrville offering SEO, paid advertising and growth marketing services.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Kerrville" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Kerrville - Altiora Infotech",
    description: "Digital marketing company in Kerrville offering SEO, paid advertising and growth marketing services.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};


const kerrvilleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Kerrville",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Kerrville and the Texas Hill Country with local SEO, Google Ads, conversion-focused websites and seasonal campaigns tuned for tourism, ranch real estate, healthcare and retail.",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Kerrville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Texas" } },
        { "@type": "Place", "name": "Comfort" },
        { "@type": "Place", "name": "Ingram" },
        { "@type": "Place", "name": "Center Point" },
        { "@type": "Place", "name": "Fredericksburg" },
        { "@type": "Place", "name": "Boerne" }
      ],
      "knowsAbout": ["Local SEO", "Tourism Marketing", "Google Ads", "Ranch Real Estate Marketing", "Hill Country Marketing", "Web Development"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville/#service",
      "name": "Digital Marketing Company in Kerrville",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville",
      "description": "Kerrville-focused digital marketing company helping Hill Country tourism, ranch and luxury real estate, healthcare, retail boutiques and home services grow with local SEO and paid search.",
      "serviceType": "Digital Marketing, SEO, PPC, Local Marketing, Tourism Marketing",
      "areaServed": { "@type": "City", "name": "Kerrville" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kerrville Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Kerrville" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seasonal Google Ads for Hill Country Tourism" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ranch and Luxury Real Estate Lead Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Review Generation and Google Business Profile" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Kerrville", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Kerrville do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Kerrville helps Hill Country tourism operators, ranch and luxury real estate, healthcare, retail boutiques and home services grow with local SEO, Google Ads, conversion-focused websites and seasonal campaigns. Altiora Infotech tunes campaigns for both year-round residents and Hill Country visitors."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can a Kerrville small business start seeing leads online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Ads typically delivers qualified leads within the first two weeks of launch. SEO results follow on a 3 to 6 month curve for moderate keywords; tourism, ranch real estate and Hill Country lifestyle terms tend to compound faster because the local competitor pool stays small year over year."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve businesses across the broader Texas Hill Country too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly run campaigns covering Kerrville plus Comfort, Ingram, Center Point, Hunt, Fredericksburg and Boerne, including commuter traffic into and out of San Antonio. Geo-targeted campaigns can be tightened or widened to match your real-world service area."
          }
        },
        {
          "@type": "Question",
          "name": "Which Kerrville industries see the strongest ROI from digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tourism and hospitality, ranch and luxury real estate, healthcare and senior living, home services, retail boutiques along Main Street, and outdoor lifestyle brands all see consistently strong ROI when paid search, local SEO and review generation are run together."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-kerrville",
      "name": "Digital Marketing Company in Kerrville | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function KerrvilleMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kerrvilleSchema) }}
      />
      <KerrvilleMarketingClientPage />
    </>
  );
}
