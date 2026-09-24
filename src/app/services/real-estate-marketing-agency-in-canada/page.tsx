import { Metadata } from 'next';
import RealEstateMarketingClientPage from './_components/RealEstateMarketingClientPage';

export const metadata: Metadata = {
  title: 'Real Estate Marketing Agency in Canada | SEO, PPC & Lead Generation',
  description: 'Grow your real estate business with a trusted real estate marketing agency in Canada. Generate more buyer and seller leads through SEO, Google Ads, social media marketing, AEO, and website development.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada",
  },
  openGraph: {
    title: "Real Estate Marketing Agency in Canada | SEO, PPC & Lead Generation",
    description: "Grow your real estate business with a trusted real estate marketing agency in Canada. Generate more buyer and seller leads through SEO, Google Ads, social media marketing, AEO, and website development.",
    url: "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Real Estate Marketing Agency in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Marketing Agency in Canada | SEO, PPC & Lead Generation",
    description: "Grow your real estate business with a trusted real estate marketing agency in Canada. Generate more buyer and seller leads through SEO, Google Ads, social media marketing, AEO, and website development.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const realEstateSchema = {
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
      "description": "Altiora Infotech is a Canadian digital marketing agency providing SEO, Google Ads, social media marketing, website development, video production, branding, and Answer Engine Optimization (AEO) to businesses across Canada. We specialize in real estate marketing, dental marketing, immigration consultant marketing, and local business growth.",
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
      "description": "Canadian digital marketing agency providing SEO, PPC, social media, website development, AEO, and industry-specific marketing services.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada/#business",
      "name": "Altiora Infotech | Real Estate Marketing Agency in Canada",
      "url": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-focused real estate marketing agency serving realtors, brokers, teams, and developers across Canada with SEO, Google Ads, social media marketing, website development, video production, and AEO strategies.",
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
        "Real Estate Marketing",
        "Real Estate SEO",
        "Real Estate Lead Generation",
        "Google Ads for Realtors",
        "Social Media Marketing for Real Estate",
        "Real Estate Website Development",
        "Video Production for Realtors",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Local SEO",
        "Real Estate Branding",
        "AI Search Optimization for Real Estate"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Real Estate Agents, Realtors, Real Estate Brokers, Real Estate Teams, Real Estate Developers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada/#service",
      "name": "Real Estate Marketing Agency in Canada",
      "url": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada",
      "description": "Trusted real estate marketing agency in Canada providing SEO, paid advertising, social media marketing, website development, video production, branding, and AEO strategies for realtors, brokers, teams, and developers.",
      "serviceType": "Real Estate Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development, Video Production, AEO",
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
        "audienceType": "Real Estate Agents, Realtors, Brokers, Real Estate Teams, Real Estate Developers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Real Estate Marketing Services in Canada",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO for Real Estate Agents", "description": "Improve search rankings for local and national real estate searches to attract qualified buyers and sellers." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising for Realtors", "description": "Generate immediate buyer and seller leads through targeted Google Ads and Meta advertising campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing for Realtors", "description": "Build brand authority and engage audiences across Instagram, Facebook, LinkedIn, YouTube, and TikTok." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Website Development", "description": "Conversion-focused real estate websites with lead capture forms, landing pages, and community guides." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production for Realtors", "description": "Property tours, neighbourhood guides, market updates, and client testimonials that drive engagement." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Graphic Design for Real Estate", "description": "Professional real estate brand identity across digital and print platforms." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO & GEO for Real Estate", "description": "Improve visibility in ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Real Estate Marketing Agency in Canada", "item": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a real estate marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "A real estate marketing agency helps realtors, brokers, and real estate companies generate leads, increase visibility, improve brand awareness, and attract buyers and sellers through digital marketing strategies." } },
        { "@type": "Question", "name": "How much does real estate marketing cost in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on your goals, market competition, advertising budget, and services required. Most successful real estate businesses invest in a combination of SEO, paid advertising, social media, and website optimization." } },
        { "@type": "Question", "name": "How long does SEO take for real estate agents?", "acceptedAnswer": { "@type": "Answer", "text": "Most SEO campaigns begin producing measurable improvements within three to six months. Competitive markets may require additional time to establish authority and rankings." } },
        { "@type": "Question", "name": "What marketing channel works best for realtors?", "acceptedAnswer": { "@type": "Answer", "text": "SEO and Google Ads typically generate the highest-intent leads, while social media helps build authority, engagement, and long-term trust." } },
        { "@type": "Question", "name": "Does digital marketing work for new real estate agents?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Digital marketing helps new agents establish visibility, build credibility, and generate leads even without an extensive referral network." } },
        { "@type": "Question", "name": "Are Google Ads worth it for real estate agents?", "acceptedAnswer": { "@type": "Answer", "text": "When properly managed, Google Ads can generate highly qualified buyer and seller inquiries and deliver strong return on investment." } },
        { "@type": "Question", "name": "What is AEO for real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps businesses appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Do I need a website as a realtor?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A professional website supports SEO, builds credibility, captures leads, and provides a central destination for all marketing activities." } },
        { "@type": "Question", "name": "Can social media generate real estate leads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Social media helps increase visibility, build trust, showcase expertise, and nurture relationships that lead to future business opportunities." } },
        { "@type": "Question", "name": "Do you work with brokerages and teams?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with independent agents, teams, brokerages, developers, and real estate organizations throughout Canada." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada/#howto",
      "name": "How to Grow Your Real Estate Business with Digital Marketing in Canada",
      "description": "A proven 4-step digital marketing framework for Canadian real estate professionals to build brand authority, generate qualified buyer and seller leads, and achieve sustainable growth.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Position Your Brand", "text": "Build a recognizable and trustworthy real estate brand that buyers and sellers remember before they need your services." },
        { "@type": "HowToStep", "position": 2, "name": "Build Your Digital Presence", "text": "Establish a strong foundation through SEO, website optimization, local search visibility, and professional content." },
        { "@type": "HowToStep", "position": 3, "name": "Generate Qualified Leads", "text": "Use targeted advertising, organic search, social media, and lead generation systems to attract high-intent prospects." },
        { "@type": "HowToStep", "position": 4, "name": "Scale Consistently", "text": "Leverage data and performance insights to improve results, expand visibility, and increase return on investment over time." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada/#services",
      "name": "Real Estate Marketing Services in Canada by Altiora Infotech",
      "description": "Comprehensive real estate marketing services for Canadian realtors, brokers, and developers including SEO, PPC, social media, website development, video production, branding, and AEO.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO for Real Estate Agents", "description": "Improve search rankings and increase organic visibility through proven SEO strategies tailored for Canadian real estate professionals." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising for Realtors", "description": "Generate immediate qualified buyer and seller leads through highly targeted Google Ads and Meta advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing for Realtors", "description": "Build authority and engage audiences across Instagram, Facebook, LinkedIn, YouTube, and TikTok." },
        { "@type": "ListItem", "position": 4, "name": "Real Estate Website Development", "description": "Create professional, conversion-focused real estate websites with lead capture forms, landing pages, and community guides." },
        { "@type": "ListItem", "position": 5, "name": "Video Production for Realtors", "description": "Showcase properties, communities, and market expertise through engaging property tours, neighbourhood guides, and client testimonials." },
        { "@type": "ListItem", "position": 6, "name": "Branding & Graphic Design", "description": "Create a consistent and memorable real estate brand identity across digital and print platforms." },
        { "@type": "ListItem", "position": 7, "name": "AEO & GEO for Real Estate", "description": "Improve visibility in AI-powered search experiences including ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada",
      "name": "Real Estate Marketing Agency in Canada | SEO, PPC & Lead Generation | Altiora Infotech",
      "description": "Grow your real estate business with a trusted real estate marketing agency in Canada. Generate more buyer and seller leads through SEO, Google Ads, social media marketing, AEO, and website development.",
      "datePublished": "2026-06-16",
      "dateModified": "2026-06-16",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/real-estate-marketing-agency-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Real Estate Marketing Services in Canada" },
        { "@type": "Thing", "name": "Digital Marketing for Realtors" },
        { "@type": "Thing", "name": "Real Estate Lead Generation" },
        { "@type": "Thing", "name": "Local SEO for Real Estate" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Real Estate Lead Generation Canada" },
        { "@type": "Thing", "name": "Google Ads for Realtors" },
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

export default function RealEstateMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <RealEstateMarketingClientPage />
    </>
  );
}
