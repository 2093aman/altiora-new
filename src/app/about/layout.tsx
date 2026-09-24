import type { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = await generateSEOMetadata('/about', {
    title: 'About Altiora Infotech | Digital Growth Experts',
    description: 'Learn about Altiora Infotech, a digital growth and marketing company in Canada helping businesses scale with SEO, performance marketing and strategy.'
  });

  return {
    ...baseMetadata,
    alternates: {
      canonical: "https://altiorainfotech.ca/about",
    },
    openGraph: {
      title: "About Altiora Infotech | Digital Growth Experts",
      description: "Learn about Altiora Infotech, a digital growth and marketing company in Canada helping businesses scale with SEO, performance marketing and strategy.",
      url: "https://altiorainfotech.ca/about",
      siteName: "Altiora Infotech",
      images: [{ url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg", width: 1200, height: 630, alt: "About Altiora Infotech" }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Altiora Infotech | Digital Growth Experts",
      description: "Learn about Altiora Infotech, a digital growth and marketing company in Canada helping businesses scale with SEO, performance marketing and strategy.",
      images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"],
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;  
}) {
  return children;
}
//testing