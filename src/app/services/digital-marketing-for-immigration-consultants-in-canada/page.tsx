import { Metadata } from 'next';
import ImmigrationMarketingClientPage from './_components/ImmigrationMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing for Immigration Consultants in Canada | Generate More Clients',
  description: 'Attract more consultation requests with digital marketing for immigration consultants in Canada. Improve visibility through SEO, Google Ads, content marketing, social media, AEO, and lead generation strategies.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada",
  },
  openGraph: {
    title: "Digital Marketing for Immigration Consultants in Canada | Generate More Clients",
    description: "Attract more consultation requests with digital marketing for immigration consultants in Canada. Improve visibility through SEO, Google Ads, content marketing, social media, AEO, and lead generation strategies.",
    url: "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing for Immigration Consultants in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Immigration Consultants in Canada | Generate More Clients",
    description: "Attract more consultation requests with digital marketing for immigration consultants in Canada. Improve visibility through SEO, Google Ads, content marketing, social media, AEO, and lead generation strategies.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const immigrationSchema = {
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
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada/#business",
      "name": "Altiora Infotech | Digital Marketing for Immigration Consultants in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Results-focused Digital Marketing Company helping immigration consultants, RCICs, immigration firms, and visa specialists across Canada attract more clients through SEO, Google Ads, social media, website development, content marketing, and AEO.",
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
        "Immigration Consultant Marketing",
        "SEO for Immigration Consultants",
        "Immigration Lead Generation",
        "Google Ads for Immigration Services",
        "Social Media Marketing for Immigration Consultants",
        "Immigration Website Development",
        "Content Marketing for Immigration",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Local SEO for Immigration Services",
        "RCIC Marketing",
        "AI Search Optimization for Immigration"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Immigration Consultants, RCICs, Immigration Firms, Visa Specialists, Immigration Lawyers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada/#service",
      "name": "Digital Marketing for Immigration Consultants in Canada",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada",
      "description": "Trusted Digital Marketing Company in Canada helping immigration consultants and RCICs generate more consultations through SEO, paid advertising, social media, website development, video production, branding, and AEO strategies.",
      "serviceType": "Digital Marketing, SEO, PPC, Social Media Marketing, Lead Generation, Website Development, Video Production, AEO, Content Marketing",
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
        "audienceType": "Immigration Consultants, RCICs, Immigration Firms, Visa Specialists, Immigration Lawyers",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services for Immigration Consultants in Canada",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO for Immigration Consultants", "description": "Improve search rankings for immigration-related searches to attract more qualified consultation requests." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising for Immigration Services", "description": "Generate immediate qualified consultation inquiries through targeted Google Ads and Meta campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing for Immigration Consultants", "description": "Build authority and engage audiences across Facebook, Instagram, LinkedIn, YouTube, and TikTok." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Immigration Website Development", "description": "Professional, conversion-focused immigration websites with lead generation forms and educational resources." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Marketing for Immigration Professionals", "description": "Educate prospective clients through immigration process explanations, program updates, and success stories." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Graphic Design for Immigration Practices", "description": "Strong and trustworthy brand identity across digital and print platforms." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO & GEO for Immigration Services", "description": "Improve visibility in ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing for Immigration Consultants in Canada", "item": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is digital marketing for immigration consultants?", "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing for immigration consultants uses SEO, paid advertising, content marketing, social media, and website optimization to generate qualified client inquiries and increase visibility." } },
        { "@type": "Question", "name": "How much does marketing cost for immigration consultants?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on services, competition, and growth objectives. Most successful practices invest in a combination of SEO, content marketing, and paid advertising." } },
        { "@type": "Question", "name": "How long does SEO take for immigration consultants?", "acceptedAnswer": { "@type": "Answer", "text": "Most SEO campaigns begin showing measurable improvements within three to six months, depending on competition and website authority." } },
        { "@type": "Question", "name": "What marketing channel works best for immigration consultants?", "acceptedAnswer": { "@type": "Answer", "text": "SEO and Google Ads often generate the highest-intent consultation inquiries, while content marketing and social media help build authority and trust." } },
        { "@type": "Question", "name": "Can digital marketing help new immigration consultants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Digital marketing allows new consultants to establish visibility, build credibility, and generate consultations without relying solely on referrals." } },
        { "@type": "Question", "name": "Are Google Ads worth it for immigration services?", "acceptedAnswer": { "@type": "Answer", "text": "When managed correctly, Google Ads can generate highly qualified consultation requests and provide a strong return on investment." } },
        { "@type": "Question", "name": "What is AEO for immigration consultants?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps businesses appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Do immigration consultants need a website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A professional website supports SEO, builds trust, provides educational resources, and converts visitors into consultation requests." } },
        { "@type": "Question", "name": "Can content marketing generate immigration leads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Educational content helps answer common questions, build authority, and attract prospective clients actively researching immigration options." } },
        { "@type": "Question", "name": "Do you work with independent consultants and firms?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with independent RCICs, immigration firms, visa specialists, and multi-consultant organizations across Canada." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada/#howto",
      "name": "How to Grow Your Immigration Practice with Digital Marketing in Canada",
      "description": "A proven 4-step digital marketing framework for Canadian immigration consultants to build practice authority, generate qualified consultations, and achieve sustainable growth.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Position Your Practice", "text": "Build a professional and trustworthy brand that demonstrates expertise and credibility." },
        { "@type": "HowToStep", "position": 2, "name": "Build Your Digital Presence", "text": "Develop visibility through SEO, content marketing, local SEO, and website optimization." },
        { "@type": "HowToStep", "position": 3, "name": "Generate Qualified Consultations", "text": "Use targeted campaigns and lead generation strategies to attract individuals actively seeking immigration assistance." },
        { "@type": "HowToStep", "position": 4, "name": "Scale Consistently", "text": "Leverage performance data and continuous optimization to improve results and increase return on investment." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada/#services",
      "name": "Digital Marketing Services for Immigration Consultants in Canada by Altiora Infotech",
      "description": "Comprehensive digital marketing services for Canadian immigration consultants including SEO, PPC, social media, website development, video marketing, branding, and AEO.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO for Immigration Consultants", "description": "Improve search rankings and increase organic visibility for immigration-related searches through proven SEO strategies." },
        { "@type": "ListItem", "position": 2, "name": "Paid Advertising for Immigration Services", "description": "Generate immediate qualified consultation inquiries through highly targeted Google Ads and Meta advertising campaigns." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing for Immigration Consultants", "description": "Build authority and engage audiences across Facebook, Instagram, LinkedIn, YouTube, and TikTok." },
        { "@type": "ListItem", "position": 4, "name": "Immigration Website Development", "description": "Create professional, conversion-focused immigration websites with lead generation forms, service pages, and resource centers." },
        { "@type": "ListItem", "position": 5, "name": "Video Marketing for Immigration Professionals", "description": "Educate prospective clients through immigration process explanations, program updates, and client success stories." },
        { "@type": "ListItem", "position": 6, "name": "Branding & Graphic Design", "description": "Create a strong and trustworthy brand identity across digital and print platforms." },
        { "@type": "ListItem", "position": 7, "name": "AEO & GEO for Immigration Services", "description": "Improve visibility in AI-powered search experiences including ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada",
      "name": "Digital Marketing for Immigration Consultants in Canada | Generate More Clients | Altiora Infotech",
      "description": "Attract more consultation requests with digital marketing for immigration consultants in Canada. Improve visibility through SEO, Google Ads, content marketing, social media, AEO, and lead generation strategies.",
      "datePublished": "2026-06-16",
      "dateModified": "2026-06-16",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/digital-marketing-for-immigration-consultants-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Digital Marketing Services for Immigration Consultants in Canada" },
        { "@type": "Thing", "name": "Immigration Consultant Lead Generation" },
        { "@type": "Thing", "name": "RCIC Marketing" },
        { "@type": "Thing", "name": "Local SEO for Immigration Services" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Immigration Lead Generation Canada" },
        { "@type": "Thing", "name": "Google Ads for Immigration Services" },
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

export default function ImmigrationMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(immigrationSchema) }}
      />
      <ImmigrationMarketingClientPage />
    </>
  );
}
