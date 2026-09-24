import { Metadata } from 'next';
import BramptonMarketingClientPage from './_components/BramptonMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Brampton - Altiora Infotech',
  description: 'Top-rated Digital Marketing Company in Brampton. SEO, Google Ads, social media marketing & web development helping Brampton businesses generate qualified leads and grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton",
  },
  openGraph: {
    title: "Digital Marketing Company in Brampton - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Brampton. SEO, Google Ads, social media marketing & web development helping Brampton businesses generate qualified leads and grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Brampton" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Brampton - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Brampton. SEO, Google Ads, social media marketing & web development helping Brampton businesses generate qualified leads and grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const bramptonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Brampton",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-driven Digital Marketing Company serving Brampton businesses with SEO, Google Ads, social media marketing, website development, and performance-driven growth strategies.",
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
        "latitude": 43.7315,
        "longitude": -79.7624
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
        { "@type": "City", "name": "Brampton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Downtown Brampton" },
        { "@type": "Place", "name": "Bramalea" },
        { "@type": "Place", "name": "Springdale" },
        { "@type": "Place", "name": "Heart Lake" },
        { "@type": "Place", "name": "Mount Pleasant" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Mobile App Development", "Content Marketing", "Graphic Design", "Lead Generation"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton/#service",
      "name": "Digital Marketing Company in Brampton",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton",
      "description": "Results-driven Digital Marketing Company in Brampton providing SEO, paid advertising, social media marketing, website development, content marketing, and performance-driven digital growth strategies.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development, Content Marketing",
      "areaServed": { "@type": "City", "name": "Brampton" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Brampton Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Brampton" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay-Per-Click Advertising (PPC)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Creative Design" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Brampton", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Digital Marketing Company in Brampton do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and grow revenue through services such as SEO, paid advertising, social media marketing, website development, and content marketing." }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Brampton?",
          "acceptedAnswer": { "@type": "Answer", "text": "The best digital marketing company in Brampton is one that understands your business goals, provides transparent communication, and delivers measurable results. Altiora Infotech helps Brampton businesses achieve sustainable growth through data-driven digital marketing solutions tailored to their objectives." }
        },
        {
          "@type": "Question",
          "name": "Is hiring a Digital Marketing Company worth it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hiring a Digital Marketing Company provides access to specialized expertise, advanced marketing tools, and proven strategies that can help businesses improve visibility, generate leads, and maximize their marketing investment while focusing on core operations." }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Brampton?",
          "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing costs vary depending on your goals, competition, industry, and required services. Most businesses benefit from a customized strategy designed around their growth objectives and budget." }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from digital marketing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Results depend on the marketing channel being used. PPC campaigns can generate leads quickly, while SEO typically requires several months to build authority and achieve sustainable growth." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and PPC?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO focuses on improving organic search visibility over time, while PPC uses paid advertising to generate immediate traffic and leads. Combining both strategies often produces the strongest results." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help local businesses in Brampton?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing can help businesses attract nearby customers and increase visibility within the local market." }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for businesses in Brampton?",
          "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps businesses appear in location-based searches, Google Maps results, and local listings, making it easier for nearby customers to find and contact them." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton/#howto",
      "name": "How to Grow Your Brampton Business with Digital Marketing",
      "description": "A proven 4-step digital marketing framework for Brampton businesses to build online visibility, generate qualified leads, and achieve sustainable growth.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Position Your Brand",
          "text": "Build brand awareness and establish credibility in Brampton's competitive market by appearing where your target customers actively search online."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Build Your Online Presence",
          "text": "Create a strong foundation through website optimization, local Brampton SEO, and strategic content that consistently attracts qualified traffic."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Qualified Leads",
          "text": "Use targeted SEO, Google Ads PPC, and social media marketing to reach Brampton customers actively searching for your services."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Scale With Confidence",
          "text": "Leverage performance insights, data analysis, and continuous optimization to support sustainable long-term business growth in Brampton."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton/#services",
      "name": "Digital Marketing Services in Brampton by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Brampton businesses including SEO, PPC, social media, web development, content marketing, and graphic design.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services in Brampton", "description": "Improve search rankings and increase organic visibility through proven SEO strategies for Brampton businesses." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising (PPC) in Brampton", "description": "Generate immediate traffic and qualified leads through Google Ads and targeted paid advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing in Brampton", "description": "Build brand awareness and engage Brampton audiences through strategic social media management." },
        { "@type": "ListItem", "position": 4, "name": "Website Development in Brampton", "description": "Create professional, conversion-focused websites designed to support Brampton business growth." },
        { "@type": "ListItem", "position": 5, "name": "Mobile App Development in Brampton", "description": "Develop scalable mobile applications that improve customer engagement and business efficiency." },
        { "@type": "ListItem", "position": 6, "name": "Content Marketing in Brampton", "description": "Build authority and attract qualified traffic through strategic content marketing and creation." },
        { "@type": "ListItem", "position": 7, "name": "Branding & Graphic Design in Brampton", "description": "Create a memorable brand identity through professional design and visual communication." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-brampton",
      "name": "Digital Marketing Company in Brampton | Altiora Infotech",
      "description": "Top-rated Digital Marketing Company in Brampton. SEO, Google Ads, social media marketing and web development for Brampton businesses.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": { "@type": "Thing", "name": "Digital Marketing Services in Brampton" },
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Website Development" }
      ]
    }
  ]
};

export default function BramptonMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bramptonSchema) }}
      />
      <BramptonMarketingClientPage />
    </>
  );
}
