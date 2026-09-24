import { Metadata } from 'next';
import CrmDevelopmentClientPage from './_components/CrmDevelopmentClientPage';

export const metadata: Metadata = {
  title: 'Custom CRM Development Company | CRM Software Solutions | Altiora Infotech',
  description: 'Altiora Infotech provides custom CRM development services for businesses across Canada. We build secure, scalable CRM software with sales automation, customer management, workflow automation, third-party integrations, and cloud-ready architecture to help businesses grow.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/custom-crm-development",
  },
  openGraph: {
    title: "Custom CRM Development Company | CRM Software Solutions | Altiora Infotech",
    description: "Altiora Infotech provides custom CRM development services for businesses across Canada. We build secure, scalable CRM software with sales automation, customer management, workflow automation, third-party integrations, and cloud-ready architecture to help businesses grow.",
    url: "https://altiorainfotech.ca/services/custom-crm-development",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Custom CRM Development" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Development Company | CRM Software Solutions | Altiora Infotech",
    description: "Altiora Infotech provides custom CRM development services for businesses across Canada. We build secure, scalable CRM software with sales automation, customer management, workflow automation, third-party integrations, and cloud-ready architecture to help businesses grow.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const crmDevelopmentSchema = {
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
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, and custom software development services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/custom-crm-development/#service",
      "name": "Custom CRM Development",
      "url": "https://altiorainfotech.ca/services/custom-crm-development",
      "description": "Custom CRM development services helping businesses across Canada streamline operations, centralize customer data, and improve team collaboration with secure, scalable, and cloud-ready CRM software.",
      "serviceType": "CRM Software Development, Sales Automation, Customer Support CRM, CRM Integration, CRM Modernization",
      "category": "CRM Software Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Enterprises"
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/custom-crm-development/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Custom CRM Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Strategy & Consulting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom CRM Software Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Support CRM" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Integration Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Modernization" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/custom-crm-development/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Custom CRM Development", "item": "https://altiorainfotech.ca/services/custom-crm-development" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/custom-crm-development/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose a custom CRM instead of an off-the-shelf solution?",
          "acceptedAnswer": { "@type": "Answer", "text": "A custom CRM is designed around your business processes, providing only the features you need while offering greater flexibility, scalability, and integration capabilities than generic software." }
        },
        {
          "@type": "Question",
          "name": "Can you migrate data from our existing CRM?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We securely migrate customer records, sales history, documents, and other business data while minimizing downtime." }
        },
        {
          "@type": "Question",
          "name": "Can the CRM integrate with our existing software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We integrate CRM platforms with ERP systems, accounting software, marketing tools, payment gateways, communication platforms, and custom business applications." }
        },
        {
          "@type": "Question",
          "name": "Is the CRM mobile-friendly?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We develop responsive CRM applications that work across desktops, tablets, and smartphones, with dedicated mobile apps available when required." }
        },
        {
          "@type": "Question",
          "name": "How secure is the CRM?",
          "acceptedAnswer": { "@type": "Answer", "text": "Security is built into every solution through encrypted data storage, secure authentication, role-based permissions, audit logs, and regular security updates." }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, monitoring, performance optimization, feature enhancements, user training, and technical support to ensure your CRM continues to evolve with your business." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/custom-crm-development/#services",
      "name": "Custom CRM Development Services by Altiora Infotech",
      "description": "Custom CRM development services for businesses across Canada, from strategy and consulting to full development, sales automation, support, integrations, and modernization.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "CRM Strategy & Consulting", "description": "Business process analysis, CRM planning and strategy, feature prioritization, workflow optimization, user role planning, and digital transformation consulting." },
        { "@type": "ListItem", "position": 2, "name": "Custom CRM Software Development", "description": "Lead management, customer management, contact management, opportunity tracking, sales pipeline management, activity management, task automation, and customer communication history." },
        { "@type": "ListItem", "position": 3, "name": "Sales Automation", "description": "Lead assignment, follow-up reminders, quote generation, proposal management, sales forecasting, performance dashboards, and revenue tracking." },
        { "@type": "ListItem", "position": 4, "name": "Customer Support CRM", "description": "Ticket management, customer support portal, service request tracking, knowledge base, live chat integration, and SLA management." },
        { "@type": "ListItem", "position": 5, "name": "CRM Integration Services", "description": "Integration with ERP systems, accounting software, email platforms, marketing automation tools, payment gateways, inventory systems, HR software, and third-party APIs." },
        { "@type": "ListItem", "position": 6, "name": "CRM Modernization", "description": "Modernizing legacy CRM systems with improved performance, usability, automation, and security while preserving valuable business data." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/custom-crm-development/#industries",
      "name": "Industries Served by Altiora Infotech's Custom CRM Development",
      "description": "Industries across Canada supported by Altiora Infotech's custom CRM development solutions.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Real Estate" },
        { "@type": "ListItem", "position": 2, "name": "Healthcare" },
        { "@type": "ListItem", "position": 3, "name": "Financial Services" },
        { "@type": "ListItem", "position": 4, "name": "Insurance" },
        { "@type": "ListItem", "position": 5, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 6, "name": "Construction" },
        { "@type": "ListItem", "position": 7, "name": "Logistics" },
        { "@type": "ListItem", "position": 8, "name": "Education" },
        { "@type": "ListItem", "position": 9, "name": "Retail" },
        { "@type": "ListItem", "position": 10, "name": "E-commerce" },
        { "@type": "ListItem", "position": 11, "name": "Legal Services" },
        { "@type": "ListItem", "position": 12, "name": "Hospitality" },
        { "@type": "ListItem", "position": 13, "name": "Professional Services" },
        { "@type": "ListItem", "position": 14, "name": "Technology" },
        { "@type": "ListItem", "position": 15, "name": "Government" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/custom-crm-development/#webpage",
      "url": "https://altiorainfotech.ca/services/custom-crm-development",
      "name": "Custom CRM Development Company | CRM Software Solutions | Altiora Infotech",
      "description": "Altiora Infotech provides custom CRM development services for businesses across Canada. We build secure, scalable CRM software with sales automation, customer management, workflow automation, third-party integrations, and cloud-ready architecture to help businesses grow.",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/custom-crm-development/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/custom-crm-development/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Custom CRM Development" },
        { "@type": "Thing", "name": "Sales Automation" },
        { "@type": "Thing", "name": "CRM Integration" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "CRM Software" },
        { "@type": "Thing", "name": "Sales Automation" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Startups, Enterprises"
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/erp-software-development",
        "https://altiorainfotech.ca/services/ai-automation-services-canada",
        "https://altiorainfotech.ca/services/website-development-services"
      ]
    }
  ]
};

export default function CustomCrmDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crmDevelopmentSchema) }}
      />
      <CrmDevelopmentClientPage />
    </>
  );
}
