import { Metadata } from 'next';
import AiMarketingClientPage from './_components/AiMarketingClientPage';

export const metadata: Metadata = {
  title: 'AI Marketing Services in Canada | Altiora Infotech',
  description: 'AI Marketing Services in Canada from Altiora Infotech. Use AI-powered SEO, content, PPC, email marketing, customer journey optimization, and marketing automation to improve targeting, boost conversions, and drive measurable growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/ai-marketing-services-in-canada",
  },
  openGraph: {
    title: "AI Marketing Services in Canada | Altiora Infotech",
    description: "AI Marketing Services in Canada from Altiora Infotech. Use AI-powered SEO, content, PPC, email marketing, customer journey optimization, and marketing automation to drive measurable growth.",
    url: "https://altiorainfotech.ca/services/ai-marketing-services-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "AI Marketing Services in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Services in Canada | Altiora Infotech",
    description: "AI Marketing Services in Canada from Altiora Infotech. Use AI-powered SEO, content, PPC, email marketing, and marketing automation to drive measurable growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const aiMarketingSchema = {
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
      "@id": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada/#business",
      "name": "Altiora Infotech | AI Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian businesses leverage artificial intelligence through AI-powered SEO, content marketing, PPC, email marketing, customer journey optimization, and marketing automation to improve performance and drive measurable growth.",
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
        "AI Marketing",
        "AI-Powered SEO",
        "AI Content Marketing",
        "AI-Powered PPC",
        "AI Email Marketing",
        "AI Customer Journey Optimization",
        "Marketing Automation",
        "Predictive Analytics",
        "Audience Segmentation",
        "Lead Scoring",
        "Personalization",
        "Conversion Optimization",
        "Data-Driven Marketing"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, SaaS Companies, Ecommerce Brands, Healthcare Providers, Law Firms, Enterprise Organizations",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada/#service",
      "name": "AI Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada",
      "description": "AI-powered marketing services for Canadian businesses including AI-powered SEO, AI content marketing, AI-powered PPC, AI email marketing, AI customer journey optimization, and marketing automation.",
      "serviceType": "AI Marketing, AI SEO, AI Content Marketing, AI PPC, AI Email Marketing, Customer Journey Optimization, Marketing Automation",
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
        "audienceType": "Startups, SaaS Companies, Ecommerce Brands, Healthcare Providers, Law Firms, Enterprise Organizations",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Marketing Services We Provide",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered SEO", "description": "AI technologies to improve search visibility, keyword targeting, content optimization, and search performance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Content Marketing", "description": "AI-enhanced content strategies that create high-quality content to attract and engage audiences." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered PPC Campaigns", "description": "AI-driven paid advertising with better targeting, automated bidding, budget optimization, and performance forecasting." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Email Marketing", "description": "Email marketing improved through AI-driven personalization, segmentation, automated workflows, and behavioral targeting." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Customer Journey Optimization", "description": "AI tools that analyze customer interactions and optimize conversion pathways at every stage." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Automation Solutions", "description": "AI-powered automation including lead nurturing, CRM automation, customer segmentation, and workflow automation." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "AI Marketing Services in Canada", "item": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are AI Marketing Services?", "acceptedAnswer": { "@type": "Answer", "text": "AI Marketing Services use artificial intelligence technologies to improve marketing performance, automate processes, and enhance customer experiences." } },
        { "@type": "Question", "name": "How can AI improve marketing results?", "acceptedAnswer": { "@type": "Answer", "text": "AI helps businesses improve targeting, personalization, campaign optimization, and decision-making." } },
        { "@type": "Question", "name": "Is AI marketing suitable for small businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI solutions can benefit businesses of all sizes by improving efficiency and performance." } },
        { "@type": "Question", "name": "Can AI replace digital marketers?", "acceptedAnswer": { "@type": "Answer", "text": "No. AI enhances marketing efforts, but human strategy, creativity, and oversight remain essential." } },
        { "@type": "Question", "name": "What industries benefit from AI marketing?", "acceptedAnswer": { "@type": "Answer", "text": "AI marketing can benefit ecommerce, SaaS, healthcare, legal, real estate, education, finance, and many other industries." } },
        { "@type": "Question", "name": "How much do AI Marketing Services in Canada cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on project scope, business goals, and the technologies required." } },
        { "@type": "Question", "name": "Does AI improve SEO performance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI can support keyword research, content optimization, competitor analysis, and SEO strategy development." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada/#howto",
      "name": "Our AI Marketing Process",
      "description": "A proven 4-step AI marketing process for Canadian businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discovery & Strategy", "text": "We assess your business goals, audience, competitors, and marketing opportunities." },
        { "@type": "HowToStep", "position": 2, "name": "Data Analysis", "text": "We analyze available data to identify trends, opportunities, and performance gaps, then select the most suitable AI technologies for your industry." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Development", "text": "AI-powered campaigns are developed to maximize visibility, engagement, and conversions." },
        { "@type": "HowToStep", "position": 4, "name": "Optimization & Reporting", "text": "We continuously optimize campaigns while automating repetitive activities and track performance through detailed reporting." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada/#services",
      "name": "AI Marketing Services We Provide",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "AI-Powered SEO", "description": "Improves search visibility, keyword targeting, content optimization, and search performance using AI." },
        { "@type": "ListItem", "position": 2, "name": "AI Content Marketing", "description": "Creates high-quality content that attracts and engages audiences using AI-enhanced strategies." },
        { "@type": "ListItem", "position": 3, "name": "AI-Powered PPC Campaigns", "description": "Improves paid advertising performance with better targeting, automated bidding, and budget optimization." },
        { "@type": "ListItem", "position": 4, "name": "AI Email Marketing", "description": "Improves email effectiveness through personalization, segmentation, and automation." },
        { "@type": "ListItem", "position": 5, "name": "AI Customer Journey Optimization", "description": "Analyzes customer interactions and optimizes conversion pathways using AI tools." },
        { "@type": "ListItem", "position": 6, "name": "Marketing Automation Solutions", "description": "Streamlines marketing processes with lead nurturing, CRM automation, and workflow automation." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada",
      "name": "AI Marketing Services in Canada | Altiora Infotech",
      "description": "AI Marketing Services in Canada from Altiora Infotech. Use AI-powered SEO, content, PPC, email marketing, customer journey optimization, and marketing automation to drive measurable growth.",
      "datePublished": "2026-06-25",
      "dateModified": "2026-06-25",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/ai-marketing-services-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "AI Marketing Services in Canada" },
        { "@type": "Thing", "name": "Artificial Intelligence in Marketing" },
        { "@type": "Thing", "name": "Marketing Automation" },
        { "@type": "Thing", "name": "AI-Powered SEO" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Artificial Intelligence" },
        { "@type": "Thing", "name": "Predictive Analytics" },
        { "@type": "Thing", "name": "Marketing Automation" },
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Personalization" },
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

export default function AiMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiMarketingSchema) }}
      />
      <AiMarketingClientPage />
    </>
  );
}
