import { Metadata } from 'next';
import OttawaMarketingClientPage from './_components/OttawaMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Ottawa | SEO, PPC & Web Development | Altiora Infotech',
  description: 'Looking for a trusted Digital Marketing Company in Ottawa? Altiora Infotech offers SEO, Google Ads, website development, social media marketing, AI automation, and lead generation solutions to help your business grow.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa",
  },
  openGraph: {
    title: "Digital Marketing Company in Ottawa | SEO, PPC & Web Development | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Ottawa? Altiora Infotech offers SEO, Google Ads, website development, social media marketing, AI automation, and lead generation solutions to help your business grow.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Ottawa" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Ottawa | SEO, PPC & Web Development | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Ottawa? Altiora Infotech offers SEO, Google Ads, website development, social media marketing, AI automation, and lead generation solutions to help your business grow.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const ottawaSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Ottawa",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Ottawa with data-driven SEO, paid advertising, conversion rate optimization, and brand strategy for local brands, tech startups, and established enterprises.",
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
        "latitude": 45.4215,
        "longitude": -75.6972
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
        { "@type": "City", "name": "Ottawa", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Kanata" },
        { "@type": "Place", "name": "ByWard Market" },
        { "@type": "Place", "name": "Downtown Ottawa" },
        { "@type": "Place", "name": "Nepean" },
        { "@type": "Place", "name": "Gloucester" }
      ],
      "knowsAbout": ["Local SEO", "Technical SEO", "Google Ads", "Meta Advertising", "Conversion Rate Optimization", "Brand Strategy", "UI/UX & Website Design", "Lead Generation"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Ottawa" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#service",
      "name": "Digital Marketing Company in Ottawa",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa",
      "description": "Trusted digital marketing company in Ottawa providing data-driven SEO, high-ROI performance marketing, conversion rate optimization, and brand strategy.",
      "serviceType": "Digital Marketing, SEO, PPC, Conversion Rate Optimization, Brand Strategy, Website Design",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Ottawa" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Ottawa" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ottawa Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data-Driven Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-ROI Performance Marketing & Paid Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization (CRO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Strategy & Visual Storytelling" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Ottawa", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to see results from digital marketing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Paid advertising campaigns can begin generating traffic and qualified leads within days of launching. Organic strategies like Search Engine Optimization and content marketing typically take 3 to 6 months to build momentum, but they deliver compounding, cost-effective returns over the long term." }
        },
        {
          "@type": "Question",
          "name": "Why should I hire an agency instead of managing marketing internally?",
          "acceptedAnswer": { "@type": "Answer", "text": "Building an internal team requires hiring specialized talent across multiple disciplines: copywriters, SEO strategists, media buyers, web designers, and data analysts. Partnering with an experienced digital agency gives you immediate access to a full team of specialists at a fraction of the cost of multiple full-time salaries." }
        },
        {
          "@type": "Question",
          "name": "How do you measure the success of a campaign?",
          "acceptedAnswer": { "@type": "Answer", "text": "We define success metrics alongside you before work begins. While we monitor standard engagement metrics, our focus remains on bottom-line business indicators: cost per conversion, pipeline growth, return on ad spend, and overall revenue contribution." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#services",
      "name": "Core Digital Marketing Services in Ottawa by Altiora Infotech",
      "description": "Data-driven digital marketing services for Ottawa businesses including SEO, paid advertising, conversion rate optimization, and brand strategy.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Data-Driven Search Engine Optimization (SEO)", "description": "Local SEO, Google Business Profile optimization, technical SEO audits, on-page and intent-based content, and authority building." },
        { "@type": "ListItem", "position": 2, "name": "High-ROI Performance Marketing & Paid Advertising", "description": "Google Search & Shopping Ads, targeted social advertising, retargeting funnels, and A/B testing and creative optimization." },
        { "@type": "ListItem", "position": 3, "name": "Conversion Rate Optimization (CRO)", "description": "User journey analysis, landing page engineering, and friction removal to turn traffic into leads." },
        { "@type": "ListItem", "position": 4, "name": "Brand Strategy & Visual Storytelling", "description": "Brand positioning and messaging, UI/UX and website design, and creative asset production." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#industries",
      "name": "Industries Served in Ottawa by Altiora Infotech",
      "description": "Key industries Altiora Infotech serves across Ottawa and Canada, each with a tailored digital marketing execution model.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Technology & B2B SaaS", "description": "Multi-channel lead generation, thought leadership, and content strategy delivering lower customer acquisition costs and higher pipeline velocity." },
        { "@type": "ListItem", "position": 2, "name": "Professional Services", "description": "Local SEO, Google Search Ads, and brand repositioning delivering qualified client inquiries and local market authority." },
        { "@type": "ListItem", "position": 3, "name": "E-Commerce & Retail", "description": "Shopping campaigns, funnel optimization, and remarketing delivering scalable online sales and improved customer lifetime value." },
        { "@type": "ListItem", "position": 4, "name": "Home & Commercial Services", "description": "High-intent local search and Google Business Profile management delivering higher conversion rates on incoming calls and quote requests." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa",
      "name": "Digital Marketing Company in Ottawa | SEO, PPC & Web Development | Altiora Infotech",
      "description": "Looking for a trusted Digital Marketing Company in Ottawa? Altiora Infotech offers SEO, Google Ads, website development, social media marketing, AI automation, and lead generation solutions to help your business grow.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Ottawa" },
        { "@type": "Thing", "name": "SEO in Ottawa" },
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
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Ottawa" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-markham",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyOttawaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ottawaSchema) }}
      />
      <OttawaMarketingClientPage />
    </>
  );
}
