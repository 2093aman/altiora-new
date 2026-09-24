import { Metadata } from 'next';
import HalifaxMarketingClientPage from './_components/HalifaxMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Halifax | SEO, Google Ads, Website Development & Lead Generation | Altiora Infotech',
  description: 'Looking for a trusted Digital Marketing Company in Halifax? Altiora Infotech delivers SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions to help businesses achieve measurable growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax",
  },
  openGraph: {
    title: "Digital Marketing Company in Halifax | SEO, Google Ads, Website Development & Lead Generation | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Halifax? Altiora Infotech delivers SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions to help businesses achieve measurable growth.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Halifax" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Halifax | SEO, Google Ads, Website Development & Lead Generation | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Halifax? Altiora Infotech delivers SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions to help businesses achieve measurable growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const halifaxSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Halifax",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Halifax with SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions for startups, small businesses, and established enterprises.",
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
        "latitude": 44.6488,
        "longitude": -63.5752
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
        { "@type": "City", "name": "Halifax", "containedInPlace": { "@type": "AdministrativeArea", "name": "Nova Scotia" } },
        { "@type": "Place", "name": "Dartmouth" },
        { "@type": "Place", "name": "Bedford" },
        { "@type": "Place", "name": "Downtown Halifax" },
        { "@type": "Place", "name": "Halifax Regional Municipality" }
      ],
      "knowsAbout": ["Search Engine Optimization", "Local SEO", "Google Ads Management", "Meta Ads Campaigns", "Social Media Marketing", "Website Design & Development", "Content Marketing", "Conversion Rate Optimization", "Email Marketing", "AI Marketing Automation", "Marketing Analytics & Performance Reporting"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Halifax" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#service",
      "name": "Digital Marketing Company in Halifax",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax",
      "description": "Trusted Digital Marketing Company in Halifax delivering SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions.",
      "serviceType": "Digital Marketing, SEO, Local SEO, Google Ads Management, Social Media Marketing, Website Design & Development, Content Marketing, AI Marketing & Automation",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Halifax" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Halifax" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Halifax Digital Marketing Services",
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Halifax", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#howto",
      "name": "Our Growth Framework for Halifax Businesses",
      "description": "The growth framework Altiora Infotech follows to deliver consistent digital marketing outcomes for Halifax businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Business Discovery", "text": "We begin by understanding your business goals, competitors, target audience, and current digital performance." },
        { "@type": "HowToStep", "position": 2, "name": "Strategic Planning", "text": "Our specialists develop a personalized marketing strategy using market research, keyword analysis, and customer insights." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Execution", "text": "We implement SEO, Google Ads, social media marketing, content creation, website optimization, and lead generation campaigns across multiple channels." },
        { "@type": "HowToStep", "position": 4, "name": "Continuous Optimization", "text": "Digital marketing evolves constantly. We analyze campaign performance and continuously optimize strategies to improve traffic, conversions, and overall ROI." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A digital marketing company helps businesses improve online visibility, attract qualified customers, increase website traffic, and generate revenue through SEO, paid advertising, content marketing, website optimization, and social media management." }
        },
        {
          "@type": "Question",
          "name": "Why hire a Digital Marketing Company in Halifax?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company in Halifax understands the local business landscape and develops customized strategies that help businesses connect with customers, improve search visibility, and achieve sustainable business growth." }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO is a long-term strategy. Most businesses begin seeing measurable improvements within three to six months, depending on competition, website authority, and content quality." }
        },
        {
          "@type": "Question",
          "name": "Is Local SEO important for Halifax businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Local SEO helps businesses appear in Google Maps and location-based search results, making it easier for nearby customers to discover your products or services." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help small businesses compete?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Digital marketing allows small businesses to target highly relevant audiences, compete effectively with larger companies, and generate measurable results within controlled budgets." }
        },
        {
          "@type": "Question",
          "name": "Do you provide custom marketing strategies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every marketing strategy is developed specifically for your business goals, industry, competitors, and target audience to maximize long-term success." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#services",
      "name": "Core Digital Marketing Services in Halifax by Altiora Infotech",
      "description": "Digital marketing services for Halifax businesses including SEO, Local SEO, Google Ads management, social media marketing, website design and development, content marketing, and AI marketing and automation.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Search Engine Optimization (SEO)", "description": "Improve your organic rankings through technical SEO, keyword research, on-page optimization, high-quality content, and authority-building strategies." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO", "description": "Increase your visibility in Google Maps and location-based searches so customers in Halifax can easily discover your business." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads Management", "description": "Reach high-intent customers through targeted Pay-Per-Click campaigns designed to maximize conversions while optimizing advertising spend." },
        { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "description": "Build stronger relationships with your audience through engaging content, community management, and strategic advertising across major social platforms." },
        { "@type": "ListItem", "position": 5, "name": "Website Design & Development", "description": "Create responsive, fast-loading, SEO-friendly websites that enhance user experience and convert visitors into customers." },
        { "@type": "ListItem", "position": 6, "name": "Content Marketing", "description": "Publish valuable content that educates your audience, strengthens your authority, and supports long-term organic growth." },
        { "@type": "ListItem", "position": 7, "name": "AI Marketing & Automation", "description": "Use intelligent automation to streamline repetitive tasks, improve customer engagement, and create more efficient marketing workflows." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#industries",
      "name": "Industries Served in Halifax by Altiora Infotech",
      "description": "Industries Altiora Infotech supports with tailored digital marketing strategies across Halifax.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Healthcare" },
        { "@type": "ListItem", "position": 2, "name": "Education" },
        { "@type": "ListItem", "position": 3, "name": "Technology & SaaS" },
        { "@type": "ListItem", "position": 4, "name": "Tourism & Hospitality" },
        { "@type": "ListItem", "position": 5, "name": "Financial Services" },
        { "@type": "ListItem", "position": 6, "name": "Professional Services" },
        { "@type": "ListItem", "position": 7, "name": "Real Estate" },
        { "@type": "ListItem", "position": 8, "name": "Retail & eCommerce" },
        { "@type": "ListItem", "position": 9, "name": "Construction" },
        { "@type": "ListItem", "position": 10, "name": "Logistics & Transportation" },
        { "@type": "ListItem", "position": 11, "name": "Marine & Shipping" },
        { "@type": "ListItem", "position": 12, "name": "Restaurants & Cafés" },
        { "@type": "ListItem", "position": 13, "name": "Home Services" },
        { "@type": "ListItem", "position": 14, "name": "Non-Profit Organizations" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax",
      "name": "Digital Marketing Company in Halifax | SEO, Google Ads, Website Development & Lead Generation | Altiora Infotech",
      "description": "Looking for a trusted Digital Marketing Company in Halifax? Altiora Infotech delivers SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation solutions to help businesses achieve measurable growth.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-halifax/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Halifax" },
        { "@type": "Thing", "name": "SEO in Halifax" },
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
        "geographicArea": { "@type": "City", "name": "Halifax" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-ottawa",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyHalifaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(halifaxSchema) }}
      />
      <HalifaxMarketingClientPage />
    </>
  );
}
