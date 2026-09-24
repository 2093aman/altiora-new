import { Metadata } from 'next';
import TorontoMarketingClientPage from './_components/TorontoMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Toronto - Altiora Infotech',
  description: 'Top-rated Digital Marketing Company in Toronto. SEO, Google Ads, social media marketing & web development helping Toronto businesses generate qualified leads and grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
  },
  openGraph: {
    title: "Digital Marketing Company in Toronto - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Toronto. SEO, Google Ads, social media marketing & web development helping Toronto businesses generate qualified leads and grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Toronto" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Toronto - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Toronto. SEO, Google Ads, social media marketing & web development helping Toronto businesses generate qualified leads and grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const torontoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Toronto",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital Marketing Company serving Toronto and the GTA with local SEO, Google Ads, social media marketing, website development and data-driven growth strategies.",
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
        "latitude": 43.6532,
        "longitude": -79.3832
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
        { "@type": "City", "name": "Toronto", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Downtown Toronto" },
        { "@type": "Place", "name": "North York" },
        { "@type": "Place", "name": "Scarborough" },
        { "@type": "Place", "name": "Etobicoke" },
        { "@type": "Place", "name": "Markham" },
        { "@type": "Place", "name": "Vaughan" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Mobile App Development", "Graphic Design", "Lead Generation"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto/#service",
      "name": "Digital Marketing Company in Toronto",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
      "description": "Trusted Digital Marketing Company in Toronto providing SEO, paid advertising, social media marketing, website development and data-driven digital marketing solutions.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development",
      "areaServed": { "@type": "City", "name": "Toronto" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Toronto Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Toronto" } },
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
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Toronto", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Digital Marketing Company in Toronto do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and grow revenue through SEO, paid advertising, social media marketing, website development, and content marketing." }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Toronto?",
          "acceptedAnswer": { "@type": "Answer", "text": "The best digital marketing company in Toronto is one that understands your business goals, provides transparent reporting, and delivers measurable results. Businesses should look for agencies with proven expertise, strategic thinking, and a strong focus on long-term growth. Altiora Infotech helps Toronto businesses grow through customized, data-driven digital marketing solutions." }
        },
        {
          "@type": "Question",
          "name": "Is hiring a Digital Marketing Company worth it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. A Digital Marketing Company provides access to specialized expertise, advanced marketing tools, and proven strategies that can help businesses generate better results while saving valuable time and resources." }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Toronto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on business objectives, industry competition, and the services required. Most businesses benefit from a customized strategy tailored to their specific goals." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and PPC?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO focuses on improving organic visibility over time, while PPC uses paid advertising to generate immediate traffic and leads. Many businesses achieve the best results by combining both approaches." }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results?",
          "acceptedAnswer": { "@type": "Answer", "text": "PPC campaigns can produce results quickly, while SEO generally requires several months to build momentum and deliver sustainable growth." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help local businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing help businesses attract nearby customers and increase local visibility." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto/#howto",
      "name": "How to Grow Your Toronto Business with Digital Marketing",
      "description": "A proven 4-step digital marketing framework for Toronto businesses to build online visibility, generate qualified leads, and achieve sustainable growth.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Position Your Brand",
          "text": "Build brand awareness and establish credibility in Toronto's competitive market by appearing where your target customers actively search online."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Build Your Digital Presence",
          "text": "Create a strong foundation through website optimization, local Toronto SEO, and strategic content that consistently attracts qualified traffic."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Qualified Leads",
          "text": "Use targeted SEO, Google Ads PPC, and social media marketing to reach Toronto customers who are actively searching for your services."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Scale Consistently",
          "text": "Leverage performance data, analytics, and continuous campaign optimization to support sustainable long-term business growth in Toronto."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto/#services",
      "name": "Digital Marketing Services in Toronto by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Toronto businesses including SEO, PPC, social media, web development, mobile apps, and graphic design.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services in Toronto", "description": "Improve search rankings and increase organic traffic through proven search engine optimization strategies tailored for Toronto businesses." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising (PPC) in Toronto", "description": "Generate immediate visibility and qualified leads through Google Ads and paid social campaigns targeting Toronto audiences." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing in Toronto", "description": "Build brand awareness, engage audiences, and strengthen your online presence across social media platforms." },
        { "@type": "ListItem", "position": 4, "name": "Website Development in Toronto", "description": "Create fast, modern, and conversion-focused websites designed to support Toronto business growth." },
        { "@type": "ListItem", "position": 5, "name": "Mobile App Development in Toronto", "description": "Develop scalable mobile applications that improve customer experiences and business efficiency." },
        { "@type": "ListItem", "position": 6, "name": "Graphic Design in Toronto", "description": "Build a memorable brand identity through professional visual design solutions." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
      "name": "Digital Marketing Company in Toronto | Altiora Infotech",
      "description": "Top-rated Digital Marketing Company in Toronto. SEO, Google Ads, social media marketing and web development for Toronto businesses.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": { "@type": "Thing", "name": "Digital Marketing Services in Toronto" },
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Website Development" }
      ]
    }
  ]
};

export default function TorontoMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(torontoSchema) }}
      />
      <TorontoMarketingClientPage />
    </>
  );
}
