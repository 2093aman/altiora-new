import { Metadata } from 'next';
import DentalMarketingClientPage from './_components/DentalMarketingClientPage';

export const metadata: Metadata = {
  title: 'Dental Marketing Services in Canada | Attract More Patients Online',
  description: 'Grow your dental practice with professional dental marketing services in Canada. Increase patient appointments through SEO, Google Ads, local SEO, social media marketing, website development, and AEO.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/dental-marketing-services-in-canada",
  },
  openGraph: {
    title: "Dental Marketing Services in Canada | Attract More Patients Online",
    description: "Grow your dental practice with professional dental marketing services in Canada. Increase patient appointments through SEO, Google Ads, local SEO, social media marketing, website development, and AEO.",
    url: "https://altiorainfotech.ca/services/dental-marketing-services-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Dental Marketing Services in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Marketing Services in Canada | Attract More Patients Online",
    description: "Grow your dental practice with professional dental marketing services in Canada. Increase patient appointments through SEO, Google Ads, local SEO, social media marketing, website development, and AEO.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const dentalSchema = {
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
      "@id": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada/#business",
      "name": "Altiora Infotech | Dental Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Professional dental marketing services helping dental clinics, family dentists, cosmetic dentists, orthodontists, and multi-location dental groups across Canada attract more patients through SEO, Google Ads, social media, website development, content marketing, and AEO.",
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
        "Dental Marketing",
        "Dental SEO",
        "Patient Acquisition",
        "Google Ads for Dentists",
        "Social Media Marketing for Dental Clinics",
        "Dental Website Development",
        "Local SEO for Dentists",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Reputation Management for Dental Practices",
        "Dental Content Marketing",
        "AI Search Optimization for Healthcare"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Dental Clinics, Family Dentists, Cosmetic Dentists, Orthodontists, Pediatric Dental Clinics, Dental Implant Specialists, Multi-Location Dental Groups",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada/#service",
      "name": "Dental Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada",
      "description": "Professional dental marketing company in Canada providing SEO, paid advertising, social media marketing, website development, video production, branding, and AEO strategies for dental clinics and practices.",
      "serviceType": "Dental Marketing, SEO, PPC, Social Media Marketing, Patient Acquisition, Website Development, Video Production, AEO",
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
        "audienceType": "Dental Clinics, Family Dentists, Cosmetic Dentists, Orthodontists, Pediatric Dental Clinics, Dental Implant Specialists, Multi-Location Dental Groups",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Marketing Services in Canada",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO for Dental Clinics", "description": "Improve search rankings for dental service searches to attract more qualified patient inquiries." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising for Dentists", "description": "Generate immediate patient inquiries through targeted Google Ads and Meta campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing for Dental Clinics", "description": "Build authority and engage patients across Instagram, Facebook, TikTok, YouTube, and LinkedIn." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dental Website Development", "description": "Professional, conversion-focused dental websites with appointment booking forms, service pages, and patient resources." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production for Dental Practices", "description": "Clinic tours, dentist introductions, patient testimonials, and educational treatment videos." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Graphic Design for Dental Practices", "description": "Professional and memorable dental practice identity across digital and print platforms." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO & GEO for Dental Clinics", "description": "Improve visibility in ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Dental Marketing Services in Canada", "item": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are dental marketing services?", "acceptedAnswer": { "@type": "Answer", "text": "Dental marketing services help clinics attract patients through SEO, Google Ads, social media marketing, content marketing, website development, and local search optimization." } },
        { "@type": "Question", "name": "How much does dental marketing cost in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on your market, competition, goals, and services required. Most clinics invest in a combination of SEO, advertising, and patient acquisition strategies." } },
        { "@type": "Question", "name": "How long does SEO take for dental clinics?", "acceptedAnswer": { "@type": "Answer", "text": "Most SEO campaigns begin producing measurable improvements within three to six months, depending on competition and existing website authority." } },
        { "@type": "Question", "name": "What marketing channel works best for dentists?", "acceptedAnswer": { "@type": "Answer", "text": "SEO and Google Ads often generate the highest-intent patient inquiries, while social media supports brand awareness and patient engagement." } },
        { "@type": "Question", "name": "Can digital marketing help new dental clinics?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Digital marketing helps new clinics establish visibility, build trust, and generate appointments without relying solely on referrals." } },
        { "@type": "Question", "name": "Are Google Ads effective for dental clinics?", "acceptedAnswer": { "@type": "Answer", "text": "When properly managed, Google Ads can generate highly qualified patient inquiries and deliver a strong return on investment." } },
        { "@type": "Question", "name": "What is AEO for dental practices?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps clinics appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Do dental clinics need a website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A professional website supports SEO, improves credibility, educates patients, and converts visitors into appointments." } },
        { "@type": "Question", "name": "Can content marketing help dental clinics grow?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Educational content builds authority, improves visibility, and helps prospective patients make informed decisions." } },
        { "@type": "Question", "name": "Do you work with all types of dental practices?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with family dentists, cosmetic dentists, orthodontists, pediatric dental clinics, implant specialists, and multi-location dental groups throughout Canada." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada/#howto",
      "name": "How to Grow Your Dental Practice with Digital Marketing in Canada",
      "description": "A proven 4-step dental marketing framework for Canadian dental clinics to build practice authority, generate new patient appointments, and achieve sustainable growth.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Position Your Practice", "text": "Build a professional and trustworthy brand that reflects the quality of care your clinic provides." },
        { "@type": "HowToStep", "position": 2, "name": "Build Your Digital Presence", "text": "Improve visibility through SEO, Google Maps optimization, website development, and content marketing." },
        { "@type": "HowToStep", "position": 3, "name": "Generate New Patient Appointments", "text": "Use paid advertising, local SEO, and patient-focused campaigns to attract qualified appointment requests." },
        { "@type": "HowToStep", "position": 4, "name": "Scale Consistently", "text": "Use performance data and ongoing optimization to improve results and increase return on investment." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada/#services",
      "name": "Dental Marketing Services in Canada by Altiora Infotech",
      "description": "Comprehensive dental marketing services for Canadian clinics including SEO, PPC, social media, website development, video production, branding, and AEO.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO for Dental Clinics", "description": "Improve search rankings and increase organic visibility for dental service searches through proven SEO strategies." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising for Dentists", "description": "Generate immediate qualified patient inquiries through highly targeted Google Ads and Meta advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing for Dental Clinics", "description": "Build authority and engage patients across Instagram, Facebook, TikTok, YouTube, and LinkedIn." },
        { "@type": "ListItem", "position": 4, "name": "Dental Website Development", "description": "Create professional, conversion-focused dental websites with appointment booking forms, service pages, and patient resources." },
        { "@type": "ListItem", "position": 5, "name": "Video Production for Dental Practices", "description": "Build trust through clinic tours, dentist introductions, patient testimonials, and educational treatment videos." },
        { "@type": "ListItem", "position": 6, "name": "Branding & Graphic Design", "description": "Create a professional and memorable dental practice identity across digital and print platforms." },
        { "@type": "ListItem", "position": 7, "name": "AEO & GEO for Dental Clinics", "description": "Improve visibility in AI-powered search experiences including ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada",
      "name": "Dental Marketing Services in Canada | Attract More Patients Online | Altiora Infotech",
      "description": "Grow your dental practice with professional dental marketing services in Canada. Increase patient appointments through SEO, Google Ads, local SEO, social media marketing, website development, and AEO.",
      "datePublished": "2026-06-16",
      "dateModified": "2026-06-16",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/dental-marketing-services-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Dental Marketing Services in Canada" },
        { "@type": "Thing", "name": "Patient Acquisition for Dental Clinics" },
        { "@type": "Thing", "name": "Dental SEO" },
        { "@type": "Thing", "name": "Local SEO for Dentists" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Patient Acquisition Canada" },
        { "@type": "Thing", "name": "Google Ads for Dentists" },
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

export default function DentalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalSchema) }}
      />
      <DentalMarketingClientPage />
    </>
  );
}
