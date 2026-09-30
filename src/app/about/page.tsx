// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../assets/Header";
import Footer from "../../assets/Footer";
import { iconGradient } from "@/lib/iconGradients";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main
        className="flex-grow"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #F7F8FA 50%, #ffffff 100%)",
        }}
      >
        {/* HERO */}
        <section className="relative h-[40vh] sm:h-[44vh] md:h-[48vh]">
          <Image
            src="/images/about/hero.jpg"
            alt="Altiora Infotech About Us"
            fill
            priority
            className="object-cover"
          />
          {/* blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001A66]/80 via-[#002387]/60 to-[#001A66]/90" />

          {/* heading */}
          <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <span className="uppercase tracking-[0.25em] text-xs sm:text-[13px] font-extrabold text-[#B18B1E] bg-[#C9A227]/20 px-3.5 py-1 rounded-full border border-[#C9A227]/40 inline-block shadow-sm">
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-3 tracking-tight drop-shadow text-white">
                Altiora <span className="bg-gradient-to-r from-[#C9A227] to-[#B18B1E] bg-clip-text text-transparent">Infotech</span>
              </h1>
              <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                A growth-focused digital marketing and technology company helping
                Canadian businesses build, scale, and compete in today&apos;s
                digital landscape.
              </p>
            </div>
          </div>

          {/* subtle bottom line */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
        </section>

        {/* INTRO STRIP (stats) */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="relative -mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 rounded-2xl border border-[#C9A227]/30 bg-[#F7F8FA] shadow-md backdrop-blur-sm p-4 sm:p-6">
              {[
                { k: "Projects Delivered", v: "80+" },
                { k: "Industries", v: "12+" },
                { k: "Avg. ROI", v: "3-5×" },
                { k: "Canadian Clients", v: "Growing" },
              ].map((s) => (
                <div key={s.k} className="text-center">
                  <div className="text-xl sm:text-3xl font-extrabold text-[#002387]">{s.v}</div>
                  <div className="mt-1 text-xs sm:text-sm text-[#3B4456] font-semibold uppercase tracking-wider">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* WHAT WE DO */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900">
                  What We Do
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C9A227] via-[#B18B1E] to-[#002387]" />
                <p className="mt-5 text-[#3B4456] leading-relaxed">
                  We are a growth-focused digital marketing and technology company helping Canadian businesses build, scale, and compete in today&apos;s digital landscape.
                </p>
                <p className="mt-4 text-[#3B4456] leading-relaxed">
                  At Altiora Infotech, we combine data-driven marketing, creative execution, and modern technology to deliver measurable results. Our focus is not just visibility it&apos;s generating qualified leads, increasing conversions, and driving long-term growth.
                </p>
                <p className="mt-4 text-[#3B4456] leading-relaxed">
                  We work with startups, small businesses, and growing companies across Canada to build strong digital foundations and scalable growth systems.
                </p>
                <p className="mt-5 text-slate-900 font-semibold">Our expertise includes:</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Digital Marketing & Performance Advertising", href: "/services/paid-advertisement-services" },
                    { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
                    { label: "Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)", href: "/services/aeo-geo" },
                    { label: "Branding & Content Strategy", href: "/services/branding" },
                    { label: "Website & Conversion Optimization", href: "/services/website-development-services" },
                    { label: "Mobile App Development", href: "/services/mobile-app-development" },
                    { label: "Influencer Marketing & UGC Campaigns", href: "/services/influencer-ugc-marketing" },
                  ].map((item) => (
                    <Link key={item.label} href={item.href} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-[#F7F8FA] p-4 hover:bg-white hover:border-[#002387]/40 hover:shadow-sm transition-all duration-300 group">
                      <span className="mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#C9A227] ring-2 ring-[#C9A227]/30" />
                      <p className="text-sm sm:text-[15px] text-[#3B4456] group-hover:text-[#002387] font-medium transition-colors">{item.label}</p>
                    </Link>
                  ))}
                </div>
                <p className="mt-5 text-[#3B4456] leading-relaxed">
                  Every solution we deliver is aligned with business outcomes not vanity metrics.
                </p>
              </div>
            </section>

            {/* HOW WE WORK */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900">
                  How We Work
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C9A227] via-[#B18B1E] to-[#002387]" />
                <p className="mt-5 text-[#3B4456] leading-relaxed">
                  Our approach is strategic, transparent, and performance-driven.
                </p>
                <p className="mt-4 text-[#3B4456] leading-relaxed">
                  We begin by understanding your business goals, target market, and competitive landscape in Canada. From there, we build tailored strategies designed to attract the right audience and convert them into customers.
                </p>
                <p className="mt-5 text-slate-900 font-semibold">Our process includes:</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Market research & audience targeting",
                    "Funnel and growth strategy development",
                    "Campaign execution across digital channels",
                    "Continuous optimization through analytics and A/B testing",
                    "Clear, consistent reporting",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-[#F7F8FA] p-4 hover:border-[#C9A227]/40 transition-colors">
                      <span className="mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#C9A227] ring-2 ring-[#C9A227]/30" />
                      <p className="text-sm sm:text-[15px] text-[#3B4456] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[#3B4456] leading-relaxed">
                  We focus on delivering predictable growth, measurable ROI, and scalable systems that evolve with your business.
                </p>
              </div>
            </section>

            {/* VISION & MISSION (side-by-side) */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vision */}
                <div className="rounded-2xl border border-[#C9A227]/30 bg-[#F7F8FA] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <span className={`inline-grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${iconGradient(1)} text-white shadow-md`}>
                      {/* eye/target icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 5c5 0 8.5 4 10 7-1.5 3-5 7-10 7S3.5 15 2 12c1.5-3 5-7 10-7Z" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Vision</h3>
                  </div>
                  <p className="mt-4 text-[#3B4456] leading-relaxed">
                    To become a trusted digital growth partner for businesses across Canada, delivering innovative marketing and technology solutions that drive measurable and sustainable success.
                  </p>
                </div>

                {/* Mission */}
                <div className="rounded-2xl border border-[#C9A227]/30 bg-[#F7F8FA] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <span className={`inline-grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${iconGradient(3)} text-white shadow-md`}>
                      {/* rocket icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M14 3c3 0 7 4 7 7-3.5 1-6.5 3.5-8.5 6.5C10 18 8 20 7 21c1-2 1-4 1.5-5.5C11.5 13.5 14 10.5 14 7V3Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 13l-3 3 4 1 1 4 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Mission</h3>
                  </div>
                  <p className="mt-4 text-[#3B4456] leading-relaxed">
                    Our mission is to help businesses grow through data-driven marketing, modern technology, and strategic execution. We aim to deliver solutions that are reliable, scalable, and results-oriented, enabling brands to attract, convert, and retain customers in an increasingly competitive digital market.
                  </p>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900">
                  Experience & Impact
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C9A227] via-[#B18B1E] to-[#002387]" />
                <p className="mt-5 text-[#3B4456] leading-relaxed">
                  With 80+ projects delivered across industries including real estate, healthcare, finance, e-commerce, and professional services, we bring proven expertise in delivering measurable results.
                </p>
                <p className="mt-4 text-[#3B4456] leading-relaxed">
                  We work as an extension of your team, aligning our strategies with your business goals and market demands.
                </p>
                <p className="mt-4 text-[#002387] font-bold text-base sm:text-lg">
                  Our focus is simple: generate leads, improve conversions, and increase revenue.
                </p>
              </div>
            </section>

            {/* WHY ALTIORA expanded */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900">
                  Why Altiora Infotech
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C9A227] via-[#B18B1E] to-[#002387]" />
                <p className="mt-5 text-[#3B4456] leading-relaxed">
                  We measure success by your growth.
                </p>
                <p className="mt-3 text-[#3B4456] leading-relaxed">
                  Our approach is transparent, data-driven, and focused on real business outcomes not vanity metrics.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Strategies aligned with key metrics (Leads, ROI, CAC, LTV)",
                    "Performance-driven marketing campaigns",
                    "SEO, AEO & GEO for future-ready search visibility",
                    "Conversion-focused websites and funnels",
                    "Continuous optimization through data and testing",
                    "Clear communication and reporting",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-[#F7F8FA] p-4 hover:border-[#002387]/40 transition-colors"
                    >
                      <span className="mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#C9A227] ring-2 ring-[#C9A227]/30" />
                      <p className="text-sm sm:text-[15px] text-[#3B4456] font-medium">{line}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[#002387] font-bold text-base sm:text-lg">
                  We don&apos;t just provide services we build scalable growth systems that help your business succeed in the Canadian market.
                </p>
              </div>
            </section>

            {/* CTA STRIP */}
            <section>
              <div className="relative overflow-hidden rounded-3xl border border-[#C9A227]/30 bg-gradient-to-r from-[#001A66] via-[#002387] to-[#001A66] shadow-xl p-8 sm:p-12 text-white">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1200px_600px_at_10%_-20%,#C9A227,transparent_60%)]" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Ready to grow your business in Canada?
                  </h3>
                  <p className="mt-3 text-white/90 max-w-2xl text-base sm:text-lg leading-relaxed">
                    Tell us your goals more leads, better conversions, or stronger brand presence and we&apos;ll build a strategy designed to deliver real, measurable results.
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] px-7 py-3.5 text-sm sm:text-base font-bold text-[#001A66] shadow-lg shadow-[#C9A227]/20 hover:shadow-xl transition-all duration-300"
                  >
                    Let’s talk
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 12h10M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
