import { Metadata } from 'next';
import DigitalMarketingClientPage from './services/digital-marketing/_components/DigitalMarketingClientPage';
import dbConnect from '@/lib/mongodb';
import DigitalMarketingServicePage from '@/models/DigitalMarketingServicePage';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Canada | Altiora Infotech',
  description: 'Altiora Infotech is a leading Digital Marketing Company in Canada offering SEO, PPC, social media marketing and growth strategies for businesses.',
  openGraph: {
    title: 'Digital Marketing Company in Canada | Altiora Infotech',
    description: 'Altiora Infotech is a leading Digital Marketing Company in Canada offering SEO, PPC, social media marketing and growth strategies for businesses.',
  },
  twitter: {
    title: 'Digital Marketing Company in Canada | Altiora Infotech',
    description: 'Altiora Infotech is a leading Digital Marketing Company in Canada offering SEO, PPC, social media marketing and growth strategies for businesses.',
  },
};

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


export default async function Page() {
  const pageData = await getDigitalMarketingPageData();

  const pageTitle = 'Digital Marketing Company in Canada | Altiora Infotech';
  const pageDescription = 'Altiora Infotech is a leading Digital Marketing Company in Canada offering SEO, PPC, social media marketing and growth strategies for businesses.';

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://altiorainfotech.ca/#organization",
        "name": "Altiora Infotech",
        "url": "https://altiorainfotech.ca/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://altiorainfotech.ca/images/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Altiora Infotech is a leading Digital Marketing Company in Canada offering SEO, PPC, social media marketing and growth strategies for businesses.",
        "foundingDate": "2025",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2210 - 13778 100 Ave",
          "addressLocality": "Surrey",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "areaServed": { "@type": "Country", "name": "Canada" },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": { "@type": "Country", "name": "Canada" },
          "availableLanguage": ["English"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing & Technology Services in Canada",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing Services in Canada | Altiora",
                "description": "Discover digital marketing services in Canada including SEO, paid ads, social media marketing and strategy to grow your brand online.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/digital-marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paid Advertising Services Canada | PPC Experts",
                "description": "Paid advertising services in Canada including Google Ads, PPC campaigns and performance marketing designed to drive traffic and conversions.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/paid-advertisement-services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services Canada | Altiora Infotech",
                "description": "Professional SEO services in Canada to improve search rankings, organic traffic and online visibility with proven search engine strategies.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/seo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AEO & GEO Optimization Services",
                "description": "AI search optimization services including AEO and GEO strategies to improve visibility in AI search engines and modern search experiences.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/aeo-geo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Management | Altiora Infotech",
                "description": "Social media management services to grow your brand, engage audiences and drive results across Instagram, Facebook, LinkedIn and more.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/social-media-management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEM Services Canada | Altiora",
                "description": "Search engine marketing services in Canada including PPC management, Google Ads strategy and performance campaigns for growth.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/search-engine-marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing Strategy Services",
                "description": "Digital marketing strategy services designed to help businesses scale with data-driven marketing planning and growth frameworks.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/digital-marketing-strategy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Influencer Marketing Services Canada",
                "description": "Influencer and UGC marketing services to build brand trust, increase reach and drive engagement through creator partnerships.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/influencer-ugc-marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branding Services | Altiora Infotech",
                "description": "Branding services in Canada to build a strong brand identity with strategy, visual design and positioning that stands out online.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/branding"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Graphic Design Services Canada",
                "description": "Professional graphic design services in Canada including branding visuals, marketing creatives and digital design assets.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/graphic-design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Video Production Services Canada",
                "description": "Video production services in Canada for marketing, social media, brand storytelling and high-impact promotional videos.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/video-production"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Consulting Services Canada",
                "description": "Business consulting services to help companies improve strategy, operations and growth through expert insights and planning.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/business-consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development Services Canada",
                "description": "Website development services in Canada creating high-performance, SEO-optimized and conversion-focused websites for businesses.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/website-development-services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development Company Canada",
                "description": "Mobile app development services in Canada building scalable iOS and Android applications designed for performance and growth.",
                "areaServed": { "@type": "Country", "name": "Canada" },
                "url": "https://altiorainfotech.ca/services/mobile-app-development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing Company in Vancouver - Altiora Infotech",
                "description": "Digital marketing company in Vancouver providing SEO, PPC and social media marketing services to help businesses grow online.",
                "areaServed": { "@type": "City", "name": "Vancouver" },
                "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-vancouver"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing Company in Surrey - Altiora Infotech",
                "description": "Leading digital marketing company in Surrey offering SEO, PPC and social media marketing solutions for business growth.",
                "areaServed": { "@type": "City", "name": "Surrey" },
                "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-surrey"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing Company in Abbotsford - Altiora Infotech",
                "description": "Digital marketing company in Abbotsford providing SEO, paid advertising and social media marketing for local businesses.",
                "areaServed": { "@type": "City", "name": "Abbotsford" },
                "url": "https://altiorainfotech.ca/services/digital-marketing-company-in-abbotsford"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://altiorainfotech.ca/#website",
        "url": "https://altiorainfotech.ca/",
        "name": "Altiora Infotech",
        "inLanguage": "en-CA",
        "publisher": {
          "@id": "https://altiorainfotech.ca/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://altiorainfotech.ca/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://altiorainfotech.ca/#homepage",
        "url": "https://altiorainfotech.ca/",
        "name": pageTitle,
        "description": pageDescription,
        "inLanguage": "en-CA",
        "isPartOf": {
          "@id": "https://altiorainfotech.ca/#website"
        },
        "about": {
          "@id": "https://altiorainfotech.ca/#organization"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://altiorainfotech.ca/"
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://altiorainfotech.ca/#service",
        "name": "Altiora Infotech Digital Marketing Company",
        "url": "https://altiorainfotech.ca/",
        "description": pageDescription,
        "priceRange": "$$",
        "areaServed": { "@type": "Country", "name": "Canada" }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <DigitalMarketingClientPage pageData={pageData} />
    </>
  );
}
