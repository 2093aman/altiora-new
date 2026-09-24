import { Metadata } from 'next';
import MobileAppDevelopmentClientPage from './_components/MobileAppDevelopmentClientPage';

export const metadata: Metadata = {
  title: 'Mobile App Development Company Canada | Custom iOS & Android Apps | Altiora Infotech',
  description: 'Altiora Infotech is a mobile app development company in Canada specializing in custom iOS, Android, Flutter, and React Native applications. We build secure, scalable mobile solutions for startups, enterprises, and growing businesses.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/mobile-app-development-company-canada",
  },
  openGraph: {
    title: "Mobile App Development Company Canada | Custom iOS & Android Apps | Altiora Infotech",
    description: "Altiora Infotech is a mobile app development company in Canada specializing in custom iOS, Android, Flutter, and React Native applications. We build secure, scalable mobile solutions for startups, enterprises, and growing businesses.",
    url: "https://altiorainfotech.ca/services/mobile-app-development-company-canada",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Mobile App Development Company Canada" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company Canada | Custom iOS & Android Apps | Altiora Infotech",
    description: "Altiora Infotech is a mobile app development company in Canada specializing in custom iOS, Android, Flutter, and React Native applications. We build secure, scalable mobile solutions for startups, enterprises, and growing businesses.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const mobileAppDevelopmentSchema = {
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
      "description": "Canadian Digital Marketing Company providing SEO, PPC, social media, website development, AEO, mobile app development, and location-specific marketing services across Canada.",
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#service",
      "name": "Mobile App Development Company Canada",
      "url": "https://altiorainfotech.ca/services/mobile-app-development-company-canada",
      "description": "Trusted mobile app development company in Canada delivering custom mobile applications for startups, SMEs, and enterprise organizations, including native iOS, Android, and cross-platform apps.",
      "serviceType": "Mobile App Development, iOS App Development, Android App Development, Cross-Platform App Development, UI/UX Design, Mobile App Modernization",
      "category": "Mobile App Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Small and Medium Businesses, Enterprise Organizations",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "mainEntityOfPage": { "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#webpage" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile App Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design for Mobile Apps" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Modernization" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Mobile App Development Company Canada", "item": "https://altiorainfotech.ca/services/mobile-app-development-company-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Should I build a native or cross-platform mobile app?",
          "acceptedAnswer": { "@type": "Answer", "text": "The right approach depends on your business goals, budget, performance requirements, and timeline. We help you choose the most suitable technology based on your project." }
        },
        {
          "@type": "Question",
          "name": "Can you develop apps for both Android and iOS?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build native applications for both platforms as well as cross-platform applications using Flutter and React Native." }
        },
        {
          "@type": "Question",
          "name": "Can you integrate my mobile app with existing business software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We integrate mobile applications with CRM systems, ERP platforms, payment gateways, cloud services, APIs, and third-party software." }
        },
        {
          "@type": "Question",
          "name": "Will you help publish the app to the App Store and Google Play?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manage the submission, review, and deployment process for both app stores while ensuring compliance with platform requirements." }
        },
        {
          "@type": "Question",
          "name": "Is my application secure?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Security is built into every application through encrypted communication, secure authentication, role-based access control, and secure coding practices." }
        },
        {
          "@type": "Question",
          "name": "Do you provide maintenance after launch?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer long-term support including feature enhancements, performance monitoring, operating system updates, bug fixes, and ongoing maintenance." }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#services",
      "name": "Mobile App Development Services by Altiora Infotech",
      "description": "Core mobile app development services for businesses across Canada, including custom, iOS, Android, cross-platform, UI/UX design, and modernization services.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Custom Mobile App Development", "description": "Every business has unique requirements. We develop custom mobile applications that align with your operational processes, customer expectations, and long-term business strategy." },
        { "@type": "ListItem", "position": 2, "name": "iOS App Development", "description": "Create premium applications for Apple's ecosystem using modern development standards." },
        { "@type": "ListItem", "position": 3, "name": "Android App Development", "description": "Develop scalable Android applications designed for millions of users across a wide range of devices." },
        { "@type": "ListItem", "position": 4, "name": "Cross-Platform App Development", "description": "Reduce development time and costs with applications that run seamlessly across multiple platforms." },
        { "@type": "ListItem", "position": 5, "name": "UI/UX Design for Mobile Apps", "description": "User experience is critical to application success. Our designers create intuitive, visually appealing interfaces focused on usability and engagement." },
        { "@type": "ListItem", "position": 6, "name": "Mobile App Modernization", "description": "We modernize outdated apps by improving performance, redesigning interfaces, updating technologies, and adding new features." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#industries",
      "name": "Industries Served by Altiora Infotech Mobile App Development",
      "description": "Industries across Canada supported by Altiora Infotech's mobile app development services.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Healthcare" },
        { "@type": "ListItem", "position": 2, "name": "Real Estate" },
        { "@type": "ListItem", "position": 3, "name": "Finance" },
        { "@type": "ListItem", "position": 4, "name": "Insurance" },
        { "@type": "ListItem", "position": 5, "name": "Retail" },
        { "@type": "ListItem", "position": 6, "name": "E-commerce" },
        { "@type": "ListItem", "position": 7, "name": "Education" },
        { "@type": "ListItem", "position": 8, "name": "Logistics" },
        { "@type": "ListItem", "position": 9, "name": "Manufacturing" },
        { "@type": "ListItem", "position": 10, "name": "Hospitality" },
        { "@type": "ListItem", "position": 11, "name": "Construction" },
        { "@type": "ListItem", "position": 12, "name": "Professional Services" },
        { "@type": "ListItem", "position": 13, "name": "Government" },
        { "@type": "ListItem", "position": 14, "name": "Technology" },
        { "@type": "ListItem", "position": 15, "name": "SaaS Companies" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#webpage",
      "url": "https://altiorainfotech.ca/services/mobile-app-development-company-canada",
      "name": "Mobile App Development Company Canada | Custom iOS & Android Apps | Altiora Infotech",
      "description": "Altiora Infotech is a mobile app development company in Canada specializing in custom iOS, Android, Flutter, and React Native applications. We build secure, scalable mobile solutions for startups, enterprises, and growing businesses.",
      "inLanguage": "en-CA",
      "datePublished": "2026-08-02",
      "dateModified": "2026-08-02",
      "isPartOf": { "@id": "https://altiorainfotech.ca/#website" },
      "publisher": { "@id": "https://altiorainfotech.ca/#organization" },
      "breadcrumb": { "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#breadcrumb" },
      "mainEntity": { "@id": "https://altiorainfotech.ca/services/mobile-app-development-company-canada/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", ".faq-answer"]
      },
      "about": [
        { "@type": "Thing", "name": "Mobile App Development" },
        { "@type": "Thing", "name": "iOS App Development" },
        { "@type": "Thing", "name": "Android App Development" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Flutter" },
        { "@type": "Thing", "name": "React Native" },
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "SoftwareApplication", "name": "ChatGPT", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Google Gemini", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Perplexity", "applicationCategory": "AI Search Engine" },
        { "@type": "SoftwareApplication", "name": "Claude", "applicationCategory": "AI Assistant" },
        { "@type": "SoftwareApplication", "name": "Bing Copilot", "applicationCategory": "AI Assistant" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Small and Medium Businesses, Enterprise Organizations",
        "geographicArea": { "@type": "Country", "name": "Canada" }
      },
      "relatedLink": [
        "https://altiorainfotech.ca/services/ai-development-company-canada",
        "https://altiorainfotech.ca/services/custom-crm-development",
        "https://altiorainfotech.ca/services/website-development-services"
      ]
    }
  ]
};

export default function MobileAppDevelopmentCompanyCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppDevelopmentSchema) }}
      />
      <MobileAppDevelopmentClientPage />
    </>
  );
}
