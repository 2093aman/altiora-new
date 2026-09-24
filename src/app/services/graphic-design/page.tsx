import { Metadata } from "next";
import GraphicDesignClientPage from "./_components/GraphicDesignClientPage";

export const metadata: Metadata = {
  title: "Graphic Design Services Canada",
  description: "Professional graphic design services in Canada including branding visuals, marketing creatives and digital design assets.",
  keywords: "graphic design services, logo design, brand identity, social media graphics, marketing collateral, UI/UX design, packaging design",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/graphic-design",
  },
  openGraph: {
    title: "Graphic Design Services Canada",
    description: "Professional graphic design services in Canada including branding visuals, marketing creatives and digital design assets.",
    url: "https://altiorainfotech.ca/services/graphic-design",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Graphic Design Services Canada" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Services Canada",
    description: "Professional graphic design services in Canada including branding visuals, marketing creatives and digital design assets.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const graphicDesignSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/graphic-design/#service",
      "name": "Graphic Design Services",
      "url": "https://altiorainfotech.ca/services/graphic-design",
      "description": "Professional graphic design services in Canada including branding visuals, marketing creatives and digital design assets.",
      "serviceType": "Graphic Design, Brand Identity Design, Visual Design",
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
          "name": "Graphic Design Services",
          "item": "https://altiorainfotech.ca/services/graphic-design"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What graphic design services does Altiora Infotech offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech offers a comprehensive range of graphic design services including logo design, brand identity systems, business cards, brochures, social media graphics, digital advertising creatives, email templates, infographics, and packaging design. Each design is crafted to reflect the brand's personality, resonate with the target audience, and maintain visual consistency across all touchpoints."
          }
        },
        {
          "@type": "Question",
          "name": "Why is professional graphic design important for a business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional graphic design establishes immediate visual credibility, communicates brand values without words, and differentiates your business from competitors in a crowded marketplace. Research consistently shows that consumers form a first impression within milliseconds of seeing a brand's visual identity, making high-quality design a direct driver of trust, recognition, and purchasing decisions."
          }
        },
        {
          "@type": "Question",
          "name": "What is brand identity design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand identity design is the creation of a cohesive visual system including logo, color palette, typography, iconography, and design guidelines that represents a company's character and communicates its values consistently across every customer interaction. A strong brand identity ensures that your business is instantly recognizable and professionally presented whether on a website, social media, packaging, or printed materials."
          }
        },
        {
          "@type": "Question",
          "name": "How does graphic design help business growth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Effective graphic design increases brand recognition, builds customer trust, and improves conversion rates by making marketing materials more persuasive and easier to understand. Businesses with consistent, professional visual branding report significantly higher customer retention and can command premium pricing because their perceived quality and credibility are reinforced at every touchpoint."
          }
        }
      ]
    }
  ]
};

export default function GraphicDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphicDesignSchema) }}
      />
      <GraphicDesignClientPage />
    </>
  );
}
