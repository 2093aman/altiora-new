import { Metadata } from "next";
import MobileAppDevelopmentClient from "./client";

export const metadata: Metadata = {
    title: "Mobile App Development Company Canada",
    description: "Mobile app development services in Canada building scalable iOS and Android applications designed for performance and growth.",
    keywords: "mobile app development, iOS app development, Android app development, React Native, Flutter, cross-platform apps, mobile UI/UX, app development company Canada USA",
    alternates: {
      canonical: "https://altiorainfotech.ca/services/mobile-app-development",
    },
    openGraph: {
      title: "Mobile App Development Company Canada",
      description: "Mobile app development services in Canada building scalable iOS and Android applications designed for performance and growth.",
      url: "https://altiorainfotech.ca/services/mobile-app-development",
      siteName: "Altiora Infotech",
      images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Mobile App Development Company Canada" }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mobile App Development Company Canada",
      description: "Mobile app development services in Canada building scalable iOS and Android applications designed for performance and growth.",
      images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
    },
};

const mobileAppSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/mobile-app-development/#service",
      "name": "Mobile App Development Services",
      "url": "https://altiorainfotech.ca/services/mobile-app-development",
      "description": "Mobile app development services in Canada building scalable iOS and Android applications designed for performance and growth.",
      "serviceType": "Mobile App Development, iOS Development, Android Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://altiorainfotech.ca/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mobile App Development Services",
          "item": "https://altiorainfotech.ca/services/mobile-app-development"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What mobile platforms does Altiora Infotech develop for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech develops native iOS apps (Swift/Objective-C), native Android apps (Kotlin/Java), and cross-platform apps using React Native and Flutter. Whether your project requires platform-specific native performance or a cost-efficient cross-platform solution, Altiora's development team selects the technology stack best suited to your app's requirements and target user base."
          }
        },
        {
          "@type": "Question",
          "name": "How much does mobile app development cost in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mobile app development costs in Canada typically range from $15,000 to $25,000 CAD for simple apps with core features, $25,000 to $80,000 CAD for mid-complexity apps with custom backends and integrations, and $80,000 CAD or more for enterprise-level applications with advanced functionality. Altiora Infotech provides detailed project scoping and fixed-price proposals so there are no unexpected costs throughout the development process."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A straightforward mobile app with core functionality typically takes 3 to 5 months to design, develop, test, and launch, while feature-rich or complex applications can take 6 to 12 months. Altiora Infotech follows an agile development methodology, delivering working features in iterative sprints so clients can review progress and provide feedback throughout the build rather than waiting until completion."
          }
        },
        {
          "@type": "Question",
          "name": "What is cross-platform app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cross-platform app development involves building a single codebase that runs on both iOS and Android devices, using frameworks like React Native or Flutter to deliver a near-native user experience at a significantly lower cost than building two separate native apps. For most businesses, cross-platform development reduces time to market and ongoing maintenance costs by 30 to 50 percent compared to separate native builds without meaningful performance trade-offs for the majority of use cases."
          }
        }
      ]
    }
  ]
};

export default function MobileAppDevelopmentPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
            />
            <MobileAppDevelopmentClient />
        </>
    );
}
