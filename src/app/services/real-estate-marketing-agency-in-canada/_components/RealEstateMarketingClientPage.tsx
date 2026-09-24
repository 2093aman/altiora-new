'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Palette,
  Search,
  Globe,
  Monitor,
  Share2,
  PenTool,
  Target,
  Briefcase,
  Eye,
  Zap,
  Megaphone,
  BarChart3,
  Clock,
  Building2,
  Star,
  Video,
  TrendingUp,
  MapPin,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../real-estate-marketing-agency-in-canada.module.css";

export default function RealEstateMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [lookGreatRef, lookGreatInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [growRef, growInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [marketsRef, marketsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => { setMounted(true); }, []);

  const faqs = [
    { question: "What is a real estate marketing agency?", answer: "A real estate marketing agency helps realtors, brokers, and real estate companies generate leads, increase visibility, improve brand awareness, and attract buyers and sellers through digital marketing strategies." },
    { question: "How much does real estate marketing cost in Canada?", answer: "Costs vary depending on your goals, market competition, advertising budget, and services required. Most successful real estate businesses invest in a combination of SEO, paid advertising, social media, and website optimization." },
    { question: "How long does SEO take for real estate agents?", answer: "Most SEO campaigns begin producing measurable improvements within three to six months. Competitive markets may require additional time to establish authority and rankings." },
    { question: "What marketing channel works best for realtors?", answer: "SEO and Google Ads typically generate the highest-intent leads, while social media helps build authority, engagement, and long-term trust." },
    { question: "Does digital marketing work for new real estate agents?", answer: "Yes. Digital marketing helps new agents establish visibility, build credibility, and generate leads even without an extensive referral network." },
    { question: "Are Google Ads worth it for real estate agents?", answer: "When properly managed, Google Ads can generate highly qualified buyer and seller inquiries and deliver strong return on investment." },
    { question: "What is AEO for real estate?", answer: "Answer Engine Optimization helps businesses appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." },
    { question: "Do I need a website as a realtor?", answer: "Yes. A professional website supports SEO, builds credibility, captures leads, and provides a central destination for all marketing activities." },
    { question: "Can social media generate real estate leads?", answer: "Yes. Social media helps increase visibility, build trust, showcase expertise, and nurture relationships that lead to future business opportunities." },
    { question: "Do you work with brokerages and teams?", answer: "Absolutely. We work with independent agents, teams, brokerages, developers, and real estate organizations throughout Canada." },
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
                  Real Estate Marketing Agency in{' '}
                  <span className={styles.gradientText}>Canada</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-600/80 mb-3 sm:mb-4"
                >
                  Grow Your Real Estate Business with a Trusted Real Estate Marketing Agency in Canada
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-slate-600/65 mb-4 leading-relaxed"
                >
                  Looking for a{' '}
                  <Link href="/" className="text-[#f4cc6f] hover:underline">real estate marketing agency in Canada</Link>
                  {' '}that helps realtors, real estate teams, brokerages, and developers generate more qualified buyer and seller leads, increase online visibility, and grow consistently in competitive markets?
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-600/65 mb-4 leading-relaxed"
                >
                  At Altiora Infotech, we help real estate professionals across Canada build scalable digital marketing systems through SEO, Google Ads, social media marketing, website development, content marketing, video production, and Answer Engine Optimization (AEO). Our strategies are designed specifically for the Canadian real estate market and focused on generating measurable business growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="text-sm sm:text-base text-slate-600/65 mb-6 sm:mb-8 leading-relaxed"
                >
                  Whether you&apos;re an independent realtor looking to attract more listings, a growing team expanding into new markets, or an established brokerage seeking long-term visibility, we create marketing strategies that help you attract, convert, and retain clients.
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

        {/* Quick Answer */}
        <section className="quick-answer py-10 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-[#f4cc6f]/20 bg-black/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#f4cc6f] shadow-[0_0_12px_#f4cc6f]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f4cc6f]/90 font-semibold">Quick Answer</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                What does a real estate marketing agency in Canada do?
              </h2>
              <p className="text-slate-600/85 text-base sm:text-lg leading-relaxed mb-6">
                A real estate marketing agency helps realtors, brokers, teams, and real estate companies attract qualified buyers and sellers through SEO, Google Ads, social media marketing, website development, content marketing, and AEO strategies. The goal is to improve online visibility, generate high-quality leads, increase brand authority, and create a predictable pipeline of opportunities that drive long-term business growth.
              </p>
              <p className="text-slate-600/75 text-sm sm:text-base font-semibold mb-3">How Real Estate Marketing Helps Canadian Realtors Grow</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Generate More Buyer Leads",
                  "Generate More Seller Leads",
                  "Increase Google Search Visibility",
                  "Build Local Market Authority",
                  "Improve Lead Conversion Rates",
                  "Create Sustainable Long-Term Growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-600/80 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#f4cc6f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-left sm:text-center">
                    Strategic Real Estate Marketing Built for Canadian Realtors
                  </h3>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">The way people buy and sell property has changed dramatically over the last decade. Before contacting an agent, buyers and sellers spend weeks researching online, comparing professionals, reading reviews, watching videos, exploring neighbourhoods, and evaluating websites.</p>
                    <p className="mb-4">In highly competitive Canadian markets, simply relying on referrals is no longer enough. Realtors who consistently appear on Google, social media platforms, Google Maps, and AI-powered search engines gain a significant advantage over those who remain invisible online.</p>
                    <p className="mb-4">At Altiora Infotech, we build customized marketing strategies for real estate professionals across Canada. Our approach combines organic visibility, paid advertising, social engagement, and conversion optimization to help you attract qualified prospects at every stage of the buying and selling journey.</p>
                    <p>Every campaign is built around how Canadian buyers and sellers actually search, research, and make decisions.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Your Marketing Partner */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/4 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Your Marketing Partner for Sustainable{' '}
                <span className={styles.gradientText}>Real Estate Growth</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-slate-600/75 text-base sm:text-lg leading-relaxed">
                  Managing listings, negotiations, client relationships, showings, and paperwork leaves little time for consistent marketing. Our team handles your digital presence so you can focus on serving clients and closing deals.
                </p>
                <p className="text-slate-600/75 text-base font-semibold">What You Get</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { text: "Dedicated Real Estate Marketing Experts", color: "#f4cc6f" },
                    { text: "Custom Growth Strategy", color: "#EC4899" },
                    { text: "Transparent Monthly Reporting", color: "#3B82F6" },
                    { text: "Campaign Performance Tracking", color: "#10B981" },
                    { text: "Continuous Optimization", color: "#8B5CF6" },
                    { text: "Long-Term Growth Partnership", color: "#f4cc6f" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: item.color }} />
                      <span className="text-slate-600/80 text-sm sm:text-base font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative p-8 sm:p-10 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/10 via-[#EC4899]/5 to-[#8B5CF6]/10 rounded-3xl" />
                  <div className="absolute inset-[1px] rounded-3xl bg-white/95 backdrop-blur-xl" />
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "conic-gradient(from 0deg, #f4cc6f, #EC4899, #8B5CF6, #3B82F6, #f4cc6f)",
                      padding: "3px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute -inset-4 bg-[#f4cc6f]/5 blur-[40px] rounded-full pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                      style={{
                        background: "linear-gradient(135deg, rgba(244,204,111,0.2), rgba(236,72,153,0.15))",
                        border: "1px solid rgba(244,204,111,0.3)",
                        boxShadow: "0 10px 40px rgba(244,204,111,0.15)",
                      }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Clock className="w-10 h-10 text-[#f4cc6f]" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-[#f4cc6f]/30"
                        animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      Win Your Time <span className={styles.gradientText}>Back</span>
                    </h3>
                    <p className="text-slate-600/65 text-base sm:text-lg max-w-sm mx-auto leading-relaxed mb-8">
                      Let our team manage your real estate marketing, online visibility, lead generation, and digital growth while you focus on building relationships and closing transactions.
                    </p>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                    >
                      Get Started Today
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Market Reality in Canadian Real Estate */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#3B82F6]/6 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/3 blur-[150px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Market Reality in{' '}
                <span className={styles.gradientText}>Canadian Real Estate</span>
              </h2>
              <p className="text-slate-600/60 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
                The Canadian real estate industry has become more competitive than ever.
              </p>
              <p className="text-slate-600/60 text-base sm:text-lg leading-relaxed mt-3 max-w-2xl mx-auto">
                Buyers and sellers no longer choose the first agent they find. Instead, they compare multiple professionals online before making contact.
              </p>
              <p className="text-slate-600/60 text-base sm:text-lg leading-relaxed mt-3 max-w-2xl mx-auto font-medium">
                Several major trends are shaping the industry:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
              {[
                { title: "Online Research Dominates Decision Making", text: "Most buyers and sellers begin their journey online. They research agents, explore communities, compare reviews, and consume educational content long before reaching out.", icon: Search, color: "#f4cc6f" },
                { title: "Google Visibility Influences Trust", text: "Agents who consistently appear in Google search results, Google Maps, and local searches often receive more inquiries and build stronger credibility.", icon: Globe, color: "#EC4899" },
                { title: "Video Content Drives Engagement", text: "Property tours, neighbourhood guides, market updates, and educational videos generate significantly higher engagement than static content.", icon: Video, color: "#3B82F6" },
                { title: "Competition Continues to Increase", text: "Major markets such as Toronto, Vancouver, Calgary, Edmonton, Surrey, and Mississauga continue to attract thousands of agents competing for the same audience.", icon: TrendingUp, color: "#10B981" },
                { title: "AI Search Is Changing Discovery", text: "Platforms like ChatGPT, Perplexity, Gemini, and Google AI Overviews are becoming important sources of information for consumers researching real estate professionals and local markets.", icon: Zap, color: "#8B5CF6" },
                { title: "Reviews Influence Client Decisions", text: "Online reviews have become one of the strongest trust signals. Positive reviews often determine whether a prospect contacts you or a competitor.", icon: Star, color: "#f4cc6f" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:translate-y-[-6px] p-6"
                    style={{ borderColor: `${item.color}15`, background: `linear-gradient(145deg, ${item.color}06, transparent)` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 40px ${item.color}10, inset 0 0 40px ${item.color}05`, border: `1px solid ${item.color}30` }} />
                    <div className="relative z-10">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25`, boxShadow: `0 4px 20px ${item.color}10` }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </motion.div>
                      <p className="text-slate-600/90 text-sm sm:text-base font-semibold mb-2 leading-snug">{item.title}</p>
                      <p className="text-slate-600/65 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-600/60 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10"
            >
              Canadian real estate professionals who invest in digital marketing early build authority that compounds over time and becomes increasingly difficult for competitors to replicate.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-slate-600/80 text-base sm:text-lg font-semibold mb-6"
            >
              Why Real Estate Marketing Matters
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {[
                "Buyers and sellers search online before contacting an agent",
                "Local search visibility directly impacts lead generation",
                "Strong digital presence builds trust and credibility",
                "Video and social media influence purchasing decisions",
                "Consistent marketing creates long-term competitive advantages",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className={`flex items-start gap-2.5 text-slate-600/80 text-sm sm:text-base ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#f4cc6f]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Formula */}
        <section
          ref={lookGreatRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#f4cc6f]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={lookGreatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className={styles.sectionHeading}>
                Growth <span className={styles.gradientText}>Formula</span>
              </h2>
            </motion.div>

            {/* Step 01 */}
            <motion.div initial={{ opacity: 0, x: -60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#f4cc6f]/15 hover:border-[#f4cc6f]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(244,204,111,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4cc6f]/[0.08] via-[#FF9F43]/[0.04] to-transparent" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #f4cc6f, #FF9F43, #f4cc6f)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#f4cc6f]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#f4cc6f]/15 transition-all duration-500" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(244,204,111,0.3), rgba(255,159,67,0.15), rgba(244,204,111,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>01</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #e6b85c)", boxShadow: "0 8px 30px rgba(244,204,111,0.35), 0 0 20px rgba(255,159,67,0.2)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><Palette className="w-7 h-7 text-[#010b22]" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Position Your <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #f4cc6f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Brand</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Build a recognizable and trustworthy real estate brand that buyers and sellers remember before they need your services.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #f4cc6f, #3B82F6)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.6 }} /></div>
            </motion.div>

            {/* Step 02 */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#3B82F6]/15 hover:border-[#3B82F6]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-l from-[#3B82F6]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <motion.div className="absolute right-0 top-0 bottom-0 w-1.5 rounded-r-3xl" style={{ background: "linear-gradient(to bottom, #3B82F6, #06B6D4, #3B82F6)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3B82F6]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#3B82F6]/15 transition-all duration-500" />
                <div className="relative flex flex-col md:flex-row-reverse items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#3B82F6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.3), rgba(6,182,212,0.15), rgba(59,130,246,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>02</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #2563EB)", boxShadow: "0 8px 30px rgba(59,130,246,0.35), 0 0 20px rgba(6,182,212,0.2)" }} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 200 }}><Eye className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Build Your Digital <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Presence</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Establish a strong foundation through SEO, website optimization, local search visibility, and professional content.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #3B82F6, #10B981)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.9 }} /></div>
            </motion.div>

            {/* Step 03 */}
            <motion.div initial={{ opacity: 0, x: -60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#10B981]/15 hover:border-[#10B981]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #10B981, #06B6D4, #10B981)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#10B981]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#10B981]/15 transition-all duration-500" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(16,185,129,0.3), rgba(6,182,212,0.15), rgba(16,185,129,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>03</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #10B981, #06B6D4)", boxShadow: "0 8px 30px rgba(16,185,129,0.35), 0 0 20px rgba(6,182,212,0.2)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><Target className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Generate Qualified <span style={{ color: "#10B981" }}>Leads</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Use targeted advertising, organic search, social media, and lead generation systems to attract high-intent prospects.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #10B981, #8B5CF6)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 1.1 }} /></div>
            </motion.div>

            {/* Step 04 */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={lookGreatInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.7 }} className="relative group mb-10">
              <div className="relative rounded-3xl overflow-hidden border border-[#8B5CF6]/15 hover:border-[#8B5CF6]/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.08] via-[#7C3AED]/[0.04] to-[#EC4899]/[0.03]" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #8B5CF6, #EC4899, #8B5CF6)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.3), rgba(236,72,153,0.08))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}>04</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)", boxShadow: "0 8px 30px rgba(139,92,246,0.35)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><BarChart3 className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Scale <span className="text-[#8B5CF6]">Consistently</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Leverage data and performance insights to improve results, expand visibility, and increase return on investment over time.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={lookGreatInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1.0 }} className="text-center">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                Grow Faster With a Structured Strategy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section
          ref={growRef}
          className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f4cc6f]/6 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8B5CF6]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#EC4899]/3 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(244,204,111,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.4) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className={`${styles.sectionHeading} mb-4`}>
                Our <span className={styles.gradientText}>Approach</span>
              </h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={growInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="relative mx-auto w-full">
                <div className="relative rounded-[2rem] overflow-hidden border border-black/[0.08]" style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.04), rgba(236,72,153,0.02), rgba(59,130,246,0.04))" }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div className="h-full w-1/3" style={{ background: "linear-gradient(90deg, transparent, #f4cc6f, #EC4899, transparent)" }} animate={{ x: ["-100%", "400%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  </div>

                  <div className="relative z-10 p-8 sm:p-12 md:p-16">
                    <motion.div initial={{ opacity: 0 }} animate={growInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mb-10">
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#f4cc6f]/20 text-[#f4cc6f]/80" style={{ background: "rgba(244,204,111,0.06)" }}>Our Approach</span>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-14">
                      {[
                        {
                          text: "Search Visibility",
                          icon: Search,
                          color: "#f4cc6f",
                          number: "01",
                          description: "Appear when buyers and sellers search for agents, listings, neighbourhoods, market insights, and real estate services in your target markets.",
                          detail: (
                            <span>Through{' '}
                              <Link href="/services/seo" className="text-[#f4cc6f] hover:underline">SEO Services</Link>
                              , Local SEO Services, and{' '}
                              <Link href="/services/aeo-geo" className="text-[#f4cc6f] hover:underline">AEO &amp; GEO Services</Link>
                              , we help improve your visibility across traditional search engines and emerging AI-powered platforms.
                            </span>
                          ),
                        },
                        {
                          text: "Conversion-Focused Websites & Landing Pages",
                          icon: Monitor,
                          color: "#EC4899",
                          number: "02",
                          description: "Your website should do more than showcase listings. It should convert visitors into consultations, property inquiries, and listing appointments.",
                          detail: (
                            <span>Our{' '}
                              <Link href="/services/website-development-services" className="text-[#EC4899] hover:underline">Website Development Services</Link>
                              {' '}focus on user experience, lead generation, mobile optimization, and conversion performance.
                            </span>
                          ),
                        },
                        {
                          text: "Continuous Optimization",
                          icon: BarChart3,
                          color: "#3B82F6",
                          number: "03",
                          description: "We continuously monitor campaign performance, lead quality, conversion rates, and customer acquisition costs to improve results month after month.",
                          detail: <span>Every component of your marketing ecosystem works together to support sustainable growth.</span>,
                        },
                      ].map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }} className="text-center group">
                          <div className="relative inline-flex mb-5">
                            <motion.div className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center relative z-10" style={{ background: `linear-gradient(135deg, ${item.color}25, ${item.color}08)`, border: `2px solid ${item.color}35`, boxShadow: `0 0 30px ${item.color}15, 0 0 60px ${item.color}08` }} whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 200 }}>
                              <item.icon className="w-7 h-7" style={{ color: item.color }} />
                            </motion.div>
                            <motion.div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${item.color}` }} animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }} />
                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20" style={{ background: item.color, color: "#010b22" }}>{item.number}</div>
                          </div>
                          <h4 className="text-slate-900 font-bold text-base sm:text-lg mb-2">{item.text}</h4>
                          <p className="text-slate-600/50 text-sm leading-relaxed mb-2">{item.description}</p>
                          <p className="text-slate-600/40 text-xs leading-relaxed">{item.detail}</p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 1.2 }} className="pt-10 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.15), rgba(236,72,153,0.1), rgba(59,130,246,0.15))", border: "1px solid rgba(244,204,111,0.2)" }} animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                          <Zap className="w-6 h-6 text-[#f4cc6f]" />
                        </motion.div>
                        <div>
                          <p className="text-slate-900 font-semibold text-base sm:text-lg">Connected marketing ecosystem</p>
                          <p className="text-slate-600/50 text-sm">Instead of isolated services, everything works together.</p>
                        </div>
                      </div>
                      <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40 whitespace-nowrap flex-shrink-0">
                        Start Growing
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Services We Provide for <span className={styles.gradientText}>Real Estate Professionals in Canada</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Search, color: "#f4cc6f",
                  title: "SEO for Real Estate Agents",
                  description: "Our SEO Services help agents rank for valuable searches related to local markets, neighbourhoods, buying, selling, and investment opportunities. We optimize websites, create content, improve technical performance, and build authority to increase long-term visibility.",
                  items: [],
                },
                {
                  icon: Target, color: "#EC4899",
                  title: "Paid Advertising for Realtors",
                  description: "Our Paid Advertising Services help generate immediate leads through highly targeted Google Ads and Meta campaigns. Campaigns can be built around:",
                  items: ["Buyer Leads", "Seller Leads", "Luxury Real Estate", "Relocation Services", "New Developments", "Investment Properties"],
                },
                {
                  icon: Share2, color: "#3B82F6",
                  title: "Social Media Marketing for Realtors",
                  description: "Our Social Media Management services help agents build authority and engage audiences across:",
                  items: ["Instagram", "Facebook", "LinkedIn", "YouTube", "TikTok"],
                },
                {
                  icon: Monitor, color: "#10B981",
                  title: "Real Estate Website Development",
                  description: "Our Website Development Services create high-performing websites designed to attract traffic and convert visitors into leads. Features may include:",
                  items: ["Lead Capture Forms", "Landing Pages", "Community Guides", "Blog Integration", "CRM Connectivity", "Mobile Optimization"],
                },
                {
                  icon: Video, color: "#8B5CF6",
                  title: "Video Production for Realtors",
                  description: "Our Video Production Services help showcase properties, communities, client testimonials, and market expertise through engaging visual content. Video continues to be one of the most effective tools for building trust and increasing engagement in the real estate industry.",
                  items: [],
                },
                {
                  icon: Palette, color: "#f4cc6f",
                  title: "Branding & Graphic Design",
                  description: "Our Branding Services help real estate professionals create a consistent and memorable identity across digital and print platforms. This includes:",
                  items: ["Brand Development", "Visual Identity", "Marketing Materials", "Social Media Graphics", "Listing Presentations"],
                },
                {
                  icon: Zap, color: "#EC4899",
                  title: "AEO & GEO for Real Estate",
                  description: "Answer Engine Optimization helps improve visibility in AI-powered search experiences. Our AEO & GEO Services focus on helping real estate businesses become more discoverable across:",
                  items: ["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity", "Voice Search Platforms"],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
                  className={`group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px] ${index === 6 ? 'md:col-span-2' : ''}`}
                  style={{ borderColor: `${service.color}20`, background: `linear-gradient(145deg, ${service.color}05, transparent)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}>
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">{service.title}</h3>
                  </div>
                  <p className="text-slate-600/65 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                  {service.items.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: `${service.color}12`, color: service.color, border: `1px solid ${service.color}20` }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Altiora Infotech */}
        <section ref={whyChooseRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Why Choose Altiora Infotech for <span className={styles.gradientText}>Real Estate Marketing in Canada?</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Real Estate Industry Knowledge", subtitle: "", text: "We understand how buyers and sellers research properties, evaluate professionals, and choose who they trust.", icon: Building2, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
                { title: "Full-Service Expertise", subtitle: "", text: "Access SEO, paid advertising, social media marketing, branding, website development, content creation, video production, and AEO through a single strategic partner.", icon: Briefcase, gradient: "from-[#3B82F6] to-[#06B6D4]" },
                { title: "Data-Driven Decisions", subtitle: "", text: "Every decision is guided by performance data, lead quality, conversion metrics, and return on investment.", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
                { title: "Transparent Communication", subtitle: "", text: "You always know what is being done, why it matters, and how it contributes to your business growth.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
                { title: "Scalable Growth Solutions", subtitle: "", text: "Whether you're an independent agent or a national brokerage, our strategies are designed to scale alongside your business.", icon: Zap, gradient: "from-[#EC4899] to-[#f4cc6f]" },
                { title: "Experienced Team", subtitle: "", text: "Our specialists understand digital marketing, local search, AI visibility, and real estate lead generation.", icon: Globe, gradient: "from-[#f4cc6f] to-[#10B981]" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-slate-600/80 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.text}</p>
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

        {/* Canadian Markets We Serve */}
        <section
          ref={marketsRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={marketsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Canadian Markets <span className={styles.gradientText}>We Serve</span></h2>
              <p className="text-slate-600/60 text-base sm:text-lg mt-4 max-w-2xl mx-auto">We help real estate professionals grow across Canada&apos;s most competitive markets.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                {
                  province: "Ontario",
                  color: "#f4cc6f",
                  cities: [
                    { name: "Toronto", href: "/services/digital-marketing-company-in-toronto" },
                    { name: "Mississauga", href: "/services/digital-marketing-company-in-mississauga" },
                    { name: "Brampton", href: "/services/digital-marketing-company-in-brampton" },
                    { name: "Ottawa", href: null },
                  ],
                },
                {
                  province: "British Columbia",
                  color: "#3B82F6",
                  cities: [
                    { name: "Vancouver", href: "/services/digital-marketing-company-in-vancouver" },
                    { name: "Surrey", href: "/services/digital-marketing-company-in-surrey" },
                    { name: "Burnaby", href: "/services/digital-marketing-company-in-burnaby" },
                    { name: "Richmond", href: "/services/digital-marketing-company-in-richmond" },
                    { name: "Langley", href: "/services/digital-marketing-company-in-langley" },
                    { name: "Abbotsford", href: "/services/digital-marketing-company-in-abbotsford" },
                    { name: "Kelowna", href: "/services/digital-marketing-company-in-kelowna" },
                  ],
                },
                {
                  province: "Alberta",
                  color: "#10B981",
                  cities: [
                    { name: "Calgary", href: "/services/digital-marketing-company-in-Calgary" },
                    { name: "Edmonton", href: "/services/digital-marketing-company-in-edmonton" },
                  ],
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={marketsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: `${region.color}20`, background: `linear-gradient(145deg, ${region.color}06, transparent)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${region.color}20`, border: `1px solid ${region.color}30` }}>
                      <MapPin className="w-4 h-4" style={{ color: region.color }} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{region.province}</h3>
                  </div>
                  <div className="space-y-2">
                    {region.cities.map((city, i) => (
                      <div key={i}>
                        {city.href ? (
                          <Link href={city.href} className="text-sm text-slate-600/70 hover:text-[#f4cc6f] transition-colors duration-200 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full inline-block" style={{ background: region.color }} />
                            {city.name}
                          </Link>
                        ) : (
                          <span className="text-sm text-slate-600/70 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full inline-block" style={{ background: region.color }} />
                            {city.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={marketsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center text-slate-600/60 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto"
            >
              Through our{' '}
              <Link href="/services/digital-marketing-company-in-toronto" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Toronto</Link>
              ,{' '}
              <Link href="/services/digital-marketing-company-in-vancouver" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Vancouver</Link>
              ,{' '}
              <Link href="/services/digital-marketing-company-in-Calgary" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Calgary</Link>
              , and{' '}
              <Link href="/services/digital-marketing-company-in-edmonton" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Edmonton</Link>
              {' '}location pages, we support real estate businesses across multiple Canadian markets.
            </motion.p>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className={styles.sectionHeading}><span className={styles.gradientText}>FAQ</span></h2>
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
                      <p className="faq-answer text-slate-600/70 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
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
                  Ready to Grow Your{' '}
                  <span className={styles.gradientText}>Real Estate Business?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Partner with Altiora Infotech and discover how a strategic real estate marketing system can help you attract more qualified buyers and sellers, increase online visibility, and build sustainable growth across Canada.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                    Book Your Free Consultation Today
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
