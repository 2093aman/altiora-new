import { Metadata } from 'next';
import VancouverMarketingClientPage from './_components/VancouverMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Vancouver - Altiora Infotech',
  description: 'Digital marketing company in Vancouver providing SEO, PPC and social media marketing services to help businesses grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver",
  },
  openGraph: {
    title: "Digital Marketing Company in Vancouver - Altiora Infotech",
    description: "Digital marketing company in Vancouver providing SEO, PPC and social media marketing services to help businesses grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Vancouver" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Vancouver - Altiora Infotech",
    description: "Digital marketing company in Vancouver providing SEO, PPC and social media marketing services to help businesses grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const vancouverSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Vancouver",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Vancouver and Metro Vancouver with local SEO, paid search, social and conversion-focused websites for professional services, retail, SaaS and hospitality.",
      "priceRange": "$$$",
      "areaServed": [
        { "@type": "City", "name": "Vancouver", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Downtown Vancouver" },
        { "@type": "Place", "name": "Yaletown" },
        { "@type": "Place", "name": "Mount Pleasant" },
        { "@type": "Place", "name": "Kitsilano" },
        { "@type": "Place", "name": "Gastown" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "LinkedIn Ads", "Social Media Marketing", "Web Development", "Brand Strategy"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver/#service",
      "name": "Digital Marketing Company in Vancouver",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver",
      "description": "Digital marketing company in Vancouver providing SEO, PPC, social media marketing and conversion-focused websites for ambitious local brands.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation",
      "areaServed": { "@type": "City", "name": "Vancouver" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vancouver Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Vancouver" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bilingual English / Chinese Campaigns" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Vancouver", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Vancouver do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Vancouver helps professional services, retail brands, SaaS startups and hospitality operators across Metro Vancouver win measurable growth through local SEO, paid search, conversion-focused websites and content. Altiora Infotech delivers these services with a sharper creative bar than the typical generalist agency."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take in Vancouver given how competitive it is?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vancouver is one of Canada's most contested local-search markets. Plan for 4 to 8 months before high-value commercial terms (lawyer, dentist, real estate, contractor) move into the local pack. Lower-competition long-tail terms can rank within 60 to 90 days when paired with strong on-page optimisation and citations."
          }
        },
        {
          "@type": "Question",
          "name": "Do you need a Vancouver office address to win local rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A verified Google Business Profile with a real Vancouver service area, strong reviews and locally-relevant content outperforms most brand-new physical offices. Many of our top-ranking Vancouver clients operate on hybrid or service-area models."
          }
        },
        {
          "@type": "Question",
          "name": "Which Vancouver industries see the strongest ROI from digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional services (legal, dental, medical, financial), home services, real estate and SaaS startups consistently see the strongest returns. High-volume retail and restaurants benefit more from combined Google Local plus Meta paid social rather than SEO alone."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Vancouver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vancouver SMBs typically invest CA$2,000 to CA$5,000 per month across SEO, paid and content. Competitive verticals (legal, dental, real estate) and SaaS scale-ups often run CA$8,000 to CA$20,000+ per month when share of voice is the objective."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver",
      "name": "Digital Marketing Company in Vancouver | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function VancouverMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vancouverSchema) }}
      />
      <VancouverMarketingClientPage />
    </>
  );
}
