import { Metadata } from 'next';
import GmbManagementClientPage from './_components/GmbManagementClientPage';

export const metadata: Metadata = {
  title: 'Google My Business Management Services | Altiora Infotech',
  description: 'Professional Google My Business Management Services in Canada. We optimize your Google Business Profile, improve Google Maps rankings, manage reviews, strengthen local SEO, and generate more local leads.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/google-my-business-management-services",
  },
  openGraph: {
    title: "Google My Business Management Services | Altiora Infotech",
    description: "Professional Google My Business Management Services in Canada. We optimize your Google Business Profile, improve Google Maps rankings, manage reviews, strengthen local SEO, and generate more local leads.",
    url: "https://altiorainfotech.ca/services/google-my-business-management-services",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Google My Business Management Services" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google My Business Management Services | Altiora Infotech",
    description: "Professional Google My Business Management Services in Canada. We optimize your Google Business Profile, improve Google Maps rankings, manage reviews, strengthen local SEO, and generate more local leads.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const gmbManagementSchema = {
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
      "@id": "https://altiorainfotech.ca/services/google-my-business-management-services/#business",
      "name": "Altiora Infotech | Google My Business Management Services in Canada",
      "url": "https://altiorainfotech.ca/services/google-my-business-management-services",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian businesses optimize, manage, and grow their Google Business Profile through profile optimization, local SEO, review and reputation management, content publishing, citation management, Google Maps optimization, and AEO.",
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
        "Google My Business Management",
        "Google Business Profile Optimization",
        "Local SEO",
        "Google Maps Optimization",
        "Review Management",
        "Reputation Management",
        "Citation Management",
        "Content Publishing",
        "Multi-Location Management",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Local Search Marketing",
        "AI Search Optimization for Local Business"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Restaurants, Healthcare Providers, Real Estate Companies, Immigration Consultants, Law Firms, Contractors, Home Service Businesses, Retail Stores, Professional Service Providers, Multi-Location Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/google-my-business-management-services/#service",
      "name": "Google My Business Management Services in Canada",
      "url": "https://altiorainfotech.ca/services/google-my-business-management-services",
      "description": "Professional Google My Business management services for Canadian businesses including Google Business Profile optimization, local SEO, review management, Google Maps optimization, citation management, content publishing, multi-location management, and AEO.",
      "serviceType": "Google My Business Management, Google Business Profile Optimization, Local SEO, Google Maps Optimization, Review Management, Citation Management, AEO",
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
        "audienceType": "Restaurants, Healthcare Providers, Real Estate Companies, Immigration Consultants, Law Firms, Contractors, Home Service Businesses, Retail Stores, Professional Service Providers, Multi-Location Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Google My Business Management Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Optimization", "description": "Improve visibility and profile completeness across business information, categories, services, descriptions, and images." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Services", "description": "Strengthen local search rankings and visibility through local keyword optimization and location relevance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Review Management", "description": "Monitor, respond to, and improve customer reviews to build trust and strengthen ranking signals." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Maps Optimization", "description": "Increase rankings within Google Maps search results and the local map pack." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Citation Management", "description": "Ensure business information remains consistent across online directories." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Publishing", "description": "Publish regular profile updates, promotions, events, and announcements." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-Location Management", "description": "Manage and optimize multiple business locations efficiently." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO and GEO Optimization", "description": "Improve visibility across AI-powered search experiences including ChatGPT, Gemini, Perplexity, and Google AI Overviews." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Google My Business Management Services", "item": "https://altiorainfotech.ca/services/google-my-business-management-services" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Google My Business?", "acceptedAnswer": { "@type": "Answer", "text": "Google My Business, now called Google Business Profile, is a free business listing that helps companies appear in Google Search and Google Maps." } },
        { "@type": "Question", "name": "Why is Google Business Profile important?", "acceptedAnswer": { "@type": "Answer", "text": "It helps customers find your business, contact you, visit your website, and request directions." } },
        { "@type": "Question", "name": "How does Google My Business management help businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Professional management improves visibility, rankings, customer engagement, and lead generation." } },
        { "@type": "Question", "name": "Can Google Business Profile improve local SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Business Profile optimization is one of the most important local SEO ranking factors." } },
        { "@type": "Question", "name": "How often should a Google Business Profile be updated?", "acceptedAnswer": { "@type": "Answer", "text": "Profiles should be updated regularly with new photos, posts, service updates, and business information." } },
        { "@type": "Question", "name": "Do reviews affect Google rankings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Reviews are a significant local search ranking factor and influence customer decisions." } },
        { "@type": "Question", "name": "How long does local SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses begin seeing measurable improvements within three to six months." } },
        { "@type": "Question", "name": "Can Google Business Profile generate leads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Optimized profiles often generate calls, website visits, appointment requests, and customer inquiries." } },
        { "@type": "Question", "name": "What is Google Maps optimization?", "acceptedAnswer": { "@type": "Answer", "text": "Google Maps optimization focuses on improving rankings and visibility within local map search results." } },
        { "@type": "Question", "name": "What is AEO for local businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps businesses appear in AI-powered search results across ChatGPT, Gemini, Perplexity, and Google AI Overviews." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/google-my-business-management-services/#howto",
      "name": "The Local Growth Formula for Google Business Profile Success",
      "description": "A proven 4-step framework for improving local visibility and generating more leads through Google My Business management.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Optimize Your Profile", "text": "Ensure all profile information is complete, accurate, and optimized." },
        { "@type": "HowToStep", "position": 2, "name": "Improve Local Visibility", "text": "Strengthen local search signals through optimization and content updates." },
        { "@type": "HowToStep", "position": 3, "name": "Build Trust", "text": "Increase positive reviews and improve customer engagement." },
        { "@type": "HowToStep", "position": 4, "name": "Generate More Leads", "text": "Convert local visibility into calls, inquiries, appointments, and sales." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/google-my-business-management-services/#services",
      "name": "Services Included in Our Google My Business Management Services",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Google Business Profile Optimization", "description": "Improve visibility and profile completeness." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO Services", "description": "Strengthen local search rankings and visibility." },
        { "@type": "ListItem", "position": 3, "name": "Review Management", "description": "Monitor, respond to, and improve customer reviews." },
        { "@type": "ListItem", "position": 4, "name": "Google Maps Optimization", "description": "Increase rankings within Google Maps search results." },
        { "@type": "ListItem", "position": 5, "name": "Citation Management", "description": "Ensure business information remains consistent across online directories." },
        { "@type": "ListItem", "position": 6, "name": "Content Publishing", "description": "Publish regular profile updates, promotions, events, and announcements." },
        { "@type": "ListItem", "position": 7, "name": "Multi-Location Management", "description": "Manage and optimize multiple business locations efficiently." },
        { "@type": "ListItem", "position": 8, "name": "AEO and GEO Optimization", "description": "Improve visibility across AI-powered search experiences including ChatGPT, Gemini, Perplexity, and Google AI Overviews." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/google-my-business-management-services/#webpage",
      "url": "https://altiorainfotech.ca/services/google-my-business-management-services",
      "name": "Google My Business Management Services | Altiora Infotech",
      "description": "Professional Google My Business Management Services in Canada. We optimize your Google Business Profile, improve Google Maps rankings, manage reviews, strengthen local SEO, and generate more local leads.",
      "datePublished": "2026-06-19",
      "dateModified": "2026-06-19",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/google-my-business-management-services/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Google My Business Management" },
        { "@type": "Thing", "name": "Google Business Profile Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Maps Optimization" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Google Business Profile" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Maps" },
        { "@type": "Thing", "name": "Review Management" },
        { "@type": "Thing", "name": "Reputation Management" },
        { "@type": "Thing", "name": "Citation Management" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "Thing", "name": "Google AI Overviews" }
      ]
    }
  ]
};

export default function GmbManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gmbManagementSchema) }}
      />
      <GmbManagementClientPage />
    </>
  );
}
