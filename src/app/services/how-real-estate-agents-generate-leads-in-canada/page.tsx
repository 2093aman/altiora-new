import { Metadata } from 'next';
import RealEstateLeadGenClientPage from './_components/RealEstateLeadGenClientPage';

export const metadata: Metadata = {
  title: 'How Real Estate Agents Generate Leads in Canada | Proven Strategies',
  description: 'Discover how real estate agents generate leads in Canada using SEO, Google Ads, social media marketing, content marketing, referrals, AEO, and lead generation strategies that drive long-term growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada",
  },
  openGraph: {
    title: "How Real Estate Agents Generate Leads in Canada | Proven Strategies",
    description: "Discover how real estate agents generate leads in Canada using SEO, Google Ads, social media marketing, content marketing, referrals, AEO, and lead generation strategies that drive long-term growth.",
    url: "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "How Real Estate Agents Generate Leads in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Real Estate Agents Generate Leads in Canada | Proven Strategies",
    description: "Discover how real estate agents generate leads in Canada using SEO, Google Ads, social media marketing, content marketing, referrals, AEO, and lead generation strategies that drive long-term growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const realEstateLeadGenSchema = {
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
      "@id": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada/#business",
      "name": "Altiora Infotech | Real Estate Lead Generation in Canada",
      "url": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian realtors, teams, and brokerages generate qualified leads through SEO, Google Ads, social media marketing, content marketing, video production, website development, email marketing, and AEO.",
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
        "Real Estate Lead Generation",
        "Real Estate SEO",
        "Google Ads for Realtors",
        "Social Media Marketing for Real Estate",
        "Video Marketing for Realtors",
        "Real Estate Website Development",
        "Content Marketing for Realtors",
        "Email Marketing for Real Estate",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Local SEO for Real Estate",
        "AI Search Optimization for Real Estate",
        "Referral Marketing"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Real Estate Agents, Realtors, Real Estate Brokers, Real Estate Teams, Real Estate Brokerages",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada/#service",
      "name": "Real Estate Lead Generation Services in Canada",
      "url": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada",
      "description": "Proven lead generation strategies for Canadian realtors, teams, and brokerages including SEO, Google Ads, social media, video marketing, content marketing, website development, email marketing, and AEO.",
      "serviceType": "Real Estate Lead Generation, SEO, PPC, Social Media Marketing, Video Marketing, Content Marketing, Website Development, AEO",
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
        "audienceType": "Real Estate Agents, Realtors, Brokers, Real Estate Teams, Real Estate Brokerages",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Real Estate Lead Generation Strategies",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO and Local Search for Realtors", "description": "Long-term lead generation through organic rankings for local and industry-related real estate searches." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads for Real Estate Agents", "description": "Immediate visibility for high-intent searches from buyers and sellers actively seeking agent services." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing for Realtors", "description": "Brand authority and audience engagement across Instagram, Facebook, LinkedIn, TikTok, and YouTube." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Marketing for Real Estate", "description": "Property tours, neighbourhood guides, market updates, and educational content that generate inquiries." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Website Development", "description": "Conversion-focused websites with lead capture forms, landing pages, community pages, and CRM integration." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing for Realtors", "description": "Market reports, buying guides, selling guides, and neighbourhood content that build authority." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing for Real Estate", "description": "Market updates, new listings, community news, and investment opportunities to nurture long-term relationships." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AEO and AI Search Optimization", "description": "Improve visibility in ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Bing Copilot." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "How Real Estate Agents Generate Leads in Canada", "item": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best way for real estate agents to generate leads?", "acceptedAnswer": { "@type": "Answer", "text": "The most effective strategy combines SEO, Google Ads, social media marketing, referrals, content marketing, and website optimization." } },
        { "@type": "Question", "name": "Does SEO work for real estate lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO helps agents attract highly qualified traffic from people actively searching for real estate services." } },
        { "@type": "Question", "name": "Are Google Ads worth it for realtors?", "acceptedAnswer": { "@type": "Answer", "text": "When properly managed, Google Ads can generate highly targeted buyer and seller inquiries." } },
        { "@type": "Question", "name": "How long does SEO take to generate real estate leads?", "acceptedAnswer": { "@type": "Answer", "text": "Most campaigns begin showing measurable improvements within three to six months." } },
        { "@type": "Question", "name": "Can social media generate real estate leads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Social media helps build trust, increase visibility, and attract qualified prospects." } },
        { "@type": "Question", "name": "What role does content marketing play in lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Content marketing educates prospects, improves search visibility, and positions agents as trusted experts." } },
        { "@type": "Question", "name": "What is AEO in real estate marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization helps businesses appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." } },
        { "@type": "Question", "name": "Do new agents need digital marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Digital marketing helps new agents establish visibility and generate opportunities without relying solely on referrals." } },
        { "@type": "Question", "name": "Is a website necessary for lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. A professional website serves as a central hub for all marketing activities and lead capture efforts." } },
        { "@type": "Question", "name": "Can Altiora Infotech help generate real estate leads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build customized lead generation systems that help realtors attract qualified buyers and sellers while creating sustainable long-term growth." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada/#howto",
      "name": "How Real Estate Agents Generate Leads Consistently in Canada",
      "description": "A proven 4-step lead generation framework for Canadian realtors, teams, and brokerages.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Build Authority", "text": "Establish yourself as a trusted expert in your local market." },
        { "@type": "HowToStep", "position": 2, "name": "Increase Visibility", "text": "Appear where buyers and sellers are actively searching." },
        { "@type": "HowToStep", "position": 3, "name": "Capture Qualified Leads", "text": "Convert visitors into inquiries through effective marketing systems." },
        { "@type": "HowToStep", "position": 4, "name": "Nurture and Scale", "text": "Develop relationships and optimize performance to increase long-term results." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada/#strategies",
      "name": "The Best Ways Real Estate Agents Generate Leads in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO and Local Search", "description": "Helps agents rank for valuable local and industry-related searches to generate long-term organic leads." },
        { "@type": "ListItem", "position": 2, "name": "Google Ads", "description": "Provides immediate visibility for high-intent searches from buyers and sellers." },
        { "@type": "ListItem", "position": 3, "name": "Social Media Marketing", "description": "Builds brand authority and engages audiences across Instagram, Facebook, LinkedIn, TikTok, and YouTube." },
        { "@type": "ListItem", "position": 4, "name": "Video Marketing", "description": "Creates property tours, neighbourhood guides, and educational content that drives engagement and inquiries." },
        { "@type": "ListItem", "position": 5, "name": "Real Estate Website Development", "description": "Builds conversion-focused websites with lead capture forms, landing pages, and community content." },
        { "@type": "ListItem", "position": 6, "name": "Referral Marketing", "description": "Combines referral networks with digital presence to create a more predictable lead pipeline." },
        { "@type": "ListItem", "position": 7, "name": "Content Marketing", "description": "Attracts prospects through market reports, buying guides, selling guides, and neighbourhood content." },
        { "@type": "ListItem", "position": 8, "name": "Email Marketing", "description": "Nurtures leads and maintains relationships through market updates, new listings, and community news." },
        { "@type": "ListItem", "position": 9, "name": "AEO and AI Search Optimization", "description": "Improves visibility in AI-powered search experiences including ChatGPT, Gemini, Perplexity, Claude, Bing Copilot, and Google AI Overviews." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada",
      "name": "How Real Estate Agents Generate Leads in Canada | Proven Strategies | Altiora Infotech",
      "description": "Discover how real estate agents generate leads in Canada using SEO, Google Ads, social media marketing, content marketing, referrals, AEO, and lead generation strategies that drive long-term growth.",
      "datePublished": "2026-06-16",
      "dateModified": "2026-06-16",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/how-real-estate-agents-generate-leads-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Real Estate Lead Generation in Canada" },
        { "@type": "Thing", "name": "How Real Estate Agents Generate Leads" },
        { "@type": "Thing", "name": "Real Estate Marketing Strategies" },
        { "@type": "Thing", "name": "Local SEO for Real Estate" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Real Estate Lead Generation Canada" },
        { "@type": "Thing", "name": "Google Ads for Realtors" },
        { "@type": "Thing", "name": "Referral Marketing" },
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

export default function RealEstateLeadGenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateLeadGenSchema) }}
      />
      <RealEstateLeadGenClientPage />
    </>
  );
}
