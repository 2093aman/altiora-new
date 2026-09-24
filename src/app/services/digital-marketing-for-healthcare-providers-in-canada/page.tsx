import { Metadata } from 'next';
import HealthcareMarketingClientPage from './_components/HealthcareMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing for Healthcare Providers in Canada | Altiora Infotech',
  description: 'Digital marketing for healthcare providers in Canada using SEO, local SEO, Google Ads, website development, social media, reputation management, content marketing, and AEO to attract more patients and grow your practice.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada",
  },
  openGraph: {
    title: "Digital Marketing for Healthcare Providers in Canada | Altiora Infotech",
    description: "Digital marketing for healthcare providers in Canada using SEO, local SEO, Google Ads, website development, social media, reputation management, content marketing, and AEO to attract more patients and grow your practice.",
    url: "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing for Healthcare Providers in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Healthcare Providers in Canada | Altiora Infotech",
    description: "Digital marketing for healthcare providers in Canada using SEO, local SEO, Google Ads, website development, social media, reputation management, content marketing, and AEO to attract more patients and grow your practice.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const healthcareMarketingSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada/#business",
      "name": "Altiora Infotech | Digital Marketing for Healthcare Providers in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian healthcare providers, clinics, and healthcare organizations attract more patients through SEO, local SEO, Google Ads, website development, social media marketing, reputation management, content marketing, and AEO.",
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
        "Healthcare Marketing",
        "Healthcare SEO",
        "Local SEO for Healthcare Providers",
        "Google Ads for Healthcare",
        "Social Media Marketing for Healthcare",
        "Healthcare Website Development",
        "Content Marketing for Healthcare",
        "Online Reputation Management",
        "Google Business Profile Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization for Healthcare",
        "Patient Acquisition"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Family Physicians, Physiotherapy Clinics, Chiropractic Offices, Walk-In Clinics, Mental Health Practices, Dental Offices, Specialist Clinics, Healthcare Organizations",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada/#service",
      "name": "Digital Marketing Services for Healthcare Providers in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada",
      "description": "Strategic digital marketing for Canadian healthcare providers including SEO, local SEO, Google Ads, website development, social media marketing, reputation management, content marketing, and AEO to attract more patients and increase appointment bookings.",
      "serviceType": "Healthcare Marketing, SEO, Local SEO, Google Ads, Website Development, Social Media Marketing, Reputation Management, Content Marketing, AEO",
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
        "audienceType": "Family Physicians, Physiotherapy Clinics, Chiropractic Offices, Walk-In Clinics, Mental Health Practices, Dental Offices, Specialist Clinics, Healthcare Organizations",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Healthcare Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare SEO Services", "description": "Improve rankings for healthcare-related searches and patient acquisition keywords." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Services", "description": "Increase visibility in local search results and Google Maps." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management", "description": "Generate immediate patient inquiries through targeted healthcare advertising campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Build professional healthcare websites designed to increase trust and appointment bookings." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing", "description": "Strengthen patient engagement and community awareness through strategic content." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reputation Management", "description": "Monitor and improve online reviews and patient feedback." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing", "description": "Create educational content that improves visibility and builds authority." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO and GEO Services", "description": "Improve visibility across AI-powered search experiences and emerging healthcare discovery platforms." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing for Healthcare Providers in Canada", "item": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is digital marketing for healthcare providers?", "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing for healthcare providers uses SEO, advertising, content marketing, social media, and reputation management to attract patients and grow healthcare practices." } },
        { "@type": "Question", "name": "How much does healthcare marketing cost in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on practice size, competition, goals, and marketing services required." } },
        { "@type": "Question", "name": "Why is local SEO important for healthcare providers?", "acceptedAnswer": { "@type": "Answer", "text": "Most patients search for healthcare services within their local area. Local SEO improves visibility in those searches." } },
        { "@type": "Question", "name": "Can Google Ads help healthcare practices?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Properly managed campaigns can generate qualified patient inquiries and appointment requests." } },
        { "@type": "Question", "name": "How long does healthcare SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "Most healthcare practices begin seeing measurable improvements within three to six months." } },
        { "@type": "Question", "name": "What role do reviews play in healthcare marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Reviews help establish trust and influence patient decisions when choosing providers." } },
        { "@type": "Question", "name": "What is healthcare content marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Healthcare content marketing involves creating educational resources that help patients and improve search visibility." } },
        { "@type": "Question", "name": "What is Google Business Profile optimization?", "acceptedAnswer": { "@type": "Answer", "text": "It improves visibility in Google Maps and local search results, helping patients find your practice more easily." } },
        { "@type": "Question", "name": "What is AEO for healthcare providers?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps healthcare providers appear in AI-generated answers across platforms like ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Can AI search impact patient acquisition?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. More patients are using AI tools to research healthcare providers, treatments, and local healthcare services." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada/#howto",
      "name": "The Healthcare Growth Formula for Canadian Healthcare Providers",
      "description": "A proven 4-step healthcare marketing framework for Canadian clinics and healthcare organizations.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Build Trust", "text": "Establish credibility through professional branding, patient-focused messaging, and educational content." },
        { "@type": "HowToStep", "position": 2, "name": "Improve Visibility", "text": "Increase rankings through SEO, local SEO, Google Business Profile optimization, and content marketing." },
        { "@type": "HowToStep", "position": 3, "name": "Generate Patient Inquiries", "text": "Use paid advertising and strategic marketing campaigns to drive appointment requests." },
        { "@type": "HowToStep", "position": 4, "name": "Scale Sustainably", "text": "Continuously optimize performance using measurable patient acquisition data." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada/#services",
      "name": "Services We Provide for Healthcare Providers in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Healthcare SEO Services", "description": "Improve rankings for healthcare-related searches and patient acquisition keywords." },
        { "@type": "ListItem", "position": 2, "name": "Local SEO Services", "description": "Increase visibility in local search results and Google Maps." },
        { "@type": "ListItem", "position": 3, "name": "Google Ads Management", "description": "Generate immediate patient inquiries through targeted healthcare advertising campaigns." },
        { "@type": "ListItem", "position": 4, "name": "Website Development", "description": "Build professional healthcare websites designed to increase trust and appointment bookings." },
        { "@type": "ListItem", "position": 5, "name": "Social Media Marketing", "description": "Strengthen patient engagement and community awareness through strategic content." },
        { "@type": "ListItem", "position": 6, "name": "Reputation Management", "description": "Monitor and improve online reviews and patient feedback." },
        { "@type": "ListItem", "position": 7, "name": "Content Marketing", "description": "Create educational content that improves visibility and builds authority." },
        { "@type": "ListItem", "position": 8, "name": "AEO and GEO Services", "description": "Improve visibility across AI-powered search experiences and emerging healthcare discovery platforms." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada",
      "name": "Digital Marketing for Healthcare Providers in Canada | Altiora Infotech",
      "description": "Digital marketing for healthcare providers in Canada using SEO, local SEO, Google Ads, website development, social media, reputation management, content marketing, and AEO to attract more patients and grow your practice.",
      "datePublished": "2026-06-19",
      "dateModified": "2026-06-19",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-for-healthcare-providers-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing for Healthcare Providers in Canada" },
        { "@type": "Thing", "name": "Healthcare Marketing" },
        { "@type": "Thing", "name": "Patient Acquisition" },
        { "@type": "Thing", "name": "Local SEO for Healthcare" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Healthcare Marketing Canada" },
        { "@type": "Thing", "name": "Google Ads for Healthcare" },
        { "@type": "Thing", "name": "Online Reputation Management" },
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

export default function HealthcareMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareMarketingSchema) }}
      />
      <HealthcareMarketingClientPage />
    </>
  );
}
