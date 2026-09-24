import { Metadata } from 'next';
import WinnipegMarketingClientPage from './_components/WinnipegMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Winnipeg | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech',
  description: 'Partner with a trusted Digital Marketing Company in Winnipeg. Altiora Infotech offers SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions designed to help your business grow.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg",
  },
  openGraph: {
    title: "Digital Marketing Company in Winnipeg | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech",
    description: "Partner with a trusted Digital Marketing Company in Winnipeg. Altiora Infotech offers SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions designed to help your business grow.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Winnipeg" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Winnipeg | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech",
    description: "Partner with a trusted Digital Marketing Company in Winnipeg. Altiora Infotech offers SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions designed to help your business grow.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const winnipegSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://altiorainfotech.ca/#organization",
      "name": "Altiora Infotech",
      "alternateName": "Altiora Digital Marketing",
      "url": "https://altiorainfotech.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
        "contentUrl": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
        "width": 400,
        "height": 400
      },
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Altiora Infotech is a Canadian Digital Marketing Company providing SEO, Google Ads, social media marketing, website development, video production, branding, and Answer Engine Optimization (AEO) to businesses across Canada, including Ottawa, Toronto, Vancouver, Montreal, Calgary, and Halifax.",
      "foundingDate": "2023",
      "email": "altiorainfotech@gmail.com",
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "customer service", "email": "altiorainfotech@gmail.com", "url": "https://altiorainfotech.ca/contact", "availableLanguage": ["English"], "areaServed": "CA" },
        { "@type": "ContactPoint", "contactType": "sales", "email": "altiorainfotech@gmail.com", "url": "https://altiorainfotech.ca/contact", "availableLanguage": ["English"] }
      ],
      "sameAs": [
        "https://www.instagram.com/altiorainfotech.ca",
        "https://www.linkedin.com/company/altiora-infotech",
        "https://altiorainfotech.com"
      ],
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "AdministrativeArea", "name": "Ontario" },
        { "@type": "AdministrativeArea", "name": "British Columbia" },
        { "@type": "AdministrativeArea", "name": "Alberta" },
        { "@type": "AdministrativeArea", "name": "Quebec" },
        { "@type": "AdministrativeArea", "name": "Manitoba" },
        { "@type": "AdministrativeArea", "name": "Nova Scotia" },
        { "@type": "City", "name": "Ottawa" },
        { "@type": "City", "name": "Toronto" },
        { "@type": "City", "name": "Oakville" },
        { "@type": "City", "name": "Markham" },
        { "@type": "City", "name": "Hamilton" },
        { "@type": "City", "name": "Montreal" },
        { "@type": "City", "name": "Winnipeg" },
        { "@type": "City", "name": "Vancouver" },
        { "@type": "City", "name": "Victoria" },
        { "@type": "City", "name": "Calgary" },
        { "@type": "City", "name": "Halifax" }
      ],
      "serviceArea": { "@type": "Country", "name": "Canada" },
      "knowsAbout": [
        "Search Engine Optimization", "Local SEO", "Technical SEO", "Answer Engine Optimization", "Generative Engine Optimization", "AI Search Optimization", "Google Ads", "Pay-Per-Click Advertising", "Meta Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Conversion Rate Optimization", "Brand Strategy", "Website Development", "UI/UX Design", "Mobile App Development", "Video Production", "Graphic Design", "Marketing Automation", "Lead Generation", "Digital Marketing Strategy", "ChatGPT Optimization", "Google AI Overviews Optimization", "Perplexity Optimization", "Gemini Optimization", "Bing Copilot Optimization"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services by Altiora Infotech",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services", "url": "https://altiorainfotech.ca/services/seo" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising (PPC)", "url": "https://altiorainfotech.ca/services/paid-advertisement-services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management", "url": "https://altiorainfotech.ca/services/social-media-management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "url": "https://altiorainfotech.ca/services/website-development-services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO & GEO", "url": "https://altiorainfotech.ca/services/aeo-geo" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO", "url": "https://altiorainfotech.ca/services/local-seo-services-in-canada" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://altiorainfotech.ca/#website",
      "url": "https://altiorainfotech.ca",
      "name": "Altiora Infotech",
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, and location-specific marketing services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Winnipeg",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Winnipeg with intent-driven SEO, high-ROI performance marketing and paid advertising, conversion rate optimization, and brand strategy for local businesses, startups, and established enterprises.",
      "priceRange": "$$$",
      "currenciesAccepted": "CAD",
      "paymentAccepted": "Credit Card, Debit Card, Bank Transfer, E-Transfer",
      "email": "altiorainfotech@gmail.com",
      "foundingDate": "2023",
      "parentOrganization": { "@id": "https://altiorainfotech.ca/#organization" },
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
        "latitude": 49.8951,
        "longitude": -97.1384
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
        { "@type": "City", "name": "Winnipeg", "containedInPlace": { "@type": "AdministrativeArea", "name": "Manitoba" } },
        { "@type": "Place", "name": "CentrePort" },
        { "@type": "Place", "name": "Innovation Alley" },
        { "@type": "Place", "name": "Exchange District" },
        { "@type": "Place", "name": "St. Vital" },
        { "@type": "Place", "name": "Transcona" }
      ],
      "knowsAbout": ["Local SEO", "Technical SEO", "Google Ads", "Meta Advertising", "Conversion Rate Optimization", "Brand Strategy", "UI/UX & Website Design", "Lead Generation"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Winnipeg" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#service",
      "name": "Digital Marketing Company in Winnipeg",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg",
      "description": "Trusted digital marketing company in Winnipeg providing intent-driven SEO, high-ROI performance marketing, conversion rate optimization, and brand strategy.",
      "serviceType": "Digital Marketing, SEO, PPC, Conversion Rate Optimization, Brand Strategy, Website Design",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Winnipeg" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Winnipeg" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Winnipeg Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intent-Driven Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-ROI Performance Marketing & Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization (CRO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Strategy & Visual Identity" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Winnipeg", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to see results from a digital marketing strategy?",
          "acceptedAnswer": { "@type": "Answer", "text": "Paid advertising campaigns on search and social platforms can generate qualified traffic and client inquiries within days of launch. Organic search engine optimization and content frameworks typically require 3 to 6 months to establish strong momentum, providing long-term compounding value that reduces dependence on paid channels over time." }
        },
        {
          "@type": "Question",
          "name": "Why choose an agency partner over managing digital marketing internally?",
          "acceptedAnswer": { "@type": "Answer", "text": "Constructing an internal team requires recruiting specialized talent across multiple distinct areas: search strategists, media buyers, copywriters, developers, and analytics leads. Partnering with an experienced digital agency grants immediate access to a full team of senior specialists at a predictable, manageable operational cost." }
        },
        {
          "@type": "Question",
          "name": "How is campaign performance tracked and evaluated?",
          "acceptedAnswer": { "@type": "Answer", "text": "Key performance indicators are established collaboratively before campaign rollout. While operational metrics like click rates and engagement are monitored continuously, primary evaluation centers on business outcomes: qualified lead volume, cost per acquisition, pipeline generation, and overall campaign return on investment." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#services",
      "name": "Core Digital Marketing Services in Winnipeg by Altiora Infotech",
      "description": "Digital marketing services for Winnipeg businesses including intent-driven SEO, high-ROI performance marketing and paid advertising, conversion rate optimization, and brand strategy.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Intent-Driven Search Engine Optimization (SEO)", "description": "Local SEO & Google Business Profile management, technical SEO audits, on-page and search-intent content, and high-quality link acquisition." },
        { "@type": "ListItem", "position": 2, "name": "High-ROI Performance Marketing & Paid Advertising", "description": "Google Search & Shopping Ads, targeted social advertising, retargeting funnels, and A/B testing and creative optimization." },
        { "@type": "ListItem", "position": 3, "name": "Conversion Rate Optimization (CRO)", "description": "User journey analysis, landing page architecture, and friction elimination to turn traffic into leads." },
        { "@type": "ListItem", "position": 4, "name": "Brand Strategy & Visual Identity", "description": "Brand positioning and value messaging, UI/UX and web development, and visual media assets." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#industries",
      "name": "Industries Served in Winnipeg by Altiora Infotech",
      "description": "Key industries Altiora Infotech serves across Winnipeg and Manitoba, each with a tailored digital marketing execution model.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Manufacturing & B2B Enterprises", "description": "Search visibility, lead generation, and technical content strategy delivering steady pipeline growth and lower customer acquisition costs." },
        { "@type": "ListItem", "position": 2, "name": "Professional & Financial Services", "description": "Local SEO, search engine advertising, and brand trust building delivering qualified client inquiries and strong regional authority." },
        { "@type": "ListItem", "position": 3, "name": "E-Commerce & Retail", "description": "Shopping campaigns, funnel optimization, and user remarketing delivering increased conversion rates and improved customer lifetime value." },
        { "@type": "ListItem", "position": 4, "name": "Trade & Commercial Services", "description": "High-intent local search and Google Business optimization delivering higher call-to-lead conversion rates across service coverage areas." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg",
      "name": "Digital Marketing Company in Winnipeg | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech",
      "description": "Partner with a trusted Digital Marketing Company in Winnipeg. Altiora Infotech offers SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions designed to help your business grow.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-winnipeg/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Winnipeg" },
        { "@type": "Thing", "name": "SEO in Winnipeg" },
        { "@type": "Thing", "name": "Conversion Rate Optimization" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Conversion Rate Optimization" },
        { "@type": "Thing", "name": "Brand Strategy" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Winnipeg" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-Calgary",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-edmonton",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyWinnipegPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(winnipegSchema) }}
      />
      <WinnipegMarketingClientPage />
    </>
  );
}
