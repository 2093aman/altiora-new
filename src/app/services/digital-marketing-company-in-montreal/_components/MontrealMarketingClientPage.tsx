'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Search,
  Globe,
  Monitor,
  Target,
  Share2,
  PenTool,
  MapPin,
  Palette,
  Eye,
  TrendingUp,
  Zap,
  Megaphone,
  BarChart3,
  Building2,
  Briefcase,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-company-in-montreal.module.css";

export default function MontrealMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [strategicRef, strategicInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [brandingRef, brandingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [marketRef, marketInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => { setMounted(true); }, []);

  const faqs = [
    { question: "What services does a digital marketing company provide?", answer: "A digital marketing company helps businesses grow through SEO, Google Ads, social media marketing, website development, content marketing, email campaigns, local SEO, and conversion optimization." },
    { question: "Why should I hire a Digital Marketing Company in Montreal?", answer: "A Digital Marketing Company in Montreal understands the city's competitive business landscape and can create localized marketing strategies that resonate with both English- and French-speaking audiences while helping businesses increase visibility and generate qualified leads." },
    { question: "Is SEO better than paid advertising?", answer: "SEO builds sustainable long-term organic traffic, while Google Ads delivers immediate visibility. A balanced strategy combining both channels often provides the strongest return on investment." },
    { question: "How long before I see marketing results?", answer: "Paid advertising can generate results within days, while SEO generally requires several months to achieve consistent improvements depending on competition and website authority." },
    { question: "Can digital marketing help small businesses?", answer: "Yes. Digital marketing enables small businesses to compete effectively by targeting local customers, improving online visibility, and generating qualified leads within controlled budgets." },
    { question: "Do you create custom marketing strategies?", answer: "Absolutely. Every campaign is tailored to your business objectives, target audience, industry, and competitive landscape to maximize long-term success." },
  ];

  const growthProcess = [
    { number: "01", title: "Research & Discovery", text: "We analyze your business, industry, competitors, and customer journey to identify growth opportunities.", icon: Search, color: "#f4cc6f", iconBg: "linear-gradient(135deg, #f4cc6f, #FF9F43, #e6b85c)", iconText: "#010b22" },
    { number: "02", title: "Strategy Development", text: "Based on research, we create a customized digital marketing strategy focused on measurable business objectives.", icon: Target, color: "#3B82F6", iconBg: "linear-gradient(135deg, #3B82F6, #06B6D4, #2563EB)", iconText: "#ffffff" },
    { number: "03", title: "Campaign Execution", text: "Our specialists implement SEO, paid advertising, content marketing, website optimization, and social media campaigns across multiple channels.", icon: Megaphone, color: "#10B981", iconBg: "linear-gradient(135deg, #10B981, #06B6D4)", iconText: "#ffffff" },
    { number: "04", title: "Performance Optimization", text: "Through continuous monitoring and analytics, we refine campaigns to improve lead quality, conversion rates, and overall marketing performance.", icon: BarChart3, color: "#8B5CF6", iconBg: "linear-gradient(135deg, #8B5CF6, #7C3AED)", iconText: "#ffffff" },
  ];

  const coreServices = [
    { icon: Search, color: "#f4cc6f", title: "Search Engine Optimization", description: "Improve search engine rankings with technical SEO, keyword optimization, content strategy, backlink development, and local search optimization." },
    { icon: MapPin, color: "#EC4899", title: "Local SEO", description: "Increase visibility in Google Maps and location-based searches, helping nearby customers discover your business." },
    { icon: Target, color: "#3B82F6", title: "Google Ads", description: "Generate qualified leads with targeted PPC campaigns designed to maximize advertising performance while controlling costs." },
    { icon: Share2, color: "#10B981", title: "Social Media Marketing", description: "Build meaningful customer relationships through engaging content, strategic advertising, and community management across major social platforms." },
    { icon: Monitor, color: "#8B5CF6", title: "Website Design & Development", description: "Create responsive, fast-loading websites that provide exceptional user experiences while supporting SEO and lead generation." },
    { icon: PenTool, color: "#f4cc6f", title: "Content Marketing", description: "Publish valuable, optimized content that educates customers, builds authority, and strengthens your online presence." },
    { icon: Zap, color: "#EC4899", title: "AI Marketing Solutions", description: "Leverage automation and artificial intelligence to improve efficiency, customer engagement, and campaign performance." },
  ];

  const whyChooseUs = [
    { title: "Customized Marketing Strategies", text: "Every business receives a personalized marketing plan built around its objectives, audience, and industry.", icon: Palette, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
    { title: "Data-Driven Execution", text: "We use analytics and measurable KPIs to guide every campaign decision.", icon: BarChart3, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Complete Digital Expertise", text: "Our team integrates SEO, paid advertising, web development, social media, content marketing, and automation into a unified growth strategy.", icon: Briefcase, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Transparent Reporting", text: "You'll receive regular performance reports with actionable insights and clear recommendations.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "Long-Term Business Growth", text: "We focus on sustainable marketing strategies that continue delivering value as your business evolves.", icon: TrendingUp, gradient: "from-[#EC4899] to-[#f4cc6f]" },
  ];

  const services11 = [
    "Search Engine Optimization (SEO)",
    "Local SEO",
    "Google Ads Management",
    "Meta Advertising",
    "Social Media Marketing",
    "Website Design & Development",
    "Content Marketing",
    "Conversion Rate Optimization",
    "Email Marketing",
    "Marketing Automation",
    "AI-Powered Digital Solutions",
  ];

  const industries = [
    "Technology & Artificial Intelligence",
    "Healthcare",
    "Professional Services",
    "Real Estate",
    "Education",
    "Manufacturing",
    "Retail & eCommerce",
    "Hospitality & Tourism",
    "Financial Services",
    "Construction",
    "Home Services",
    "Restaurants & Cafés",
    "Non-Profit Organizations",
  ];

  const pillColors = ["#f4cc6f", "#EC4899", "#3B82F6", "#10B981", "#8B5CF6"];

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
                  <span className={styles.gradientText}>Montreal</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-600 mb-3 sm:mb-4"
                >
                  Accelerate Your Business Growth with a Leading Digital Marketing Company in Montreal
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-slate-500 mb-4 leading-relaxed"
                >
                  Growing a business in Montreal requires more than a strong product or service. It requires a digital marketing strategy that connects with the city&apos;s diverse audience. At{' '}
                  <Link href="/" className="text-[#f4cc6f] hover:underline">Altiora Infotech</Link>
                  , we are a Digital Marketing Company in Montreal that helps businesses improve online visibility, generate qualified leads, and increase revenue through strategic, data-driven digital marketing solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-500 mb-4 leading-relaxed"
                >
                  Montreal is one of Canada&apos;s most dynamic business centres, known for its thriving technology ecosystem, creative industries, retail sector, healthcare organizations, manufacturers, and startups. Our team develops customized marketing strategies that help businesses stand out in this competitive environment using SEO, Google Ads, Meta Ads, content marketing, website development, local SEO, and AI-powered marketing automation.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 leading-relaxed"
                >
                  Whether you&apos;re expanding locally or targeting customers across Canada, we create campaigns designed to deliver measurable growth and long-term success.
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
                    Book Your Free Strategy Session
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

        {/* Overview: Why Choose a Digital Marketing Company in Montreal? */}
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
                    Why Choose a Digital Marketing Company in Montreal?
                  </h2>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">Montreal&apos;s marketplace is unique. With a bilingual audience, strong local competition, and businesses serving both regional and national customers, marketing strategies must be carefully planned to maximize reach and engagement.</p>
                    <p className="mb-4">Working with a Digital Marketing Company in Montreal gives your business access to professionals who understand search trends, consumer behaviour, and digital marketing best practices tailored to the local market.</p>
                    <p>At Altiora Infotech, we combine creativity with analytics to build marketing campaigns that generate traffic, improve search visibility, strengthen brand authority, and convert visitors into loyal customers.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Strategic Digital Marketing for Montreal Businesses */}
        <section ref={strategicRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={strategicInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Strategic Digital Marketing for{' '}
                <span className={styles.gradientText}>Montreal Businesses</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={strategicInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed text-center"
            >
              <p>Every successful marketing campaign starts with understanding the business behind it.</p>
              <p>Our team begins by evaluating your objectives, target audience, competitors, and current online performance. We identify opportunities to improve your digital presence and create a customized marketing roadmap aligned with your business goals.</p>
              <p>Whether you&apos;re focused on lead generation, online sales, local visibility, or brand awareness, we develop integrated marketing campaigns that produce measurable business outcomes rather than simply increasing website traffic.</p>
            </motion.div>
          </div>
        </section>

        {/* Branding & Performance Marketing That Creates Lasting Growth */}
        <section ref={brandingRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={brandingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Branding & Performance Marketing That Creates{' '}
                <span className={styles.gradientText}>Lasting Growth</span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
                Strong branding helps customers recognize and trust your business, while performance marketing ensures your message reaches the right audience at the right time.
              </p>
              <p className="text-slate-600 text-base sm:text-lg font-semibold mt-6">
                Our integrated digital marketing services include:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={brandingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {services11.map((item, i) => {
                const color = pillColors[i % pillColors.length];
                return (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 rounded-full font-medium"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
                  >
                    {item}
                  </span>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={brandingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto"
            >
              Every campaign is continuously monitored and optimized using performance data to improve engagement, conversions, and return on investment.
            </motion.p>
          </div>
        </section>

        {/* Understanding Montreal's Digital Market */}
        <section
          ref={marketRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={marketInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={marketInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-left sm:text-center">
                    Understanding <span className={styles.gradientText}>Montreal&apos;s Digital Market</span>
                  </h2>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">Montreal is home to internationally recognized technology companies, AI research organizations, healthcare providers, educational institutions, tourism businesses, financial services, and manufacturing companies. Consumers increasingly rely on search engines, social media, online reviews, and digital content before making purchasing decisions.</p>
                    <p className="mb-4">Businesses that invest in digital marketing gain a competitive advantage by improving search visibility, attracting qualified traffic, and building trust with potential customers.</p>
                    <p>Our strategies are designed to help businesses adapt to changing consumer behaviour while creating sustainable digital growth.</p>
                  </div>
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Growth Process */}
        <section
          ref={processRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#f4cc6f]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className={styles.sectionHeading}>
                Our Growth <span className={styles.gradientText}>Process</span>
              </h2>
            </motion.div>

            {growthProcess.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.2 }}
                  className={`relative group ${index < growthProcess.length - 1 ? 'mb-6' : ''}`}
                >
                  <div
                    className="relative rounded-3xl overflow-hidden border transition-all duration-500"
                    style={{ borderColor: `${step.color}25` }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(${isEven ? '-90deg' : '90deg'}, ${step.color}14, transparent)` }}
                    />
                    <div
                      className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 bottom-0 w-1.5`}
                      style={{ background: `linear-gradient(to bottom, ${step.color}, ${step.color}80, ${step.color})` }}
                    />
                    <div className={`relative flex flex-col md:flex-row${isEven ? '-reverse' : ''} items-stretch`}>
                      <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                        <div className="relative z-10 flex flex-col items-center">
                          <span
                            className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                            style={{ background: `linear-gradient(180deg, ${step.color}55, ${step.color}15)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                          >
                            {step.number}
                          </span>
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                            style={{ background: step.iconBg, boxShadow: `0 8px 30px ${step.color}40` }}
                          >
                            <step.icon className="w-7 h-7" style={{ color: step.iconText }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Our Digital Marketing Services */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Our Digital Marketing <span className={styles.gradientText}>Services</span></h2>
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
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{service.description}</p>
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
                Why Choose <span className={styles.gradientText}>Altiora Infotech?</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="group relative cursor-pointer">
                  <div className="relative h-full rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.text}</p>
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={industriesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
              <h2 className={styles.sectionHeading}>Industries <span className={styles.gradientText}>We Serve</span></h2>
              <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
                Our digital marketing solutions support businesses across various industries, including:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {industries.map((industry, i) => {
                const color = pillColors[i % pillColors.length];
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full font-medium"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    {industry}
                  </span>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={industriesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto"
            >
              We tailor every strategy to the unique goals and competitive landscape of each industry.
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
              Beyond Montreal, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-halifax" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Halifax</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-kerrville" className="text-[#f4cc6f] hover:underline">Kerrville</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-vancouver" className="text-[#f4cc6f] hover:underline">Vancouver team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-surrey" className="text-[#f4cc6f] hover:underline">growing brands in Surrey</Link>.
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#F3EEFE] via-[#EAF0FF] to-[#F3EEFE]" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f4cc6f]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>
              <div className="relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Ready to Grow Your{' '}
                  <span className={styles.gradientText}>Business in Montreal?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
                  Digital success begins with the right strategy. At Altiora Infotech, we help businesses build stronger brands, attract qualified customers, and achieve measurable growth through innovative digital marketing solutions.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
                  If you&apos;re looking for a trusted Digital Marketing Company in Montreal, our team is ready to create a customized marketing strategy that supports your long-term business objectives.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s turn your digital potential into measurable business growth.
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
