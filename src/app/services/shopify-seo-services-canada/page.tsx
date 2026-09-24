import { Metadata } from 'next';
import ShopifySeoClientPage from './_components/ShopifySeoClientPage';

export const metadata: Metadata = {
  title: 'Shopify SEO Services in Canada | Altiora Infotech',
  description: 'Grow your Shopify store with search-driven revenue. Altiora Infotech provides Shopify SEO services in Canada including technical SEO, keyword research, on-page optimization, ecommerce content marketing, and link building to improve rankings, increase qualified traffic, and drive more sales.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/shopify-seo-services-canada",
  },
  openGraph: {
    title: "Shopify SEO Services in Canada | Altiora Infotech",
    description: "Grow your Shopify store with search-driven revenue. Specialized Shopify SEO services in Canada to improve rankings, increase qualified traffic, and drive more ecommerce revenue.",
    url: "https://altiorainfotech.ca/services/shopify-seo-services-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Shopify SEO Services in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify SEO Services in Canada | Altiora Infotech",
    description: "Grow your Shopify store with search-driven revenue. Specialized Shopify SEO services in Canada to improve rankings, increase qualified traffic, and drive more ecommerce revenue.",
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
        "Ecommerce SEO",
        "Technical SEO",
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing Services in Canada", "url": "https://altiorainfotech.ca/services/email-marketing-services-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing for Ecommerce Businesses in Canada", "url": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada" } }
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
      "@id": "https://altiorainfotech.ca/services/shopify-seo-services-canada/#business",
      "name": "Altiora Infotech | Shopify SEO Services in Canada",
      "url": "https://altiorainfotech.ca/services/shopify-seo-services-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Specialized Shopify SEO services for Canadian ecommerce brands including technical SEO, keyword research, on-page optimization, ecommerce content marketing, and link building to improve rankings, increase organic traffic, and drive more revenue.",
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
        "Ecommerce SEO",
        "Technical SEO",
        "Shopify Keyword Research",
        "On-Page SEO Optimization",
        "Ecommerce Content Marketing",
        "Shopify Link Building",
        "Core Web Vitals Optimization",
        "Structured Data Implementation",
        "Product Page Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization for Ecommerce"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Shopify Stores, Ecommerce Brands, Online Retailers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/shopify-seo-services-canada/#service",
      "name": "Shopify SEO Services in Canada",
      "url": "https://altiorainfotech.ca/services/shopify-seo-services-canada",
      "description": "Specialized Shopify SEO services for Canadian ecommerce businesses including SEO audits, keyword research, on-page optimization, technical SEO, content marketing, and link building to improve rankings, increase qualified traffic, and drive more sales.",
      "serviceType": "Shopify SEO, Ecommerce SEO, Technical SEO, Keyword Research, On-Page Optimization, Content Marketing, Link Building",
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
        "audienceType": "Shopify Stores, Ecommerce Brands, Online Retailers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Shopify SEO Services We Provide",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify SEO Audit", "description": "Comprehensive analysis of your Shopify store to identify technical issues, ranking opportunities, and growth potential." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Keyword Research", "description": "Targeting commercial intent, product, category, long-tail, and buyer-focused search terms to attract ready-to-purchase customers." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO Optimization", "description": "Optimizing product pages, collection pages, meta titles, descriptions, headings, internal links, images, and URLs." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical Shopify SEO", "description": "Site speed, Core Web Vitals, mobile optimization, structured data, XML sitemaps, crawl resolution, and duplicate content management." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce Content Marketing", "description": "Buying guides, product comparisons, blog content, category descriptions, educational resources, and FAQ content." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Link Building", "description": "Acquiring relevant, authoritative links that strengthen domain authority and search visibility." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Shopify SEO Services in Canada", "item": "https://altiorainfotech.ca/services/shopify-seo-services-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are Shopify SEO Services in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Shopify SEO Services in Canada help ecommerce businesses improve search rankings, increase organic traffic, and generate more sales through search engine optimization." } },
        { "@type": "Question", "name": "How long does Shopify SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses begin seeing measurable improvements within a few months, although SEO timelines vary depending on competition and website condition." } },
        { "@type": "Question", "name": "Is Shopify good for SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Shopify provides a strong foundation for SEO when properly optimized." } },
        { "@type": "Question", "name": "Can Shopify SEO increase sales?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Improved visibility attracts more qualified traffic, which can lead to increased conversions and revenue." } },
        { "@type": "Question", "name": "Do product pages need SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Product pages are often among the most important revenue-generating pages on an ecommerce website." } },
        { "@type": "Question", "name": "How much do Shopify SEO Services in Canada cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on the size of the store, competition level, and project scope. We provide customized solutions based on business needs." } },
        { "@type": "Question", "name": "Why hire a Shopify SEO agency?", "acceptedAnswer": { "@type": "Answer", "text": "An experienced Shopify SEO agency can identify opportunities, resolve technical issues, improve rankings, and help accelerate growth." } },
        { "@type": "Question", "name": "Can Shopify SEO reduce advertising costs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Strong organic visibility can reduce reliance on paid advertising channels while improving overall marketing ROI." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/shopify-seo-services-canada/#howto",
      "name": "Our Shopify SEO Process",
      "description": "A proven 4-step Shopify SEO process for Canadian ecommerce brands.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discovery & Audit", "text": "Understand your business, products, competitors, and goals, then identify technical issues and opportunities through a full SEO and technical review." },
        { "@type": "HowToStep", "position": 2, "name": "Keyword Strategy", "text": "Map keywords to the most relevant pages to maximize rankings and user experience." },
        { "@type": "HowToStep", "position": 3, "name": "Content & On-Page Optimization", "text": "Optimize existing content while creating new opportunities to capture valuable search traffic." },
        { "@type": "HowToStep", "position": 4, "name": "Authority Building & Reporting", "text": "Strengthen authority through link acquisition and content promotion, with regular reporting and continuous improvement." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/shopify-seo-services-canada/#services",
      "name": "Shopify SEO Services We Provide",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Shopify SEO Audit", "description": "Comprehensive analysis of your Shopify store to identify technical issues, ranking opportunities, and growth potential." },
        { "@type": "ListItem", "position": 2, "name": "Shopify Keyword Research", "description": "Identifying commercial intent, product, category, long-tail, buyer-focused, and local ecommerce keywords." },
        { "@type": "ListItem", "position": 3, "name": "On-Page SEO Optimization", "description": "Optimizing product pages, collection pages, meta titles, descriptions, headings, internal links, images, and URLs." },
        { "@type": "ListItem", "position": 4, "name": "Technical Shopify SEO", "description": "Site speed, Core Web Vitals, mobile optimization, structured data, XML sitemaps, crawl resolution, and duplicate content management." },
        { "@type": "ListItem", "position": 5, "name": "Ecommerce Content Marketing", "description": "Buying guides, product comparisons, blog content, category descriptions, educational resources, and FAQ content." },
        { "@type": "ListItem", "position": 6, "name": "Shopify Link Building", "description": "Acquiring relevant, authoritative links that strengthen domain authority and search visibility." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/shopify-seo-services-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/shopify-seo-services-canada",
      "name": "Shopify SEO Services in Canada | Altiora Infotech",
      "description": "Grow your Shopify store with search-driven revenue. Altiora Infotech provides Shopify SEO services in Canada including technical SEO, keyword research, on-page optimization, ecommerce content marketing, and link building to improve rankings, increase qualified traffic, and drive more sales.",
      "datePublished": "2026-06-25",
      "dateModified": "2026-06-25",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/shopify-seo-services-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Shopify SEO Services in Canada" },
        { "@type": "Thing", "name": "Ecommerce SEO" },
        { "@type": "Thing", "name": "Shopify Store Growth" },
        { "@type": "Thing", "name": "Technical SEO for Shopify" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Ecommerce SEO" },
        { "@type": "Thing", "name": "Technical SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Shopify Keyword Research" },
        { "@type": "Thing", "name": "Shopify Link Building" },
        { "@type": "SoftwareApplication", "name": "Shopify", "applicationCategory": "Ecommerce Platform" },
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

export default function ShopifySeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifySeoSchema) }}
      />
      <ShopifySeoClientPage />
    </>
  );
}
