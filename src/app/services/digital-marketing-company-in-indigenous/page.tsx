import { Metadata } from 'next';
import IndigenousMarketingClientPage from './_components/IndigenousMarketingClientPage';

export const metadata: Metadata = {
  title: 'Digital Marketing for Indigenous Businesses',
  description: 'Digital marketing services for Indigenous businesses helping communities grow online with SEO, branding and marketing strategies.',
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous",
  },
  openGraph: {
    title: "Digital Marketing for Indigenous Businesses",
    description: "Digital marketing services for Indigenous businesses helping communities grow online with SEO, branding and marketing strategies.",
    url: "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing for Indigenous Businesses" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Indigenous Businesses",
    description: "Digital marketing services for Indigenous businesses helping communities grow online with SEO, branding and marketing strategies.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const indigenousSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous/#business",
      "name": "Altiora Infotech | Digital Marketing for Indigenous Communities",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous",
      "image": "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      "description": "Digital marketing company partnering with First Nations Councils, Economic Development Corporations, Indigenous tourism operators and Indigenous-owned businesses across Canada on culturally-grounded branding, citizen engagement and growth campaigns.",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "AdministrativeArea", "name": "British Columbia" },
        { "@type": "AdministrativeArea", "name": "Alberta" }
      ],
      "knowsAbout": ["Indigenous Marketing", "Cultural Strategy", "First Nations Tourism", "Community Engagement", "Brand Identity", "Web Development"]
    },
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous/#service",
      "name": "Digital Marketing Company for Indigenous Communities",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous",
      "description": "Culturally-grounded digital marketing for First Nations, Economic Development Corporations and Indigenous-owned businesses.",
      "serviceType": "Indigenous Marketing, Brand Strategy, Community Engagement, Web Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Indigenous Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Culturally-grounded Brand Identity" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Citizen and Community Engagement Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indigenous Tourism Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bilingual / Indigenous-language Creative" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Development" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing for Indigenous Communities", "item": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a digital marketing company for Indigenous communities do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company for Indigenous communities partners with First Nations Councils, Economic Development Corporations, Indigenous tourism operators and Indigenous-owned businesses on culturally-grounded branding, citizen engagement and growth campaigns. Altiora Infotech delivers this work relationship-first, signed off by community, and tied to measurable outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "How do you build campaigns that respect Indigenous cultural protocols?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We start every engagement with relationship work: listening sessions with Council, Elders or community leadership, and a written cultural review of any imagery, language or stories proposed. Nothing goes live without explicit community sign-off, and revenue-share or community-benefit terms can be built directly into the engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with Economic Development Corporations, Nations and Indigenous-owned businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, across all three. We support First Nations Economic Development Corporations on tourism, energy and partnership branding, Nations on language-revitalisation and citizen-engagement campaigns, and Indigenous-owned businesses on growth marketing for tourism, services and consumer brands."
          }
        },
        {
          "@type": "Question",
          "name": "Can campaigns be delivered in Indigenous languages or with traditional storytelling formats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We collaborate with community language keepers and storytellers to deliver campaigns in territory-appropriate languages and traditional narrative formats. Translation, voiceover, song integration and ceremony-aware media planning are all options we can scope into an engagement."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-indigenous",
      "name": "Digital Marketing Company for Indigenous Communities | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default function IndigenousMarketingCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indigenousSchema) }}
      />
      <IndigenousMarketingClientPage />
    </>
  );
}
