import { Metadata } from 'next';
import EdmontonMarketingClientPage from './_components/EdmontonMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Edmonton - Altiora Infotech',
  description: 'Top-rated Digital Marketing Company in Edmonton. SEO, Google Ads, social media marketing & web development helping Edmonton businesses generate qualified leads and grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton",
  },
  openGraph: {
    title: "Digital Marketing Company in Edmonton - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Edmonton. SEO, Google Ads, social media marketing & web development helping Edmonton businesses generate qualified leads and grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Edmonton" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Edmonton - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Edmonton. SEO, Google Ads, social media marketing & web development helping Edmonton businesses generate qualified leads and grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const edmontonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Edmonton",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-focused Digital Marketing Company serving Edmonton businesses with SEO, Google Ads, social media marketing, website development, and data-driven growth strategies.",
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
        "latitude": 53.5461,
        "longitude": -113.4938
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
        { "@type": "City", "name": "Edmonton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Alberta" } },
        { "@type": "Place", "name": "St. Albert" },
        { "@type": "Place", "name": "Sherwood Park" },
        { "@type": "Place", "name": "Beaumont" },
        { "@type": "Place", "name": "Leduc" },
        { "@type": "Place", "name": "Spruce Grove" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Mobile App Development", "Graphic Design", "Lead Generation"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton/#service",
      "name": "Digital Marketing Company in Edmonton",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton",
      "description": "Trusted Digital Marketing Company in Edmonton providing SEO, paid advertising, social media marketing, website development, and data-driven digital growth strategies.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development",
      "areaServed": { "@type": "City", "name": "Edmonton" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Edmonton Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Edmonton" } },
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
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Edmonton", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Digital Marketing Company in Edmonton do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and grow revenue through SEO, PPC, social media marketing, website development, and content marketing." }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Edmonton?",
          "acceptedAnswer": { "@type": "Answer", "text": "The best digital marketing company is one that understands your goals, provides transparent communication, and delivers measurable results through customized strategies." }
        },
        {
          "@type": "Question",
          "name": "Is hiring a Digital Marketing Company worth it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Businesses gain access to specialized expertise, advanced marketing tools, and proven strategies that help maximize growth opportunities." }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Edmonton?",
          "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on business objectives, competition, and required services. Most businesses benefit from customized marketing plans." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and PPC?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO focuses on organic visibility over time, while PPC uses paid advertising to generate immediate traffic and leads." }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO generally requires several months to build authority and deliver sustainable growth." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help local businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing help businesses attract nearby customers." }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important?",
          "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps businesses appear in location-based searches, Google Maps results, and local listings." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton/#howto",
      "name": "How to Grow Your Edmonton Business with Digital Marketing",
      "description": "A proven 4-step digital marketing framework for Edmonton businesses to build online visibility, generate qualified leads, and achieve sustainable growth.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Position Your Brand",
          "text": "Build brand awareness and establish credibility in Edmonton's competitive market by appearing where your target customers actively search online."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Build Your Online Presence",
          "text": "Create a strong foundation through website optimization, local Edmonton SEO, and strategic content that consistently attracts qualified traffic."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Qualified Leads",
          "text": "Use targeted SEO, Google Ads PPC, and social media marketing to reach Edmonton customers actively searching for your services."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Scale With Confidence",
          "text": "Leverage performance insights, data analysis, and continuous optimization to support sustainable long-term business growth in Edmonton."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton/#services",
      "name": "Digital Marketing Services in Edmonton by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Edmonton businesses including SEO, PPC, social media, web development, mobile apps, and graphic design.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services in Edmonton", "description": "Improve search rankings and increase organic visibility through proven SEO strategies for Edmonton businesses." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising (PPC) in Edmonton", "description": "Generate immediate traffic and qualified leads through Google Ads and targeted paid advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing in Edmonton", "description": "Build brand awareness and engage Edmonton audiences through strategic social media management." },
        { "@type": "ListItem", "position": 4, "name": "Website Development in Edmonton", "description": "Create professional, conversion-focused websites designed to support Edmonton business growth." },
        { "@type": "ListItem", "position": 5, "name": "Mobile App Development in Edmonton", "description": "Develop scalable mobile applications that improve customer engagement and operational efficiency." },
        { "@type": "ListItem", "position": 6, "name": "Graphic Design in Edmonton", "description": "Build a memorable brand identity through professional design and visual communication." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton",
      "name": "Digital Marketing Company in Edmonton | Altiora Infotech",
      "description": "Top-rated Digital Marketing Company in Edmonton. SEO, Google Ads, social media marketing and web development for Edmonton businesses.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": { "@type": "Thing", "name": "Digital Marketing Services in Edmonton" },
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Website Development" }
      ]
    }
  ]
};

export default function EdmontonMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edmontonSchema) }}
      />
      <EdmontonMarketingClientPage />
    </>
  );
}
