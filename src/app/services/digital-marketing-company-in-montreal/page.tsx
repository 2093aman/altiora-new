import { Metadata } from 'next';
import MontrealMarketingClientPage from './_components/MontrealMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Montreal | SEO, Google Ads & Web Development | Altiora Infotech',
  description: 'Partner with a trusted Digital Marketing Company in Montreal. Altiora Infotech provides SEO, Google Ads, social media marketing, website development, local SEO, AI-powered marketing, and lead generation solutions to help your business grow.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal",
  },
  openGraph: {
    title: "Digital Marketing Company in Montreal | SEO, Google Ads & Web Development | Altiora Infotech",
    description: "Partner with a trusted Digital Marketing Company in Montreal. Altiora Infotech provides SEO, Google Ads, social media marketing, website development, local SEO, AI-powered marketing, and lead generation solutions to help your business grow.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Montreal" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Montreal | SEO, Google Ads & Web Development | Altiora Infotech",
    description: "Partner with a trusted Digital Marketing Company in Montreal. Altiora Infotech provides SEO, Google Ads, social media marketing, website development, local SEO, AI-powered marketing, and lead generation solutions to help your business grow.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const montrealSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Montreal",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Montreal with SEO, Google Ads, Meta advertising, social media marketing, website development, content marketing, and AI-powered marketing automation for local and national businesses.",
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
        "availableLanguage": ["English", "French"]
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.5019,
        "longitude": -73.5674
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
        { "@type": "City", "name": "Montreal", "containedInPlace": { "@type": "AdministrativeArea", "name": "Quebec" } },
        { "@type": "Place", "name": "Laval" },
        { "@type": "Place", "name": "Longueuil" },
        { "@type": "Place", "name": "Downtown Montreal" },
        { "@type": "Place", "name": "Plateau-Mont-Royal" },
        { "@type": "Place", "name": "Westmount" }
      ],
      "knowsAbout": ["Search Engine Optimization", "Local SEO", "Google Ads Management", "Meta Advertising", "Social Media Marketing", "Website Design & Development", "Content Marketing", "Conversion Rate Optimization", "Email Marketing", "Marketing Automation", "AI-Powered Digital Solutions"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Montreal" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#service",
      "name": "Digital Marketing Company in Montreal",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal",
      "description": "Trusted digital marketing company in Montreal providing SEO, Google Ads, Meta advertising, social media marketing, website design and development, content marketing, and AI-powered digital solutions.",
      "serviceType": "Digital Marketing, SEO, Google Ads, Social Media Marketing, Website Design & Development, Content Marketing, AI Marketing Solutions",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Montreal" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Established Enterprises",
        "geographicArea": { "@type": "City", "name": "Montreal" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Montreal Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Marketing Solutions" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Montreal", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#howto",
      "name": "Our Growth Process for Montreal Businesses",
      "description": "The growth process Altiora Infotech follows to deliver measurable digital marketing outcomes for Montreal businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Research & Discovery", "text": "We analyze your business, industry, competitors, and customer journey to identify growth opportunities." },
        { "@type": "HowToStep", "position": 2, "name": "Strategy Development", "text": "Based on research, we create a customized digital marketing strategy focused on measurable business objectives." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Execution", "text": "Our specialists implement SEO, paid advertising, content marketing, website optimization, and social media campaigns across multiple channels." },
        { "@type": "HowToStep", "position": 4, "name": "Performance Optimization", "text": "Through continuous monitoring and analytics, we refine campaigns to improve lead quality, conversion rates, and overall marketing performance." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does a digital marketing company provide?",
          "acceptedAnswer": { "@type": "Answer", "text": "A digital marketing company helps businesses grow through SEO, Google Ads, social media marketing, website development, content marketing, email campaigns, local SEO, and conversion optimization." }
        },
        {
          "@type": "Question",
          "name": "Why should I hire a Digital Marketing Company in Montreal?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Digital Marketing Company in Montreal understands the city's competitive business landscape and can create localized marketing strategies that resonate with both English- and French-speaking audiences while helping businesses increase visibility and generate qualified leads." }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than paid advertising?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO builds sustainable long-term organic traffic, while Google Ads delivers immediate visibility. A balanced strategy combining both channels often provides the strongest return on investment." }
        },
        {
          "@type": "Question",
          "name": "How long before I see marketing results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Paid advertising can generate results within days, while SEO generally requires several months to achieve consistent improvements depending on competition and website authority." }
        },
        {
          "@type": "Question",
          "name": "Can digital marketing help small businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Digital marketing enables small businesses to compete effectively by targeting local customers, improving online visibility, and generating qualified leads within controlled budgets." }
        },
        {
          "@type": "Question",
          "name": "Do you create custom marketing strategies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Every campaign is tailored to your business objectives, target audience, industry, and competitive landscape to maximize long-term success." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#services",
      "name": "Core Digital Marketing Services in Montreal by Altiora Infotech",
      "description": "Digital marketing services for Montreal businesses including SEO, Local SEO, Google Ads, social media marketing, website design and development, content marketing, and AI marketing solutions.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Search Engine Optimization", "description": "Improve search engine rankings with technical SEO, keyword optimization, content strategy, backlink development, and local search optimization." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO", "description": "Increase visibility in Google Maps and location-based searches, helping nearby customers discover your business." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads", "description": "Generate qualified leads with targeted PPC campaigns designed to maximize advertising performance while controlling costs." },
        { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "description": "Build meaningful customer relationships through engaging content, strategic advertising, and community management across major social platforms." },
        { "@type": "ListItem", "position": 5, "name": "Website Design & Development", "description": "Create responsive, fast-loading websites that provide exceptional user experiences while supporting SEO and lead generation." },
        { "@type": "ListItem", "position": 6, "name": "Content Marketing", "description": "Publish valuable, optimized content that educates customers, builds authority, and strengthens your online presence." },
        { "@type": "ListItem", "position": 7, "name": "AI Marketing Solutions", "description": "Leverage automation and artificial intelligence to improve efficiency, customer engagement, and campaign performance." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#industries",
      "name": "Industries Served in Montreal by Altiora Infotech",
      "description": "Industries Altiora Infotech supports with tailored digital marketing strategies across Montreal.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Technology & Artificial Intelligence" },
        { "@type": "ListItem", "position": 2, "name": "Healthcare" },
        { "@type": "ListItem", "position": 3, "name": "Professional Services" },
        { "@type": "ListItem", "position": 4, "name": "Real Estate" },
        { "@type": "ListItem", "position": 5, "name": "Education" },
        { "@type": "ListItem", "position": 6, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 7, "name": "Retail & eCommerce" },
        { "@type": "ListItem", "position": 8, "name": "Hospitality & Tourism" },
        { "@type": "ListItem", "position": 9, "name": "Financial Services" },
        { "@type": "ListItem", "position": 10, "name": "Construction" },
        { "@type": "ListItem", "position": 11, "name": "Home Services" },
        { "@type": "ListItem", "position": 12, "name": "Restaurants & Cafés" },
        { "@type": "ListItem", "position": 13, "name": "Non-Profit Organizations" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal",
      "name": "Digital Marketing Company in Montreal | SEO, Google Ads & Web Development | Altiora Infotech",
      "description": "Partner with a trusted Digital Marketing Company in Montreal. Altiora Infotech provides SEO, Google Ads, social media marketing, website development, local SEO, AI-powered marketing, and lead generation solutions to help your business grow.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-montreal/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Montreal" },
        { "@type": "Thing", "name": "SEO in Montreal" },
        { "@type": "Thing", "name": "AI Marketing Solutions" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Ads" },
        { "@type": "Thing", "name": "Social Media Marketing" },
        { "@type": "Thing", "name": "AI Marketing Solutions" },
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
        "geographicArea": { "@type": "City", "name": "Montreal" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
        "https://altiorainfotech.ca/services/ai-marketing-services-in-canada",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyMontrealPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(montrealSchema) }}
      />
      <MontrealMarketingClientPage />
    </>
  );
}
