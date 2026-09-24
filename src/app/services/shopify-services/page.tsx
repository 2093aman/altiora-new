import { Metadata } from 'next';
import ShopifyServicesClientPage from './_components/ShopifyServicesClientPage';

export const metadata: Metadata = {
  title: 'Shopify SEO Services Canada | Altiora Infotech',
  description: 'Grow your online store with Shopify SEO Services Canada. We help Shopify businesses increase organic traffic, improve search rankings, optimize product and collection pages, and generate sustainable revenue growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/shopify-services",
  },
  openGraph: {
    title: "Shopify SEO Services Canada | Altiora Infotech",
    description: "Grow your online store with Shopify SEO Services Canada. We help Shopify businesses increase organic traffic, improve search rankings, optimize product and collection pages, and generate sustainable revenue growth.",
    url: "https://altiorainfotech.ca/services/shopify-services",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Shopify SEO Services Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify SEO Services Canada | Altiora Infotech",
    description: "Grow your online store with Shopify SEO Services Canada. We help Shopify businesses increase organic traffic, improve search rankings, optimize product and collection pages, and generate sustainable revenue growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const shopifySeoSchema = {
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
        "Shopify SEO",
        "E-Commerce SEO",
        "Product Page Optimization",
        "Collection Page Optimization",
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing for Immigration Consultants in Canada", "url": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "How Real Estate Agents Generate Leads in Canada", "url": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing for Restaurants in Canada", "url": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing for E-Commerce Businesses in Canada", "url": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing for Healthcare Providers in Canada", "url": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google My Business Management Services", "url": "https://altiorainfotech.ca/services/google-my-business-management-services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify SEO Services Canada", "url": "https://altiorainfotech.ca/services/shopify-services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing Services Canada", "url": "https://altiorainfotech.ca/services/email-marketing-services-canada" } }
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
      "@id": "https://altiorainfotech.ca/services/shopify-services/#business",
      "name": "Altiora Infotech | Shopify SEO Services in Canada",
      "url": "https://altiorainfotech.ca/services/shopify-services",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian Shopify and e-commerce businesses increase organic traffic, improve search rankings, and grow revenue through technical SEO, product page SEO, collection page SEO, content marketing, and AEO.",
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
        "Shopify SEO",
        "E-Commerce SEO",
        "Technical Shopify SEO",
        "Product Page SEO",
        "Collection Page SEO",
        "Keyword Research",
        "Content Marketing for E-Commerce",
        "Link Building",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization for E-Commerce",
        "Conversion Rate Optimization"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Shopify Store Owners, E-Commerce Brands, Direct-to-Consumer Brands, Online Retailers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/shopify-services/#service",
      "name": "Shopify SEO Services in Canada",
      "url": "https://altiorainfotech.ca/services/shopify-services",
      "description": "Strategic Shopify SEO services for Canadian e-commerce brands including technical SEO, product page optimization, collection page optimization, keyword research, link building, content marketing, and AEO.",
      "serviceType": "Shopify SEO, E-Commerce SEO, Technical SEO, Product Page Optimization, Collection Page Optimization, Content Marketing, Link Building, AEO",
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
        "audienceType": "Shopify Store Owners, E-Commerce Brands, Direct-to-Consumer Brands, Online Retailers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Shopify SEO Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify SEO Audits", "description": "Identify technical, content, and optimization opportunities across your Shopify store." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research", "description": "Target keywords with strong commercial intent to attract qualified buyers." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Page Optimization", "description": "Improve visibility and conversion opportunities on product pages." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Collection Page Optimization", "description": "Increase rankings for category-level and high-volume commercial searches." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO", "description": "Resolve issues that limit crawlability, indexing, and search performance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing", "description": "Build topical authority and attract organic traffic through educational content." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building", "description": "Strengthen website authority through strategic backlink acquisition." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO and GEO Optimization", "description": "Improve visibility across AI-powered search platforms including ChatGPT, Gemini, Perplexity, and Google AI Overviews." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Shopify SEO Services Canada", "item": "https://altiorainfotech.ca/services/shopify-services" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are Shopify SEO Services?", "acceptedAnswer": { "@type": "Answer", "text": "Shopify SEO Services help online stores improve rankings, increase traffic, and generate more sales through search engine optimization." } },
        { "@type": "Question", "name": "Is Shopify good for SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Shopify offers strong SEO capabilities when properly optimized." } },
        { "@type": "Question", "name": "How long does Shopify SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses begin seeing measurable improvements within three to six months." } },
        { "@type": "Question", "name": "Can Shopify SEO increase sales?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Increased visibility often leads to more qualified traffic and higher sales opportunities." } },
        { "@type": "Question", "name": "What is product page optimization?", "acceptedAnswer": { "@type": "Answer", "text": "Product page optimization improves content, structure, and SEO elements to increase rankings and conversions." } },
        { "@type": "Question", "name": "Do collection pages matter for SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Collection pages often rank for high-volume commercial keywords and contribute significantly to traffic growth." } },
        { "@type": "Question", "name": "What is technical SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Technical SEO focuses on improving website performance, crawlability, indexing, and overall search engine accessibility." } },
        { "@type": "Question", "name": "Is content marketing important for Shopify SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Content helps attract traffic, answer customer questions, and build topical authority." } },
        { "@type": "Question", "name": "What is AEO for Shopify stores?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps Shopify businesses appear within AI-generated search results on platforms such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Can AI search help e-commerce businesses grow?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI-powered search is becoming an increasingly important product discovery channel for online shoppers." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/shopify-services/#howto",
      "name": "The Shopify SEO Growth Formula",
      "description": "A proven 4-step Shopify SEO framework for Canadian e-commerce brands.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Build a Strong SEO Foundation", "text": "Optimize your Shopify store's structure, technical performance, and search visibility." },
        { "@type": "HowToStep", "position": 2, "name": "Improve Product Discoverability", "text": "Optimize product pages, collection pages, and metadata." },
        { "@type": "HowToStep", "position": 3, "name": "Increase Organic Traffic", "text": "Target valuable keywords that attract qualified buyers." },
        { "@type": "HowToStep", "position": 4, "name": "Scale Revenue", "text": "Use data-driven optimization to increase traffic, conversions, and sales." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/shopify-services/#services",
      "name": "Shopify SEO Services We Provide",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Shopify SEO Audits", "description": "Identify technical, content, and optimization opportunities." },
        { "@type": "ListItem", "position": 2, "name": "Keyword Research", "description": "Target keywords with strong commercial intent." },
        { "@type": "ListItem", "position": 3, "name": "Product Page Optimization", "description": "Improve visibility and conversion opportunities." },
        { "@type": "ListItem", "position": 4, "name": "Collection Page Optimization", "description": "Increase rankings for category-level searches." },
        { "@type": "ListItem", "position": 5, "name": "Technical SEO", "description": "Resolve issues that limit search performance." },
        { "@type": "ListItem", "position": 6, "name": "Content Marketing", "description": "Build authority and attract organic traffic." },
        { "@type": "ListItem", "position": 7, "name": "Link Building", "description": "Strengthen website authority through strategic backlink acquisition." },
        { "@type": "ListItem", "position": 8, "name": "AEO and GEO Optimization", "description": "Improve visibility across AI-powered search platforms including ChatGPT, Gemini, Perplexity, and Google AI Overviews." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/shopify-services/#webpage",
      "url": "https://altiorainfotech.ca/services/shopify-services",
      "name": "Shopify SEO Services Canada | Altiora Infotech",
      "description": "Grow your online store with Shopify SEO Services Canada. We help Shopify businesses increase organic traffic, improve search rankings, optimize product and collection pages, and generate sustainable revenue growth.",
      "datePublished": "2026-06-19",
      "dateModified": "2026-06-19",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/shopify-services/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Shopify SEO Services Canada" },
        { "@type": "Thing", "name": "E-Commerce SEO" },
        { "@type": "Thing", "name": "Product Page Optimization" },
        { "@type": "Thing", "name": "Collection Page Optimization" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Technical SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Shopify SEO Canada" },
        { "@type": "Thing", "name": "Content Marketing" },
        { "@type": "Thing", "name": "Link Building" },
        { "@type": "SoftwareApplication", "name": "Shopify", "applicationCategory": "E-Commerce Platform" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "Thing", "name": "Google AI Overviews" }
      ]
    }
  ]
};

export default function ShopifyServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifySeoSchema) }}
      />
      <ShopifyServicesClientPage />
    </>
  );
}
