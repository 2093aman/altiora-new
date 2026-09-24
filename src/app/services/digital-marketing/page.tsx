import { Metadata } from 'next';
import DigitalMarketingClientPage from './_components/DigitalMarketingClientPage';
import dbConnect from '@/lib/mongodb';
import DigitalMarketingServicePage from '@/models/DigitalMarketingServicePage';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getDigitalMarketingPageData() {
  try {
    await dbConnect();

    const pageData = await DigitalMarketingServicePage.findOne({
      pageSlug: 'digital-marketing-main',
      isActive: true
    }).lean();

    if (!pageData) {
      return null;
    }

    // Convert MongoDB _id to string for serialization
    return JSON.parse(JSON.stringify(pageData));
  } catch (error) {
    console.error('[Digital Marketing Page] Error fetching page data:', error);
    return null;
  }
}

export const metadata: Metadata = {
  title: "Digital Marketing Services in Canada | Altiora",
  description: "Discover digital marketing services in Canada including SEO, paid ads, social media marketing and strategy to grow your brand online.",
  keywords: "digital marketing strategy, marketing strategy, strategic planning, digital transformation, marketing consulting, growth strategy, ROI optimization",
  alternates: {
    canonical: "https://altiorainfotech.ca/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services in Canada | Altiora",
    description: "Discover digital marketing services in Canada including SEO, paid ads, social media marketing and strategy to grow your brand online.",
    url: "https://altiorainfotech.ca/services/digital-marketing",
    siteName: "Altiora Infotech",
    images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "Digital Marketing Services in Canada | Altiora" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Canada | Altiora",
    description: "Discover digital marketing services in Canada including SEO, paid ads, social media marketing and strategy to grow your brand online.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
  },
};

const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/digital-marketing/#service",
      "name": "Digital Marketing Services",
      "url": "https://altiorainfotech.ca/services/digital-marketing",
      "description": "End-to-end digital marketing services in Canada including SEO, paid advertising, social media, content, websites and growth strategy for ambitious brands.",
      "serviceType": "Digital Marketing, SEO, Paid Advertising, Social Media, Strategy, Web Development",
      "areaServed": { "@type": "Country", "name": "Canada" },
      "provider": { "@type": "Organization", "@id": "https://altiorainfotech.ca/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads and Paid Search" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta and LinkedIn Paid Social" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management and Content" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design and Conversion Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity and Creative Production" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Strategy and Growth Consulting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://altiorainfotech.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://altiorainfotech.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://altiorainfotech.ca/services/digital-marketing" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing is the coordinated use of search engines, paid advertising, social media, content, email and websites to acquire customers, drive measurable revenue and build a brand online. A complete programme combines SEO, paid search, paid social, content production and conversion-focused websites under one strategy."
          }
        },
        {
          "@type": "Question",
          "name": "What digital marketing services does Altiora Infotech provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech delivers SEO, Google Ads, Meta and LinkedIn paid advertising, social media management, content and video production, conversion-focused websites, brand identity and growth strategy. We also build AEO and GEO into every programme so brands surface inside AI search engines like ChatGPT, Perplexity and Google AI Overviews."
          }
        },
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Canadian SMBs invest between CA$2,000 and CA$6,000 per month on a coordinated digital marketing programme. Competitive verticals (legal, dental, real estate, SaaS) often run CA$8,000 to CA$25,000 per month when scale and share of voice are the objective."
          }
        },
        {
          "@type": "Question",
          "name": "How long until digital marketing produces measurable results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid advertising (Google Ads, Meta) typically produces qualified leads within 7 to 14 days of launch. SEO compounds on a 3 to 6 month curve for moderate keywords and 6 to 12 months for highly competitive terms. Most programmes show meaningful lead-volume growth by month 3 and ROI by month 6."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO, AEO and GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) ranks your site in traditional Google and Bing results. AEO (Answer Engine Optimization) makes your content quotable by AI engines like ChatGPT, Perplexity and Google AI Overviews. GEO (Generative Engine Optimization) ensures your brand is cited by generative search. A modern programme covers all three together."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://altiorainfotech.ca/services/digital-marketing/#webpage",
      "url": "https://altiorainfotech.ca/services/digital-marketing",
      "name": "Digital Marketing Services in Canada | Altiora Infotech",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    }
  ]
};

export default async function DigitalMarketingPage() {
  const pageData = await getDigitalMarketingPageData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMarketingSchema) }}
      />
      <DigitalMarketingClientPage pageData={pageData} />
    </>
  );
}
