import { Metadata } from 'next';
import RestaurantMarketingClientPage from './_components/RestaurantMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing for Restaurants in Canada | Altiora Infotech',
  description: 'Digital marketing for restaurants in Canada. We help restaurants attract more customers, increase reservations, and grow revenue through SEO, local SEO, Google Ads, social media marketing, website development, reputation management, and AEO.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Canada | Altiora Infotech",
    description: "Digital marketing for restaurants in Canada. We help restaurants attract more customers, increase reservations, and grow revenue through SEO, local SEO, Google Ads, social media marketing, website development, reputation management, and AEO.",
    url: "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing for Restaurants in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Restaurants in Canada | Altiora Infotech",
    description: "Digital marketing for restaurants in Canada. We help restaurants attract more customers, increase reservations, and grow revenue through SEO, local SEO, Google Ads, social media marketing, website development, reputation management, and AEO.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const restaurantMarketingSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada/#business",
      "name": "Altiora Infotech | Digital Marketing for Restaurants in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian restaurants, cafes, bistros, fine dining establishments, food trucks, and franchises attract more customers through SEO, local SEO, Google Ads, social media marketing, reputation management, website development, video production, and AEO.",
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
        "Restaurant Marketing",
        "Restaurant SEO",
        "Local SEO for Restaurants",
        "Google Business Profile Optimization",
        "Google Maps Optimization",
        "Google Ads for Restaurants",
        "Social Media Marketing for Restaurants",
        "Reputation Management for Restaurants",
        "Restaurant Website Development",
        "Video Marketing for Restaurants",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization for Restaurants"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Restaurants, Cafes, Bistros, Fine Dining Establishments, Food Trucks, Franchises, Hospitality Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada/#service",
      "name": "Digital Marketing Services for Restaurants in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada",
      "description": "Strategic restaurant marketing for Canadian restaurants, cafes, bistros, fine dining, food trucks, and franchises including SEO, local SEO, Google Ads, social media marketing, reputation management, website development, video production, and AEO.",
      "serviceType": "Restaurant Marketing, SEO, Local SEO, Google Ads, Social Media Marketing, Reputation Management, Website Development, Video Production, AEO",
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
        "audienceType": "Restaurants, Cafes, Bistros, Fine Dining Establishments, Food Trucks, Franchises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Restaurant Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant SEO Services", "description": "Improve visibility for high-intent restaurant searches and increase organic traffic." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Services", "description": "Help restaurants rank higher in local search results and Google Maps." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management", "description": "Generate immediate reservations and customer inquiries through targeted campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing", "description": "Build awareness and engagement through Instagram, TikTok, Facebook, and YouTube." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reputation Management", "description": "Monitor and improve online reviews across major platforms." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Create fast, mobile-friendly websites designed to increase reservations and online orders." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production", "description": "Showcase food, atmosphere, customer experiences, and brand stories through engaging video content." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO and GEO Services", "description": "Increase visibility across AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing for Restaurants in Canada", "item": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is digital marketing for restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing for restaurants involves SEO, local SEO, Google Ads, social media marketing, reputation management, and website optimization to attract more customers and increase revenue." } },
        { "@type": "Question", "name": "How much does restaurant marketing cost in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on location, competition, goals, and services required. Most restaurants invest in a combination of SEO, local SEO, social media marketing, and advertising." } },
        { "@type": "Question", "name": "How long does restaurant SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Most restaurants begin seeing measurable SEO improvements within three to six months, depending on competition and website authority." } },
        { "@type": "Question", "name": "Is local SEO important for restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Local SEO helps restaurants appear in Google Maps, local search results, and location-based customer searches." } },
        { "@type": "Question", "name": "Can social media help restaurants grow?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Social media platforms help restaurants build awareness, showcase food, engage customers, and drive reservations." } },
        { "@type": "Question", "name": "Are Google Ads worth it for restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads can generate highly qualified traffic and immediate customer inquiries when properly managed." } },
        { "@type": "Question", "name": "What is Google Business Profile optimization?", "acceptedAnswer": { "@type": "Answer", "text": "Google Business Profile optimization improves visibility in Google Maps and local search results, helping restaurants attract nearby customers." } },
        { "@type": "Question", "name": "What is AEO for restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps restaurants appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Can AI help customers discover restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. More consumers are using AI tools to find restaurant recommendations, compare options, and discover dining experiences." } },
        { "@type": "Question", "name": "Do restaurants need a website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A professional website improves credibility, supports SEO, increases reservations, and serves as the foundation of your digital marketing strategy." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada/#howto",
      "name": "The Restaurant Growth Formula in Canada",
      "description": "A proven 4-step marketing framework for Canadian restaurants, cafes, bistros, and franchises.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Position Your Restaurant", "text": "Build a compelling brand that clearly communicates your unique dining experience." },
        { "@type": "HowToStep", "position": 2, "name": "Increase Visibility", "text": "Improve rankings through SEO, local SEO, Google Maps optimization, and social media marketing." },
        { "@type": "HowToStep", "position": 3, "name": "Generate Reservations and Orders", "text": "Use Google Ads, Meta Ads, local search, and content marketing to attract customers." },
        { "@type": "HowToStep", "position": 4, "name": "Scale and Optimize", "text": "Use performance data to continuously improve customer acquisition and increase profitability." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada/#services",
      "name": "Services We Provide for Restaurants in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Restaurant SEO Services", "description": "Improve visibility for high-intent restaurant searches and increase organic traffic." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO Services", "description": "Help your restaurant rank higher in local search results and Google Maps." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads Management", "description": "Generate immediate reservations and customer inquiries through targeted campaigns." },
        { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "description": "Build awareness and engagement through Instagram, TikTok, Facebook, and YouTube." },
        { "@type": "ListItem", "position": 5, "name": "Reputation Management", "description": "Monitor and improve online reviews across major platforms." },
        { "@type": "ListItem", "position": 6, "name": "Website Development", "description": "Create fast, mobile-friendly websites designed to increase reservations and online orders." },
        { "@type": "ListItem", "position": 7, "name": "Video Production", "description": "Showcase food, atmosphere, customer experiences, and brand stories through engaging video content." },
        { "@type": "ListItem", "position": 8, "name": "AEO and GEO Services", "description": "Increase visibility across AI-powered search experiences and future-proof your restaurant's digital presence." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada",
      "name": "Digital Marketing for Restaurants in Canada | Altiora Infotech",
      "description": "Digital marketing for restaurants in Canada. We help restaurants attract more customers, increase reservations, and grow revenue through SEO, local SEO, Google Ads, social media marketing, website development, reputation management, and AEO.",
      "datePublished": "2026-06-19",
      "dateModified": "2026-06-19",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-for-restaurants-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing for Restaurants in Canada" },
        { "@type": "Thing", "name": "Restaurant Marketing" },
        { "@type": "Thing", "name": "Restaurant SEO" },
        { "@type": "Thing", "name": "Local SEO for Restaurants" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Business Profile Optimization" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Google Ads for Restaurants" },
        { "@type": "Thing", "name": "Reputation Management" },
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

export default function RestaurantMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantMarketingSchema) }}
      />
      <RestaurantMarketingClientPage />
    </>
  );
}
