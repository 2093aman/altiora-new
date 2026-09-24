import { Metadata } from 'next';
import KelownaMarketingClientPage from './_components/KelownaMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Kelowna - Altiora Infotech',
  description: 'Top-rated Digital Marketing Company in Kelowna. SEO, Google Ads, social media marketing & web development helping Kelowna businesses generate qualified leads and grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna",
  },
  openGraph: {
    title: "Digital Marketing Company in Kelowna - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Kelowna. SEO, Google Ads, social media marketing & web development helping Kelowna businesses generate qualified leads and grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Kelowna" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Kelowna - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Kelowna. SEO, Google Ads, social media marketing & web development helping Kelowna businesses generate qualified leads and grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const kelownaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Kelowna",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-focused Digital Marketing Company serving Kelowna businesses with SEO, Google Ads, social media marketing, website development, and data-driven growth strategies.",
      "priceRange": "$$$",
      "currenciesAccepted": "CAD",
      "paymentAccepted": "Credit Card, Debit Card, Bank Transfer, E-Transfer",
      "email": "altiorainfotech@gmail.com",
      "foundingDate": "2023",
      "sameAs": [
        "https://altiorainfotech.ca",
        "https://www.instagram.com/altiorainfotech.ca",
        "https://www.linkedin.com/company/altiora-infotech"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://altiorainfotech.ca/contact",
        "email": "altiorainfotech@gmail.com",
        "availableLanguage": ["English"]
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.8880,
        "longitude": -119.4960
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Kelowna", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "West Kelowna" },
        { "@type": "Place", "name": "Lake Country" },
        { "@type": "Place", "name": "Peachland" },
        { "@type": "Place", "name": "Rutland" },
        { "@type": "Place", "name": "Glenmore" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Mobile App Development", "Graphic Design", "Lead Generation"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna/#service",
      "name": "Digital Marketing Company in Kelowna",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna",
      "description": "Trusted Digital Marketing Company in Kelowna providing SEO, paid advertising, social media marketing, website development, and data-driven digital growth strategies.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development",
      "areaServed": { "@type": "City", "name": "Kelowna" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kelowna Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Kelowna" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising (PPC)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Kelowna", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Digital Marketing Company in Kelowna do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and grow revenue through SEO, paid advertising, social media marketing, website development, and content marketing." }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Kelowna?",
          "acceptedAnswer": { "@type": "Answer", "text": "The best digital marketing company is one that understands your goals, provides transparent reporting, and delivers measurable results through customized strategies." }
        },
        {
          "@type": "Question",
          "name": "Is hiring a Digital Marketing Company worth it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Businesses gain access to specialized expertise, advanced marketing tools, and proven strategies that help maximize growth opportunities." }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Kelowna?",
          "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on your business goals, industry competition, and required services. Most businesses benefit from a customized marketing strategy." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and PPC?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO improves organic visibility over time, while PPC uses paid advertising to generate immediate traffic and leads." }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO generally requires several months to build authority and deliver sustainable rankings." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help local businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing help businesses attract nearby customers." }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important?",
          "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps businesses appear in location-based searches, Google Maps results, and local listings, making it easier for nearby customers to find and contact them." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna/#howto",
      "name": "How to Grow Your Kelowna Business with Digital Marketing",
      "description": "A proven 4-step digital marketing framework for Kelowna businesses to build online visibility, generate qualified leads, and achieve sustainable growth.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Position Your Brand",
          "text": "Build brand awareness and establish credibility in Kelowna's competitive market by appearing where your target customers actively search online."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Build Your Online Presence",
          "text": "Create a strong foundation through website optimization, local Kelowna SEO, and strategic content that consistently attracts qualified traffic."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Qualified Leads",
          "text": "Use targeted SEO, Google Ads PPC, and social media marketing to reach Kelowna customers actively searching for your services."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Scale With Confidence",
          "text": "Leverage performance insights, data analysis, and continuous optimization to support sustainable long-term business growth in Kelowna."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna/#services",
      "name": "Digital Marketing Services in Kelowna by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Kelowna businesses including SEO, PPC, social media, web development, mobile apps, and graphic design.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services in Kelowna", "description": "Improve search rankings and increase organic visibility through proven SEO strategies tailored to your business goals." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising (PPC) in Kelowna", "description": "Generate immediate traffic and qualified leads through Google Ads and targeted advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing in Kelowna", "description": "Build brand awareness and engage Kelowna audiences through strategic social media management." },
        { "@type": "ListItem", "position": 4, "name": "Website Development in Kelowna", "description": "Create professional, conversion-focused websites designed to support Kelowna business growth." },
        { "@type": "ListItem", "position": 5, "name": "Mobile App Development in Kelowna", "description": "Develop scalable mobile applications that improve customer engagement and operational efficiency." },
        { "@type": "ListItem", "position": 6, "name": "Graphic Design in Kelowna", "description": "Build a memorable brand identity through professional design and visual communication." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-kelowna",
      "name": "Digital Marketing Company in Kelowna | Altiora Infotech",
      "description": "Top-rated Digital Marketing Company in Kelowna. SEO, Google Ads, social media marketing and web development for Kelowna businesses.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": { "@type": "Thing", "name": "Digital Marketing Services in Kelowna" },
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Website Development" }
      ]
    }
  ]
};

export default function KelownaMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kelownaSchema) }}
      />
      <KelownaMarketingClientPage />
    </>
  );
}
