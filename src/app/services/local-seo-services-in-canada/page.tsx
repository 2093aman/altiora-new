import { Metadata } from 'next';
import LocalSeoClientPage from './_components/LocalSeoClientPage';

export const metadata: Metadata = {
  title: 'Local SEO Services in Canada | Altiora Infotech',
  description: 'Professional Local SEO Services in Canada. Improve Google Maps visibility, optimize your Google Business Profile, build local citations, and attract qualified leads from nearby customers actively searching for your business.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/local-seo-services-in-canada",
  },
  openGraph: {
    title: "Local SEO Services in Canada | Altiora Infotech",
    description: "Professional Local SEO Services in Canada. Improve Google Maps visibility, optimize your Google Business Profile, build local citations, and attract qualified leads from nearby customers actively searching for your business.",
    url: "https://altiorainfotech.ca/services/local-seo-services-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Local SEO Services in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Canada | Altiora Infotech",
    description: "Professional Local SEO Services in Canada. Improve Google Maps visibility, optimize your Google Business Profile, build local citations, and attract qualified leads from nearby customers actively searching for your business.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const localSeoSchema = {
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
      "description": "Altiora Infotech is a Canadian Digital Marketing Company providing SEO, Google Ads, social media marketing, website development, video production, branding, and Answer Engine Optimization (AEO) to businesses across Canada. We specialize in real estate marketing, dental marketing, immigration consultant marketing, and local business growth.",
      "foundingDate": "2023",
      "email": "altiorainfotech@gmail.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "altiorainfotech@gmail.com",
          "url": "https://altiorainfotech.ca/contact",
          "availableLanguage": ["English"],
          "areaServed": "CA"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "altiorainfotech@gmail.com",
          "url": "https://altiorainfotech.ca/contact",
          "availableLanguage": ["English"]
        }
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
        { "@type": "City", "name": "Toronto" },
        { "@type": "City", "name": "Mississauga" },
        { "@type": "City", "name": "Brampton" },
        { "@type": "City", "name": "Ottawa" },
        { "@type": "City", "name": "Vancouver" },
        { "@type": "City", "name": "Surrey" },
        { "@type": "City", "name": "Burnaby" },
        { "@type": "City", "name": "Richmond" },
        { "@type": "City", "name": "Kelowna" },
        { "@type": "City", "name": "Calgary" },
        { "@type": "City", "name": "Edmonton" }
      ],
      "serviceArea": { "@type": "Country", "name": "Canada" },
      "knowsAbout": [
        "Search Engine Optimization",
        "Local SEO",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization",
        "Google Ads",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Website Development",
        "Mobile App Development",
        "Video Production",
        "Branding",
        "Graphic Design",
        "Real Estate Marketing",
        "Real Estate Lead Generation",
        "Dental Marketing",
        "Immigration Consultant Marketing",
        "Lead Generation",
        "Digital Marketing Strategy",
        "ChatGPT Optimization",
        "Google AI Overviews Optimization",
        "Perplexity Optimization",
        "Gemini Optimization",
        "Bing Copilot Optimization"
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production", "url": "https://altiorainfotech.ca/services/video-production" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Marketing Agency in Canada", "url": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dental Marketing Services in Canada", "url": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing for Immigration Consultants in Canada", "url": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://altiorainfotech.ca/#website",
      "url": "https://altiorainfotech.ca",
      "name": "Altiora Infotech",
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, and industry-specific marketing services.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/local-seo-services-in-canada/#business",
      "name": "Altiora Infotech | Local SEO Services in Canada",
      "url": "https://altiorainfotech.ca/services/local-seo-services-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian businesses improve local search visibility, optimize Google Business Profiles, build citations, and generate qualified leads through professional local SEO strategies.",
      "priceRange": "$$$",
      "currenciesAccepted": "CAD",
      "paymentAccepted": "Credit Card, Debit Card, Bank Transfer, E-Transfer",
      "email": "altiorainfotech@gmail.com",
      "foundingDate": "2023",
      "parentOrganization": { "@id": "https://altiorainfotech.ca/#organization" },
      "sameAs": [
        "https://altiorainfotech.ca",
        "https://www.instagram.com/altiorainfotech.ca",
        "https://www.linkedin.com/company/altiora-infotech",
        "https://altiorainfotech.com"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://altiorainfotech.ca/contact",
        "email": "altiorainfotech@gmail.com",
        "availableLanguage": ["English"]
      },
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "AdministrativeArea", "name": "Ontario" },
        { "@type": "AdministrativeArea", "name": "British Columbia" },
        { "@type": "AdministrativeArea", "name": "Alberta" },
        { "@type": "City", "name": "Toronto" },
        { "@type": "City", "name": "Mississauga" },
        { "@type": "City", "name": "Brampton" },
        { "@type": "City", "name": "Ottawa" },
        { "@type": "City", "name": "Vancouver" },
        { "@type": "City", "name": "Surrey" },
        { "@type": "City", "name": "Burnaby" },
        { "@type": "City", "name": "Kelowna" },
        { "@type": "City", "name": "Calgary" },
        { "@type": "City", "name": "Edmonton" }
      ],
      "serviceArea": { "@type": "Country", "name": "Canada" },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "knowsAbout": [
        "Local SEO",
        "Google Business Profile Optimization",
        "Google Maps Optimization",
        "Local Keyword Research",
        "Location Page Optimization",
        "Citation Building",
        "NAP Consistency",
        "Local Content Marketing",
        "Multi-Location SEO",
        "Local Search Ranking",
        "Reputation Management",
        "Answer Engine Optimization",
        "AI Search Optimization for Local Business"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Local Businesses, Service Businesses, Multi-Location Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/local-seo-services-in-canada/#service",
      "name": "Local SEO Services in Canada",
      "url": "https://altiorainfotech.ca/services/local-seo-services-in-canada",
      "description": "Professional local SEO services for Canadian businesses including local SEO audits, Google Business Profile optimization, local keyword research, location page optimization, citation building, and local content marketing.",
      "serviceType": "Local SEO, Google Business Profile Optimization, Local Keyword Research, Location Page Optimization, Citation Building, Local Content Marketing",
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "City", "name": "Toronto" },
        { "@type": "City", "name": "Vancouver" },
        { "@type": "City", "name": "Calgary" },
        { "@type": "City", "name": "Edmonton" },
        { "@type": "City", "name": "Mississauga" },
        { "@type": "City", "name": "Brampton" }
      ],
      "serviceArea": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Local Businesses, Service Businesses, Multi-Location Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Local SEO Services We Provide",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Audit", "description": "Identify issues and opportunities affecting your local visibility, including Google Business Profile analysis, local ranking assessment, citation review, competitor analysis, and technical SEO evaluation." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Optimization", "description": "Optimize business information, categories, service descriptions, photos, posts, reviews, and local relevance signals to improve visibility in Google Maps and local search." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Keyword Research", "description": "Identify service plus city keywords, industry plus location searches, near me searches, and local intent phrases that attract highly relevant traffic." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Location Page Optimization", "description": "Optimize city pages, service area pages, regional landing pages, and local content to improve rankings across multiple markets." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Citation Building and Management", "description": "Manage business listings, local citations, directory profiles, and NAP consistency to strengthen local trust signals." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Content Marketing", "description": "Local blogs, area-specific service pages, community-focused content, local guides, and FAQ resources that build local authority." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Local SEO Services in Canada", "item": "https://altiorainfotech.ca/services/local-seo-services-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are Local SEO Services in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Local SEO Services in Canada help businesses improve visibility in Google Maps and local search results to attract more customers." } },
        { "@type": "Question", "name": "Why is local SEO important?", "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps businesses reach nearby customers who are actively searching for their products or services." } },
        { "@type": "Question", "name": "How long does local SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Results vary based on competition and market conditions, but improvements often become visible within a few months." } },
        { "@type": "Question", "name": "Does Google Business Profile impact local rankings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. An optimized Google Business Profile is one of the most important local ranking factors." } },
        { "@type": "Question", "name": "Can local SEO generate leads?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Local SEO attracts high-intent users who are often ready to contact businesses." } },
        { "@type": "Question", "name": "How much do Local SEO Services in Canada cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on business size, competition level, and service requirements." } },
        { "@type": "Question", "name": "Is local SEO useful for service businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Local SEO is highly effective for law firms, healthcare providers, consultants, real estate companies, contractors, and many other service-based businesses." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/local-seo-services-in-canada/#howto",
      "name": "Our Local SEO Process in Canada",
      "description": "A proven 4-step local SEO process that helps Canadian businesses improve local visibility and generate qualified leads.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discovery & Audit", "text": "Evaluate your business, market, competitors, and local opportunities, then audit your website, Google Business Profile, and citations to identify technical issues and ranking challenges." },
        { "@type": "HowToStep", "position": 2, "name": "Strategy Development", "text": "Develop a customized local SEO roadmap aligned with your goals, target markets, and competitive landscape." },
        { "@type": "HowToStep", "position": 3, "name": "Optimization Implementation", "text": "Execute improvements across your website, Google Business Profile, and citations to strengthen local rankings." },
        { "@type": "HowToStep", "position": 4, "name": "Authority Building & Reporting", "text": "Strengthen local trust signals through content, citations, and reputation support, then track rankings, traffic, and leads while refining strategies over time." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/local-seo-services-in-canada/#services",
      "name": "Local SEO Services We Provide in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Local SEO Audit", "description": "Identifies issues and opportunities affecting your local visibility across your Google Business Profile, citations, and website." },
        { "@type": "ListItem", "position": 2, "name": "Google Business Profile Optimization", "description": "Optimizes one of the most important local SEO assets to improve visibility in Google Maps and local search results." },
        { "@type": "ListItem", "position": 3, "name": "Local Keyword Research", "description": "Identifies the keywords customers use when searching for businesses like yours to attract highly relevant traffic." },
        { "@type": "ListItem", "position": 4, "name": "Location Page Optimization", "description": "Optimizes city pages, service area pages, and regional landing pages to improve rankings across multiple markets." },
        { "@type": "ListItem", "position": 5, "name": "Citation Building and Management", "description": "Maintains business listings, local citations, directory profiles, and NAP consistency to strengthen local trust signals." },
        { "@type": "ListItem", "position": 6, "name": "Local Content Marketing", "description": "Creates local blogs, area-specific service pages, community content, and local guides to build local authority." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/local-seo-services-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/local-seo-services-in-canada",
      "name": "Local SEO Services in Canada | Altiora Infotech",
      "description": "Professional Local SEO Services in Canada. Improve Google Maps visibility, optimize your Google Business Profile, build local citations, and attract qualified leads from nearby customers actively searching for your business.",
      "datePublished": "2026-06-25",
      "dateModified": "2026-06-25",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/local-seo-services-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Local SEO Services in Canada" },
        { "@type": "Thing", "name": "Google Business Profile Optimization" },
        { "@type": "Thing", "name": "Google Maps Optimization" },
        { "@type": "Thing", "name": "Local Search Visibility" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Citation Building" },
        { "@type": "Thing", "name": "Local Keyword Research" },
        { "@type": "Thing", "name": "Multi-Location SEO" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" },
        { "@type": "Thing", "name": "Google AI Overviews" }
      ]
    }
  ]
};

export default function LocalSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoSchema) }}
      />
      <LocalSeoClientPage />
    </>
  );
}
