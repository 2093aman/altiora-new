"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
// import { getImageUrl } from "@/lib/cloudinary";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/altiorainfotech.ca?igsh=MTV0bnhzcnl4aml1ag==",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.38-.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25z"
        />
      </svg>
    ),
  },
];

const columns = [
  {
    title: "Services",
    links: [
      "SEO",
      "Paid Advertising (PPC)",
      "Social Media Management",
      "Website Development Services",
      "Shopify SEO",
      "Local SEO",
      "AI Marketing",
      "Email Marketing",
      "Google Business Profile",
    ],
    orderClass: "order-1 sm:order-1",
  },
  {
    title: "Company",
    links: ["About", "Contact"],
    orderClass: "order-3 sm:order-2",
  },
  {
    title: "We are available In",
    links: [],
    hasDropdown: true,
    orderClass: "order-4 sm:order-3",
  },
  {
    title: "Industries We Work With",
    links: ["Real Estate Marketing", "Immigration Consultants", "Dental Marketing", "Real Estate Lead Generation", "Restaurant Marketing", "E-Commerce Marketing", "Healthcare Marketing", "SaaS Marketing", "Law Firm SEO"],
    orderClass: "order-2 sm:order-4",
  },
];

const tickerItems = [
  "SEO Optimization",
  "PPC Campaigns",
  "Social Media Marketing",
  "Content Strategy",
  "Web Design",
  "Brand Identity",
  "Email Marketing",
  "Analytics & Reporting",
];

// Map normalized labels → hrefs
const LINK_MAP: Record<string, string> = {
  about: "/about",
  careers: "https://www.linkedin.com/company/altiora-infotech/jobs/",
  career: "/careers",
  contact: "/contact",
  blog: "/blog",
  testimonials: "/testimonials",
  faq: "/faq",
  "pitch deck": "https://altiorainfotech.com/pitch-deck",
  playbook: "https://altiorainfotech.com/playbook",
  "digital marketing": "/services/digital-marketing",
  "paid advertising (ppc)": "/services/paid-advertisement-services",
  "seo": "/services/seo",
  "aeo & geo": "/services/aeo-geo",
  "ppc": "/services/ppc",
  "social media management": "/services/social-media-management",
  "website development services": "/services/website-development-services",
  "web design": "/services/website-development-services",
  "branding": "/services/branding",
  "mobile app development": "/services/mobile-app-development",
  "graphic design": "/services/graphic-design",
  "real estate marketing": "/services/real-estate-marketing-agency-in-canada",
  "immigration consultants": "/services/digital-marketing-for-immigration-consultants-in-canada",
  "dental marketing": "/services/dental-marketing-services-in-canada",
  "real estate lead generation": "/services/how-real-estate-agents-generate-leads-in-canada",
  "restaurant marketing": "/services/digital-marketing-for-restaurants-in-canada",
  "e-commerce marketing": "/services/digital-marketing-for-ecommerce-businesses-in-canada",
  "healthcare marketing": "/services/digital-marketing-for-healthcare-providers-in-canada",
  "shopify seo": "/services/shopify-seo-services-canada",
  "shopify services": "/services/shopify-services",
  "email marketing": "/services/email-marketing-services-canada",
  "google business profile": "/services/google-my-business-management-services",
  "local seo": "/services/local-seo-services-in-canada",
  "ai marketing": "/services/ai-marketing-services-in-canada",
  "saas marketing": "/services/saas-marketing-services-in-canada",
  "law firm seo": "/services/seo-services-for-law-firms-in-canada",
};

// normalize labels before lookup
const hrefFor = (raw: string) => LINK_MAP[raw.trim().toLowerCase()] ?? null;

export default function Footer() {
  const ticker = useMemo(() => [...tickerItems, ...tickerItems], []);
  const [canadaOpen, setCanadaOpen] = useState(false);

  const canadaLocations = [
    { name: "Vancouver", href: "/services/digital-marketing-company-in-vancouver" },
    { name: "Toronto", href: "/services/digital-marketing-company-in-toronto" },
    { name: "Mississauga", href: "/services/digital-marketing-company-in-mississauga" },
    { name: "Brampton", href: "/services/digital-marketing-company-in-brampton" },
    { name: "Edmonton", href: "/services/digital-marketing-company-in-edmonton" },
    { name: "Kelowna", href: "/services/digital-marketing-company-in-kelowna" },
    { name: "Whistler", href: "/services/digital-marketing-company-in-whistler" },
    { name: "Surrey", href: "/services/digital-marketing-company-in-surrey" },
    { name: "Abbotsford", href: "/services/digital-marketing-company-in-abbotsford" },
    { name: "Calgary", href: "/services/digital-marketing-company-in-Calgary" },
    { name: "Burnaby", href: "/services/digital-marketing-company-in-burnaby" },
    { name: "Richmond", href: "/services/digital-marketing-company-in-richmond" },
    { name: "Langley", href: "/services/digital-marketing-company-in-langley" },
    { name: "Kerrville", href: "/services/digital-marketing-company-in-kerrville" },
    { name: "Indigenous", href: "/services/digital-marketing-company-in-indigenous" },
    { name: "Ottawa", href: "/services/digital-marketing-company-in-ottawa" },
    { name: "Oakville", href: "/services/digital-marketing-company-in-oakville" },
    { name: "Montreal", href: "/services/digital-marketing-company-in-montreal" },
    { name: "Hamilton", href: "/services/digital-marketing-company-in-hamilton" },
    { name: "Winnipeg", href: "/services/digital-marketing-company-in-winnipeg" },
    { name: "Victoria", href: "/services/digital-marketing-company-in-victoria" },
    { name: "Halifax", href: "/services/digital-marketing-company-in-halifax" },
    { name: "Markham", href: "/services/digital-marketing-company-in-markham" },
  ];


  return (
    <footer className="mt-auto bg-white text-gray-700 z-10 relative">
      {/* gradient top veil */}
      <div aria-hidden className="relative h-14 overflow-hidden z-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          {/* socials + brand */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-black/10">
            <div className="md:col-span-3">
              {/* 🔄 brand name replaced with logo only */}
              <Link
                href="/"
                aria-label="Altiora Infotech home"
                className="inline-flex items-center"
              >
                <Image
                  src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/altiora/about/altiora%20logo%20.svg"
                  alt="Altiora Infotech"
                  width={56}
                  height={56}
                  className="rounded"
                  priority
                />
              </Link>

              <p className="mt-2 text-sm text-black/70">
                Crafting digital growth through marketing and technology.
              </p>

              <div className="mt-4 flex items-center gap-3">
                {socials.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.12] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    title={s.name}
                  >
                    <span className="text-white">{s.svg}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* columns */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {columns.map((col) => (
                <div key={col.title} className={col.orderClass ?? ""}>
                  <div className="text-sm font-semibold text-black">{col.title}</div>
                  {col.hasDropdown ? (
                    <div className="mt-3 space-y-2">
                      {/* Canada Dropdown */}
                      <div>
                        <button
                          onClick={() => setCanadaOpen(!canadaOpen)}
                          className="text-sm text-gray-700 hover:text-black transition flex items-center gap-1"
                        >
                          Canada
                          <svg
                            className={`w-3 h-3 transition-transform ${canadaOpen ? 'rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </button>
                        {canadaOpen && (
                          <ul className="mt-2 ml-3 grid grid-cols-2 gap-x-4 gap-y-1">
                            {canadaLocations.map((loc) => (
                              <li key={loc.name}>
                                <Link
                                  href={loc.href}
                                  className="text-xs text-gray-600 hover:text-black transition"
                                >
                                  {loc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ) : (
                    <ul className="mt-3 space-y-2">
                      {col.links.map((label) => {
                        const href = hrefFor(label);
                        return (
                          <li key={label}>
                            {href ? (
                              <Link
                                href={href}
                                className="text-sm text-black hover:text-black transition"
                              >
                                {label}
                              </Link>
                            ) : (
                              <span
                                role="link"
                                aria-disabled="true"
                                className="text-sm text-black/80 select-none cursor-default"
                                title="Coming soon"
                              >
                                {label}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ticker */}
          <div className="relative py-4 border-b border-black/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            <div className="relative overflow-hidden">
              <div className="flex gap-8 animate-[ticker_28s_linear_infinite] will-change-transform">
                {ticker.map((t, i) => (
                  <span
                    key={`${t}-${i}`}
                    className="text-[12px] tracking-[0.14em] uppercase text-black/60 whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-gray-600">
            <p>© 2026 <Link href="https://altiorainfotech.com" target="_blank" rel="noreferrer" className="hover:text-black transition">Altiora Infotech</Link>. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-black">
                Terms & Conditions
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-600 hover:text-black transition cursor-pointer flex items-center gap-1"
                aria-label="Back to top"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M7 14l5-5 5 5z" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ticker animation */}
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
