import { Metadata } from 'next';
import VideoProductionClientPage from './_components/VideoProductionClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Video Production Services Canada';
  const description = 'Video production services in Canada for marketing, social media, brand storytelling and high-impact promotional videos.';

  return {
    title,
    description,
    alternates: {
      canonical: "https://altiorainfotech.ca/services/video-production",
    },
    openGraph: {
      title,
      description,
      url: "https://altiorainfotech.ca/services/video-production",
      siteName: "Altiora Infotech",
      images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
    },
  };
}

const videoProductionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://altiorainfotech.ca/services/video-production/#service",
      "name": "Video Production Services",
      "url": "https://altiorainfotech.ca/services/video-production",
      "description": "Video production services in Canada for marketing, social media, brand storytelling and high-impact promotional videos.",
      "serviceType": "Video Production, Brand Video, Social Media Video",
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
          "name": "Video Production Services",
          "item": "https://altiorainfotech.ca/services/video-production"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of videos does Altiora Infotech produce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Altiora Infotech produces brand story videos, product and service promotional videos, explainer and animated videos, customer testimonial videos, social media short-form content, corporate documentaries, recruitment videos, and event coverage. Each video is strategically crafted to serve a specific marketing objective and is optimized for the platform on which it will be distributed."
          }
        },
        
        {
          "@type": "Question",
          "name": "How long does the video production process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard video production project with Altiora Infotech takes 3 to 6 weeks from initial concept development through final delivery, including scripting, pre-production planning, filming, editing, and revisions. More complex productions involving animation, multiple shoot locations, or large crews may require 8 to 12 weeks to complete to the highest standard."
          }
        },
        {
          "@type": "Question",
          "name": "Why is video important for digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Video is the highest-performing content format across virtually every digital marketing channel, with studies showing that video content generates up to 1,200% more shares than text and images combined and increases conversion rates by as much as 80% on landing pages. For Canadian businesses, video builds emotional connection, communicates complex value propositions quickly, and performs exceptionally well in paid advertising, organic social media, and search engine results."
          }
        }
      ]
    }
  ]
};

export default function VideoProductionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoProductionSchema) }}
      />
      <VideoProductionClientPage />
    </>
  );
}
