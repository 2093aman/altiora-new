import { Metadata } from 'next';
import OakvilleMarketingClientPage from './_components/OakvilleMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Oakville | Strategic Growth, High-Intent SEO & Digital Authority | Altiora Infotech',
  description: 'Strategic Growth, High-Intent SEO, and Digital Authority for Oakville & GTA Businesses. Altiora Infotech builds custom digital marketing strategies for companies looking to lead their market in Oakville and across Southern Ontario.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville",
  },
  openGraph: {
    title: "Digital Marketing Company in Oakville | Strategic Growth, High-Intent SEO & Digital Authority | Altiora Infotech",
    description: "Strategic Growth, High-Intent SEO, and Digital Authority for Oakville & GTA Businesses. Altiora Infotech builds custom digital marketing strategies for companies looking to lead their market in Oakville and across Southern Ontario.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Company in Oakville" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Oakville | Strategic Growth, High-Intent SEO & Digital Authority | Altiora Infotech",
    description: "Strategic Growth, High-Intent SEO, and Digital Authority for Oakville & GTA Businesses. Altiora Infotech builds custom digital marketing strategies for companies looking to lead their market in Oakville and across Southern Ontario.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const oakvilleSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#business",
      "name": "Altiora Infotech | Digital Marketing Company in Oakville",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company serving Oakville with high-intent SEO, pay-per-click advertising, conversion-focused website design, and content marketing for professional services, medical practices, luxury home services, and B2B technology companies.",
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
        "availableLanguage": ["English"]
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4675,
        "longitude": -79.6877
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
        { "@type": "City", "name": "Oakville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ontario" } },
        { "@type": "Place", "name": "Downtown Oakville" },
        { "@type": "Place", "name": "Kerr Village" },
        { "@type": "Place", "name": "Bronte" },
        { "@type": "Place", "name": "Mississauga" },
        { "@type": "Place", "name": "Burlington" },
        { "@type": "Place", "name": "Milton" }
      ],
      "knowsAbout": ["Local SEO", "Google Business Profile Optimization", "Technical SEO", "Google Search Ads", "Hyper-Targeted Social Advertising", "Conversion Rate Optimization", "Website Design and Conversion Architecture", "Content Marketing"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Professional Services, Medical Practices, Luxury Home Services, B2B Technology Companies",
        "geographicArea": { "@type": "City", "name": "Oakville" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#service",
      "name": "Digital Marketing Company in Oakville",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville",
      "description": "Trusted digital marketing company in Oakville providing high-intent SEO, pay-per-click advertising, website design and conversion architecture, and content marketing for businesses across the GTA.",
      "serviceType": "Digital Marketing, SEO, PPC, Website Design, Content Marketing",
      "category": "Digital Marketing",
      "areaServed": { "@type": "City", "name": "Oakville" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Professional Services, Medical Practices, Luxury Home Services, B2B Technology Companies",
        "geographicArea": { "@type": "City", "name": "Oakville" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Oakville Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay-Per-Click Advertising (PPC)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Conversion Architecture" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing and Thought Leadership" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Company in Oakville", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#howto",
      "name": "Our Step-by-Step Execution Framework for Oakville Businesses",
      "description": "A structured framework Altiora Infotech follows to deliver consistent, repeatable digital marketing outcomes for Oakville businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Audit & Local Competitive Discovery", "text": "Deep analysis of current rankings, technical debt, competitor backlink profiles, and market opportunities." },
        { "@type": "HowToStep", "position": 2, "name": "Technical Foundation & Architecture", "text": "Speed optimization, conversion page rebuilds, and precise search keyword mapping." },
        { "@type": "HowToStep", "position": 3, "name": "Campaign Launch & Multi-Channel Traffic", "text": "Local SEO rollout, targeted search ads, and continuous landing page refinement." },
        { "@type": "HowToStep", "position": 4, "name": "Measurement, Optimization & Scaling", "text": "Lead tracking audit, ROI attribution, and strategic budget reallocation to winning channels." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to see results from SEO in Oakville?",
          "acceptedAnswer": { "@type": "Answer", "text": "While paid advertising yields fast results, organic SEO typically takes between three to six months to show meaningful momentum. The exact timeline depends on your domain authority, technical setup, and the competitiveness of your niche in the local market." }
        },
        {
          "@type": "Question",
          "name": "Why shouldn't I just run Google Ads on my own?",
          "acceptedAnswer": { "@type": "Answer", "text": "Google Ads makes it simple to launch campaigns, but setting them up to deliver strong return on ad spend requires experience. Without negative keyword strategies, precise match types, ongoing bid management, and high-converting landing pages, ad budgets get wasted quickly on low-quality clicks." }
        },
        {
          "@type": "Question",
          "name": "How do you track and report campaign success?",
          "acceptedAnswer": { "@type": "Answer", "text": "We track metrics that directly align with your business goals: phone calls, contact form conversions, consultation requests, qualified pipeline value, and customer acquisition costs. You receive clear reports detailing performance, insights, and next steps." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#services",
      "name": "Core Digital Marketing Services in Oakville by Altiora Infotech",
      "description": "Full-funnel digital marketing solutions for Oakville businesses including SEO, PPC, website design and conversion architecture, and content marketing.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Search Engine Optimization (SEO)", "description": "Local Maps Optimization, technical SEO audits and execution, high-intent keyword architecture, and authority and link building." },
        { "@type": "ListItem", "position": 2, "name": "Pay-Per-Click Advertising (PPC)", "description": "Google Search Ads, hyper-targeted social advertising, and conversion rate optimization." },
        { "@type": "ListItem", "position": 3, "name": "Website Design and Conversion Architecture", "description": "Performance-first development, user experience for high conversions, and mobile-first responsive layouts." },
        { "@type": "ListItem", "position": 4, "name": "Content Marketing and Thought Leadership", "description": "Strategic content development, local market relevance, and customer journey mapping." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#industries",
      "name": "Industries Served in Oakville by Altiora Infotech",
      "description": "Key industries Altiora Infotech serves across Oakville, each with a tailored digital marketing execution model.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Professional Services (Legal, Financial, Consulting)", "description": "Authority-focused websites and high-intent SEO campaigns that establish firms as the leading authority in their category." },
        { "@type": "ListItem", "position": 2, "name": "Medical, Health, and Wellness", "description": "Compliant local search campaigns that keep appointment schedules full for clinics, dental practices, and wellness centers." },
        { "@type": "ListItem", "position": 3, "name": "Luxury Home Services and Construction", "description": "Marketing for custom builders, interior designers, landscape architects, and luxury renovators reaching affluent Oakville homeowners." },
        { "@type": "ListItem", "position": 4, "name": "B2B Technology and Corporate Services", "description": "Focused multi-channel strategies generating qualified business inquiries for corporate entities along the QEW and Winston Churchill corridor." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville",
      "name": "Digital Marketing Company in Oakville | Strategic Growth, High-Intent SEO & Digital Authority | Altiora Infotech",
      "description": "Strategic Growth, High-Intent SEO, and Digital Authority for Oakville & GTA Businesses. Altiora Infotech builds custom digital marketing strategies for companies looking to lead their market in Oakville and across Southern Ontario.",
      "inLanguage": "en-CA",
      "datePublished": "2026-07-23",
      "dateModified": "2026-07-23",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-oakville/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services in Oakville" },
        { "@type": "Thing", "name": "High-Intent SEO in Oakville" },
        { "@type": "Thing", "name": "Website Design and Conversion Architecture" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Website Design and Conversion Architecture" },
        { "@type": "Thing", "name": "Content Marketing" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Professional Services, Medical Practices, Luxury Home Services, B2B Technology Companies",
        "geographicArea": { "@type": "City", "name": "Oakville" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/digital-marketing-company-in-toronto",
        "https://altiorainfotech.ca/services/digital-marketing-company-in-mississauga",
        "https://altiorainfotech.ca/services/local-seo-services-in-canada"
      ]
    }
  ]
};

export default function DigitalMarketingCompanyOakvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oakvilleSchema) }}
      />
      <OakvilleMarketingClientPage />
    </>
  );
}
