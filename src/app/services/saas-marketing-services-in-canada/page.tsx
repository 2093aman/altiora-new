import { Metadata } from 'next';
import SaasMarketingClientPage from './_components/SaasMarketingClientPage';

export const metadata: Metadata = {
  title: 'SaaS Marketing Services in Canada | Altiora Infotech',
  description: 'SaaS marketing services in Canada to accelerate customer acquisition, MRR, and growth through SaaS SEO, content marketing, Google Ads, LinkedIn marketing, conversion optimization, and marketing automation.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/saas-marketing-services-in-canada",
  },
  openGraph: {
    title: "SaaS Marketing Services in Canada | Altiora Infotech",
    description: "SaaS marketing services in Canada to accelerate customer acquisition, MRR, and growth through SaaS SEO, content marketing, Google Ads, LinkedIn marketing, conversion optimization, and marketing automation.",
    url: "https://altiorainfotech.ca/services/saas-marketing-services-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "SaaS Marketing Services in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Marketing Services in Canada | Altiora Infotech",
    description: "SaaS marketing services in Canada to accelerate customer acquisition, MRR, and growth through SaaS SEO, content marketing, Google Ads, LinkedIn marketing, conversion optimization, and marketing automation.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const saasMarketingSchema = {
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
      "@id": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada/#business",
      "name": "Altiora Infotech | SaaS Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian SaaS companies and startups accelerate customer acquisition, MRR, and growth through SaaS SEO, content marketing, Google Ads, LinkedIn marketing, conversion rate optimization, and marketing automation.",
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
        "SaaS Marketing",
        "SaaS SEO",
        "Content Marketing for SaaS",
        "Google Ads for SaaS",
        "LinkedIn Marketing for SaaS",
        "SaaS Conversion Rate Optimization",
        "Marketing Automation",
        "Customer Acquisition",
        "Monthly Recurring Revenue Growth",
        "Demand Generation",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "SaaS companies, startups, software businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada/#service",
      "name": "SaaS Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada",
      "description": "Specialized SaaS marketing services for Canadian software companies and startups including SaaS SEO, content marketing, Google Ads, LinkedIn marketing, conversion rate optimization, and marketing automation.",
      "serviceType": "SaaS Marketing, SaaS SEO, Content Marketing, PPC, LinkedIn Marketing, Conversion Rate Optimization, Marketing Automation",
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
        "audienceType": "SaaS companies, startups, software businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SaaS Marketing Services We Provide",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS SEO Services", "description": "Keyword research, technical SEO, content optimization, competitor analysis, link building, and AI search optimization to attract high-intent prospects." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing for SaaS", "description": "Blog articles, product pages, landing pages, use-case pages, industry guides, case studies, and comparison content that build authority and trust." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads for SaaS", "description": "Search campaigns, display campaigns, retargeting, conversion tracking, and landing page optimization that maximize ROI and lower acquisition costs." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Marketing", "description": "Targeted campaigns and audience segmentation reaching founders, executives, decision-makers, procurement teams, and enterprise buyers." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Conversion Rate Optimization", "description": "Optimization of landing pages, product pages, signup flows, demo requests, and trial conversions to improve revenue performance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Automation", "description": "Email automation, lead nurturing, CRM workflows, user onboarding, and lifecycle marketing that improve engagement and retention." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "SaaS Marketing Services in Canada", "item": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are SaaS Marketing Services?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS Marketing Services help software companies generate leads, acquire customers, improve retention, and grow recurring revenue." } },
        { "@type": "Question", "name": "Why is SaaS marketing different from traditional marketing?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS businesses often have subscription models, longer sales cycles, and a stronger focus on retention and recurring revenue." } },
        { "@type": "Question", "name": "Can SEO help SaaS companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO helps SaaS businesses attract high-intent prospects actively searching for software solutions." } },
        { "@type": "Question", "name": "Is content marketing important for SaaS?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Content educates buyers, builds trust, and supports every stage of the customer journey." } },
        { "@type": "Question", "name": "What marketing channels work best for SaaS companies?", "acceptedAnswer": { "@type": "Answer", "text": "SEO, Google Ads, LinkedIn Marketing, Content Marketing, Email Marketing, and Marketing Automation are among the most effective channels." } },
        { "@type": "Question", "name": "How much do SaaS Marketing Services in Canada cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on business goals, market competition, and the scope of services required." } },
        { "@type": "Question", "name": "How long does SaaS marketing take to generate results?", "acceptedAnswer": { "@type": "Answer", "text": "Paid campaigns can generate leads quickly, while SEO and content marketing typically deliver stronger long-term results." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada/#howto",
      "name": "Our SaaS Marketing Process",
      "description": "A proven 4-step SaaS marketing process for Canadian software companies and startups.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discovery & Research", "text": "We assess your product, market, competitors, and growth objectives while identifying opportunities, customer pain points, and competitive advantages." },
        { "@type": "HowToStep", "position": 2, "name": "Strategy Development", "text": "A custom SaaS marketing strategy is developed around your goals, business model, and recurring revenue objectives." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Execution", "text": "We implement campaigns across SEO, PPC, content marketing, and lead generation channels." },
        { "@type": "HowToStep", "position": 4, "name": "Optimization & Reporting", "text": "Performance is continuously monitored and improved through testing, while regular reporting ensures transparency and identifies future growth opportunities." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada/#services",
      "name": "SaaS Marketing Services We Provide in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SaaS SEO Services", "description": "Keyword research, technical SEO, content optimization, competitor analysis, link building, and AI search optimization." },
        { "@type": "ListItem", "position": 2, "name": "Content Marketing for SaaS", "description": "Blog articles, product pages, landing pages, use-case pages, industry guides, case studies, and comparison content." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads for SaaS", "description": "Search campaigns, display campaigns, retargeting, conversion tracking, and landing page optimization." },
        { "@type": "ListItem", "position": 4, "name": "LinkedIn Marketing", "description": "Targeted B2B campaigns and audience segmentation reaching founders, executives, decision-makers, and enterprise buyers." },
        { "@type": "ListItem", "position": 5, "name": "SaaS Conversion Rate Optimization", "description": "Optimization of landing pages, product pages, signup flows, demo requests, and trial conversions." },
        { "@type": "ListItem", "position": 6, "name": "Marketing Automation", "description": "Email automation, lead nurturing, CRM workflows, user onboarding, and lifecycle marketing." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada",
      "name": "SaaS Marketing Services in Canada | Altiora Infotech",
      "description": "SaaS marketing services in Canada to accelerate customer acquisition, MRR, and growth through SaaS SEO, content marketing, Google Ads, LinkedIn marketing, conversion optimization, and marketing automation.",
      "datePublished": "2026-06-25",
      "dateModified": "2026-06-25",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/saas-marketing-services-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "SaaS Marketing in Canada" },
        { "@type": "Thing", "name": "SaaS Customer Acquisition" },
        { "@type": "Thing", "name": "Monthly Recurring Revenue Growth" },
        { "@type": "Thing", "name": "SaaS SEO" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "SaaS Marketing Canada" },
        { "@type": "Thing", "name": "Google Ads for SaaS" },
        { "@type": "Thing", "name": "Marketing Automation" },
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

export default function SaasMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saasMarketingSchema) }}
      />
      <SaasMarketingClientPage />
    </>
  );
}
