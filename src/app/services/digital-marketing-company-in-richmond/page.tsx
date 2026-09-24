import { Metadata } from 'next';
import RichmondMarketingClientPage from './_components/RichmondMarketingClientPage';


export const metadata: Metadata = {
  title: 'Digital Marketing Company in Richmond - Altiora Infotech',
  description: 'Digital marketing company in Richmond helping businesses grow with SEO, paid ads and social media strategies.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond",
  },
  openGraph: {
    title: "Digital Marketing Company in Richmond - Altiora Infotech",
    description: "Digital marketing company in Richmond helping businesses grow with SEO, paid ads and social media strategies.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Richmond" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Richmond - Altiora Infotech",
    description: "Digital marketing company in Richmond helping businesses grow with SEO, paid ads and social media strategies.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const richmondSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Richmond",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Richmond BC with bilingual English / simplified Chinese campaigns, local SEO, paid search, social media and conversion-focused websites.",
      "priceRange": "$$$",
      "areaServed": [
        { "@type": "City", "name": "Richmond", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Steveston" },
        { "@type": "Place", "name": "Brighouse" },
        { "@type": "Place", "name": "Hamilton" },
        { "@type": "Place", "name": "Terra Nova" },
        { "@type": "Place", "name": "Broadmoor" }
      ],
      "knowsAbout": ["Bilingual Marketing", "Chinese-language Campaigns", "Local SEO", "Google Ads", "WeChat Marketing", "Web Development", "Brand Identity"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond/#service",
      "name": "Digital Marketing Company in Richmond",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond",
      "description": "Richmond-focused digital marketing company helping luxury real estate firms, Asian retail brands, restaurants, healthcare providers and professional services grow with bilingual English and simplified Chinese campaigns.",
      "serviceType": "Digital Marketing, Bilingual SEO, PPC, Social Media Marketing, Web Development",
      "areaServed": { "@type": "City", "name": "Richmond" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Richmond Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bilingual Local SEO in Richmond" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "English and Simplified Chinese Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WeChat and Xiaohongshu Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Brand Identity Design" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Richmond", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Richmond do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Richmond helps luxury real estate firms, Asian retail brands, restaurants, healthcare providers and professional services grow with bilingual English and simplified Chinese campaigns, local SEO, paid search, social and conversion-focused websites. Altiora Infotech delivers all of these as one coordinated programme."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to deliver leads for a Richmond business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Richmond service businesses see clear ranking movement in 3 to 4 months on long-tail terms, with stronger volume from 5 to 8 months. Bilingual SEO (English plus simplified Chinese) typically compounds faster because there is less competition on Chinese-language queries."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create Chinese-language campaigns and landing pages for Richmond clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We routinely build simplified-Chinese and English landing pages, Google Ads campaigns and social creative for Richmond brands. We can also extend campaigns into WeChat and Xiaohongshu (RED) when the audience justifies it."
          }
        },
        {
          "@type": "Question",
          "name": "Does my Richmond business need both Google Maps and paid social to grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most do, but the split depends on category. Restaurants and retail in Brighouse and Steveston benefit from heavy Google Business Profile plus paid social. Professional services usually start with Google Search plus a strong website and only layer paid social later."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Richmond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Richmond SMBs typically invest CA$2,000 to CA$5,000 per month for combined bilingual SEO, paid search and content. Luxury real estate, private healthcare and premium retail brands often run CA$8,000 to CA$20,000 per month."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-richmond",
      "name": "Digital Marketing Company in Richmond | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function RichmondMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richmondSchema) }}
      />
      <RichmondMarketingClientPage />
    </>
  );
}
