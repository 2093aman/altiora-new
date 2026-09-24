import { Metadata } from 'next';
import WhistlerMarketingClientPage from './_components/WhistlerMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Whistler - Altiora Infotech',
  description: 'Top-rated Digital Marketing Company in Whistler. SEO, Google Ads, social media marketing & web development helping Whistler businesses generate qualified leads and grow online.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler",
  },
  openGraph: {
    title: "Digital Marketing Company in Whistler - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Whistler. SEO, Google Ads, social media marketing & web development helping Whistler businesses generate qualified leads and grow online.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Whistler" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Whistler - Altiora Infotech",
    description: "Top-rated Digital Marketing Company in Whistler. SEO, Google Ads, social media marketing & web development helping Whistler businesses generate qualified leads and grow online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const whistlerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Whistler",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-focused Digital Marketing Company serving Whistler businesses with SEO, Google Ads, social media marketing, website development, and data-driven growth strategies.",
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
        "latitude": 50.1163,
        "longitude": -122.9574
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
        { "@type": "City", "name": "Whistler", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Creekside" },
        { "@type": "Place", "name": "Function Junction" },
        { "@type": "Place", "name": "Alta Vista" },
        { "@type": "Place", "name": "Emerald Estates" },
        { "@type": "Place", "name": "Alpine Meadows" }
      ],
      "knowsAbout": ["Local SEO", "Google Ads", "Meta Advertising", "Social Media Marketing", "Web Development", "Mobile App Development", "Graphic Design", "Lead Generation", "Tourism Marketing", "Hospitality Marketing"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler/#service",
      "name": "Digital Marketing Company in Whistler",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler",
      "description": "Trusted Digital Marketing Company in Whistler providing SEO, paid advertising, social media marketing, website development, and data-driven digital growth strategies.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development",
      "areaServed": { "@type": "City", "name": "Whistler" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Whistler Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Whistler" } },
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
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Whistler", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Digital Marketing Company in Whistler do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and increase revenue through SEO, paid advertising, social media marketing, website development, and content marketing." }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Whistler?",
          "acceptedAnswer": { "@type": "Answer", "text": "The best digital marketing company is one that understands your business objectives, provides transparent communication, and delivers measurable results through customized strategies." }
        },
        {
          "@type": "Question",
          "name": "Is hiring a Digital Marketing Company worth it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Businesses gain access to specialized expertise, advanced tools, and proven strategies that help improve visibility, customer acquisition, and return on investment." }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Whistler?",
          "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on your business goals, industry competition, target audience, and the services required. Most businesses benefit from customized marketing solutions." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and PPC?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO focuses on improving organic search visibility over time, while PPC uses paid advertising to generate immediate traffic and leads." }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO generally requires several months to build authority and achieve sustainable rankings." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help local businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing help businesses attract nearby customers and visitors." }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important in Whistler?",
          "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps businesses appear in Google Maps, local searches, and location-based results, making it easier for visitors and residents to find your business." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler/#howto",
      "name": "How to Grow Your Whistler Business with Digital Marketing",
      "description": "A proven 4-step digital marketing framework for Whistler businesses to build online visibility, attract tourists and locals, generate qualified leads, and achieve sustainable growth.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Position Your Brand",
          "text": "Build brand awareness and establish credibility in Whistler's tourism and hospitality market by appearing where visitors and locals actively search online."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Build Your Online Presence",
          "text": "Create a strong foundation through website optimization, local Whistler SEO, and strategic content that consistently attracts qualified traffic from tourists and residents."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Qualified Leads",
          "text": "Use targeted SEO, Google Ads PPC, and social media marketing to reach Whistler customers and visitors actively searching for your services."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Scale With Confidence",
          "text": "Leverage performance insights, data analysis, and continuous optimization to support sustainable long-term business growth in Whistler."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler/#services",
      "name": "Digital Marketing Services in Whistler by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Whistler businesses including SEO, PPC, social media, web development, mobile apps, and graphic design.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services in Whistler", "description": "Improve search rankings and increase organic visibility through proven SEO strategies tailored for Whistler businesses and tourism." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising (PPC) in Whistler", "description": "Generate immediate traffic and qualified leads through Google Ads and Meta Ads targeting Whistler visitors and residents." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing in Whistler", "description": "Build brand awareness and strengthen customer relationships through strategic social media management for Whistler businesses." },
        { "@type": "ListItem", "position": 4, "name": "Website Development in Whistler", "description": "Create professional, responsive, and conversion-focused websites designed to support Whistler business growth." },
        { "@type": "ListItem", "position": 5, "name": "Mobile App Development in Whistler", "description": "Develop scalable mobile applications that improve customer engagement and operational efficiency." },
        { "@type": "ListItem", "position": 6, "name": "Graphic Design in Whistler", "description": "Build a memorable brand identity through professional design and visual communication." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-whistler",
      "name": "Digital Marketing Company in Whistler | Altiora Infotech",
      "description": "Top-rated Digital Marketing Company in Whistler. SEO, Google Ads, social media marketing and web development for Whistler businesses.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": { "@type": "Thing", "name": "Digital Marketing Services in Whistler" },
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Tourism Marketing" }
      ]
    }
  ]
};

export default function WhistlerMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whistlerSchema) }}
      />
      <WhistlerMarketingClientPage />
    </>
  );
}
