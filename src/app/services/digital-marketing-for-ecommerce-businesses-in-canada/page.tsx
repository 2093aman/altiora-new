import { Metadata } from 'next';
import EcommerceMarketingClientPage from './_components/EcommerceMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing for E-Commerce Businesses in Canada | Altiora Infotech',
  description: 'Digital marketing for e-commerce businesses in Canada using SEO, Google Shopping Ads, Meta Ads, email marketing, conversion rate optimization, content marketing, and AEO to increase traffic, sales, and customer lifetime value.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada",
  },
  openGraph: {
    title: "Digital Marketing for E-Commerce Businesses in Canada | Altiora Infotech",
    description: "Digital marketing for e-commerce businesses in Canada using SEO, Google Shopping Ads, Meta Ads, email marketing, conversion rate optimization, content marketing, and AEO to increase traffic, sales, and customer lifetime value.",
    url: "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing for E-Commerce Businesses in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for E-Commerce Businesses in Canada | Altiora Infotech",
    description: "Digital marketing for e-commerce businesses in Canada using SEO, Google Shopping Ads, Meta Ads, email marketing, conversion rate optimization, content marketing, and AEO to increase traffic, sales, and customer lifetime value.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const ecommerceMarketingSchema = {
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
        "E-Commerce Marketing",
        "Shopify SEO",
        "Google Shopping Ads",
        "Meta Ads",
        "Conversion Rate Optimization",
        "Customer Acquisition",
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify SEO Services Canada", "url": "https://altiorainfotech.ca/services/shopify-seo-services-canada" } },
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada/#business",
      "name": "Altiora Infotech | E-Commerce Digital Marketing in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian e-commerce businesses, Shopify stores, and online retailers grow revenue through SEO, Google Shopping Ads, Meta Ads, email marketing, conversion rate optimization, content marketing, and AEO.",
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
        { "@type": "City", "name": "Richmond" },
        { "@type": "City", "name": "Langley" },
        { "@type": "City", "name": "Abbotsford" },
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
        "E-Commerce Marketing",
        "E-Commerce SEO",
        "Shopify SEO",
        "Google Shopping Ads",
        "Meta Ads",
        "Conversion Rate Optimization",
        "Email Marketing for E-Commerce",
        "Content Marketing",
        "Customer Acquisition",
        "Customer Retention",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization for E-Commerce"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "E-Commerce Businesses, Shopify Stores, WooCommerce Businesses, Direct-to-Consumer Brands, Online Retailers, Subscription Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada/#service",
      "name": "Digital Marketing Services for E-Commerce Businesses in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada",
      "description": "Strategic e-commerce marketing for Canadian online stores including SEO, Shopify SEO, Google Shopping Ads, Meta Ads, conversion rate optimization, email marketing, content marketing, and AEO.",
      "serviceType": "E-Commerce Marketing, SEO, Shopify SEO, Google Shopping Ads, Meta Ads, Conversion Rate Optimization, Email Marketing, Content Marketing, AEO",
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
        "audienceType": "E-Commerce Businesses, Shopify Stores, Online Retailers, Direct-to-Consumer Brands, Subscription Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "E-Commerce Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce SEO Services", "description": "Improve rankings for product, category, and transactional keywords that drive revenue." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify SEO Services", "description": "Optimize Shopify stores for search visibility, user experience, and conversion performance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Shopping Ads", "description": "Generate immediate traffic from customers actively searching for products." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Management", "description": "Drive sales through Facebook and Instagram advertising campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization (CRO)", "description": "Increase the percentage of visitors who become customers." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing Services", "description": "Build stronger customer relationships through welcome sequences, cart recovery, retention, promotional, and loyalty campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing", "description": "Create product-focused content that improves rankings and customer trust." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO and GEO Services", "description": "Help your products and brand appear within AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing for E-Commerce Businesses in Canada", "item": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is digital marketing for e-commerce businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing for e-commerce businesses uses SEO, advertising, email marketing, CRO, and content strategies to increase traffic, sales, and customer retention." } },
        { "@type": "Question", "name": "How much does e-commerce marketing cost in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary based on goals, competition, advertising spend, and service requirements." } },
        { "@type": "Question", "name": "What is the best marketing channel for e-commerce?", "acceptedAnswer": { "@type": "Answer", "text": "A combination of SEO, Google Shopping Ads, Meta Ads, email marketing, and content marketing typically delivers the strongest results." } },
        { "@type": "Question", "name": "Is Shopify good for SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Shopify provides a strong SEO foundation when properly optimized." } },
        { "@type": "Question", "name": "How long does e-commerce SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses begin seeing measurable improvements within three to six months." } },
        { "@type": "Question", "name": "What is conversion rate optimization?", "acceptedAnswer": { "@type": "Answer", "text": "CRO focuses on improving the percentage of website visitors who complete desired actions such as purchases." } },
        { "@type": "Question", "name": "Are Google Shopping Ads worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Shopping campaigns target high-intent buyers and often deliver strong returns on investment." } },
        { "@type": "Question", "name": "What is the customer lifetime value?", "acceptedAnswer": { "@type": "Answer", "text": "Customer lifetime value measures the total revenue generated by a customer throughout their relationship with your business." } },
        { "@type": "Question", "name": "What is AEO for e-commerce businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps businesses appear within AI-powered search platforms such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Can AI help customers discover products?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI-powered search is becoming a major product discovery channel and influences purchasing decisions." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada/#howto",
      "name": "The E-Commerce Growth Formula",
      "description": "A proven 4-step growth framework for Canadian e-commerce businesses and online stores.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Build Your Brand", "text": "Develop a strong brand identity that differentiates your business from competitors." },
        { "@type": "HowToStep", "position": 2, "name": "Increase Visibility", "text": "Improve discoverability through SEO, Google Shopping, content marketing, and social media." },
        { "@type": "HowToStep", "position": 3, "name": "Generate Revenue", "text": "Use paid advertising and optimized customer journeys to increase sales." },
        { "@type": "HowToStep", "position": 4, "name": "Scale Profitably", "text": "Continuously improve performance using data-driven optimization." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada/#services",
      "name": "Services We Provide for E-Commerce Businesses in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "E-Commerce SEO Services", "description": "Improve rankings for product, category, and transactional keywords that drive revenue." },
        { "@type": "ListItem", "position": 2, "name": "Shopify SEO Services", "description": "Optimize Shopify stores for search visibility, user experience, and conversion performance." },
        { "@type": "ListItem", "position": 3, "name": "Google Shopping Ads", "description": "Generate immediate traffic from customers actively searching for products." },
        { "@type": "ListItem", "position": 4, "name": "Meta Ads Management", "description": "Drive sales through Facebook and Instagram advertising campaigns." },
        { "@type": "ListItem", "position": 5, "name": "Conversion Rate Optimization (CRO)", "description": "Increase the percentage of visitors who become customers." },
        { "@type": "ListItem", "position": 6, "name": "Email Marketing Services", "description": "Build stronger customer relationships through welcome sequences, cart recovery, retention, promotional, and loyalty campaigns." },
        { "@type": "ListItem", "position": 7, "name": "Content Marketing", "description": "Create product-focused content that improves rankings and customer trust." },
        { "@type": "ListItem", "position": 8, "name": "AEO and GEO Services", "description": "Help your products and brand appear within AI-powered search experiences including ChatGPT, Gemini, Perplexity, and Google AI Overviews." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada",
      "name": "Digital Marketing for E-Commerce Businesses in Canada | Altiora Infotech",
      "description": "Digital marketing for e-commerce businesses in Canada using SEO, Google Shopping Ads, Meta Ads, email marketing, conversion rate optimization, content marketing, and AEO to increase traffic, sales, and customer lifetime value.",
      "datePublished": "2026-06-19",
      "dateModified": "2026-06-19",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-for-ecommerce-businesses-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing for E-Commerce Businesses in Canada" },
        { "@type": "Thing", "name": "E-Commerce Marketing" },
        { "@type": "Thing", "name": "Shopify Marketing" },
        { "@type": "Thing", "name": "Conversion Rate Optimization" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "E-Commerce SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Google Shopping Ads" },
        { "@type": "Thing", "name": "Meta Ads" },
        { "@type": "Thing", "name": "Email Marketing" },
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

export default function EcommerceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceMarketingSchema) }}
      />
      <EcommerceMarketingClientPage />
    </>
  );
}
