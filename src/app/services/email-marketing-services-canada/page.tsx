import { Metadata } from 'next';
import EmailMarketingClientPage from './_components/EmailMarketingClientPage';

export const metadata: Metadata = {
  title: 'Email Marketing Services Canada | Altiora Infotech',
  description: 'Drive more revenue with strategic Email Marketing Services Canada. Altiora Infotech builds email automation, segmentation, lead nurturing, and retention campaigns that generate leads and increase customer lifetime value.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/email-marketing-services-canada",
  },
  openGraph: {
    title: "Email Marketing Services Canada | Altiora Infotech",
    description: "Drive more revenue with strategic Email Marketing Services Canada. Altiora Infotech builds email automation, segmentation, lead nurturing, and retention campaigns that generate leads and increase customer lifetime value.",
    url: "https://altiorainfotech.ca/services/email-marketing-services-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Email Marketing Services Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Services Canada | Altiora Infotech",
    description: "Drive more revenue with strategic Email Marketing Services Canada. Altiora Infotech builds email automation, segmentation, lead nurturing, and retention campaigns that generate leads and increase customer lifetime value.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const emailMarketingSchema = {
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
      "@id": "https://altiorainfotech.ca/services/email-marketing-services-canada/#business",
      "name": "Altiora Infotech | Email Marketing Services Canada",
      "url": "https://altiorainfotech.ca/services/email-marketing-services-canada",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "logo": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Helping Canadian businesses generate leads, increase customer retention, and drive revenue through strategic email marketing, automation, segmentation, lead nurturing, copywriting, design, and performance optimization.",
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
        "Email Marketing",
        "Email Automation",
        "Audience Segmentation",
        "Lead Nurturing",
        "Customer Retention Marketing",
        "Abandoned Cart Recovery",
        "Email Copywriting",
        "Email Design",
        "Newsletter Management",
        "Marketing Automation",
        "Customer Lifetime Value",
        "Email Performance Optimization"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "E-Commerce Businesses, Healthcare Providers, Restaurants, Real Estate Companies, Immigration Consultants, Professional Services, Law Firms, Educational Institutions, Financial Services, Local Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      }
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/email-marketing-services-canada/#service",
      "name": "Email Marketing Services in Canada",
      "url": "https://altiorainfotech.ca/services/email-marketing-services-canada",
      "description": "Strategic email marketing services for Canadian businesses including email strategy, automation, audience segmentation, newsletter management, lead nurturing, customer retention campaigns, abandoned cart recovery, copywriting, design, and performance reporting.",
      "serviceType": "Email Marketing, Email Automation, Audience Segmentation, Lead Nurturing, Customer Retention, Abandoned Cart Recovery, Email Copywriting, Email Design, Performance Reporting",
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
        "audienceType": "E-Commerce Businesses, Healthcare Providers, Restaurants, Real Estate Companies, Professional Services, Local Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Email Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing Strategy", "description": "Develop customized strategies designed to support business growth." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Automation Services", "description": "Build automated customer journeys that save time and improve engagement." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Newsletter Management", "description": "Create and manage professional newsletters that keep audiences informed." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Nurturing Campaigns", "description": "Guide prospects through the buying journey with targeted communication." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Retention Campaigns", "description": "Strengthen relationships and encourage repeat business." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Abandoned Cart Recovery", "description": "Recover lost sales opportunities through automated follow-up campaigns." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Copywriting", "description": "Create compelling email content designed to engage and convert." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Design Services", "description": "Develop professional email templates optimized for user experience." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Reporting", "description": "Track campaign results and identify opportunities for improvement." } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Email Marketing Services Canada", "item": "https://altiorainfotech.ca/services/email-marketing-services-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are Email Marketing Services?", "acceptedAnswer": { "@type": "Answer", "text": "Email Marketing Services help businesses engage customers, generate leads, increase sales, and improve customer retention through strategic email campaigns and automation." } },
        { "@type": "Question", "name": "Is email marketing still effective?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Email marketing remains one of the highest-performing digital marketing channels for customer engagement and revenue generation." } },
        { "@type": "Question", "name": "How much do Email Marketing Services cost in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary depending on audience size, campaign frequency, automation requirements, and business goals." } },
        { "@type": "Question", "name": "What is email automation?", "acceptedAnswer": { "@type": "Answer", "text": "Email automation uses workflows to send relevant messages based on customer actions and behaviors." } },
        { "@type": "Question", "name": "What is audience segmentation?", "acceptedAnswer": { "@type": "Answer", "text": "Audience segmentation divides subscribers into groups based on specific characteristics to improve relevance and performance." } },
        { "@type": "Question", "name": "Which industries benefit from email marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Almost every industry can benefit from email marketing, particularly e-commerce, healthcare, real estate, professional services, and local businesses." } },
        { "@type": "Question", "name": "What is abandoned cart recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Abandoned cart recovery campaigns help e-commerce businesses recover potential sales from customers who leave products in their cart without completing a purchase." } },
        { "@type": "Question", "name": "How often should businesses send emails?", "acceptedAnswer": { "@type": "Answer", "text": "Frequency depends on the industry, audience, and campaign objectives. Consistency is typically more important than volume." } },
        { "@type": "Question", "name": "What email marketing platform is best?", "acceptedAnswer": { "@type": "Answer", "text": "The best platform depends on your business needs. Popular options include Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and Omnisend." } },
        { "@type": "Question", "name": "Can email marketing increase customer retention?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Strategic email communication helps strengthen customer relationships, encourage repeat purchases, and improve loyalty." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://altiorainfotech.ca/services/email-marketing-services-canada/#howto",
      "name": "The Email Marketing Growth Formula",
      "description": "A proven 4-step email marketing framework for Canadian businesses.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Build Your Audience", "text": "Create systems that attract and capture qualified subscribers." },
        { "@type": "HowToStep", "position": 2, "name": "Segment Your Audience", "text": "Group subscribers based on interests, behaviors, and customer journeys." },
        { "@type": "HowToStep", "position": 3, "name": "Automate Communication", "text": "Implement automated workflows that nurture relationships and drive conversions." },
        { "@type": "HowToStep", "position": 4, "name": "Optimize Performance", "text": "Continuously improve campaigns through testing, analysis, and optimization." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/email-marketing-services-canada/#services",
      "name": "Email Marketing Services We Provide",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Email Marketing Strategy", "description": "Develop customized strategies designed to support business growth." },
        { "@type": "ListItem", "position": 2, "name": "Email Automation Services", "description": "Build automated customer journeys that save time and improve engagement." },
        { "@type": "ListItem", "position": 3, "name": "Newsletter Management", "description": "Create and manage professional newsletters that keep audiences informed." },
        { "@type": "ListItem", "position": 4, "name": "Lead Nurturing Campaigns", "description": "Guide prospects through the buying journey with targeted communication." },
        { "@type": "ListItem", "position": 5, "name": "Customer Retention Campaigns", "description": "Strengthen relationships and encourage repeat business." },
        { "@type": "ListItem", "position": 6, "name": "Abandoned Cart Recovery", "description": "Recover lost sales opportunities through automated follow-up campaigns." },
        { "@type": "ListItem", "position": 7, "name": "Email Copywriting", "description": "Create compelling email content designed to engage and convert." },
        { "@type": "ListItem", "position": 8, "name": "Email Design Services", "description": "Develop professional email templates optimized for user experience." },
        { "@type": "ListItem", "position": 9, "name": "Performance Reporting", "description": "Track campaign results and identify opportunities for improvement." }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/email-marketing-services-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/email-marketing-services-canada",
      "name": "Email Marketing Services Canada | Altiora Infotech",
      "description": "Drive more revenue with strategic Email Marketing Services Canada. Altiora Infotech builds email automation, segmentation, lead nurturing, and retention campaigns that generate leads and increase customer lifetime value.",
      "datePublished": "2026-06-19",
      "dateModified": "2026-06-19",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/email-marketing-services-canada/#service" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".quick-answer p", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Email Marketing Services Canada" },
        { "@type": "Thing", "name": "Email Marketing" },
        { "@type": "Thing", "name": "Email Automation" },
        { "@type": "Thing", "name": "Customer Retention Marketing" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Email Marketing" },
        { "@type": "Thing", "name": "Email Automation" },
        { "@type": "Thing", "name": "Audience Segmentation" },
        { "@type": "Thing", "name": "Lead Nurturing" },
        { "@type": "Thing", "name": "Abandoned Cart Recovery" },
        { "@type": "Thing", "name": "Customer Lifetime Value" },
        { "@type": "SoftwareApplication", "name": "Klaviyo", "applicationCategory": "Email Marketing Platform" },
        { "@type": "SoftwareApplication", "name": "Mailchimp", "applicationCategory": "Email Marketing Platform" },
        { "@type": "SoftwareApplication", "name": "ActiveCampaign", "applicationCategory": "Email Marketing Platform" },
        { "@type": "SoftwareApplication", "name": "HubSpot", "applicationCategory": "Email Marketing Platform" },
        { "@type": "SoftwareApplication", "name": "Omnisend", "applicationCategory": "Email Marketing Platform" },
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

export default function EmailMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emailMarketingSchema) }}
      />
      <EmailMarketingClientPage />
    </>
  );
}
