import { Metadata } from 'next';
import AiAutomationClientPage from './_components/AiAutomationClientPage';

export const metadata: Metadata = {
  title: 'AI Automation Services Canada | Intelligent Business Automation | Altiora Infotech',
  description: 'Streamline your operations with AI automation services in Canada. Altiora Infotech builds intelligent workflow automation, AI chatbots, document processing, CRM automation, ERP integrations, and custom AI solutions to improve efficiency and accelerate business growth.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/ai-automation-services-canada",
  },
  openGraph: {
    title: "AI Automation Services Canada | Intelligent Business Automation | Altiora Infotech",
    description: "Streamline your operations with AI automation services in Canada. Altiora Infotech builds intelligent workflow automation, AI chatbots, document processing, CRM automation, ERP integrations, and custom AI solutions to improve efficiency and accelerate business growth.",
    url: "https://altiorainfotech.ca/services/ai-automation-services-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "AI Automation Services Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services Canada | Intelligent Business Automation | Altiora Infotech",
    description: "Streamline your operations with AI automation services in Canada. Altiora Infotech builds intelligent workflow automation, AI chatbots, document processing, CRM automation, ERP integrations, and custom AI solutions to improve efficiency and accelerate business growth.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const aiAutomationSchema = {
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
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, AI automation, and AI development services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#service",
      "name": "AI Automation Services Canada",
      "url": "https://altiorainfotech.ca/services/ai-automation-services-canada",
      "description": "AI automation services in Canada that help organizations automate workflows, enhance decision-making, and improve operational performance through artificial intelligence, machine learning, intelligent document processing, and system integrations.",
      "serviceType": "AI Automation, Business Process Automation, Workflow Automation, Intelligent Document Processing",
      "category": "AI Automation",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Automation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered Customer Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales & CRM Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intelligent Document Processing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP & Business System Automation" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "AI Automation Services Canada", "item": "https://altiorainfotech.ca/services/ai-automation-services-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "AI automation combines artificial intelligence with workflow automation to automate repetitive tasks, analyze data, make decisions, and improve business processes with minimal human intervention." }
        },
        {
          "@type": "Question",
          "name": "Which business processes can be automated?",
          "acceptedAnswer": { "@type": "Answer", "text": "Organizations commonly automate customer support, sales, HR, finance, marketing, procurement, document processing, inventory management, reporting, and approval workflows." }
        },
        {
          "@type": "Question",
          "name": "Can AI automation integrate with our existing software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate AI automation with CRMs, ERPs, accounting systems, HR platforms, cloud applications, and custom business software to create connected workflows." }
        },
        {
          "@type": "Question",
          "name": "Is AI automation suitable for small businesses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. AI automation can help businesses of all sizes improve productivity, reduce costs, and scale operations more efficiently." }
        },
        {
          "@type": "Question",
          "name": "How secure are AI automation solutions?",
          "acceptedAnswer": { "@type": "Answer", "text": "Security is built into every solution. We implement role-based access controls, encrypted data transmission, secure APIs, audit logs, and follow industry best practices for protecting sensitive information." }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide monitoring, maintenance, optimization, and continuous improvements to ensure your automation workflows continue to deliver value as your business grows." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#services",
      "name": "AI Automation Services by Altiora Infotech",
      "description": "AI automation services delivered by Altiora Infotech across Canada, including business process automation, customer support, sales, marketing, document processing, and ERP integration.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Business Process Automation", "description": "We automate repetitive workflows using AI-driven decision-making and intelligent process management." },
        { "@type": "ListItem", "position": 2, "name": "AI-Powered Customer Support", "description": "Deliver faster and more consistent customer service with intelligent AI assistants." },
        { "@type": "ListItem", "position": 3, "name": "Sales & CRM Automation", "description": "Improve lead management and increase sales productivity with intelligent automation." },
        { "@type": "ListItem", "position": 4, "name": "Marketing Automation", "description": "Automate repetitive marketing activities while improving campaign performance." },
        { "@type": "ListItem", "position": 5, "name": "Intelligent Document Processing", "description": "Convert paper-based and digital documents into structured business data using AI." },
        { "@type": "ListItem", "position": 6, "name": "ERP & Business System Automation", "description": "Connect business applications and automate data movement across departments." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#industries",
      "name": "Industries Served by Altiora Infotech AI Automation",
      "description": "Industries across Canada that Altiora Infotech supports with AI automation services.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Healthcare" },
        { "@type": "ListItem", "position": 2, "name": "Financial Services" },
        { "@type": "ListItem", "position": 3, "name": "Insurance" },
        { "@type": "ListItem", "position": 4, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 5, "name": "Retail" },
        { "@type": "ListItem", "position": 6, "name": "Logistics" },
        { "@type": "ListItem", "position": 7, "name": "Transportation" },
        { "@type": "ListItem", "position": 8, "name": "Education" },
        { "@type": "ListItem", "position": 9, "name": "Government" },
        { "@type": "ListItem", "position": 10, "name": "Construction" },
        { "@type": "ListItem", "position": 11, "name": "Legal Services" },
        { "@type": "ListItem", "position": 12, "name": "Real Estate" },
        { "@type": "ListItem", "position": 13, "name": "Hospitality" },
        { "@type": "ListItem", "position": 14, "name": "Technology" },
        { "@type": "ListItem", "position": 15, "name": "Professional Services" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/ai-automation-services-canada",
      "name": "AI Automation Services Canada | Intelligent Business Automation | Altiora Infotech",
      "description": "Streamline your operations with AI automation services in Canada. Altiora Infotech builds intelligent workflow automation, AI chatbots, document processing, CRM automation, ERP integrations, and custom AI solutions to improve efficiency and accelerate business growth.",
      "inLanguage": "en-CA",
      "datePublished": "2026-08-02",
      "dateModified": "2026-08-02",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/ai-automation-services-canada/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "AI Automation in Canada" },
        { "@type": "Thing", "name": "Business Process Automation" },
        { "@type": "Thing", "name": "Intelligent Document Processing" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Workflow Automation" },
        { "@type": "Thing", "name": "Intelligent Document Processing" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Businesses, Tech Startups, Established Enterprises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/ai-development-company-canada",
        "https://altiorainfotech.ca/services/machine-learning-development-company",
        "https://altiorainfotech.ca/services/ai-marketing-services-in-canada"
      ]
    }
  ]
};

export default function AiAutomationServicesCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAutomationSchema) }}
      />
      <AiAutomationClientPage />
    </>
  );
}
