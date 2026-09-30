'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Search,
  Globe,
  Monitor,
  Target,
  Palette,
  Zap,
  Megaphone,
  BarChart3,
  Building2,
  Briefcase,
  FileText,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-company-in-ottawa.module.css";

export default function OttawaMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workingRef, workingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => { setMounted(true); }, []);

  const faqs = [
    { question: "How long does it take to see results from digital marketing?", answer: "Paid advertising campaigns can begin generating traffic and qualified leads within days of launching. Organic strategies like Search Engine Optimization and content marketing typically take 3 to 6 months to build momentum, but they deliver compounding, cost-effective returns over the long term." },
    { question: "Why should I hire an agency instead of managing marketing internally?", answer: "Building an internal team requires hiring specialized talent across multiple disciplines: copywriters, SEO strategists, media buyers, web designers, and data analysts. Partnering with an experienced digital agency gives you immediate access to a full team of specialists at a fraction of the cost of multiple full-time salaries." },
    { question: "How do you measure the success of a campaign?", answer: "We define success metrics alongside you before work begins. While we monitor standard engagement metrics, our focus remains on bottom-line business indicators: cost per conversion, pipeline growth, return on ad spend, and overall revenue contribution." },
  ];

  const services = [
    {
      icon: Search, color: "#C9A227",
      title: "Data-Driven Search Engine Optimization (SEO)",
      description: "Appearing on the first page of Google is no longer about stuffing key phrases into blog posts. Search engines prioritize user intent, contextual authority, and technical performance. Our Ottawa SEO strategies focus on bringing high-intent buyers directly to your digital front door:",
      items: [
        { label: "Local SEO & Google Business Profile Optimization", text: "We optimize your local footprint so your business captures high-converting local searches like \"near me\" queries across Ottawa neighbourhoods." },
        { label: "Technical SEO Audits", text: "We fix underlying technical issues, improve page load speeds, fix crawl errors, and optimize site architecture to ensure search engines index your pages seamlessly." },
        { label: "On-Page & Intent-Based Content", text: "We map content directly to what your buyers are searching for at each stage of their decision-making process, positioning your brand as the obvious authority." },
        { label: "Authority Building", text: "We secure meaningful, high-quality backlinks and local citations that strengthen your domain's credibility over time." },
      ],
    },
    {
      icon: Target, color: "#EC4899",
      title: "High-ROI Performance Marketing & Paid Advertising",
      description: "Paid campaigns on Google Ads, Meta (Facebook & Instagram), and LinkedIn offer speed and precision, but without continuous optimization, ad spend dissipates rapidly. We build performance marketing campaigns focused strictly on return on ad spend (ROAS) and cost per acquisition (CPA):",
      items: [
        { label: "Google Search & Shopping Ads", text: "Capture prospective clients at the exact moment they actively search for your products or services." },
        { label: "Targeted Social Advertising", text: "Engage specific demographics and professional audiences across Ottawa and beyond using precise behavioral and geographic targeting." },
        { label: "Retargeting Funnels", text: "Re-engage past website visitors who didn't convert on their first visit, guiding them back to complete an inquiry or purchase." },
        { label: "A/B Testing & Creative Optimization", text: "We continuously test ad copy, visual assets, and landing page layouts to lower your customer acquisition costs." },
      ],
    },
    {
      icon: BarChart3, color: "#3B82F6",
      title: "Conversion Rate Optimization (CRO)",
      description: "Traffic is only half the battle. If your conversion rate sits at 1% when it could be 3%, you are effectively paying triple for every single lead. Our CRO process transforms your website from a passive digital brochure into an active sales rep:",
      items: [
        { label: "User Journey Analysis", text: "We evaluate user heatmaps, session recordings, and drop-off points to identify friction in your buyer funnel." },
        { label: "Landing Page Engineering", text: "We write compelling copy and design clear, intuitive layouts that guide visitors toward taking action." },
        { label: "Friction Removal", text: "We simplify checkout processes, streamline contact forms, and eliminate technical barriers that prevent users from converting." },
      ],
    },
    {
      icon: Palette, color: "#8B5CF6",
      title: "Brand Strategy & Visual Storytelling",
      description: "A strong brand identity creates trust before your sales team ever speaks to a prospect. In competitive markets, standing out requires a cohesive visual identity and clear value proposition. We help Ottawa businesses articulate who they are and why they matter:",
      items: [
        { label: "Brand Positioning & Messaging", text: "We define your core messaging, brand voice, and market positioning to differentiate you from local competitors." },
        { label: "UI/UX & Website Design", text: "We build responsive, intuitive digital experiences that combine strong aesthetics with rapid performance." },
        { label: "Creative Asset Production", text: "From visual graphics to promotional media, we craft design assets that keep your brand consistent across every touchpoint." },
      ],
    },
  ];

  const industries = [
    { sector: "Technology & B2B SaaS", focus: "Multi-channel lead generation, thought leadership, content strategy", outcome: "Lower customer acquisition costs and higher pipeline velocity", color: "#C9A227" },
    { sector: "Professional Services", focus: "Local SEO, Google Search Ads, brand repositioning", outcome: "Qualified client inquiries and local market authority", color: "#3B82F6" },
    { sector: "E-Commerce & Retail", focus: "Shopping campaigns, funnel optimization, remarketing", outcome: "Scalable online sales and improved customer lifetime value", color: "#10B981" },
    { sector: "Home & Commercial Services", focus: "High-intent local search, Google Business Profile management", outcome: "Higher conversion rates on incoming calls and quote requests", color: "#8B5CF6" },
  ];

  const workingWith = [
    { title: "Transparent Communication", text: "No confusing jargon or dense 50-page reports designed to hide poor performance. We provide straightforward reporting dashboards that highlight key metrics: cost per lead, conversion rates, organic growth, and return on ad spend.", icon: Monitor, gradient: "from-[#C9A227] to-[#FF9F43]" },
    { title: "Custom Roadmaps", text: "We don't offer rigid, pre-packaged marketing plans that force your business into a box. Every strategy starts with your revenue targets and current position in the market.", icon: FileText, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Focus on Sustainable Revenue", text: "Short-term spikes in traffic are easy to buy, but sustainable growth requires compounding assets. We build organic reach and brand authority alongside paid strategies so your business grows stronger over time.", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
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
                className="absolute w-1 h-1 bg-[#C9A227] rounded-full opacity-20 animate-pulse"
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
                  <span className={styles.gradientText}>Ottawa</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-3 sm:mb-4"
                >
                  Most Ottawa businesses don&apos;t have a traffic problem. They have a connection problem.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-slate-500 mb-4 leading-relaxed"
                >
                  You can pump thousands of dollars into online ads or rank for a few high-volume keywords, but if those visitors drop off without filling out a form, booking a call, or buying a product, your digital presence is essentially leaking revenue.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 leading-relaxed"
                >
                  At Altiora Infotech, we approach growth differently. As a full-service{' '}
                  <Link href="/" className="text-[#C9A227] hover:underline">digital marketing company</Link>
                  {' '}operating in Canada, we bridge the gap between creative storytelling, search visibility, and hard data. We build custom growth engines designed specifically for the unique dynamics of the Ottawa market, helping local brands, tech startups, and established enterprises convert online interest into measurable revenue.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40"
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
                        style={{ background: "radial-gradient(circle, #C9A227, #EC4899, #3B82F6, transparent)" }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full"
                        style={{
                          background: "conic-gradient(from 0deg, #C9A227, #EC4899, #8B5CF6, #3B82F6, #10B981, #C9A227)",
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
                          background: "conic-gradient(from 180deg, #3B82F6, #8B5CF6, #EC4899, #C9A227, #10B981, #3B82F6)",
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
                            background: "linear-gradient(135deg, #C9A227, #EC4899, #8B5CF6)",
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
                            background: (['#C9A227', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#C9A227'] as string[])[i],
                            boxShadow: `0 0 12px ${(['#C9A227', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#C9A227'] as string[])[i]}80`,
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
                        { Icon: Zap, color: "#C9A227", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
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

        {/* Overview: The Ottawa Market Requires a Tailored Strategy */}
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
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#C9A227]/50 to-transparent" />
                <span className={styles.overviewTitle}>Overview</span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#C9A227]/50 to-transparent" />
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-left sm:text-center">
                    The Ottawa Market Requires a Tailored Strategy
                  </h3>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">Marketing a business in Canada&apos;s capital presents a specific set of challenges and opportunities. Ottawa isn&apos;t just another tech hub or government town; it&apos;s a distinct economic landscape split between a booming private sector and a highly educated, quality-conscious consumer base.</p>
                    <p className="mb-4">A generic, copy-and-paste digital strategy imported from larger markets usually misses the mark here. Local audiences in the National Capital Region value authenticity, clear communication, and demonstrated reliability over flashy, surface-level hype.</p>
                    <p>Whether your target customers are tech firms in Kanata, retail and hospitality brands in the ByWard Market, professional service practices in Downtown Ottawa, or home services operating across Nepean and Gloucester, your marketing must feel tailored to the community you serve. We align your messaging with the practical priorities of Ottawa buyers while deploying performance-driven frameworks that scale across Canada and international markets.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Core Digital Marketing Services */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A227]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-10">
              <h2 className={styles.sectionHeading}>Core Digital Marketing Services Built for <span className={styles.gradientText}>Measurable Impact</span></h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Growth doesn&apos;t come from running isolated campaigns in silos. Real momentum happens when your website design, search engine optimization, paid channels, and brand messaging work in unison. Here is how we build and scale your online visibility.
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
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-[#3B4456] leading-relaxed">
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

        {/* Key Industries We Serve Across Ottawa and Canada */}
        <section
          ref={industriesRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={industriesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Key Industries We Serve Across <span className={styles.gradientText}>Ottawa and Canada</span></h2>
              <p className="text-slate-500 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                While digital principles remain constant, industry nuances matter immensely. We tailor our marketing execution to match the purchasing cycles and compliance needs of distinct sectors.
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
                      <Briefcase className="w-4 h-4" style={{ color: industry.color }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{industry.sector}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: industry.color }}>Primary Marketing Focus</p>
                      <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed">{industry.focus}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: industry.color }}>Key Outcome Delivered</p>
                      <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed">{industry.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Working With Altiora Infotech Looks Like */}
        <section ref={workingRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={workingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                What Working With <span className={styles.gradientText}>Altiora Infotech</span> Looks Like
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                When you partner with us, you aren&apos;t handed off to a junior account manager reading from a script. You get an agile, execution-focused team that operates as an extension of your own business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {workingWith.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={workingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="group relative cursor-pointer">
                  <div className="relative h-full rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#C9A227] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.text}</p>
                      <div className="mt-3 md:mt-4 h-1 w-full bg-black/10 rounded-full overflow-hidden hidden md:block">
                        <div className={`h-full w-0 bg-gradient-to-r ${item.gradient} transition-all duration-700 group-hover:w-full rounded-full`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Other Locations We Serve */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-4">
              Serving Businesses Across Canada
            </h2>
            <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed">
              Beyond Ottawa, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-montreal" className="text-[#C9A227] hover:underline">Digital Marketing Company in Montreal</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-halifax" className="text-[#C9A227] hover:underline">Halifax</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-kerrville" className="text-[#C9A227] hover:underline">Kerrville team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-vancouver" className="text-[#C9A227] hover:underline">growing brands in Vancouver</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
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
                      <svg className={`w-5 h-5 text-[#C9A227] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="faq-answer text-[#3B4456] text-sm sm:text-base leading-relaxed">{faq.answer}</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#F3EEFE] via-[#EAF0FF] to-[#F3EEFE]" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C9A227]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>
              <div className="relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Ready to Scale Your{' '}
                  <span className={styles.gradientText}>Digital Footprint in Ottawa?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  If you are tired of marketing campaigns that cost money without generating clear returns, it&apos;s time to rethink your strategy. Let&apos;s discuss your business goals, evaluate your current digital performance, and build a roadmap designed for real, scalable growth.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40">
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
