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
  Palette,
  Zap,
  Megaphone,
  BarChart3,
  Building2,
  Briefcase,
  FileText,
  MapPin,
  Share2,
  Bot,
  Rocket,
  TrendingUp,
  Eye,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-company-in-victoria.module.css";

export default function VictoriaMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseCompanyRef, whyChooseCompanyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [brandingRef, brandingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [landscapeRef, landscapeInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [growthRef, growthInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseUsRef, whyChooseUsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => { setMounted(true); }, []);

  const performanceServices = [
    "Search Engine Optimization (SEO)",
    "Local SEO",
    "Google Ads Management",
    "Meta Ads Campaigns",
    "Social Media Marketing",
    "Website Design & Development",
    "Content Marketing",
    "Conversion Rate Optimization (CRO)",
    "Email Marketing",
    "AI Marketing Automation",
    "Marketing Analytics & Reporting",
  ];

  const growthProcess = [
    {
      number: "01",
      title: "Business Discovery",
      text: "We begin by understanding your goals, customers, competitors, and current digital performance.",
      icon: Eye,
      color: "#C9A227",
      gradientColors: "linear-gradient(to bottom, #C9A227, #FF9F43, #C9A227)",
      iconGradient: "linear-gradient(135deg, #C9A227, #FF9F43, #B18B1E)",
      iconTextColor: "#001A66",
    },
    {
      number: "02",
      title: "Strategic Planning",
      text: "Our specialists create a personalized marketing roadmap based on research, audience insights, and measurable business objectives.",
      icon: Target,
      color: "#3B82F6",
      gradientColors: "linear-gradient(to bottom, #3B82F6, #06B6D4, #3B82F6)",
      iconGradient: "linear-gradient(135deg, #3B82F6, #06B6D4, #2563EB)",
      iconTextColor: "#ffffff",
    },
    {
      number: "03",
      title: "Campaign Implementation",
      text: "We execute integrated SEO, Google Ads, social media marketing, website optimization, and content marketing campaigns.",
      icon: Rocket,
      color: "#10B981",
      gradientColors: "linear-gradient(to bottom, #10B981, #06B6D4, #10B981)",
      iconGradient: "linear-gradient(135deg, #10B981, #06B6D4)",
      iconTextColor: "#ffffff",
    },
    {
      number: "04",
      title: "Performance Optimization",
      text: "Using real-time analytics, we continuously improve campaign performance to maximize traffic, leads, and conversions.",
      icon: BarChart3,
      color: "#8B5CF6",
      gradientColors: "linear-gradient(to bottom, #8B5CF6, #EC4899, #8B5CF6)",
      iconGradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      iconTextColor: "#ffffff",
    },
  ];

  const coreServices = [
    { icon: Search, color: "#C9A227", title: "Search Engine Optimization (SEO)", description: "Improve your search engine rankings with technical SEO, content optimization, keyword research, and authority-building strategies." },
    { icon: MapPin, color: "#EC4899", title: "Local SEO", description: "Increase visibility in Google Maps and local search results so nearby customers can easily find your business." },
    { icon: Target, color: "#3B82F6", title: "Google Ads Management", description: "Generate qualified leads through highly targeted Pay-Per-Click campaigns designed to maximize advertising performance." },
    { icon: Share2, color: "#10B981", title: "Social Media Marketing", description: "Build stronger customer relationships and increase brand awareness through engaging content and strategic advertising." },
    { icon: Monitor, color: "#8B5CF6", title: "Website Design & Development", description: "Create modern, responsive websites that deliver exceptional user experiences while supporting SEO and lead generation." },
    { icon: FileText, color: "#C9A227", title: "Content Marketing", description: "Develop valuable content that educates customers, improves search visibility, and establishes industry authority." },
    { icon: Bot, color: "#EC4899", title: "AI Marketing & Automation", description: "Automate repetitive marketing tasks, improve customer engagement, and streamline lead nurturing using intelligent AI solutions." },
  ];

  const whyChooseUs = [
    { title: "Customized Digital Strategies", text: "Every campaign is tailored to your business objectives, audience, and competitive landscape.", icon: Palette, gradient: "from-[#C9A227] to-[#FF9F43]" },
    { title: "Data-Driven Marketing", text: "We use analytics, research, and measurable KPIs to guide every marketing decision.", icon: BarChart3, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Complete Digital Expertise", text: "Our team integrates SEO, paid advertising, website development, content marketing, automation, and analytics into one comprehensive strategy.", icon: Briefcase, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Transparent Reporting", text: "You'll receive regular performance reports with actionable recommendations and measurable insights.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "Long-Term Growth Focus", text: "We build sustainable marketing systems that continue generating value as your business expands.", icon: TrendingUp, gradient: "from-[#EC4899] to-[#C9A227]" },
  ];

  const industries = [
    "Tourism & Hospitality",
    "Healthcare",
    "Real Estate",
    "Professional Services",
    "Retail & eCommerce",
    "Education",
    "Technology Startups",
    "Financial Services",
    "Restaurants & Cafés",
    "Construction",
    "Home Services",
    "Government Contractors",
    "Non-Profit Organizations",
  ];

  const faqs = [
    { question: "What does a digital marketing company do?", answer: "A digital marketing company helps businesses increase online visibility, generate qualified leads, improve customer engagement, and grow revenue through SEO, paid advertising, website optimization, content marketing, and social media strategies." },
    { question: "Why hire a Digital Marketing Company in Victoria?", answer: "A Digital Marketing Company in Victoria understands the local business environment and customer behavior, enabling businesses to reach the right audience through personalized digital marketing campaigns that deliver measurable growth." },
    { question: "How long does SEO take?", answer: "SEO is a long-term investment. Most businesses begin seeing measurable improvements within three to six months, while highly competitive industries may require additional optimization over time." },
    { question: "Is Local SEO important?", answer: "Yes. Local SEO helps businesses appear in Google Maps and location-based searches, making it easier for nearby customers to discover and contact your business." },
    { question: "Can digital marketing help small businesses?", answer: "Absolutely. Digital marketing enables small businesses to compete with larger brands by reaching highly targeted audiences through cost-effective online strategies." },
    { question: "Do you offer website redesign services?", answer: "Yes. We design responsive, SEO-friendly websites focused on improving user experience, increasing conversions, and supporting long-term business growth." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3B4456]">
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
                  <span className={styles.gradientText}>Victoria</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-[#3B4456]/80 mb-3 sm:mb-4"
                >
                  Grow Your Business with a Trusted Digital Marketing Company in Victoria
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-[#3B4456]/65 mb-4 leading-relaxed"
                >
                  Standing out in today&apos;s competitive marketplace requires more than a website or occasional social media posts. Businesses need a strategic digital marketing partner that understands how to attract the right audience, build brand authority, and convert online visitors into loyal customers. At Altiora Infotech, we are a{' '}
                  <Link href="/" className="text-[#C9A227] hover:underline">Digital Marketing Company in Victoria</Link>
                  {' '}committed to helping businesses achieve sustainable growth through innovative, data-driven marketing solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-[#3B4456]/65 mb-4 leading-relaxed"
                >
                  Victoria is known for its thriving tourism, healthcare, real estate, education, retail, technology, and professional services sectors. As consumer behavior continues shifting toward online research and digital purchasing, businesses need a strong online presence to remain competitive. Our team delivers customized SEO, Google Ads, Meta Ads, website development, Local SEO, content marketing, AI-powered automation, and performance marketing strategies designed to help businesses grow with confidence.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="text-sm sm:text-base text-[#3B4456]/65 mb-6 sm:mb-8 leading-relaxed"
                >
                  Whether you&apos;re a startup, a local business, or an established enterprise, we create digital marketing campaigns tailored to your goals and built for long-term success.
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
                    Schedule Your Free Digital Marketing Consultation
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

        {/* Why Choose a Digital Marketing Company in Victoria? */}
        <section
          ref={whyChooseCompanyRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyChooseCompanyInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={whyChooseCompanyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-4 text-left sm:text-center">
                    Why Choose a Digital Marketing Company in Victoria?
                  </h2>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">Consumers today expect businesses to be visible online, easy to find, and credible. Before making a purchase or booking a service, they search Google, read reviews, compare websites, and engage with brands on social media.</p>
                    <p className="mb-4">Working with a Digital Marketing Company in Victoria gives your business a competitive advantage by improving search visibility, strengthening your online reputation, and generating qualified leads through targeted digital strategies.</p>
                    <p>At Altiora Infotech, we combine market research, creativity, and analytics to build customized campaigns that deliver measurable business results instead of simply increasing website traffic.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Digital Marketing Solutions Designed for Victoria Businesses */}
        <section ref={solutionsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={solutionsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-8">
              <h2 className={styles.sectionHeading}>Digital Marketing Solutions Designed for <span className={styles.gradientText}>Victoria Businesses</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={solutionsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className={styles.sectionDescription}>
              <p className="mb-4">Every business operates differently, which is why effective marketing begins with understanding your customers, industry, and objectives.</p>
              <p className="mb-4">Our team conducts comprehensive market research, competitor analysis, audience segmentation, and website audits before developing a personalized digital marketing strategy. This ensures every campaign supports your business goals while adapting to changing market conditions.</p>
              <p>Whether you want to increase local visibility, improve website conversions, generate online sales, or strengthen your brand presence, our integrated marketing solutions are built to produce sustainable growth.</p>
            </motion.div>
          </div>
        </section>

        {/* Branding & Performance Marketing That Delivers Results */}
        <section ref={brandingRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={brandingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-8">
              <h2 className={styles.sectionHeading}>Branding & Performance Marketing That <span className={styles.gradientText}>Delivers Results</span></h2>
              <p className="text-[#3B4456]/60 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                A successful digital strategy combines strong branding with measurable marketing performance. We help businesses establish credibility while attracting customers across multiple digital channels.
              </p>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={brandingInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-[#3B4456]/75 text-base font-semibold text-center mb-5">
              Our services include:
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
              {performanceServices.map((service, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={brandingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="text-sm sm:text-base px-4 py-2 rounded-full font-medium border border-[#C9A227]/25 text-[#3B4456]/85"
                  style={{ background: "rgba(244,204,111,0.06)" }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} animate={brandingInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="text-[#3B4456]/60 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Every campaign is continuously optimized using performance data to improve engagement, lead quality, and return on investment.
            </motion.p>
          </div>
        </section>

        {/* Understanding Victoria's Digital Business Landscape */}
        <section ref={landscapeRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A227]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={landscapeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-8">
              <h2 className={styles.sectionHeading}>Understanding <span className={styles.gradientText}>Victoria&apos;s Digital Business Landscape</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={landscapeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className={styles.sectionDescription}>
              <p className="mb-4">Victoria has become a growing hub for tourism, technology startups, healthcare providers, educational institutions, government organizations, and professional services. Businesses across these sectors compete for customer attention in an increasingly digital-first marketplace.</p>
              <p className="mb-4">Modern consumers rely on search engines, Google Maps, online reviews, and social media before choosing a business. Companies with strong online visibility and consistent branding earn greater trust and attract more qualified customers.</p>
              <p>Our digital marketing strategies help businesses build authority, increase online exposure, and connect with customers throughout every stage of the buying journey.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Growth Process */}
        <section ref={growthRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A227]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={growthInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className={styles.sectionHeading}>Our Growth <span className={styles.gradientText}>Process</span></h2>
            </motion.div>

            {growthProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={growthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.2 }}
                className="relative mb-6 group"
              >
                <div className="relative rounded-3xl overflow-hidden border transition-all duration-500" style={{ borderColor: `${step.color}20` }}>
                  <div className="absolute inset-0" style={{ background: `linear-gradient(${index % 2 === 0 ? '90deg' : '270deg'}, ${step.color}0D, transparent)` }} />
                  <motion.div
                    className={`absolute ${index % 2 === 0 ? 'left-0 rounded-l-3xl' : 'right-0 rounded-r-3xl'} top-0 bottom-0 w-1.5`}
                    style={{ background: step.gradientColors, backgroundSize: "100% 200%" }}
                    animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className={`relative flex flex-col md:flex-row${index % 2 !== 0 ? '-reverse' : ''} items-stretch`}>
                    <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                      <div className="relative z-10 flex flex-col items-center">
                        <motion.span
                          className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                          style={{ background: `linear-gradient(180deg, ${step.color}4D, ${step.color}26, ${step.color}0D)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index }}
                        >
                          {step.number}
                        </motion.span>
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                          style={{ background: step.iconGradient, boxShadow: `0 8px 30px ${step.color}59` }}
                          whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -5 : 5 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <step.icon className="w-7 h-7" style={{ color: step.iconTextColor }} />
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-[#3B4456]/55 text-sm sm:text-base leading-relaxed">{step.text}</p>
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
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A227]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-10">
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
                  <p className="text-[#3B4456]/65 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Altiora Infotech? */}
        <section ref={whyChooseUsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={whyChooseUsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Why Choose <span className={styles.gradientText}>Altiora Infotech?</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={whyChooseUsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="group relative cursor-pointer">
                  <div className="relative h-full rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#C9A227] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-[#3B4456]/80 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.text}</p>
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
        <section ref={industriesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={industriesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-8">
              <h2 className={styles.sectionHeading}>Industries <span className={styles.gradientText}>We Serve</span></h2>
              <p className="text-[#3B4456]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                We create customized marketing strategies for businesses across a variety of industries, including:
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-center gap-2 text-sm sm:text-base px-4 py-2 rounded-full font-medium border border-[#C9A227]/25 text-[#3B4456]/85"
                  style={{ background: "rgba(244,204,111,0.06)" }}
                >
                  <Briefcase className="w-4 h-4 text-[#C9A227]" />
                  {industry}
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} animate={industriesInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="text-[#3B4456]/60 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Every campaign is tailored to the unique challenges and opportunities within your industry.
            </motion.p>
          </div>
        </section>


        {/* Other Locations We Serve */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-4">
              Serving Businesses Across Canada
            </h2>
            <p className="text-[#3B4456]/70 text-sm sm:text-base leading-relaxed">
              Beyond Victoria, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-Calgary" className="text-[#C9A227] hover:underline">Digital Marketing Company in Calgary</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-edmonton" className="text-[#C9A227] hover:underline">Edmonton</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-winnipeg" className="text-[#C9A227] hover:underline">Winnipeg team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-toronto" className="text-[#C9A227] hover:underline">growing brands in Toronto</Link>.
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
                      <p className="faq-answer text-[#3B4456]/70 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
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
                  <span className={styles.gradientText}>Business in Victoria?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
                  The right digital marketing strategy can help your business attract more customers, strengthen brand visibility, and achieve sustainable growth. At Altiora Infotech, we combine innovation, creativity, and data-driven decision-making to deliver marketing solutions that produce measurable business results.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
                  If you&apos;re searching for a reliable Digital Marketing Company in Victoria, our experts are ready to create a customized strategy that supports your business goals and drives long-term success.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s transform your online presence into a powerful growth engine.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.8 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40">
                    Get Your Free Strategy Session
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
