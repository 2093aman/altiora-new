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
  Monitor,
  Share2,
  Target,
  Briefcase,
  Eye,
  Zap,
  Megaphone,
  BarChart3,
  Clock,
  TrendingUp,
  Video,
  Star,
  MapPin,
  Utensils,
  Building2,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-for-restaurants-in-canada.module.css";

export default function RestaurantMarketingClientPage() {
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
    { question: "What is digital marketing for restaurants?", answer: "Digital marketing for restaurants involves SEO, local SEO, Google Ads, social media marketing, reputation management, and website optimization to attract more customers and increase revenue." },
    { question: "How much does restaurant marketing cost in Canada?", answer: "Costs vary depending on location, competition, goals, and services required. Most restaurants invest in a combination of SEO, local SEO, social media marketing, and advertising." },
    { question: "How long does restaurant SEO take?", answer: "Most restaurants begin seeing measurable SEO improvements within three to six months, depending on competition and website authority." },
    { question: "Is local SEO important for restaurants?", answer: "Yes. Local SEO helps restaurants appear in Google Maps, local search results, and location-based customer searches." },
    { question: "Can social media help restaurants grow?", answer: "Absolutely. Social media platforms help restaurants build awareness, showcase food, engage customers, and drive reservations." },
    { question: "Are Google Ads worth it for restaurants?", answer: "Google Ads can generate highly qualified traffic and immediate customer inquiries when properly managed." },
    { question: "What is Google Business Profile optimization?", answer: "Google Business Profile optimization improves visibility in Google Maps and local search results, helping restaurants attract nearby customers." },
    { question: "What is AEO for restaurants?", answer: "Answer Engine Optimization helps restaurants appear in AI-powered search experiences such as ChatGPT, Gemini, Perplexity, and Google AI Overviews." },
    { question: "Can AI help customers discover restaurants?", answer: "Yes. More consumers are using AI tools to find restaurant recommendations, compare options, and discover dining experiences." },
    { question: "Do restaurants need a website?", answer: "Yes. A professional website improves credibility, supports SEO, increases reservations, and serves as the foundation of your digital marketing strategy." },
  ];

  const marketRealityCards = [
    {
      title: "Most Dining Decisions Start Online",
      text: "Customers commonly search:",
      icon: Search,
      color: "#C9A227",
      subItems: ["Restaurants near me", "Best restaurants in [city]", "Italian restaurants near me", "Best brunch near me", "Fine dining in [city]"],
      closing: "Restaurants appearing prominently in these searches often receive the majority of customer inquiries.",
    },
    {
      title: "Google Reviews Influence Decisions",
      text: "Reviews have become one of the strongest trust signals for restaurants.",
      icon: Star,
      color: "#EC4899",
      subItems: [] as string[],
      closing: "Many diners read multiple reviews before choosing where to eat, and strong ratings often outperform competitors regardless of location.",
    },
    {
      title: "Google Maps Drives Local Traffic",
      text: "Google Business Profile optimization has become essential for restaurants. Customers frequently discover restaurants through Google Maps when searching for nearby dining options.",
      icon: MapPin,
      color: "#3B82F6",
      subItems: [] as string[],
      closing: "Restaurants in the local map pack receive significantly more visibility and customer traffic.",
    },
    {
      title: "Social Media Creates Discovery",
      text: "These platforms have become major restaurant discovery channels:",
      icon: Share2,
      color: "#10B981",
      subItems: ["Instagram", "TikTok", "Facebook", "YouTube"],
      closing: "Food photography, videos, customer experiences, and behind-the-scenes content influence dining decisions every day.",
    },
    {
      title: "AI Search Is Changing Discovery",
      text: "Customers increasingly ask AI tools where to eat. Through AEO and GEO optimization, restaurants can improve visibility across:",
      icon: Zap,
      color: "#8B5CF6",
      subItems: ["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity", "Voice Search"],
      closing: null,
    },
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
                  Digital Marketing for Restaurants{' '}
                  <span className={styles.gradientText}>in Canada</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-3 sm:mb-4"
                >
                  Grow Your Restaurant with Strategic Digital Marketing Services in Canada
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-[#3B4456] mb-4 leading-relaxed"
                >
                  Looking for digital marketing that helps you attract more customers, increase reservations, improve online visibility, and grow your restaurant revenue consistently?
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-[#3B4456] mb-4 leading-relaxed"
                >
                  At Altiora Infotech, we help restaurants, caf&eacute;s, bistros, fine dining establishments, food trucks, franchises, and hospitality businesses across Canada generate more customers through SEO, local SEO, Google Ads, social media marketing, website development, reputation management, and Answer Engine Optimization (AEO).
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="text-sm sm:text-base text-[#3B4456] mb-4 leading-relaxed"
                >
                  Today&apos;s diners discover restaurants online before they ever step through the door. They search Google, browse Google Maps, read reviews, watch social media content, and compare dining options before making a decision.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-sm sm:text-base text-[#3B4456] mb-6 sm:mb-8 leading-relaxed"
                >
                  Whether you&apos;re opening a new restaurant, growing an existing location, or expanding to multiple locations, we build marketing systems that help you attract more diners and increase long-term profitability.
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
                    Talk To A Restaurant Marketing Expert
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
                          <Utensils className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
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
                        { Icon: Star, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: BarChart3, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
                        { Icon: MapPin, color: "#C9A227", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
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
              className="rounded-3xl border border-[#C9A227]/20 bg-black/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#C9A227] shadow-[0_0_12px_#C9A227]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C9A227]/90 font-semibold">Quick Answer</span>
              </div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-4 leading-tight">
                What is digital marketing for restaurants in Canada?
              </h2>
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed mb-6">
                Digital marketing for restaurants in Canada uses SEO, Google Business Profile optimization, Google Ads, social media marketing, website development, reputation management, and content marketing to help restaurants attract more customers, increase reservations, improve local visibility, and grow revenue through online channels.
              </p>
              <p className="text-[#3B4456] text-sm sm:text-base font-semibold mb-3">How Digital Marketing Helps Restaurants Grow</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Increase Reservations and Walk-In Traffic",
                  "Improve Google Maps Visibility",
                  "Generate More Online Orders",
                  "Build Stronger Brand Awareness",
                  "Improve Online Reputation",
                  "Attract New and Returning Customers",
                  "Increase Revenue Consistently",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#3B4456] text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
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
                    Strategic Digital Marketing Built for Canadian Restaurants
                  </h3>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">The restaurant industry has become increasingly competitive across Canada.</p>
                    <p className="mb-4">Customers no longer choose restaurants based solely on location or word-of-mouth recommendations. Most dining decisions begin online.</p>
                    <p className="mb-4">Potential customers search for restaurants near them, compare menus, read reviews, browse photos, and watch social media content before deciding where to dine.</p>
                    <p className="mb-4">Restaurants that invest in digital marketing gain a significant competitive advantage because they become visible during the exact moment customers are making dining decisions.</p>
                    <p>At Altiora Infotech, we help restaurants build a strong online presence that drives reservations, increases visibility, strengthens brand recognition, and supports long-term growth.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Your Marketing Partner */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EEF3FF] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
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
                Your Marketing Partner for{' '}
                <span className={styles.gradientText}>Restaurant Growth</span>
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
                <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed">
                  Managing a restaurant requires constant attention to operations, staffing, inventory, customer service, and food quality.
                </p>
                <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed">
                  Our team handles your marketing while you focus on creating exceptional dining experiences.
                </p>
                <p className="text-[#3B4456] text-base font-semibold">What You Get</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { text: "Dedicated Restaurant Marketing Specialists", color: "#C9A227" },
                    { text: "Customized Growth Strategy", color: "#EC4899" },
                    { text: "Transparent Monthly Reporting", color: "#3B82F6" },
                    { text: "Campaign Performance Tracking", color: "#10B981" },
                    { text: "Continuous Optimization", color: "#8B5CF6" },
                    { text: "Long-Term Growth Partnership", color: "#C9A227" },
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
                      <span className="text-[#3B4456] text-sm sm:text-base font-medium">{item.text}</span>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 via-[#EC4899]/5 to-[#8B5CF6]/10 rounded-3xl" />
                  <div className="absolute inset-[1px] rounded-3xl bg-white/95 backdrop-blur-xl" />
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "conic-gradient(from 0deg, #C9A227, #EC4899, #8B5CF6, #3B82F6, #C9A227)",
                      padding: "3px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute -inset-4 bg-[#C9A227]/5 blur-[40px] rounded-full pointer-events-none" />
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
                      <Clock className="w-10 h-10 text-[#C9A227]" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-[#C9A227]/30"
                        animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      Focus on Your <span className={styles.gradientText}>Restaurant</span>
                    </h3>
                    <p className="text-[#3B4456] text-base sm:text-lg max-w-sm mx-auto leading-relaxed mb-8">
                      We manage your SEO, Google Ads, social media campaigns, local search visibility, online reputation, and customer acquisition while you focus on running a successful restaurant.
                    </p>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40"
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

        {/* Market Reality */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#3B82F6]/6 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/3 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Market Reality: How Diners{' '}
                <span className={styles.gradientText}>Discover Restaurants Today</span>
              </h2>
              <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
                Understanding modern dining behavior is critical for restaurant growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10 items-start">
              {marketRealityCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden border transition-all duration-500 hover:translate-y-[-6px] p-6"
                    style={{ borderColor: `${card.color}15`, background: `linear-gradient(145deg, ${card.color}06, transparent)` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 40px ${card.color}10, inset 0 0 40px ${card.color}05`, border: `1px solid ${card.color}30` }} />
                    <div className="relative z-10">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                        style={{ background: `${card.color}15`, border: `1px solid ${card.color}25`, boxShadow: `0 4px 20px ${card.color}10` }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <card.icon className="w-6 h-6" style={{ color: card.color }} />
                      </motion.div>
                      <p className="text-slate-800 text-sm sm:text-base font-semibold mb-2 leading-snug">{card.title}</p>
                      <p className="text-[#3B4456] text-xs sm:text-sm leading-relaxed">{card.text}</p>
                      {card.subItems.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {card.subItems.map((item, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${card.color}12`, color: card.color, border: `1px solid ${card.color}20` }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      {card.closing && (
                        <p className="text-slate-500 text-xs leading-relaxed mt-2">{card.closing}</p>
                      )}
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
              className="text-[#3B4456] text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10"
            >
              Restaurants that consistently invest in marketing build visibility and brand recognition that compound over time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-[#3B4456] text-base sm:text-lg font-semibold mb-6"
            >
              Why Restaurant Marketing Matters
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {[
                "Thousands of restaurants compete for customer attention",
                "Higher local rankings drive more reservations and foot traffic",
                "Strong online reviews build customer trust",
                "Consistent social content keeps your restaurant memorable",
                "A structured strategy creates predictable, sustainable growth",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-2.5 text-[#3B4456] text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EEF3FF] to-[#F3F6FC]" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A227]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={lookGreatInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className={styles.sectionHeading}>The Restaurant Growth <span className={styles.gradientText}>Formula</span></h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#C9A227]/15 hover:border-[#C9A227]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(244,204,111,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/[0.08] via-[#FF9F43]/[0.04] to-transparent" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #C9A227, #FF9F43, #C9A227)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#C9A227]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(244,204,111,0.3), rgba(255,159,67,0.15), rgba(244,204,111,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>01</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #C9A227, #FF9F43, #B18B1E)", boxShadow: "0 8px 30px rgba(244,204,111,0.35)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><Palette className="w-7 h-7 text-[#001A66]" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Position Your <span style={{ background: "linear-gradient(135deg, #C9A227, #FF9F43, #C9A227)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Restaurant</span></h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Build a compelling brand that clearly communicates your unique dining experience.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #C9A227, #3B82F6)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.6 }} /></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#3B82F6]/15 hover:border-[#3B82F6]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-l from-[#3B82F6]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <motion.div className="absolute right-0 top-0 bottom-0 w-1.5 rounded-r-3xl" style={{ background: "linear-gradient(to bottom, #3B82F6, #06B6D4, #3B82F6)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3B82F6]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row-reverse items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#3B82F6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.3), rgba(6,182,212,0.15), rgba(59,130,246,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>02</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #2563EB)", boxShadow: "0 8px 30px rgba(59,130,246,0.35)" }} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 200 }}><Eye className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Increase <span className="text-[#C9A227]">Visibility</span></h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Improve rankings through SEO, local SEO, Google Maps optimization, and social media marketing.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #3B82F6, #10B981)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.9 }} /></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#10B981]/15 hover:border-[#10B981]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #10B981, #06B6D4, #10B981)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#10B981]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(16,185,129,0.3), rgba(6,182,212,0.15), rgba(16,185,129,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>03</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #10B981, #06B6D4)", boxShadow: "0 8px 30px rgba(16,185,129,0.35)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><Target className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Generate Reservations and <span className="text-[#C9A227]">Orders</span></h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Use Google Ads, Meta Ads, local search, and content marketing to attract customers.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #10B981, #8B5CF6)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 1.1 }} /></div>
            </motion.div>

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
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Scale and <span className="text-[#C9A227]">Optimize</span></h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Use performance data to continuously improve customer acquisition and increase profitability.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={lookGreatInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1.0 }} className="text-center">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40">
                Grow Faster With a Structured Strategy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section ref={growRef} className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A227]/6 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8B5CF6]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#EC4899]/3 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(244,204,111,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.4) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className={`${styles.sectionHeading} mb-4`}>Our Approach to <span className={styles.gradientText}>Restaurant Marketing</span></h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={growInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="relative mx-auto w-full">
                <div className="relative rounded-[2rem] overflow-hidden border border-black/[0.08]" style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.04), rgba(236,72,153,0.02), rgba(59,130,246,0.04))" }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div className="h-full w-1/3" style={{ background: "linear-gradient(90deg, transparent, #C9A227, #EC4899, transparent)" }} animate={{ x: ["-100%", "400%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  </div>
                  <div className="relative z-10 p-8 sm:p-12 md:p-16">
                    <motion.div initial={{ opacity: 0 }} animate={growInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mb-10">
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#C9A227]/20 text-[#C9A227]/80" style={{ background: "rgba(244,204,111,0.06)" }}>Our Approach</span>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-14">
                      {[
                        {
                          text: "Search Visibility",
                          icon: Search,
                          color: "#C9A227",
                          number: "01",
                          description: "Our SEO Services help restaurants appear when customers search for dining experiences, cuisines, and locations.",
                          detail: (
                            <span>Through{' '}
                              <Link href="/services/seo" className="text-[#C9A227] hover:underline">SEO Services</Link>
                              , Local SEO, Google Business Profile, and{' '}
                              <Link href="/services/aeo-geo" className="text-[#C9A227] hover:underline">AEO &amp; GEO Services</Link>
                              , we improve rankings and Google Maps visibility.
                            </span>
                          ),
                        },
                        {
                          text: "Conversion-Focused Websites",
                          icon: Monitor,
                          color: "#EC4899",
                          number: "02",
                          description: "A restaurant website should do more than look good. It should drive reservations, generate online orders, showcase menus, and display reviews.",
                          detail: (
                            <span>Our{' '}
                              <Link href="/services/website-development-services" className="text-[#EC4899] hover:underline">Website Development Services</Link>
                              {' '}create high-performing restaurant websites designed for growth.
                            </span>
                          ),
                        },
                        {
                          text: "Continuous Optimization",
                          icon: BarChart3,
                          color: "#3B82F6",
                          number: "03",
                          description: "We monitor reservation volume, website traffic, search rankings, review growth, and customer acquisition performance.",
                          detail: <span>This allows us to continually improve results over time.</span>,
                        },
                      ].map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }} className="text-center group">
                          <div className="relative inline-flex mb-5">
                            <motion.div className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center relative z-10" style={{ background: `linear-gradient(135deg, ${item.color}25, ${item.color}08)`, border: `2px solid ${item.color}35`, boxShadow: `0 0 30px ${item.color}15, 0 0 60px ${item.color}08` }} whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 200 }}>
                              <item.icon className="w-7 h-7" style={{ color: item.color }} />
                            </motion.div>
                            <motion.div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${item.color}` }} animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }} />
                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20" style={{ background: item.color, color: "#001A66" }}>{item.number}</div>
                          </div>
                          <h4 className="text-slate-900 font-bold text-base sm:text-lg mb-2">{item.text}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed mb-2">{item.description}</p>
                          <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 1.2 }} className="pt-10 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.15), rgba(236,72,153,0.1), rgba(59,130,246,0.15))", border: "1px solid rgba(244,204,111,0.2)" }} animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                          <Zap className="w-6 h-6 text-[#C9A227]" />
                        </motion.div>
                        <div>
                          <p className="text-slate-900 font-semibold text-base sm:text-lg">Connected marketing ecosystem</p>
                          <p className="text-slate-500 text-sm">Instead of isolated services, everything works together.</p>
                        </div>
                      </div>
                      <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40 whitespace-nowrap flex-shrink-0">
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EEF3FF] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A227]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Services We Provide for Restaurants <span className={styles.gradientText}>in Canada</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Restaurant SEO Services */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#C9A22720", background: "linear-gradient(145deg, #C9A22705, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #C9A227, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#C9A22715", border: "1px solid #C9A22725" }}>
                    <Search className="w-6 h-6" style={{ color: "#C9A227" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Restaurant SEO Services</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Improve visibility for high-intent restaurant searches and increase organic traffic.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Higher organic rankings", "More qualified traffic", "Long-term visibility", "Local authority"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#C9A22712", color: "#C9A227", border: "1px solid #C9A22720" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Our{' '}<Link href="/services/seo" className="text-[#C9A227] hover:underline">SEO Services</Link>{' '}help restaurants rank for valuable cuisine and location-based searches.</p>
              </motion.div>

              {/* Local SEO Services */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.17 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#EC489920", background: "linear-gradient(145deg, #EC489905, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #EC4899, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EC489915", border: "1px solid #EC489925" }}>
                    <MapPin className="w-6 h-6" style={{ color: "#EC4899" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Local SEO Services</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Help your restaurant rank higher in local search results and Google Maps.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Google Maps rankings", "Local map pack", "Restaurants near me", "Google Business Profile"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#EC489912", color: "#EC4899", border: "1px solid #EC489920" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Local SEO helps nearby customers find and choose your restaurant first.</p>
              </motion.div>

              {/* Google Ads Management */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.24 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#3B82F620", background: "linear-gradient(145deg, #3B82F605, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#3B82F615", border: "1px solid #3B82F625" }}>
                    <Target className="w-6 h-6" style={{ color: "#3B82F6" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Google Ads Management</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Generate immediate reservations and customer inquiries through targeted campaigns.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Best restaurants in [city]", "Takeout near me", "Brunch near me", "Fine dining"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#3B82F612", color: "#3B82F6", border: "1px solid #3B82F620" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Our{' '}<Link href="/services/paid-advertisement-services" className="text-[#3B82F6] hover:underline">Paid Advertising Services</Link>{' '}deliver high-intent customers while controlling ad spend.</p>
              </motion.div>

              {/* Social Media Marketing */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.31 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#10B98120", background: "linear-gradient(145deg, #10B98105, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #10B981, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#10B98115", border: "1px solid #10B98125" }}>
                    <Share2 className="w-6 h-6" style={{ color: "#10B981" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Social Media Marketing</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Build awareness and engagement and showcase your food across major platforms.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Instagram", "TikTok", "Facebook", "YouTube"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#10B98112", color: "#10B981", border: "1px solid #10B98120" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Our{' '}<Link href="/services/social-media-management" className="text-[#10B981] hover:underline">Social Media Management</Link>{' '}keeps your restaurant visible and memorable.</p>
              </motion.div>

              {/* Website Development - Wide Card */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.38 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px] md:col-span-2" style={{ borderColor: "#8B5CF620", background: "linear-gradient(145deg, #8B5CF605, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#8B5CF615", border: "1px solid #8B5CF625" }}>
                    <Monitor className="w-6 h-6" style={{ color: "#8B5CF6" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Website Development</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Create fast, mobile-friendly websites designed to increase reservations and online orders.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Drive Reservations", "Generate Online Orders", "Showcase Menus", "Display Reviews"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#8B5CF612", color: "#8B5CF6", border: "1px solid #8B5CF620" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Our{' '}<Link href="/services/website-development-services" className="text-[#8B5CF6] hover:underline">Website Development Services</Link>{' '}build high-performing restaurant websites that improve user experience and convert visitors into customers.</p>
              </motion.div>

              {/* Reputation Management */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.45 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#C9A22720", background: "linear-gradient(145deg, #C9A22705, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #C9A227, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#C9A22715", border: "1px solid #C9A22725" }}>
                    <Star className="w-6 h-6" style={{ color: "#C9A227" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Reputation Management</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed">Monitor and improve online reviews across major platforms. Strong online reputations influence customer decisions and help your restaurant stand out from competitors regardless of location.</p>
              </motion.div>

              {/* Video Production */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.52 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#EC489920", background: "linear-gradient(145deg, #EC489905, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #EC4899, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EC489915", border: "1px solid #EC489925" }}>
                    <Video className="w-6 h-6" style={{ color: "#EC4899" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">Video Production</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Showcase food, atmosphere, customer experiences, and brand stories through engaging video content.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Food Photography", "Atmosphere Videos", "Customer Experiences", "Chef Highlights"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#EC489912", color: "#EC4899", border: "1px solid #EC489920" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Our{' '}<Link href="/services/video-production" className="text-[#EC4899] hover:underline">Video Production Services</Link>{' '}create content that drives discovery and dining decisions.</p>
              </motion.div>

              {/* AEO & GEO Services */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.59 }} className="group relative rounded-2xl border p-6 transition-all duration-500 hover:translate-y-[-4px]" style={{ borderColor: "#3B82F620", background: "linear-gradient(145deg, #3B82F605, transparent)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }} />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#3B82F615", border: "1px solid #3B82F625" }}>
                    <Zap className="w-6 h-6" style={{ color: "#3B82F6" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">AEO &amp; GEO Services</h3>
                </div>
                <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-4">Increase visibility across AI-powered search experiences and future-proof your restaurant&apos;s digital presence.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity"].map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#3B82F612", color: "#3B82F6", border: "1px solid #3B82F620" }}>{item}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">Our{' '}<Link href="/services/aeo-geo" className="text-[#3B82F6] hover:underline">AEO &amp; GEO Services</Link>{' '}help restaurants appear in AI-powered discovery.</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section ref={whyChooseRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Why Choose Altiora Infotech for <span className={styles.gradientText}>Restaurant Marketing?</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Industry Understanding", text: "We understand how diners search, evaluate options, and choose restaurants.", icon: Building2, gradient: "from-[#C9A227] to-[#FF9F43]" },
                { title: "Full-Service Expertise", text: "Access SEO, paid advertising, website development, branding, social media, content creation, and AEO services through one partner.", icon: Briefcase, gradient: "from-[#3B82F6] to-[#06B6D4]" },
                { title: "Performance-Focused Approach", text: "Every strategy is designed around measurable business outcomes.", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
                { title: "Transparent Reporting", text: "Know exactly how campaigns perform and where opportunities exist.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
                { title: "Long-Term Partnership", text: "We focus on sustainable growth rather than short-term marketing tactics.", icon: Zap, gradient: "from-[#EC4899] to-[#C9A227]" },
                { title: "Experienced Team", text: "Our specialists understand restaurant marketing, local discovery, and digital growth strategies.", icon: TrendingUp, gradient: "from-[#C9A227] to-[#10B981]" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
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

        {/* Canadian Markets */}
        <section ref={marketsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EEF3FF] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={marketsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Restaurant Markets <span className={styles.gradientText}>We Serve Across Canada</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                {
                  province: "Ontario",
                  color: "#C9A227",
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
                          <Link href={city.href} className="text-sm text-[#3B4456] hover:text-[#C9A227] transition-colors duration-200 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full inline-block" style={{ background: region.color }} />
                            {city.name}
                          </Link>
                        ) : (
                          <span className="text-sm text-[#3B4456] flex items-center gap-1.5">
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
              className="text-center text-[#3B4456] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto"
            >
              Through our{' '}
              <Link href="/services/digital-marketing-company-in-toronto" className="text-[#C9A227] hover:underline">Digital Marketing Company in Toronto</Link>
              ,{' '}
              <Link href="/services/digital-marketing-company-in-vancouver" className="text-[#C9A227] hover:underline">Digital Marketing Company in Vancouver</Link>
              ,{' '}
              <Link href="/services/digital-marketing-company-in-Calgary" className="text-[#C9A227] hover:underline">Digital Marketing Company in Calgary</Link>
              , and{' '}
              <Link href="/services/digital-marketing-company-in-edmonton" className="text-[#C9A227] hover:underline">Digital Marketing Company in Edmonton</Link>
              {' '}location pages, we help restaurants grow their visibility and customer base across Canada.
            </motion.p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C9A227]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>
              <div className="relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Grow Your{' '}
                  <span className={styles.gradientText}>Restaurant?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Partner with Altiora Infotech and discover how a strategic restaurant marketing system can help you attract more customers, increase reservations, strengthen your online presence, and grow your restaurant across Canada.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40">
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
