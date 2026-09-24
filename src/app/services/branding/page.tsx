import { Metadata } from "next";
import BrandingClientPage from "./_components/BrandingClientPage";

export const metadata: Metadata = {
  title: "Branding Services | Altiora Infotech",
  description: "Branding services in Canada to build a strong brand identity with strategy, visual design and positioning that stands out online.",
  keywords: "branding services, brand identity, brand strategy, logo design, brand guidelines, brand positioning, visual identity, brand messaging",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/branding",
  },
  openGraph: {
    title: "Branding Services | Altiora Infotech",
    description: "Branding services in Canada to build a strong brand identity with strategy, visual design and positioning that stands out online.",
    url: "https://altiorainfotech.ca/services/branding",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Branding Services | Altiora Infotech" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Services | Altiora Infotech",
    description: "Branding services in Canada to build a strong brand identity with strategy, visual design and positioning that stands out online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const brandingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/branding/#service",
      "name": "Branding Services",
      "url": "https://altiorainfotech.ca/services/branding",
      "description": "Branding services in Canada to build a strong brand identity with strategy, visual design and positioning that stands out online.",
      "serviceType": "Brand Strategy, Brand Identity, Brand Development",
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
          "name": "Branding Services",
          "item": "https://altiorainfotech.ca/services/branding"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in branding services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech's branding services include brand strategy development, logo design, visual identity systems, brand voice and messaging guidelines, brand positioning, competitive differentiation, and comprehensive brand style guides. Each engagement is a collaborative process that aligns your brand's visual and verbal identity with your business objectives and target audience expectations."
          }
        },
        {
          "@type": "Question",
          "name": "Why is branding important for a business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branding creates the foundation for every customer relationship by establishing recognition, trust, and emotional connection before a prospect ever speaks to your team. A strong brand allows businesses to charge premium prices, attract better talent, build customer loyalty, and stand out clearly in competitive markets making branding one of the highest-return investments a business can make."
          }
        },
        {
          "@type": "Question",
          "name": "What is brand strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand strategy is the long-term plan that defines who your brand is, what it stands for, how it speaks, and how it differentiates itself from competitors in the minds of your target audience. It encompasses your brand's purpose, values, positioning statement, target customer personas, and the key messages that guide all marketing and communication decisions across every channel."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a branding project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A full branding project with Altiora Infotech typically takes 6 to 12 weeks depending on the scope, which may include strategy workshops, research, logo exploration, identity design, and brand guideline documentation. Simpler brand refresh projects can be completed in 3 to 4 weeks, while comprehensive brand builds for larger organizations may extend to 16 weeks or more."
          }
        }
      ]
    }
  ]
};

export default function BrandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingSchema) }}
      />
      <BrandingClientPage />
    </>
  );
}
