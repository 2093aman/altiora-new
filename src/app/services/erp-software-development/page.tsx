import { Metadata } from 'next';
import ErpDevelopmentClientPage from './_components/ErpDevelopmentClientPage';

export const metadata: Metadata = {
  title: 'ERP Software Development Company | Custom ERP Solutions | Altiora Infotech',
  description: 'Altiora Infotech provides custom ERP software development services for businesses across Canada. We build secure, scalable ERP solutions with finance, inventory, HR, CRM, procurement, reporting, and cloud integrations to streamline operations and accelerate business growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/erp-software-development",
  },
  openGraph: {
    title: "ERP Software Development Company | Custom ERP Solutions | Altiora Infotech",
    description: "Altiora Infotech provides custom ERP software development services for businesses across Canada. We build secure, scalable ERP solutions with finance, inventory, HR, CRM, procurement, reporting, and cloud integrations to streamline operations and accelerate business growth.",
    url: "https://altiorainfotech.ca/services/erp-software-development",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "ERP Software Development" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Development Company | Custom ERP Solutions | Altiora Infotech",
    description: "Altiora Infotech provides custom ERP software development services for businesses across Canada. We build secure, scalable ERP solutions with finance, inventory, HR, CRM, procurement, reporting, and cloud integrations to streamline operations and accelerate business growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const erpDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://altiorainfotech.ca/#organization",
      "name": "Altiora Infotech",
      "alternateName": "Altiora Digital Marketing",
      "url": "https://altiorainfotech.ca",
      "logo": { "@type": "ImageObject", "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", "contentUrl": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", "width": 400, "height": 400 },
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Altiora Infotech is a Canadian Digital Marketing Company providing SEO, Google Ads, social media marketing, website development, video production, branding, and Answer Engine Optimization (AEO) to businesses across Canada, including Ottawa, Toronto, Vancouver, Montreal, Calgary, and Halifax.",
      "foundingDate": "2023",
      "email": "altiorainfotech@gmail.com",
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "customer service", "email": "altiorainfotech@gmail.com", "url": "https://altiorainfotech.ca/contact", "availableLanguage": ["English"], "areaServed": "CA" },
        { "@type": "ContactPoint", "contactType": "sales", "email": "altiorainfotech@gmail.com", "url": "https://altiorainfotech.ca/contact", "availableLanguage": ["English"] }
      ],
      "sameAs": ["https://www.instagram.com/altiorainfotech.ca", "https://www.linkedin.com/company/altiora-infotech", "https://altiorainfotech.com"],
      "areaServed": [{ "@type": "Country", "name": "Canada" }],
      "serviceArea": { "@type": "Country", "name": "Canada" },
      "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Generative AI", "Natural Language Processing", "Computer Vision", "AI Automation", "Custom Software Development", "Cloud Architecture", "Search Engine Optimization", "Google Ads", "Social Media Marketing", "Website Development", "ChatGPT Optimization", "Google AI Overviews Optimization", "Perplexity Optimization", "Gemini Optimization", "Bing Copilot Optimization"]
    },
    {
      "@type": "WebSite",
      "@id": "https://altiorainfotech.ca/#website",
      "url": "https://altiorainfotech.ca",
      "name": "Altiora Infotech",
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, ERP development, and location-specific marketing services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/erp-software-development/#service",
      "name": "ERP Software Development",
      "url": "https://altiorainfotech.ca/services/erp-software-development",
      "description": "Altiora Infotech provides custom ERP software development services that help businesses centralize operations through a unified, scalable, and secure platform, covering finance, inventory, HR, sales, procurement, and reporting.",
      "serviceType": "ERP Software Development, Enterprise Resource Planning, Business Process Automation, Custom Software Development",
      "category": "ERP Software Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Growing Businesses, Enterprises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/erp-software-development/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERP Software Development Services by Altiora Infotech",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom ERP Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Finance & Accounting Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory & Warehouse Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Human Resource Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales & Customer Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Procurement & Supply Chain Management" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/erp-software-development/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "ERP Software Development", "item": "https://altiorainfotech.ca/services/erp-software-development" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/erp-software-development/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ERP software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Enterprise Resource Planning (ERP) software is a centralized platform that integrates business functions such as finance, inventory, sales, HR, procurement, manufacturing, and reporting into a single system." }
        },
        {
          "@type": "Question",
          "name": "Why choose a custom ERP instead of a ready-made solution?",
          "acceptedAnswer": { "@type": "Answer", "text": "A custom ERP is built around your specific workflows, business rules, and operational requirements. It offers greater flexibility, scalability, and integration capabilities than many off-the-shelf platforms." }
        },
        {
          "@type": "Question",
          "name": "Can you integrate ERP with our existing software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate ERP systems with CRM platforms, accounting software, payroll solutions, inventory tools, payment gateways, and other business applications using secure APIs." }
        },
        {
          "@type": "Question",
          "name": "Is cloud-based ERP available?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We develop both cloud-based and on-premise ERP solutions depending on your business requirements, security policies, and infrastructure preferences." }
        },
        {
          "@type": "Question",
          "name": "Can ERP software support multiple business locations?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our ERP solutions support multi-location operations, multiple warehouses, multiple currencies, and role-based access for distributed teams." }
        },
        {
          "@type": "Question",
          "name": "Do you provide ERP maintenance and support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide ongoing maintenance, performance optimization, security updates, user training, and feature enhancements to ensure your ERP continues to meet evolving business needs." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/erp-software-development/#services",
      "name": "ERP Software Development Services by Altiora Infotech",
      "description": "Core ERP software development service categories delivered by Altiora Infotech across Canada.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Custom ERP Development", "description": "Every business operates differently. We develop ERP systems tailored to your processes, ensuring your software supports your operations rather than forcing you to adapt." },
        { "@type": "ListItem", "position": 2, "name": "Finance & Accounting Management", "description": "Manage financial operations from a centralized platform with complete visibility." },
        { "@type": "ListItem", "position": 3, "name": "Inventory & Warehouse Management", "description": "Gain complete control over inventory movement and warehouse operations." },
        { "@type": "ListItem", "position": 4, "name": "Human Resource Management", "description": "Simplify HR processes with intelligent workforce management." },
        { "@type": "ListItem", "position": 5, "name": "Sales & Customer Management", "description": "Improve customer relationships while streamlining your sales process." },
        { "@type": "ListItem", "position": 6, "name": "Procurement & Supply Chain Management", "description": "Optimize purchasing and vendor relationships." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/erp-software-development/#industries",
      "name": "Industries Served by Altiora Infotech's ERP Development Services",
      "description": "Industries across Canada that Altiora Infotech supports with ERP software development services.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 2, "name": "Distribution" },
        { "@type": "ListItem", "position": 3, "name": "Retail" },
        { "@type": "ListItem", "position": 4, "name": "E-commerce" },
        { "@type": "ListItem", "position": 5, "name": "Construction" },
        { "@type": "ListItem", "position": 6, "name": "Healthcare" },
        { "@type": "ListItem", "position": 7, "name": "Logistics" },
        { "@type": "ListItem", "position": 8, "name": "Education" },
        { "@type": "ListItem", "position": 9, "name": "Hospitality" },
        { "@type": "ListItem", "position": 10, "name": "Financial Services" },
        { "@type": "ListItem", "position": 11, "name": "Real Estate" },
        { "@type": "ListItem", "position": 12, "name": "Professional Services" },
        { "@type": "ListItem", "position": 13, "name": "Government" },
        { "@type": "ListItem", "position": 14, "name": "Agriculture" },
        { "@type": "ListItem", "position": 15, "name": "Technology" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/erp-software-development/#webpage",
      "url": "https://altiorainfotech.ca/services/erp-software-development",
      "name": "ERP Software Development Company | Custom ERP Solutions | Altiora Infotech",
      "description": "Altiora Infotech provides custom ERP software development services for businesses across Canada. We build secure, scalable ERP solutions with finance, inventory, HR, CRM, procurement, reporting, and cloud integrations to streamline operations and accelerate business growth.",
      "inLanguage": "en-CA",
      "datePublished": "2026-08-02",
      "dateModified": "2026-08-02",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/erp-software-development/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/erp-software-development/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "ERP Software Development" },
        { "@type": "Thing", "name": "Enterprise Resource Planning" },
        { "@type": "Thing", "name": "Business Process Automation" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "ERP Modules" },
        { "@type": "Thing", "name": "Inventory Management" },
        { "@type": "Thing", "name": "Finance & Accounting" },
        { "@type": "Thing", "name": "Human Resources" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Growing Businesses, Enterprises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/custom-crm-development",
        "https://altiorainfotech.ca/services/ai-automation-services-canada",
        "https://altiorainfotech.ca/services/website-development-services"
      ]
    }
  ]
};

export default function ErpSoftwareDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(erpDevelopmentSchema) }}
      />
      <ErpDevelopmentClientPage />
    </>
  );
}
