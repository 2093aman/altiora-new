import { Metadata } from 'next';
import VictoriaMarketingClientPage from './_components/VictoriaMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Victoria | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech',
  description: 'Looking for a trusted Digital Marketing Company in Victoria? Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation strategies to help your business grow.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria",
  },
  openGraph: {
    title: "Digital Marketing Company in Victoria | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Victoria? Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation strategies to help your business grow.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Victoria" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Victoria | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech",
    description: "Looking for a trusted Digital Marketing Company in Victoria? Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation strategies to help your business grow.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const victoriaSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Victoria",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Victoria with customized SEO, Google Ads, Meta Ads, website development, Local SEO, content marketing, AI-powered automation, and performance marketing strategies for startups, local businesses, and established enterprises.",
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
        "latitude": 48.4284,
        "longitude": -123.3656
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
        { "@type": "City", "name": "Victoria", "containedInPlace": { "@type": "AdministrativeArea", "name": "British Columbia" } },
        { "@type": "Place", "name": "Downtown Victoria" },
        { "@type": "Place", "name": "Oak Bay" },
        { "@type": "Place", "name": "Saanich" },
        { "@type": "Place", "name": "Esquimalt" },
        { "@type": "Place", "name": "View Royal" }
      ],
      "knowsAbout": ["Search Engine Optimization", "Local SEO", "Google Ads Management", "Meta Ads Campaigns", "Social Media Marketing", "Website Design & Development", "Content Marketing", "Conversion Rate Optimization", "Email Marketing", "AI Marketing Automation", "Marketing Analytics & Reporting"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Victoria" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#service",
      "name": "Digital Marketing Company in Victoria",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria",
      "description": "Trusted digital marketing company in Victoria helping businesses achieve sustainable growth through innovative, data-driven marketing solutions.",
      "serviceType": "Digital Marketing, SEO, Local SEO, Google Ads Management, Meta Ads Campaigns, Social Media Marketing, Website Design & Development, Content Marketing, AI Marketing Automation",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Victoria" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Victoria" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Victoria Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization (CRO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Marketing Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Analytics & Reporting" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Victoria", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#howto",
      "name": "Our Growth Process for Victoria Businesses",
      "description": "The growth process Altiora Infotech follows to deliver measurable digital marketing outcomes for Victoria businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Business Discovery", "text": "We begin by understanding your goals, customers, competitors, and current digital performance." },
        { "@type": "HowToStep", "position": 2, "name": "Strategic Planning", "text": "Our specialists create a personalized marketing roadmap based on research, audience insights, and measurable business objectives." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Implementation", "text": "We execute integrated SEO, Google Ads, social media marketing, website optimization, and content marketing campaigns." },
        { "@type": "HowToStep", "position": 4, "name": "Performance Optimization", "text": "Using real-time analytics, we continuously improve campaign performance to maximize traffic, leads, and conversions." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A digital marketing company helps businesses increase online visibility, generate qualified leads, improve customer engagement, and grow revenue through SEO, paid advertising, website optimization, content marketing, and social media strategies." }
        },
        {
          "@type": "Question",
          "name": "Why hire a Digital Marketing Company in Victoria?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company in Victoria understands the local business environment and customer behavior, enabling businesses to reach the right audience through personalized digital marketing campaigns that deliver measurable growth." }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO is a long-term investment. Most businesses begin seeing measurable improvements within three to six months, while highly competitive industries may require additional optimization over time." }
        },
        {
          "@type": "Question",
          "name": "Is Local SEO important?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Local SEO helps businesses appear in Google Maps and location-based searches, making it easier for nearby customers to discover and contact your business." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help small businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Digital marketing enables small businesses to compete with larger brands by reaching highly targeted audiences through cost-effective online strategies." }
        },
        {
          "@type": "Question",
          "name": "Do you offer website redesign services?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design responsive, SEO-friendly websites focused on improving user experience, increasing conversions, and supporting long-term business growth." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#services",
      "name": "Core Digital Marketing Services in Victoria by Altiora Infotech",
      "description": "Digital marketing services for Victoria businesses including SEO, Local SEO, Google Ads Management, Social Media Marketing, Website Design & Development, Content Marketing, and AI Marketing & Automation.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Search Engine Optimization (SEO)", "description": "Improve your search engine rankings with technical SEO, content optimization, keyword research, and authority-building strategies." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO", "description": "Increase visibility in Google Maps and local search results so nearby customers can easily find your business." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads Management", "description": "Generate qualified leads through highly targeted Pay-Per-Click campaigns designed to maximize advertising performance." },
        { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "description": "Build stronger customer relationships and increase brand awareness through engaging content and strategic advertising." },
        { "@type": "ListItem", "position": 5, "name": "Website Design & Development", "description": "Create modern, responsive websites that deliver exceptional user experiences while supporting SEO and lead generation." },
        { "@type": "ListItem", "position": 6, "name": "Content Marketing", "description": "Develop valuable content that educates customers, improves search visibility, and establishes industry authority." },
        { "@type": "ListItem", "position": 7, "name": "AI Marketing & Automation", "description": "Automate repetitive marketing tasks, improve customer engagement, and streamline lead nurturing using intelligent AI solutions." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#industries",
      "name": "Industries Served in Victoria by Altiora Infotech",
      "description": "Industries Altiora Infotech supports with tailored digital marketing strategies across Victoria.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Tourism & Hospitality" },
        { "@type": "ListItem", "position": 2, "name": "Healthcare" },
        { "@type": "ListItem", "position": 3, "name": "Real Estate" },
        { "@type": "ListItem", "position": 4, "name": "Professional Services" },
        { "@type": "ListItem", "position": 5, "name": "Retail & eCommerce" },
        { "@type": "ListItem", "position": 6, "name": "Education" },
        { "@type": "ListItem", "position": 7, "name": "Technology Startups" },
        { "@type": "ListItem", "position": 8, "name": "Financial Services" },
        { "@type": "ListItem", "position": 9, "name": "Restaurants & Cafés" },
        { "@type": "ListItem", "position": 10, "name": "Construction" },
        { "@type": "ListItem", "position": 11, "name": "Home Services" },
        { "@type": "ListItem", "position": 12, "name": "Government Contractors" },
        { "@type": "ListItem", "position": 13, "name": "Non-Profit Organizations" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria",
      "name": "Digital Marketing Company in Victoria | SEO, Google Ads, Web Design & Lead Generation | Altiora Infotech",
      "description": "Looking for a trusted Digital Marketing Company in Victoria? Altiora Infotech provides SEO, Google Ads, Local SEO, website development, social media marketing, AI-powered automation, and lead generation strategies to help your business grow.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-victoria/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Victoria" },
        { "@type": "Thing", "name": "SEO in Victoria" },
        { "@type": "Thing", "name": "AI Marketing Automation" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Ads Management" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "AI Marketing Automation" },
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
        "geographicArea": { "@type": "City", "name": "Victoria" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyVictoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(victoriaSchema) }}
      />
      <VictoriaMarketingClientPage />
    </>
  );
}
