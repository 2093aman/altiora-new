import { Metadata } from 'next';
import MarkhamMarketingClientPage from './_components/MarkhamMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Markham | SEO, Google Ads, Local SEO & Website Development | Altiora Infotech',
  description: 'Partner with a trusted Digital Marketing Company in Markham. Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions that help businesses grow faster.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-markham",
  },
  openGraph: {
    title: "Digital Marketing Company in Markham | SEO, Google Ads, Local SEO & Website Development | Altiora Infotech",
    description: "Partner with a trusted Digital Marketing Company in Markham. Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions that help businesses grow faster.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-markham",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Markham" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Markham | SEO, Google Ads, Local SEO & Website Development | Altiora Infotech",
    description: "Partner with a trusted Digital Marketing Company in Markham. Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions that help businesses grow faster.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const markhamSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Markham",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Markham with intent-driven SEO, high-performance paid media, conversion rate optimization, and brand positioning for technology, professional services, retail, and home service businesses.",
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
        "latitude": 43.8561,
        "longitude": -79.3370
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
        { "@type": "City", "name": "Markham", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Richmond Hill" },
        { "@type": "Place", "name": "Historic Unionville" },
        { "@type": "Place", "name": "Downtown Markham" },
        { "@type": "Place", "name": "York Region" }
      ],
      "knowsAbout": ["Local SEO", "Technical SEO", "Google Ads", "Meta Advertising", "Conversion Rate Optimization", "Brand Positioning", "UI/UX & Web Development", "Lead Generation"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Markham" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#service",
      "name": "Digital Marketing Company in Markham",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham",
      "description": "Trusted digital marketing company in Markham providing intent-driven SEO, high-performance paid media and advertising, conversion rate optimization, and brand positioning.",
      "serviceType": "Digital Marketing, SEO, Paid Media, Conversion Rate Optimization, Brand Positioning, Website Development",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Markham" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Markham" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Markham Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intent-Driven Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Performance Paid Media & Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization (CRO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Positioning & Digital Identity" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Markham", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can a digital marketing strategy deliver results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Paid advertising campaigns on search and social channels can begin driving qualified visitors and leads within days of launch. Organic search optimization and content strategies typically require 3 to 6 months to build strong momentum, but they deliver long-term, compounding returns that lower your reliance on paid media over time." }
        },
        {
          "@type": "Question",
          "name": "Why partner with an agency instead of managing marketing in-house?",
          "acceptedAnswer": { "@type": "Answer", "text": "Building a full in-house team requires hiring dedicated specialists across search strategy, media buying, copy design, technical web development, and data analysis. Working with an experienced agency gives you immediate access to a full team of senior practitioners at a lower overall operational cost." }
        },
        {
          "@type": "Question",
          "name": "How do you measure and report campaign success?",
          "acceptedAnswer": { "@type": "Answer", "text": "We set clear performance indicators with you before launch. While we monitor standard traffic and engagement metrics internally, our primary focus remains on key business results: cost per acquisition, pipeline growth, total qualified leads, and overall campaign return on investment." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#services",
      "name": "Core Digital Services in Markham by Altiora Infotech",
      "description": "Digital services engineered for sustainable growth in Markham including SEO, paid media, conversion rate optimization, and brand positioning.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Intent-Driven Search Engine Optimization (SEO)", "description": "Local SEO & Google Business Profile management, technical SEO audits, on-page and intent-matched content, and high-quality link building." },
        { "@type": "ListItem", "position": 2, "name": "High-Performance Paid Media & Advertising", "description": "Google Search & Shopping Ads, targeted social media campaigns, smart retargeting funnels, and creative testing and conversion optimization." },
        { "@type": "ListItem", "position": 3, "name": "Conversion Rate Optimization (CRO)", "description": "User behavior and funnel analysis, landing page architecture, and friction elimination to turn traffic into leads." },
        { "@type": "ListItem", "position": 4, "name": "Brand Positioning & Digital Identity", "description": "Brand strategy and value proposition, UI/UX and web development, and visual and content assets." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#industries",
      "name": "Industries Served in Markham by Altiora Infotech",
      "description": "Key sectors Altiora Infotech serves across Markham and York Region, each with a tailored digital marketing execution model.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Technology & B2B Enterprises", "description": "Multi-channel lead generation, search visibility, and funnel design delivering consistent pipeline build and reduced acquisition costs." },
        { "@type": "ListItem", "position": 2, "name": "Professional & Legal Services", "description": "Local SEO, targeted search ads, and brand positioning delivering qualified client inquiries and local domain authority." },
        { "@type": "ListItem", "position": 3, "name": "E-Commerce & Commercial Retail", "description": "Shopping campaigns, retargeting, and conversion optimization delivering scalable sales velocity and improved customer lifetime value." },
        { "@type": "ListItem", "position": 4, "name": "Home & Commercial Services", "description": "High-intent local search and Google Business optimization delivering higher call-to-lead conversion rates across service areas." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham",
      "name": "Digital Marketing Company in Markham | SEO, Google Ads, Local SEO & Website Development | Altiora Infotech",
      "description": "Partner with a trusted Digital Marketing Company in Markham. Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions that help businesses grow faster.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-markham/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Markham" },
        { "@type": "Thing", "name": "SEO in Markham" },
        { "@type": "Thing", "name": "Conversion Rate Optimization" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Paid Media Advertising" },
        { "@type": "Thing", "name": "Conversion Rate Optimization" },
        { "@type": "Thing", "name": "Brand Positioning" },
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
        "geographicArea": { "@type": "City", "name": "Markham" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyMarkhamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(markhamSchema) }}
      />
      <MarkhamMarketingClientPage />
    </>
  );
}
