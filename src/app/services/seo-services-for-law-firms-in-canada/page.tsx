import { Metadata } from 'next';
import LawFirmSeoClientPage from './_components/LawFirmSeoClientPage';

export const metadata: Metadata = {
  title: 'SEO Services for Law Firms in Canada | Altiora Infotech',
  description: 'SEO Services for Law Firms in Canada that help legal practices improve search rankings, generate qualified leads, increase consultations, and grow their client base through organic search and local SEO.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada",
  },
  openGraph: {
    title: "SEO Services for Law Firms in Canada | Altiora Infotech",
    description: "SEO Services for Law Firms in Canada that help legal practices improve search rankings, generate qualified leads, increase consultations, and grow their client base through organic search and local SEO.",
    url: "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "SEO Services for Law Firms in Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services for Law Firms in Canada | Altiora Infotech",
    description: "SEO Services for Law Firms in Canada that help legal practices improve search rankings, generate qualified leads, increase consultations, and grow their client base through organic search and local SEO.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const lawFirmSeoSchema = {
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
        "Law Firm SEO",
        "Legal Marketing",
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Services in Canada", "url": "https://altiorainfotech.ca/services/local-seo-services-in-canada" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Management", "url": "https://altiorainfotech.ca/services/google-my-business-management-services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services for Law Firms in Canada", "url": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada" } }
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
      "@id": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada/#business",
      "name": "Altiora Infotech | SEO Services for Law Firms in Canada",
      "url": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian law firms, solo practitioners, boutique firms, and multi-location legal practices generate qualified leads through SEO, local SEO, legal keyword research, on-page optimization, content marketing, and link building.",
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
        "Law Firm SEO",
        "Legal SEO",
        "Local SEO for Law Firms",
        "Legal Keyword Research",
        "On-Page SEO for Lawyers",
        "Legal Content Marketing",
        "Link Building for Law Firms",
        "Google Business Profile Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization for Law Firms",
        "Immigration Lawyer Marketing",
        "Family Lawyer Marketing",
        "Personal Injury Lawyer Marketing"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Law Firms, Lawyers, Legal Practices, Solo Practitioners, Boutique Law Firms, Multi-Location Legal Practices",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada/#service",
      "name": "SEO Services for Law Firms in Canada",
      "url": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada",
      "description": "Specialized SEO services for Canadian law firms including SEO audits, legal keyword research, on-page SEO, local SEO, legal content marketing, and link building to generate qualified legal leads.",
      "serviceType": "Law Firm SEO, Local SEO, Legal Keyword Research, On-Page SEO, Legal Content Marketing, Link Building",
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
        "audienceType": "Law Firms, Lawyers, Legal Practices, Solo Practitioners, Boutique Law Firms",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services for Law Firms We Provide",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Law Firm SEO Audit", "description": "SEO audits that identify technical, structural, local, keyword, and content opportunities impacting search visibility and lead generation." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legal Keyword Research", "description": "High-value keyword research around client intent and search demand for legal practice areas such as immigration, family, corporate, and personal injury law." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO Optimization", "description": "Optimization of practice area pages, attorney profiles, service pages, meta data, internal linking, and calls-to-action to improve rankings and conversions." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO for Law Firms", "description": "Google Business Profile optimization, local citations, location page optimization, local keyword targeting, and reputation management support." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legal Content Marketing", "description": "Legal guides, FAQs, blog articles, case studies, service pages, and practice area content that educate clients and improve rankings." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building and Authority Development", "description": "Acquisition of high-quality backlinks that improve authority and trust for competitive legal searches." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "SEO Services for Law Firms in Canada", "item": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are SEO Services for Law Firms in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "SEO Services for Law Firms in Canada help legal practices improve search rankings, generate qualified leads, and attract more clients through organic search." } },
        { "@type": "Question", "name": "Why is SEO important for lawyers?", "acceptedAnswer": { "@type": "Answer", "text": "Most legal clients begin their search online, making SEO one of the most effective client acquisition channels." } },
        { "@type": "Question", "name": "How long does law firm SEO take?", "acceptedAnswer": { "@type": "Answer", "text": "SEO is a long-term strategy, though many firms begin seeing measurable improvements within several months." } },
        { "@type": "Question", "name": "Can SEO generate legal consultations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO helps attract users actively searching for legal services, increasing consultation opportunities." } },
        { "@type": "Question", "name": "Is local SEO important for law firms?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Many legal searches have local intent, making local SEO a critical component of success." } },
        { "@type": "Question", "name": "How much do SEO Services for Law Firms in Canada cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing varies depending on competition, goals, and campaign scope." } },
        { "@type": "Question", "name": "Can SEO help immigration law firms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO can be highly effective for immigration lawyers, family lawyers, corporate lawyers, and other legal practices." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada/#howto",
      "name": "Our Law Firm SEO Process in Canada",
      "description": "A proven 4-step SEO process for Canadian law firms, solo practitioners, boutique firms, and multi-location legal practices.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discovery & Audit", "text": "We evaluate your firm, competitors, and target market, then run an SEO audit to identify strengths, weaknesses, and ranking opportunities." },
        { "@type": "HowToStep", "position": 2, "name": "Strategy Development", "text": "We create a customized SEO roadmap aligned with your business objectives and practice areas." },
        { "@type": "HowToStep", "position": 3, "name": "Optimization & Content", "text": "We implement technical improvements and content strategies that improve both rankings and conversions." },
        { "@type": "HowToStep", "position": 4, "name": "Authority Building & Reporting", "text": "We strengthen your website through strategic link acquisition and local SEO, then track performance and refine campaigns based on results." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada/#services",
      "name": "SEO Services for Law Firms We Provide in Canada",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Law Firm SEO Audit", "description": "Identifies technical SEO, website structure, competitor, local SEO, keyword, and content opportunities that impact search visibility and lead generation." },
        { "@type": "ListItem", "position": 2, "name": "Legal Keyword Research", "description": "Identifies high-value keywords built around client intent and search demand for legal practice areas." },
        { "@type": "ListItem", "position": 3, "name": "On-Page SEO Optimization", "description": "Optimizes practice area pages, attorney profiles, service pages, meta data, internal linking, and calls-to-action." },
        { "@type": "ListItem", "position": 4, "name": "Local SEO for Law Firms", "description": "Includes Google Business Profile optimization, local citations, location page optimization, local keyword targeting, and reputation management support." },
        { "@type": "ListItem", "position": 5, "name": "Legal Content Marketing", "description": "Creates legal guides, FAQs, blog articles, case studies, service pages, and practice area content to educate clients and improve rankings." },
        { "@type": "ListItem", "position": 6, "name": "Link Building and Authority Development", "description": "Acquires high-quality backlinks that improve authority and trust for competitive legal searches." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada",
      "name": "SEO Services for Law Firms in Canada | Altiora Infotech",
      "description": "SEO Services for Law Firms in Canada that help legal practices improve search rankings, generate qualified leads, increase consultations, and grow their client base through organic search and local SEO.",
      "datePublished": "2026-06-25",
      "dateModified": "2026-06-25",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/seo-services-for-law-firms-in-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "SEO Services for Law Firms in Canada" },
        { "@type": "Thing", "name": "Law Firm SEO" },
        { "@type": "Thing", "name": "Legal Marketing Strategies" },
        { "@type": "Thing", "name": "Local SEO for Law Firms" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Search Engine Optimization" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Legal Keyword Research" },
        { "@type": "Thing", "name": "Legal Content Marketing" },
        { "@type": "Thing", "name": "Link Building" },
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

export default function LawFirmSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lawFirmSeoSchema) }}
      />
      <LawFirmSeoClientPage />
    </>
  );
}
