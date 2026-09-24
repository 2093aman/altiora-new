import { Metadata } from 'next';
import AiDevelopmentClientPage from './_components/AiDevelopmentClientPage';

export const metadata: Metadata = {
  title: 'AI Development Company Canada | Custom AI Solutions | Altiora Infotech',
  description: 'Looking for an AI development company in Canada? Altiora Infotech builds custom AI applications, generative AI solutions, machine learning systems, NLP, computer vision, and enterprise AI platforms to help businesses innovate and grow.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/ai-development-company-canada",
  },
  openGraph: {
    title: "AI Development Company Canada | Custom AI Solutions | Altiora Infotech",
    description: "Looking for an AI development company in Canada? Altiora Infotech builds custom AI applications, generative AI solutions, machine learning systems, NLP, computer vision, and enterprise AI platforms to help businesses innovate and grow.",
    url: "https://altiorainfotech.ca/services/ai-development-company-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "AI Development Company Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company Canada | Custom AI Solutions | Altiora Infotech",
    description: "Looking for an AI development company in Canada? Altiora Infotech builds custom AI applications, generative AI solutions, machine learning systems, NLP, computer vision, and enterprise AI platforms to help businesses innovate and grow.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const aiDevelopmentSchema = {
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
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, AI development, and location-specific marketing services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#service",
      "name": "AI Development Company Canada",
      "url": "https://altiorainfotech.ca/services/ai-development-company-canada",
      "description": "Altiora Infotech is an AI development company in Canada that helps startups, growing businesses, and enterprises transform ideas into practical AI solutions, including custom AI applications, generative AI, machine learning, NLP, and computer vision.",
      "serviceType": "AI Development, Custom AI Applications, Generative AI, Machine Learning, Natural Language Processing, Computer Vision",
      "category": "Artificial Intelligence Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Growing Businesses, Enterprises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Development Services by Altiora Infotech",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom AI Application Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative AI Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine Learning Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Natural Language Processing (NLP)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Vision Development" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "AI Development Company Canada", "item": "https://altiorainfotech.ca/services/ai-development-company-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What industries benefit from AI development?",
          "acceptedAnswer": { "@type": "Answer", "text": "AI can benefit industries including healthcare, finance, retail, logistics, manufacturing, education, legal services, real estate, and professional services." }
        },
        {
          "@type": "Question",
          "name": "Can AI integrate with our existing software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build APIs and integrations that allow AI capabilities to work with your current applications, CRMs, ERPs, and business systems." }
        },
        {
          "@type": "Question",
          "name": "Do you build custom AI models?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Depending on your requirements, we develop custom machine learning models or fine-tune existing foundation models." }
        },
        {
          "@type": "Question",
          "name": "Is our business data secure?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We follow secure development practices, implement access controls, encrypt sensitive information, and can deploy AI solutions within private cloud environments when required." }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, monitoring, optimization, feature enhancements, and model retraining services." }
        },
        {
          "@type": "Question",
          "name": "How long does an AI project take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Project timelines vary depending on complexity. Smaller AI integrations may take a few weeks, while enterprise AI platforms can require several months." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#services",
      "name": "AI Development Services by Altiora Infotech",
      "description": "Core AI development service categories delivered by Altiora Infotech across Canada.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Custom AI Application Development", "description": "Every business has unique challenges that require tailored solutions. We build custom AI applications designed around your workflows, helping automate operations, improve decision-making, and create smarter digital experiences." },
        { "@type": "ListItem", "position": 2, "name": "Generative AI Development", "description": "Generative AI enables businesses to create content, automate communication, and improve productivity. We build secure generative AI solutions using modern language models while ensuring data privacy and business-specific customization." },
        { "@type": "ListItem", "position": 3, "name": "Machine Learning Solutions", "description": "Machine learning helps organizations identify patterns, forecast trends, and make data-driven decisions." },
        { "@type": "ListItem", "position": 4, "name": "Natural Language Processing (NLP)", "description": "Extract meaningful insights from unstructured text and automate language-based tasks using advanced NLP technologies." },
        { "@type": "ListItem", "position": 5, "name": "Computer Vision Development", "description": "We develop intelligent vision systems capable of understanding images and videos." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#industries",
      "name": "Industries Served by Altiora Infotech's AI Development Services",
      "description": "Industries across Canada that Altiora Infotech supports with AI development services.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Healthcare" },
        { "@type": "ListItem", "position": 2, "name": "Legal Services" },
        { "@type": "ListItem", "position": 3, "name": "Real Estate" },
        { "@type": "ListItem", "position": 4, "name": "Finance" },
        { "@type": "ListItem", "position": 5, "name": "Insurance" },
        { "@type": "ListItem", "position": 6, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 7, "name": "Logistics" },
        { "@type": "ListItem", "position": 8, "name": "Retail" },
        { "@type": "ListItem", "position": 9, "name": "E-commerce" },
        { "@type": "ListItem", "position": 10, "name": "Education" },
        { "@type": "ListItem", "position": 11, "name": "Government" },
        { "@type": "ListItem", "position": 12, "name": "Construction" },
        { "@type": "ListItem", "position": 13, "name": "Professional Services" },
        { "@type": "ListItem", "position": 14, "name": "Hospitality" },
        { "@type": "ListItem", "position": 15, "name": "SaaS Companies" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/ai-development-company-canada",
      "name": "AI Development Company Canada | Custom AI Solutions | Altiora Infotech",
      "description": "Looking for an AI development company in Canada? Altiora Infotech builds custom AI applications, generative AI solutions, machine learning systems, NLP, computer vision, and enterprise AI platforms to help businesses innovate and grow.",
      "inLanguage": "en-CA",
      "datePublished": "2026-08-02",
      "dateModified": "2026-08-02",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/ai-development-company-canada/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "AI Development in Canada" },
        { "@type": "Thing", "name": "Custom AI Applications" },
        { "@type": "Thing", "name": "Generative AI Development" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Machine Learning" },
        { "@type": "Thing", "name": "Generative AI" },
        { "@type": "Thing", "name": "Natural Language Processing" },
        { "@type": "Thing", "name": "Computer Vision" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Growing Businesses, Enterprises",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/ai-automation-services-canada",
        "https://altiorainfotech.ca/services/machine-learning-development-company",
        "https://altiorainfotech.ca/services/ai-marketing-services-in-canada"
      ]
    }
  ]
};

export default function AiDevelopmentCompanyCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiDevelopmentSchema) }}
      />
      <AiDevelopmentClientPage />
    </>
  );
}
