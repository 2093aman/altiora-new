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
  Share2,
  PenTool,
  Cpu,
  MapPin,
  Zap,
  Megaphone,
  BarChart3,
  Building2,
  Briefcase,
  FileText,
  Rocket,
  Eye,
  Handshake,
  Palette,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-company-in-hamilton.module.css";

export default function HamiltonMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [customRef, customInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [brandRef, brandInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [economyRef, economyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [frameworkRef, frameworkInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => { setMounted(true); }, []);

  const brandServices = [
    "Search Engine Optimization (SEO)",
    "Local SEO",
    "Google Ads Management",
    "Meta Advertising",
    "Social Media Marketing",
    "Website Design & Development",
    "Content Marketing",
    "Email Marketing",
    "Conversion Rate Optimization (CRO)",
    "Marketing Automation",
    "AI-Powered Business Solutions",
  ];

  const growthFramework = [
    {
      number: "01",
      title: "Business Discovery",
      text: "We begin by understanding your goals, customers, competitors, and current marketing performance.",
      icon: Search,
      color: "#f4cc6f",
      gradientFrom: "#f4cc6f",
      gradientTo: "#FF9F43",
    },
    {
      number: "02",
      title: "Strategic Planning",
      text: "Our specialists create a customized marketing roadmap based on research, audience insights, and business objectives.",
      icon: FileText,
      color: "#3B82F6",
      gradientFrom: "#3B82F6",
      gradientTo: "#06B6D4",
    },
    {
      number: "03",
      title: "Campaign Implementation",
      text: "We launch integrated SEO, PPC, content marketing, website optimization, and social media campaigns designed to generate measurable results.",
      icon: Rocket,
      color: "#10B981",
      gradientFrom: "#10B981",
      gradientTo: "#06B6D4",
    },
    {
      number: "04",
      title: "Continuous Improvement",
      text: "Marketing performance is monitored continuously, allowing us to optimize campaigns and maximize long-term growth.",
      icon: BarChart3,
      color: "#8B5CF6",
      gradientFrom: "#8B5CF6",
      gradientTo: "#EC4899",
    },
  ];

  const coreServices = [
    {
      icon: Search, color: "#f4cc6f",
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility through technical SEO, on-page optimization, high-quality content, keyword strategy, and authority building.",
    },
    {
      icon: MapPin, color: "#EC4899",
      title: "Local SEO",
      description: "Help nearby customers discover your business through Google Maps optimization, local citations, and Google Business Profile management.",
    },
    {
      icon: Target, color: "#3B82F6",
      title: "Google Ads Management",
      description: "Generate high-quality leads with targeted Pay-Per-Click campaigns that maximize advertising budgets and improve conversion rates.",
    },
    {
      icon: Share2, color: "#10B981",
      title: "Social Media Marketing",
      description: "Strengthen customer relationships and increase brand awareness through strategic social media campaigns and engaging content.",
    },
    {
      icon: Monitor, color: "#8B5CF6",
      title: "Website Design & Development",
      description: "Create fast, responsive, SEO-friendly websites designed to deliver exceptional user experiences and higher conversions.",
    },
    {
      icon: PenTool, color: "#f4cc6f",
      title: "Content Marketing",
      description: "Publish valuable content that educates customers, improves search visibility, and positions your business as an industry authority.",
    },
    {
      icon: Cpu, color: "#EC4899",
      title: "AI Marketing & Automation",
      description: "Leverage artificial intelligence to automate repetitive tasks, improve customer engagement, and increase operational efficiency.",
    },
  ];

  const whyChoose = [
    { title: "Data-Driven Marketing", text: "Every strategy is built using research, analytics, and measurable performance metrics.", icon: BarChart3, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
    { title: "Tailored Business Solutions", text: "We design customized campaigns based on your industry, audience, and growth objectives.", icon: Palette, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Complete Digital Marketing Expertise", text: "Our team combines SEO, paid advertising, content creation, web development, automation, and analytics into one integrated strategy.", icon: Briefcase, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Transparent Reporting", text: "Receive clear performance reports with actionable insights and continuous optimization recommendations.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "Long-Term Partnership", text: "We focus on sustainable business growth rather than short-term marketing gains.", icon: Handshake, gradient: "from-[#EC4899] to-[#f4cc6f]" },
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Construction",
    "Professional Services",
    "Real Estate",
    "Education",
    "Logistics & Transportation",
    "Retail & eCommerce",
    "Hospitality",
    "Restaurants",
    "Financial Services",
    "Home Services",
    "Technology Startups",
    "Non-Profit Organizations",
  ];

  const faqs = [
    { question: "What does a digital marketing company do?", answer: "A digital marketing company helps businesses attract customers through SEO, paid advertising, website optimization, social media marketing, content creation, and lead generation strategies." },
    { question: "Why hire a Digital Marketing Company in Hamilton?", answer: "A Digital Marketing Company in Hamilton understands the local business environment and develops strategies that improve online visibility, generate qualified leads, and help businesses compete effectively within Hamilton and surrounding markets." },
    { question: "How long does SEO take?", answer: "SEO is a long-term investment. Most businesses begin seeing measurable improvements within three to six months, while competitive industries may require additional time for stronger rankings." },
    { question: "Which marketing channel provides the fastest results?", answer: "Google Ads often delivers immediate traffic and leads, while SEO builds long-term organic visibility. Combining both typically produces the best overall results." },
    { question: "Do you work with small businesses?", answer: "Yes. We partner with startups, local businesses, growing companies, and established enterprises to create scalable marketing strategies." },
    { question: "Can you redesign our website?", answer: "Absolutely. We build modern, responsive, SEO-optimized websites focused on user experience, performance, and lead generation." },
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
                  <span className={styles.gradientText}>Hamilton</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-700 mb-3 sm:mb-4"
                >
                  Grow Your Business with a Trusted Digital Marketing Company in Hamilton
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed"
                >
                  Building a successful business in today&apos;s competitive marketplace requires more than a great product or service. It requires a strategic digital presence that attracts the right audience, builds credibility, and converts visitors into loyal customers. At Altiora Infotech, We are a{' '}
                  <Link href="/" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Hamilton</Link>
                  {' '}committed to helping businesses achieve measurable growth through data-driven digital marketing strategies.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed"
                >
                  Hamilton has become one of Ontario&apos;s fastest-growing business destinations, with thriving industries including healthcare, manufacturing, logistics, construction, education, retail, and professional services. Our experienced team develops customized marketing campaigns using SEO, Google Ads, Meta Ads, website development, Local SEO, content marketing, and AI-powered automation to help businesses stand out in an increasingly competitive digital environment.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed"
                >
                  Whether you&apos;re a startup, an established company, or expanding into new markets, we create strategies that deliver sustainable business growth and maximize your return on investment.
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
                    Schedule Your Free Strategy Consultation
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

        {/* Overview: Why Choose a Digital Marketing Company in Hamilton? */}
        <section
          ref={overviewRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-left sm:text-center">
                    Why Choose a Digital Marketing Company in Hamilton?
                  </h2>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">Hamilton&apos;s business landscape continues to evolve as more consumers rely on online research before making purchasing decisions. Businesses need a strong digital presence to compete effectively, attract qualified leads, and build long-term customer relationships.</p>
                    <p className="mb-4">Choosing a Digital Marketing Company in Hamilton gives you access to marketing professionals who understand local market trends, customer behavior, and the latest digital technologies. At Altiora Infotech, we create customized strategies that help businesses improve visibility across search engines, social media platforms, and digital advertising channels.</p>
                    <p>Our goal is simple: generate measurable business results through smart, data-driven marketing.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Customized Digital Marketing Solutions for Hamilton Businesses */}
        <section
          ref={customRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={customInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h2 className={`${styles.sectionHeading} leading-tight`}>
                Customized Digital Marketing Solutions for{' '}
                <span className={styles.gradientText}>Hamilton Businesses</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={customInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <p>Every business has unique challenges, opportunities, and objectives. That&apos;s why our approach begins with understanding your company, your customers, and your competition before recommending the right digital marketing strategy.</p>
              <p>We conduct in-depth market research, competitor analysis, audience profiling, and keyword research to identify opportunities that support long-term growth. From improving your search engine rankings to generating qualified leads and increasing online sales, every campaign is designed around your specific business goals.</p>
              <p>Rather than relying on generic marketing tactics, we develop personalized strategies that adapt as your business grows and market conditions evolve.</p>
            </motion.div>
          </div>
        </section>

        {/* Build a Stronger Brand with Performance-Driven Marketing */}
        <section
          ref={brandRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/6 blur-[140px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={brandInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h2 className={`${styles.sectionHeading} leading-tight`}>
                Build a Stronger Brand with{' '}
                <span className={styles.gradientText}>Performance-Driven Marketing</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                A recognizable brand combined with effective digital marketing creates sustainable business growth. Our integrated marketing services help businesses strengthen their online presence while improving customer acquisition and retention.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={brandInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-700 text-sm sm:text-base font-semibold mb-4 text-center"
            >
              Our services include:
            </motion.p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {brandServices.map((service, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={brandInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-full font-medium text-[#f4cc6f] bg-[#f4cc6f]/10 border border-[#f4cc6f]/25"
                >
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {service}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={brandInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto"
            >
              Every campaign is monitored using real-time analytics to optimize performance and improve marketing ROI.
            </motion.p>
          </div>
        </section>

        {/* Understanding Hamilton's Growing Digital Economy */}
        <section
          ref={economyRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={economyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h2 className={`${styles.sectionHeading} leading-tight`}>
                Understanding Hamilton&apos;s Growing{' '}
                <span className={styles.gradientText}>Digital Economy</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={economyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <p>Hamilton has transformed into a vibrant centre for innovation, healthcare, advanced manufacturing, logistics, higher education, and professional services. Businesses across these industries compete not only locally but also throughout Ontario and Canada.</p>
              <p>Consumers increasingly search online before choosing products or services. They compare businesses through Google Search, Google Maps, websites, reviews, and social media. Companies with strong digital visibility earn greater trust and attract more qualified customers.</p>
              <p>Our marketing strategies help businesses capitalize on these digital opportunities by increasing online visibility, strengthening brand authority, and improving conversion rates.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Proven Growth Framework */}
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
              className="text-center mb-16"
            >
              <h2 className={styles.sectionHeading}>
                Our Proven <span className={styles.gradientText}>Growth Framework</span>
              </h2>
            </motion.div>

            {growthFramework.map((step, index) => (
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
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(${index % 2 === 0 ? '90deg' : '270deg'}, ${step.color}0F, transparent)` }}
                  />
                  <div
                    className={`absolute ${index % 2 === 0 ? 'left-0 rounded-l-3xl' : 'right-0 rounded-r-3xl'} top-0 bottom-0 w-1.5`}
                    style={{ background: `linear-gradient(to bottom, ${step.gradientFrom}, ${step.gradientTo}, ${step.gradientFrom})` }}
                  />
                  <div className={`relative flex flex-col md:flex-row${index % 2 !== 0 ? '-reverse' : ''} items-stretch`}>
                    <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                      <div className="relative z-10 flex flex-col items-center">
                        <span
                          className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                          style={{
                            background: `linear-gradient(180deg, ${step.color}4D, ${step.color}0D)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {step.number}
                        </span>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                          style={{ background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`, boxShadow: `0 8px 30px ${step.color}55` }}
                        >
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Digital Marketing Services */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Our Digital <span className={styles.gradientText}>Marketing Services</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreServices.map((service, index) => (
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
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Altiora Infotech? */}
        <section ref={whyChooseRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Why Choose <span className={styles.gradientText}>Altiora Infotech?</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {whyChoose.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className={`group relative cursor-pointer ${index === 4 ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto' : ''}`}>
                  <div className="relative rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.text}</p>
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

        {/* Industries We Serve */}
        <section
          ref={industriesRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={industriesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-8">
              <h2 className={styles.sectionHeading}>Industries <span className={styles.gradientText}>We Serve</span></h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                Our team helps businesses across Hamilton succeed in competitive markets, including:
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-full font-medium text-slate-700 bg-black/[0.04] border border-black/10"
                >
                  <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-[#f4cc6f]" />
                  {industry}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={industriesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto"
            >
              Every industry receives a customized digital marketing strategy designed to maximize growth opportunities.
            </motion.p>
          </div>
        </section>


        {/* Other Locations We Serve */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Serving Businesses Across Canada
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Beyond Hamilton, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-ottawa" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Ottawa</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-montreal" className="text-[#f4cc6f] hover:underline">Montreal</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-halifax" className="text-[#f4cc6f] hover:underline">Halifax team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-kerrville" className="text-[#f4cc6f] hover:underline">growing brands in Kerrville</Link>.
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
                  Ready to Grow Your{' '}
                  <span className={styles.gradientText}>Business in Hamilton?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
                  Digital marketing is one of the most effective ways to reach new customers, strengthen your brand, and generate sustainable revenue. At Altiora Infotech, we combine strategy, creativity, and technology to help businesses achieve measurable growth through customized digital marketing solutions.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
                  If you&apos;re searching for a reliable Digital Marketing Company in Hamilton, our team is ready to develop a marketing strategy tailored to your business goals and industry.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
                  Let&apos;s grow your business with smarter digital marketing.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.8 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                    Get Your Free Marketing Consultation
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
