'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  X,
  Search,
  Globe,
  Monitor,
  Target,
  Zap,
  Megaphone,
  BarChart3,
  Building2,
  Briefcase,
  FileText,
  MapPin,
  Repeat2,
  ShieldCheck,
  TrendingUp,
  Stethoscope,
  Home,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-company-in-oakville.module.css";

export default function OakvilleMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [compareRef, compareInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [frameworkRef, frameworkInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => { setMounted(true); }, []);

  const faqs = [
    { question: "How long does it take to see results from SEO in Oakville?", answer: "While paid advertising yields fast results, organic SEO typically takes between three to six months to show meaningful momentum. The exact timeline depends on your domain authority, technical setup, and the competitiveness of your niche in the local market." },
    { question: "Why shouldn't I just run Google Ads on my own?", answer: "Google Ads makes it simple to launch campaigns, but setting them up to deliver strong return on ad spend requires experience. Without negative keyword strategies, precise match types, ongoing bid management, and high-converting landing pages, ad budgets get wasted quickly on low-quality clicks." },
    { question: "How do you track and report campaign success?", answer: "We track metrics that directly align with your business goals: phone calls, contact form conversions, consultation requests, qualified pipeline value, and customer acquisition costs. You receive clear reports detailing performance, insights, and next steps." },
  ];

  const buyerJourney = [
    { number: "1", title: "High-Intent Local Searches", text: "Local map searches, direct brand queries, specific service + proximity combinations.", icon: MapPin, color: "#f4cc6f" },
    { number: "2", title: "Etiquette & Credibility Evaluation", text: "Website design speed, client reviews, local trust markers, professional authority signals.", icon: ShieldCheck, color: "#3B82F6" },
    { number: "3", title: "Multi-Touch Conversion Pull", text: "Search, targeted social, hyper-local PPC, direct booking / consultation requests.", icon: Repeat2, color: "#10B981" },
  ];

  const marketRealities = [
    { title: "High Purchasing Power Means Higher Trust Thresholds", text: "Oakville residents and decision-makers have high expectations. When searching for local services, they look closely at trust signals: website execution, user experience, authority, and reputation. A slow website or weak brand messaging will cost you business before you ever receive a phone call.", icon: TrendingUp, color: "#f4cc6f" },
    { title: "Intense Proximity-Based Competition", text: "Because Oakville borders Mississauga, Burlington, and Milton, local businesses face dual competition. You must protect your immediate Oakville territory while capturing high-value leads from neighboring municipalities across the GTA.", icon: MapPin, color: "#EC4899" },
    { title: "The Shift from Volume to Relevance", text: "Generating thousands of random impressions does not pay the bills. Winning in Oakville means reaching high-value leads at the precise moment they possess commercial intent.", icon: Target, color: "#8B5CF6" },
  ];

  const services = [
    {
      icon: Search, color: "#f4cc6f",
      title: "Search Engine Optimization (SEO)",
      description: "Organic search remains the most sustainable driver of long-term commercial growth. Our SEO strategy for Oakville businesses operates across three distinct pillars:",
      items: [
        { label: "Local Maps Optimization (Google Business Profile)", text: "Appearing in the Google Local 3-Pack is non-negotiable for service businesses. We optimize your Google Business Profile, manage local citation consistency, build location relevance across Halton Region, and implement review strategies to keep your business at the top of local map searches." },
        { label: "Technical SEO Audits and Execution", text: "Search engines prioritize websites that load rapidly, crawl efficiently, and offer seamless mobile experiences. We clean up indexation issues, implement structured data schema, fix site structure, and optimize page load speeds." },
        { label: "High-Intent Keyword Architecture", text: "We map and target the exact search phrases your ideal clients use when they are ready to buy. We structure dedicated, search-optimized pages for Oakville and surrounding areas to capture maximum market share." },
        { label: "Authority and Link Building", text: "We earn relevant, high-quality backlinks from recognized industry sources, local Ontario publications, and business directories to build your domain authority organically." },
      ],
    },
    {
      icon: Target, color: "#EC4899",
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Paid advertising gives you immediate visibility, precise control over ad spend, and fast access to active buyers.",
      items: [
        { label: "Google Search Ads", text: "Capture leads at the exact second they search for your services. We craft tight campaign structures, negative keyword lists, and dedicated ad copy to eliminate wasted spend and keep cost-per-acquisition low." },
        { label: "Hyper-Targeted Social Advertising", text: "Re-engage visitors and target custom audiences across LinkedIn, Meta, and Instagram. We build audience segments based on precise demographics, job titles, geography, and behavior patterns relevant to the Oakville and GTA markets." },
        { label: "Conversion Rate Optimization (CRO)", text: "Driving traffic to a page is only half the battle. We build custom, fast-loading landing pages designed to turn visitors into phone calls, consultation forms, and closed sales." },
      ],
    },
    {
      icon: Monitor, color: "#3B82F6",
      title: "Website Design and Conversion Architecture",
      description: "Your website is your central digital headquarters. If your site looks dated, loads slowly, or lacks clear calls to action, your marketing spend will underperform.",
      items: [
        { label: "Performance-First Development", text: "We build custom websites on modern, lightweight frameworks that load in under two seconds." },
        { label: "User Experience (UX) for High Conversions", text: "We organize information clearly so visitors instantly understand who you are, what you offer, and why they should choose you over competitors." },
        { label: "Mobile-First Responsive Layouts", text: "More than 60% of local searches happen on mobile devices. We ensure your site functions seamlessly across all screens and handheld devices." },
      ],
    },
    {
      icon: FileText, color: "#8B5CF6",
      title: "Content Marketing and Thought Leadership",
      description: "To rank highly in modern search results, your content must show genuine domain expertise and answer complex customer questions clearly.",
      items: [
        { label: "Strategic Content Development", text: "We publish detailed, well-researched articles, landing pages, and service guides that demonstrate your industry knowledge." },
        { label: "Local Market Relevance", text: "We weave local relevance naturally into your site's copy, grounding your brand firmly within Oakville, Halton Region, and the broader GTA." },
        { label: "Customer Journey Mapping", text: "We map content to every stage of your buying cycle, taking prospects from initial discovery to confident decision-making." },
      ],
    },
  ];

  const comparisons = [
    { pillar: "Strategy & Planning", standard: "Generic templates reused across multiple client accounts.", altiora: "Customized strategy built on deep local market analysis." },
    { pillar: "Reporting & Metrics", standard: "Focus on vanity stats like clicks, impressions, and likes.", altiora: "Focus on commercial metrics: leads, qualified calls, revenue, ROI." },
    { pillar: "Communication", standard: "Account managers reading off generic scripts.", altiora: "Direct access to experienced digital strategists and technical experts." },
    { pillar: "Technical Standards", standard: "Slow plugins and bloated off-the-shelf page builders.", altiora: "Clean code, rapid loading times, and custom-built conversion structures." },
    { pillar: "Search Engine Strategy", standard: "Superficial keyword stuffing and low-quality links.", altiora: "Technical precision, high-intent targeting, and authoritative link building." },
  ];

  const industries = [
    { title: "Professional Services (Legal, Financial, Consulting)", text: "Clients seeking legal counsel or financial management evaluate firm reputation thoroughly. We build authority-focused websites and high-intent SEO campaigns that establish your firm as the leading authority in your category.", icon: Briefcase, color: "#f4cc6f" },
    { title: "Medical, Health, and Wellness", text: "From cosmetic clinics to dental practices and specialized wellness centers, we implement compliant local search campaigns that keep your appointment schedule full.", icon: Stethoscope, color: "#3B82F6" },
    { title: "Luxury Home Services and Construction", text: "Oakville features some of the finest residential properties in Canada. We help custom builders, interior designers, landscape architects, and luxury renovators reach affluent homeowners searching for premium craftsmanship.", icon: Home, color: "#10B981" },
    { title: "B2B Technology and Corporate Services", text: "For corporate entities operating along the QEW and Winston Churchill corridor, we build focused multi-channel strategies designed to generate qualified business inquiries and fuel corporate sales pipelines.", icon: Building2, color: "#8B5CF6" },
  ];

  const framework = [
    { number: "01", title: "Audit & Local Competitive Discovery", text: "Deep analysis of current rankings, technical debt, competitor backlink profiles, and market opportunities.", icon: Search, color: "#f4cc6f", gradientFrom: "rgba(244,204,111,0.3)", gradientTo: "rgba(255,159,67,0.05)" },
    { number: "02", title: "Technical Foundation & Architecture", text: "Speed optimization, conversion page rebuilds, and precise search keyword mapping.", icon: Zap, color: "#3B82F6", gradientFrom: "rgba(59,130,246,0.3)", gradientTo: "rgba(6,182,212,0.05)" },
    { number: "03", title: "Campaign Launch & Multi-Channel Traffic", text: "Local SEO rollout, targeted search ads, and continuous landing page refinement.", icon: Megaphone, color: "#10B981", gradientFrom: "rgba(16,185,129,0.3)", gradientTo: "rgba(6,182,212,0.05)" },
    { number: "04", title: "Measurement, Optimization & Scaling", text: "Lead tracking audit, ROI attribution, and strategic budget reallocation to winning channels.", icon: BarChart3, color: "#8B5CF6", gradientFrom: "rgba(139,92,246,0.3)", gradientTo: "rgba(236,72,153,0.08)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700">
      <Header />
      <main className="flex-grow">

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-8 px-4 pt-24 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-24 relative overflow-hidden bg-white"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#f4cc6f] rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${(i * 17 + 5) % 100}%`,
                  top: `${(i * 13 + 7) % 100}%`,
                  animationDelay: `${(i * 0.3) % 3}s`,
                  animationDuration: `${2 + (i % 3) * 0.7}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="order-2 lg:order-1 text-center lg:text-left relative z-20"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`${styles.heroTitle} mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
                >
                  Digital Marketing Company in{' '}
                  <span className={styles.gradientText}>Oakville</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-700 mb-3 sm:mb-4"
                >
                  Strategic Growth, High-Intent SEO, and Digital Authority for Oakville & GTA Businesses
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed"
                >
                  Oakville is not a standard suburban market. Positioned along Lake Ontario within the Halton Region, it boasts one of the highest household income levels in Canada, a dense concentration of professional services, thriving corporate headquarters along the QEW corridor, and a vibrant local retail ecosystem stretching from Downtown Oakville to Kerr Village and Bronte.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed"
                >
                  Marketing to an Oakville audience requires a level of nuance that broad, cookie-cutter agency templates fail to deliver. The local customer base is educated, brand-conscious, and discerning. Whether you run a specialized law firm on Lakeshore Road, a high-end medical clinic, or a B2B technology company serving the Greater Toronto Area (GTA), your digital footprint must reflect credibility, local authority, and strategic precision.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed"
                >
                  At{' '}
                  <Link href="/" className="text-[#f4cc6f] hover:underline">Altiora Infotech</Link>
                  {', '}we build custom digital marketing strategies designed specifically for companies looking to lead their market in Oakville and across Southern Ontario. We do not rely on vanity metrics or superficial hype. We focus strictly on clean search visibility, qualified traffic, and measurable pipeline growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Get Free Strategy Session
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black/20 text-slate-900 text-sm sm:text-base font-semibold hover:bg-black/[0.08] hover:border-black/40 transition-all duration-300"
                  >
                    Talk To A Marketing Expert
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="order-1 lg:order-2 relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[600px] flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {mounted && (
                    <>
                      <motion.div
                        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl"
                        style={{ background: "radial-gradient(circle, #f4cc6f, #EC4899, #3B82F6, transparent)" }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full"
                        style={{
                          background: "conic-gradient(from 0deg, #f4cc6f, #EC4899, #8B5CF6, #3B82F6, #10B981, #f4cc6f)",
                          padding: "2px",
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
                        style={{
                          background: "conic-gradient(from 180deg, #3B82F6, #8B5CF6, #EC4899, #f4cc6f, #10B981, #3B82F6)",
                          padding: "2px",
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                        }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(244,204,111,0.15), rgba(139,92,246,0.1), transparent)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="relative z-10 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{
                            background: "linear-gradient(135deg, #f4cc6f, #EC4899, #8B5CF6)",
                            boxShadow: "0 20px 60px rgba(244,204,111,0.3), 0 0 40px rgba(236,72,153,0.2), 0 0 60px rgba(139,92,246,0.15)",
                          }}
                          animate={{ y: [0, -12, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Building2 className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={`dot-${i}`}
                          className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{
                            background: (['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'] as string[])[i],
                            boxShadow: `0 0 12px ${(['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'] as string[])[i]}80`,
                            top: `${15 + Math.sin(i * 1.05) * 35}%`,
                            left: `${50 + Math.cos(i * 1.05) * 40}%`,
                          }}
                          animate={{ y: [0, -10 - i * 2, 0], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        />
                      ))}
                      {[
                        { Icon: Megaphone, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Search, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Globe, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: BarChart3, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
                        { Icon: Zap, color: "#f4cc6f", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
                      ].map((item, i) => (
                        <motion.div
                          key={`icon-${i}`}
                          className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                          style={{
                            top: item.top,
                            left: item.left,
                            background: item.bg,
                            border: `1px solid ${item.color}30`,
                            boxShadow: `0 4px 20px ${item.color}20`,
                          }}
                          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                        >
                          <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Market Analysis: The Oakville Digital Landscape */}
        <section
          ref={introRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#f4cc6f]/50 to-transparent" />
                <span className={styles.overviewTitle}>Overview</span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-left sm:text-center">
                    Market Analysis: The Oakville Digital Landscape
                  </h2>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center mb-10`}>
                    <p>Succeeding in the local Oakville economy requires understanding how buyers search, evaluate, and make decisions online across the GTA.</p>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-6 text-left sm:text-center relative z-10">
                    The Oakville Buyer Journey & Intent Landscape
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 relative z-10">
                    {buyerJourney.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={introInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                        className="rounded-2xl border p-5 text-left"
                        style={{ borderColor: `${item.color}20`, background: `linear-gradient(145deg, ${item.color}08, transparent)` }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}>
                            <item.icon className="w-4 h-4" style={{ color: item.color }} />
                          </div>
                          <span className="text-sm font-bold" style={{ color: item.color }}>{item.number}.</span>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h4>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
                    {marketRealities.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={introInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                        className="rounded-2xl border p-5 text-left"
                        style={{ borderColor: `${item.color}20`, background: `linear-gradient(145deg, ${item.color}06, transparent)` }}
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* What We Do: Full-Funnel Digital Marketing Solutions */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-10">
              <h2 className={styles.sectionHeading}>What We Do: Full-Funnel <span className={styles.gradientText}>Digital Marketing Solutions</span></h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Altiora Infotech brings an end-to-end performance engine to your business. Every service is built around your specific revenue targets, unit economics, and growth stage.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
                  className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]"
                  style={{ borderColor: `${service.color}20`, background: `linear-gradient(145deg, ${service.color}05, transparent)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}>
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-slate-600 leading-relaxed">
                          <span className="text-slate-900 font-semibold">{item.label}: </span>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Altiora Infotech? */}
        <section ref={compareRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/6 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={compareInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className={styles.sectionHeading}>Why Choose <span className={styles.gradientText}>Altiora Infotech?</span></h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Marketing agencies are everywhere, but finding a reliable technical partner who consistently delivers bottom-line results can be challenging. Here is how we operate differently:
              </p>
            </motion.div>

            <div className="space-y-6">
              {comparisons.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={compareInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 text-center sm:text-left">{row.pillar}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-5">
                      <p className="text-xs uppercase tracking-wider font-semibold text-red-400/80 mb-2 flex items-center gap-2">
                        <X className="w-4 h-4" /> Standard Agency
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{row.standard}</p>
                    </div>
                    <div className="rounded-2xl border border-[#f4cc6f]/25 bg-[#f4cc6f]/[0.05] p-5">
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#f4cc6f] mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Altiora Infotech
                      </p>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{row.altiora}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Industries We Serve in Oakville */}
        <section
          ref={industriesRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={industriesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Key Industries We Serve in <span className={styles.gradientText}>Oakville</span></h2>
              <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Every sector demands a unique strategy. Our experience spans B2B, professional services, high-end retail, and local service providers across Oakville.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: `${industry.color}20`, background: `linear-gradient(145deg, ${industry.color}06, transparent)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${industry.color}20`, border: `1px solid ${industry.color}30` }}>
                      <industry.icon className="w-4 h-4" style={{ color: industry.color }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{industry.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{industry.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Step-by-Step Execution Framework */}
        <section
          ref={frameworkRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#f4cc6f]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Our Step-by-Step <span className={styles.gradientText}>Execution Framework</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                We follow a structured framework to deliver consistent, repeatable outcomes for our clients:
              </p>
            </motion.div>

            {framework.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={frameworkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.2 }}
                className="relative mb-6 group"
              >
                <div
                  className="relative rounded-3xl overflow-hidden border transition-all duration-500"
                  style={{ borderColor: `${step.color}25` }}
                >
                  <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${step.color}12, transparent)` }} />
                  <div className="relative flex flex-col md:flex-row items-stretch">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                      <div className="relative z-10 flex flex-col items-center">
                        <span
                          className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                          style={{ background: `linear-gradient(180deg, ${step.gradientFrom}, ${step.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        >
                          {step.number}
                        </span>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                          style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, boxShadow: `0 8px 30px ${step.color}35` }}
                        >
                          <step.icon className="w-7 h-7 text-[#010b22]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        Stage {index + 1}: <span style={{ color: step.color }}>{step.title}</span>
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Other Locations We Serve */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Serving Businesses Across Canada
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Beyond Oakville, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-hamilton" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Hamilton</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-ottawa" className="text-[#f4cc6f] hover:underline">Ottawa</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-montreal" className="text-[#f4cc6f] hover:underline">Montreal team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-halifax" className="text-[#f4cc6f] hover:underline">growing brands in Halifax</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className={styles.sectionHeading}>Frequently Asked <span className={styles.gradientText}>Questions</span></h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:bg-black/[0.05] hover:border-black/20">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{faq.question}</h3>
                      <svg className={`w-5 h-5 text-[#f4cc6f] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="faq-answer text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section ref={finalCtaRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f4cc6f]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>
              <div className="relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Take the Next Step Toward{' '}
                  <span className={styles.gradientText}>Market Leadership</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
                  If your current digital marketing isn&apos;t generating predictable, qualified leads, it&apos;s time to adjust your approach. Partner with an agency that understands technical precision, conversion architecture, and the Oakville market.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-sm sm:text-base text-white/65 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Contact Altiora Infotech today to request a comprehensive audit of your digital presence and discuss a custom marketing strategy tailored to your growth goals.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.65 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                    Contact Altiora Infotech Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
