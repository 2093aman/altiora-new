import { Metadata } from 'next';
import MississaugaMarketingClientPage from './_components/MississaugaMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Mississauga - Altiora Infotech',
  description: 'Top-rated Digital Marketing Company in Mississauga. SEO, Google Ads, social media marketing & web development helping Mississauga businesses generate leads and grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
  },
  openGraph: {
    title: "Digital Marketing Company in Mississauga - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Mississauga. SEO, Google Ads, social media marketing & web development helping Mississauga businesses generate leads and grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Mississauga" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Mississauga - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Mississauga. SEO, Google Ads, social media marketing & web development helping Mississauga businesses generate leads and grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const mississaugaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Mississauga",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-driven Digital Marketing Company serving Mississauga businesses with SEO, Google Ads, social media marketing, website development, and AI-powered growth strategies.",
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
        "latitude": 43.5890,
        "longitude": -79.6441
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
        { "@type": "City", "name": "Mississauga", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Port Credit" },
        { "@type": "Place", "name": "Streetsville" },
        { "@type": "Place", "name": "Meadowvale" },
        { "@type": "Place", "name": "Erin Mills" },
        { "@type": "Place", "name": "City Centre" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Mobile App Development", "Graphic Design", "Lead Generation"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga/#service",
      "name": "Digital Marketing Company in Mississauga",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
      "description": "Results-driven Digital Marketing Company in Mississauga providing SEO, paid advertising, social media marketing, website development, and AI-powered digital growth strategies.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development",
      "areaServed": { "@type": "City", "name": "Mississauga" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mississauga Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Mississauga" } },
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
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Mississauga", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Digital Marketing Company in Mississauga do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and grow revenue through services such as SEO, paid advertising, social media marketing, website development, and content marketing." }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Mississauga?",
          "acceptedAnswer": { "@type": "Answer", "text": "The best digital marketing company in Mississauga is one that understands your business objectives, provides transparent communication, and delivers measurable results. Businesses should evaluate agencies based on expertise, strategy, client success, and long-term value. Altiora Infotech helps Mississauga businesses achieve sustainable growth through customized digital marketing solutions tailored to their goals." }
        },
        {
          "@type": "Question",
          "name": "Is hiring a Digital Marketing Company worth it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hiring a Digital Marketing Company provides access to experienced specialists, advanced tools, and proven strategies that help businesses improve visibility, generate leads, and maximize their marketing investment. It also allows business owners to focus on operations while marketing experts handle growth initiatives." }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Mississauga?",
          "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing costs vary depending on your business goals, competition, target audience, and the services required. Most businesses benefit from a customized marketing strategy designed around their growth objectives." }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from digital marketing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Results depend on the marketing channels being used. PPC campaigns can generate immediate traffic and leads, while SEO generally requires several months to build authority and achieve long-term rankings." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and PPC?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO focuses on improving organic search visibility over time, while PPC uses paid advertising to generate immediate traffic. Many businesses combine both strategies to maximize short-term and long-term growth." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help local businesses in Mississauga?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing can help businesses attract nearby customers, improve visibility, and increase local market share." }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for businesses in Mississauga?",
          "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps your business appear when customers search for products or services near them. It increases visibility in local search results, Google Maps, and location-based searches, helping generate qualified leads from your target area." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga/#howto",
      "name": "How to Grow Your Mississauga Business with Digital Marketing",
      "description": "A proven 4-step digital marketing framework for Mississauga businesses to build online visibility, generate qualified leads, and achieve sustainable growth.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Position Your Brand",
          "text": "Build brand awareness and establish credibility in Mississauga's competitive market by appearing where your target customers actively search online."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Build Your Online Presence",
          "text": "Create a strong foundation through website optimization, local Mississauga SEO, and strategic content that consistently attracts qualified traffic."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Qualified Leads",
          "text": "Use targeted SEO, Google Ads PPC, and social media marketing to reach Mississauga customers actively searching for your services."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Scale With Confidence",
          "text": "Leverage performance insights, data analysis, and continuous optimization to support sustainable long-term business growth in Mississauga."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga/#services",
      "name": "Digital Marketing Services in Mississauga by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Mississauga businesses including SEO, PPC, social media, web development, mobile apps, and graphic design.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services in Mississauga", "description": "Improve search rankings and increase organic visibility through proven SEO strategies tailored to your business goals." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising (PPC) in Mississauga", "description": "Generate immediate traffic and qualified leads through Google Ads, Meta Ads, and targeted advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing in Mississauga", "description": "Build brand awareness, engage audiences, and strengthen customer relationships through strategic social media management." },
        { "@type": "ListItem", "position": 4, "name": "Website Development in Mississauga", "description": "Create professional, fast, and conversion-focused websites designed to support business growth." },
        { "@type": "ListItem", "position": 5, "name": "Mobile App Development in Mississauga", "description": "Develop scalable mobile applications that improve customer engagement and operational efficiency." },
        { "@type": "ListItem", "position": 6, "name": "Graphic Design in Mississauga", "description": "Build a memorable brand identity through professional design and visual communication." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
      "name": "Digital Marketing Company in Mississauga | Altiora Infotech",
      "description": "Top-rated Digital Marketing Company in Mississauga. SEO, Google Ads, social media marketing and web development for Mississauga businesses.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": { "@type": "Thing", "name": "Digital Marketing Services in Mississauga" },
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Website Development" }
      ]
    }
  ]
};

export default function MississaugaMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mississaugaSchema) }}
      />
      <MississaugaMarketingClientPage />
    </>
  );
}
