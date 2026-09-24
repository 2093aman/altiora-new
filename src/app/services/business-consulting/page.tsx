import { Metadata } from "next";
import BusinessConsultingClient from "./client";

export const metadata: Metadata = {
  title: "Business Consulting Services Canada",
  description: "Business consulting services to help companies improve strategy, operations and growth through expert insights and planning.",
  keywords: "business consulting, strategy consulting, growth consulting, operational improvement, business strategy, digital transformation, financial advisory, leadership consulting",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/business-consulting",
  },
  openGraph: {
    title: "Business Consulting Services Canada",
    description: "Business consulting services to help companies improve strategy, operations and growth through expert insights and planning.",
    url: "https://altiorainfotech.ca/services/business-consulting",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Business Consulting Services Canada" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Consulting Services Canada",
    description: "Business consulting services to help companies improve strategy, operations and growth through expert insights and planning.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const businessConsultingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/business-consulting/#service",
      "name": "Business Consulting Services",
      "url": "https://altiorainfotech.ca/services/business-consulting",
      "description": "Business consulting services to help companies improve strategy, operations and growth through expert insights and planning.",
      "serviceType": "Business Consulting, Strategy Consulting, Growth Consulting",
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
          "name": "Business Consulting Services",
          "item": "https://altiorainfotech.ca/services/business-consulting"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a business consultant do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A business consultant analyzes a company's current operations, challenges, and market position to identify opportunities for improvement and develop actionable strategies that drive growth, efficiency, and profitability. Consultants bring specialized expertise, an objective outside perspective, and proven frameworks that help business owners and leadership teams make better decisions and execute more effectively."
          }
        },
        {
          "@type": "Question",
          "name": "What business consulting services does Altiora Infotech offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech offers business strategy development, market entry planning, growth roadmapping, digital transformation consulting, operational process improvement, marketing strategy, and competitive analysis. Each consulting engagement begins with a thorough discovery phase to understand your specific business context before recommending strategies tailored to your goals and resources."
          }
        },
        {
          "@type": "Question",
          "name": "How can business consulting help a Canadian company grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business consulting helps Canadian companies grow by providing clarity on market opportunities, identifying and eliminating operational inefficiencies, building scalable systems, and creating data-driven strategies that align resources with the highest-return activities. Companies working with experienced business consultants typically accelerate their growth trajectory and avoid costly mistakes by leveraging expertise that would otherwise take years to develop internally."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between strategy consulting and management consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Strategy consulting focuses on high-level decisions such as market positioning, competitive differentiation, growth planning, and business model innovation helping leadership determine where and how to compete. Management consulting addresses the operational side of the business, including process optimization, organizational structure, change management, and execution helping leadership ensure the chosen strategy is implemented effectively and efficiently."
          }
        }
      ]
    }
  ]
};

export default function BusinessConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessConsultingSchema) }}
      />
      <BusinessConsultingClient />
    </>
  );
}
