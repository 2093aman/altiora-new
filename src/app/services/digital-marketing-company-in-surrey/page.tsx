import { Metadata } from 'next';
import SurreyMarketingClientPage from './_components/SurreyMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Surrey - Altiora Infotech',
  description: 'Leading digital marketing company in Surrey offering SEO, PPC and social media marketing solutions for business growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey",
  },
  openGraph: {
    title: "Digital Marketing Company in Surrey - Altiora Infotech",
    description: "Leading digital marketing company in Surrey offering SEO, PPC and social media marketing solutions for business growth.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Surrey" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Surrey - Altiora Infotech",
    description: "Leading digital marketing company in Surrey offering SEO, PPC and social media marketing solutions for business growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const surreySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Surrey",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Surrey and the South Fraser region with local SEO, bilingual Punjabi/Hindi campaigns, Google Ads, social media management and conversion-focused websites.",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Surrey", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Newton" },
        { "@type": "Place", "name": "Cloverdale" },
        { "@type": "Place", "name": "Whalley" },
        { "@type": "Place", "name": "Fleetwood" },
        { "@type": "Place", "name": "Guildford" },
        { "@type": "Place", "name": "South Surrey" }
      ],
      "knowsAbout": ["Local SEO", "Bilingual Marketing", "Google Ads", "Meta Advertising", "Social Media Marketing", "Lead Generation", "Web Development"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey/#service",
      "name": "Digital Marketing Company in Surrey",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey",
      "description": "Surrey digital marketing company helping immigration, real estate, accounting, trades and South Asian-owned businesses grow with bilingual SEO and paid advertising.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation",
      "areaServed": { "@type": "City", "name": "Surrey" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Surrey Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO in Surrey" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bilingual Punjabi / Hindi Campaigns" } },
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
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Surrey", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company in Surrey do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company in Surrey helps immigration consultants, real estate professionals, accountants, trades and South Asian-owned businesses grow predictable lead flow through local SEO, Google Ads, bilingual creative and conversion-focused websites. Altiora Infotech delivers all of these under one in-house team with measurable monthly reporting."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can Surrey businesses expect leads from SEO and Google Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Ads can drive qualified Surrey leads within 7 to 14 days of campaign launch. Organic SEO typically takes 3 to 5 months for moderate-difficulty keywords and 6 to 9 months for high-competition immigration, real estate and dental terms."
          }
        },
        {
          "@type": "Question",
          "name": "Do you produce bilingual Punjabi and Hindi creative for Surrey campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly run bilingual landing pages, ad creative and social posts in Punjabi, Hindi and English for Surrey clients, especially in the immigration, accounting, construction and trades verticals where it materially lifts response rates."
          }
        },
        {
          "@type": "Question",
          "name": "Can you target specific Surrey neighbourhoods like Newton or South Surrey separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We routinely build hyper-local campaigns by postal code, so a contractor focusing on Cloverdale and Sullivan, or a dentist in South Surrey, never wastes budget on irrelevant clicks from outside the actual catchment."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Surrey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Surrey SMBs see strong outcomes from CA$1,500 to CA$4,000 per month across SEO, paid and content. Competitive verticals such as immigration, real estate and dental typically invest CA$5,000 to CA$10,000 per month."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey",
      "name": "Digital Marketing Company in Surrey | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function SurreyMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surreySchema) }}
      />
      <SurreyMarketingClientPage />
    </>
  );
}
