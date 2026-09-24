import { Metadata } from 'next';
import MachineLearningClientPage from './_components/MachineLearningClientPage';

export const metadata: Metadata = {
  title: 'Machine Learning Development Company | Custom ML Solutions | Altiora Infotech',
  description: 'Altiora Infotech is a machine learning development company delivering custom ML solutions, predictive analytics, recommendation engines, computer vision, NLP, and enterprise AI applications. Build intelligent, scalable solutions for your business.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/machine-learning-development-company",
  },
  openGraph: {
    title: "Machine Learning Development Company | Custom ML Solutions | Altiora Infotech",
    description: "Altiora Infotech is a machine learning development company delivering custom ML solutions, predictive analytics, recommendation engines, computer vision, NLP, and enterprise AI applications. Build intelligent, scalable solutions for your business.",
    url: "https://altiorainfotech.ca/services/machine-learning-development-company",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Machine Learning Development Company" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Development Company | Custom ML Solutions | Altiora Infotech",
    description: "Altiora Infotech is a machine learning development company delivering custom ML solutions, predictive analytics, recommendation engines, computer vision, NLP, and enterprise AI applications. Build intelligent, scalable solutions for your business.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const machineLearningSchema = {
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
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, and AI development services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#service",
      "name": "Machine Learning Development Company",
      "url": "https://altiorainfotech.ca/services/machine-learning-development-company",
      "description": "Altiora Infotech is a trusted machine learning development company delivering custom ML solutions for startups, enterprises, and growing businesses across Canada, including predictive analytics, recommendation engines, computer vision, natural language processing, and deep learning development.",
      "serviceType": "Machine Learning Development, Predictive Analytics, Recommendation Engines, Natural Language Processing, Computer Vision, Deep Learning",
      "category": "Machine Learning Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Enterprises, Growing Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Machine Learning Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Machine Learning Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Predictive Analytics Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Recommendation Engine Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Natural Language Processing (NLP)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Vision Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Learning Development" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Machine Learning Development Company", "item": "https://altiorainfotech.ca/services/machine-learning-development-company" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is machine learning?",
          "acceptedAnswer": { "@type": "Answer", "text": "Machine learning is a branch of artificial intelligence that enables software systems to learn from data, recognize patterns, and make predictions or decisions without being explicitly programmed for every scenario." }
        },
        {
          "@type": "Question",
          "name": "How is machine learning different from traditional software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Traditional software follows predefined rules, while machine learning models improve over time by learning from historical and real-time data, allowing them to adapt to changing conditions." }
        },
        {
          "@type": "Question",
          "name": "Can machine learning integrate with our existing software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate machine learning models into web applications, mobile apps, CRMs, ERPs, APIs, and enterprise platforms to enhance existing business processes." }
        },
        {
          "@type": "Question",
          "name": "Do you build custom machine learning models?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design, train, validate, and deploy custom machine learning models based on your business objectives, available data, and industry requirements." }
        },
        {
          "@type": "Question",
          "name": "Is our business data secure?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We follow industry best practices for data security, encryption, role-based access controls, and secure cloud deployments to protect your sensitive information." }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing model optimization?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Machine learning models require continuous monitoring and improvement. We provide performance tracking, retraining, model updates, and long-term support to maintain accuracy and reliability." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#services",
      "name": "Machine Learning Development Services by Altiora Infotech",
      "description": "Machine learning development services for Canadian businesses including custom ML solutions, predictive analytics, recommendation engines, NLP, computer vision, and deep learning.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Custom Machine Learning Solutions", "description": "Every business has unique data challenges. We develop tailored machine learning models that align with your goals and integrate seamlessly into your existing systems." },
        { "@type": "ListItem", "position": 2, "name": "Predictive Analytics Solutions", "description": "Predict future business outcomes using historical and real-time data." },
        { "@type": "ListItem", "position": 3, "name": "Recommendation Engine Development", "description": "Deliver personalized experiences that increase engagement and conversions." },
        { "@type": "ListItem", "position": 4, "name": "Natural Language Processing (NLP)", "description": "Leverage machine learning to understand and process human language." },
        { "@type": "ListItem", "position": 5, "name": "Computer Vision Solutions", "description": "Develop intelligent image and video processing applications powered by machine learning." },
        { "@type": "ListItem", "position": 6, "name": "Deep Learning Development", "description": "Build advanced neural network models capable of solving complex business problems." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#industries",
      "name": "Industries Served by Altiora Infotech Machine Learning Solutions",
      "description": "Industries that Altiora Infotech's machine learning solutions help across Canada.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Healthcare" },
        { "@type": "ListItem", "position": 2, "name": "Financial Services" },
        { "@type": "ListItem", "position": 3, "name": "Insurance" },
        { "@type": "ListItem", "position": 4, "name": "Retail" },
        { "@type": "ListItem", "position": 5, "name": "E-commerce" },
        { "@type": "ListItem", "position": 6, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 7, "name": "Logistics" },
        { "@type": "ListItem", "position": 8, "name": "Transportation" },
        { "@type": "ListItem", "position": 9, "name": "Education" },
        { "@type": "ListItem", "position": 10, "name": "Real Estate" },
        { "@type": "ListItem", "position": 11, "name": "Legal Services" },
        { "@type": "ListItem", "position": 12, "name": "Construction" },
        { "@type": "ListItem", "position": 13, "name": "Hospitality" },
        { "@type": "ListItem", "position": 14, "name": "Technology" },
        { "@type": "ListItem", "position": 15, "name": "Government" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#webpage",
      "url": "https://altiorainfotech.ca/services/machine-learning-development-company",
      "name": "Machine Learning Development Company | Custom ML Solutions | Altiora Infotech",
      "description": "Altiora Infotech is a machine learning development company delivering custom ML solutions, predictive analytics, recommendation engines, computer vision, NLP, and enterprise AI applications. Build intelligent, scalable solutions for your business.",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/machine-learning-development-company/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Machine Learning Development" },
        { "@type": "Thing", "name": "Predictive Analytics" },
        { "@type": "Thing", "name": "Deep Learning" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Predictive Analytics" },
        { "@type": "Thing", "name": "Deep Learning" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Enterprises, Growing Businesses",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/ai-development-company-canada",
        "https://altiorainfotech.ca/services/ai-automation-services-canada",
        "https://altiorainfotech.ca/services/ai-marketing-services-in-canada"
      ]
    }
  ]
};

export default function MachineLearningDevelopmentCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(machineLearningSchema) }}
      />
      <MachineLearningClientPage />
    </>
  );
}
