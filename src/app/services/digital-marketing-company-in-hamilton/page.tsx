import { Metadata } from 'next';
import HamiltonMarketingClientPage from './_components/HamiltonMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Hamilton | SEO, PPC, Web Design & Digital Growth | Altiora Infotech',
  description: 'Looking for a trusted Digital Marketing Company in Hamilton? Altiora Infotech provides SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions to help your business achieve measurable growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton",
  },
  openGraph: {
    title: "Digital Marketing Company in Hamilton | SEO, PPC, Web Design & Digital Growth | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Hamilton? Altiora Infotech provides SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions to help your business achieve measurable growth.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Hamilton" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Hamilton | SEO, PPC, Web Design & Digital Growth | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Hamilton? Altiora Infotech provides SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions to help your business achieve measurable growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const hamiltonSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Hamilton",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Hamilton with data-driven SEO, Google Ads, Local SEO, social media marketing, website design and development, content marketing, and AI-powered business solutions.",
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
        "latitude": 43.2557,
        "longitude": -79.8711
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
        { "@type": "City", "name": "Hamilton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Stoney Creek" },
        { "@type": "Place", "name": "Ancaster" },
        { "@type": "Place", "name": "Dundas" },
        { "@type": "Place", "name": "Waterdown" }
      ],
      "knowsAbout": ["Search Engine Optimization", "Local SEO", "Google Ads Management", "Meta Advertising", "Social Media Marketing", "Website Design & Development", "Content Marketing", "Email Marketing", "Conversion Rate Optimization", "Marketing Automation", "AI-Powered Business Solutions"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Hamilton" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#service",
      "name": "Digital Marketing Company in Hamilton",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton",
      "description": "Trusted digital marketing company in Hamilton providing data-driven SEO, Local SEO, Google Ads management, social media marketing, website design and development, content marketing, and AI marketing and automation.",
      "serviceType": "Digital Marketing, SEO, Local SEO, Google Ads Management, Social Media Marketing, Website Design & Development, Content Marketing, AI Marketing & Automation",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Hamilton" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Hamilton" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hamilton Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Marketing & Automation" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Hamilton", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#howto",
      "name": "Our Proven Growth Framework for Hamilton Businesses",
      "description": "The growth framework Altiora Infotech follows to deliver consistent digital marketing outcomes for Hamilton businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Business Discovery", "text": "We begin by understanding your goals, customers, competitors, and current marketing performance." },
        { "@type": "HowToStep", "position": 2, "name": "Strategic Planning", "text": "Our specialists create a customized marketing roadmap based on research, audience insights, and business objectives." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Implementation", "text": "We launch integrated SEO, PPC, content marketing, website optimization, and social media campaigns designed to generate measurable results." },
        { "@type": "HowToStep", "position": 4, "name": "Continuous Improvement", "text": "Marketing performance is monitored continuously, allowing us to optimize campaigns and maximize long-term growth." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A digital marketing company helps businesses attract customers through SEO, paid advertising, website optimization, social media marketing, content creation, and lead generation strategies." }
        },
        {
          "@type": "Question",
          "name": "Why hire a Digital Marketing Company in Hamilton?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company in Hamilton understands the local business environment and develops strategies that improve online visibility, generate qualified leads, and help businesses compete effectively within Hamilton and surrounding markets." }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO is a long-term investment. Most businesses begin seeing measurable improvements within three to six months, while competitive industries may require additional time for stronger rankings." }
        },
        {
          "@type": "Question",
          "name": "Which marketing channel provides the fastest results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Google Ads often delivers immediate traffic and leads, while SEO builds long-term organic visibility. Combining both typically produces the best overall results." }
        },
        {
          "@type": "Question",
          "name": "Do you work with small businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We partner with startups, local businesses, growing companies, and established enterprises to create scalable marketing strategies." }
        },
        {
          "@type": "Question",
          "name": "Can you redesign our website?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We build modern, responsive, SEO-optimized websites focused on user experience, performance, and lead generation." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#services",
      "name": "Core Digital Marketing Services in Hamilton by Altiora Infotech",
      "description": "Data-driven digital marketing services for Hamilton businesses including SEO, Local SEO, Google Ads management, social media marketing, website design and development, content marketing, and AI marketing and automation.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Search Engine Optimization (SEO)", "description": "Improve your website's visibility through technical SEO, on-page optimization, high-quality content, keyword strategy, and authority building." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO", "description": "Help nearby customers discover your business through Google Maps optimization, local citations, and Google Business Profile management." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads Management", "description": "Generate high-quality leads with targeted Pay-Per-Click campaigns that maximize advertising budgets and improve conversion rates." },
        { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "description": "Strengthen customer relationships and increase brand awareness through strategic social media campaigns and engaging content." },
        { "@type": "ListItem", "position": 5, "name": "Website Design & Development", "description": "Create fast, responsive, SEO-friendly websites designed to deliver exceptional user experiences and higher conversions." },
        { "@type": "ListItem", "position": 6, "name": "Content Marketing", "description": "Publish valuable content that educates customers, improves search visibility, and positions your business as an industry authority." },
        { "@type": "ListItem", "position": 7, "name": "AI Marketing & Automation", "description": "Leverage artificial intelligence to automate repetitive tasks, improve customer engagement, and increase operational efficiency." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#industries",
      "name": "Industries Served in Hamilton by Altiora Infotech",
      "description": "Industries Altiora Infotech supports with tailored digital marketing strategies across Hamilton.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 2, "name": "Healthcare" },
        { "@type": "ListItem", "position": 3, "name": "Construction" },
        { "@type": "ListItem", "position": 4, "name": "Professional Services" },
        { "@type": "ListItem", "position": 5, "name": "Real Estate" },
        { "@type": "ListItem", "position": 6, "name": "Education" },
        { "@type": "ListItem", "position": 7, "name": "Logistics & Transportation" },
        { "@type": "ListItem", "position": 8, "name": "Retail & eCommerce" },
        { "@type": "ListItem", "position": 9, "name": "Hospitality" },
        { "@type": "ListItem", "position": 10, "name": "Restaurants" },
        { "@type": "ListItem", "position": 11, "name": "Financial Services" },
        { "@type": "ListItem", "position": 12, "name": "Home Services" },
        { "@type": "ListItem", "position": 13, "name": "Technology Startups" },
        { "@type": "ListItem", "position": 14, "name": "Non-Profit Organizations" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton",
      "name": "Digital Marketing Company in Hamilton | SEO, PPC, Web Design & Digital Growth | Altiora Infotech",
      "description": "Looking for a trusted Digital Marketing Company in Hamilton? Altiora Infotech provides SEO, Google Ads, Local SEO, social media marketing, website development, AI-powered marketing, and lead generation solutions to help your business achieve measurable growth.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-hamilton/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Hamilton" },
        { "@type": "Thing", "name": "SEO in Hamilton" },
        { "@type": "Thing", "name": "AI Marketing & Automation" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Ads Management" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "Website Design & Development" },
        { "@type": "Thing", "name": "Content Marketing" },
        { "@type": "Thing", "name": "AI Marketing & Automation" },
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
        "geographicArea": { "@type": "City", "name": "Hamilton" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyHamiltonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hamiltonSchema) }}
      />
      <HamiltonMarketingClientPage />
    </>
  );
}
