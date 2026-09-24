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
import styles from "../digital-marketing-company-in-markham.module.css";

export default function MarkhamMarketingClientPage() {
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
    { question: "How quickly can a digital marketing strategy deliver results?", answer: "Paid advertising campaigns on search and social channels can begin driving qualified visitors and leads within days of launch. Organic search optimization and content strategies typically require 3 to 6 months to build strong momentum, but they deliver long-term, compounding returns that lower your reliance on paid media over time." },
    { question: "Why partner with an agency instead of managing marketing in-house?", answer: "Building a full in-house team requires hiring dedicated specialists across search strategy, media buying, copy design, technical web development, and data analysis. Working with an experienced agency gives you immediate access to a full team of senior practitioners at a lower overall operational cost." },
    { question: "How do you measure and report campaign success?", answer: "We set clear performance indicators with you before launch. While we monitor standard traffic and engagement metrics internally, our primary focus remains on key business results: cost per acquisition, pipeline growth, total qualified leads, and overall campaign return on investment." },
  ];

  const services = [
    {
      icon: Search, color: "#f4cc6f",
      title: "1. Intent-Driven Search Engine Optimization (SEO)",
      description: "Getting your business on the front page of search engines requires more than keyword placements. Modern search engines evaluate technical performance, content depth, user engagement, and contextual authority. Our SEO strategy ensures your business connects with high-intent decision-makers at the exact moment they search for your solutions:",
      items: [
        { label: "Local SEO & Google Business Profile Management", text: "We optimize your local profiles so your company captures high-converting regional searches across Markham, Richmond Hill, and York Region." },
        { label: "Technical SEO Audits", text: "We resolve structural issues, improve mobile load speeds, correct site architecture, and ensure search engines crawl and index your site without friction." },
        { label: "On-Page & Intent-Matched Content", text: "We create clear, authoritative content mapped to what your potential clients actively search for during their buying journey." },
        { label: "High-Quality Link Building", text: "We establish domain authority through legitimate citations, industry partnerships, and relevant backlink profiles." },
      ],
    },
    {
      icon: Target, color: "#EC4899",
      title: "2. High-Performance Paid Media & Advertising",
      description: "Paid channels across Google Ads, Meta (Facebook & Instagram), and LinkedIn deliver immediate reach, but without continuous performance tuning, budget can easily be wasted. We run paid media campaigns focused on measurable metrics like Return on Ad Spend (ROAS) and Cost Per Acquisition (CPA):",
      items: [
        { label: "Google Search & Shopping Ads", text: "Capture active demand by placing your products and services directly in front of buyers searching with clear intent." },
        { label: "Targeted Social Media Campaigns", text: "Reach tailored professional and consumer demographics across Markham and the surrounding GTA using precise audience criteria." },
        { label: "Smart Retargeting Funnels", text: "Re-engage past site visitors who showed interest but didn't convert, bringing them back to complete their inquiry." },
        { label: "Creative Testing & Conversion Optimization", text: "We systematically test ad variations, visual creative, and landing page layouts to lower acquisition costs over time." },
      ],
    },
    {
      icon: BarChart3, color: "#3B82F6",
      title: "3. Conversion Rate Optimization (CRO)",
      description: "Driving traffic to your website is only the first step. If your conversion rate sits at 1% when proper design and structure could bring it to 3% or 4%, every ad dollar is working harder than it needs to. Our CRO process transforms your website into an active lead engine:",
      items: [
        { label: "User Behavior & Funnel Analysis", text: "We review user pathways, click patterns, and drop-off points to identify friction in your sales process." },
        { label: "Landing Page Architecture", text: "We build clear layouts and persuasive messaging designed to guide visitors naturally toward taking action." },
        { label: "Friction Elimination", text: "We streamline forms, improve mobile usability, and simplify navigation so prospective clients can connect effortlessly." },
      ],
    },
    {
      icon: Palette, color: "#8B5CF6",
      title: "4. Brand Positioning & Digital Identity",
      description: "Trust is established long before a sales call takes place. In a competitive region like Markham, standing out requires clear value messaging and a professional, cohesive digital presentation. We help brands define who they are and communicate their value effectively:",
      items: [
        { label: "Brand Strategy & Value Proposition", text: "We refine your key messaging to highlight what sets your business apart from regional competitors." },
        { label: "UI/UX & Web Development", text: "We build fast, mobile-friendly websites that combine clean design with clear user pathways." },
        { label: "Visual & Content Assets", text: "From promotional media to social visual assets, we ensure your brand looks polished across every digital touchpoint." },
      ],
    },
  ];

  const industries = [
    { sector: "Technology & B2B Enterprises", focus: "Multi-channel lead generation, search visibility, funnel design", outcome: "Consistent pipeline build and reduced acquisition costs", color: "#f4cc6f" },
    { sector: "Professional & Legal Services", focus: "Local SEO, targeted search ads, brand positioning", outcome: "Qualified client inquiries and local domain authority", color: "#3B82F6" },
    { sector: "E-Commerce & Commercial Retail", focus: "Shopping campaigns, retargeting, conversion optimization", outcome: "Scalable sales velocity and improved customer lifetime value", color: "#10B981" },
    { sector: "Home & Commercial Services", focus: "High-intent local search, Google Business optimization", outcome: "Higher call-to-lead conversion rates across service areas", color: "#8B5CF6" },
  ];

  const workingWith = [
    { title: "Clear, Direct Communication", text: "No complex jargon or bloated monthly reports created to obscure performance. We provide clear, accessible dashboards highlighting metrics that matter: cost per lead, organic growth, conversion rates, and total return on ad spend.", icon: Monitor, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
    { title: "Built-for-You Roadmaps", text: "We don't sell rigid, cookie-cutter packages that treat every business the same. Every engagement begins with your specific business model, margin structure, and growth targets.", icon: FileText, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Focus on Sustainable Success", text: "Spikes in short-term traffic are simple to buy, but long-term profitability requires building real digital equity. We combine immediate performance marketing with long-term organic assets so your brand gains strength month after month.", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
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
                  <span className={styles.gradientText}>Markham</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-700 mb-3 sm:mb-4"
                >
                  Grow Faster with a Trusted Digital Marketing Company in Markham
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed"
                >
                  Success in today&apos;s competitive business environment depends on more than offering exceptional products or services. Businesses need a strong digital presence that attracts potential customers, builds trust, and converts traffic into measurable business growth. At Altiora Infotech, we are a{' '}
                  <Link href="/" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Markham</Link>
                  {' '}dedicated to helping businesses increase online visibility, generate qualified leads, and maximize return on investment through customized digital marketing solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed"
                >
                  Markham is one of Canada&apos;s leading business and technology hubs, home to innovative startups, multinational corporations, professional service firms, healthcare providers, manufacturers, and retail businesses. With customers increasingly relying on search engines and digital platforms to discover products and services, businesses need a comprehensive marketing strategy to remain competitive. Our team delivers SEO, Google Ads, Meta Ads, Local SEO, website development, content marketing, AI-powered automation, and conversion optimization strategies that drive measurable results.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed"
                >
                  Whether you&apos;re looking to strengthen your local presence or expand your business across Ontario and Canada, we create customized marketing campaigns designed for sustainable growth.
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
                    Book Your Free Digital Marketing Consultation
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

        {/* Overview: Why Marketing in Markham Demands a Unique Approach */}
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
                    Why Marketing in Markham Demands a Unique Approach
                  </h3>
                  <div className={`${styles.sectionDescription} !max-w-none relative z-10 !text-left sm:!text-center`}>
                    <p className="mb-4">Markham is one of Canada&apos;s dynamic business centers. Home to major technology headquarters, a booming multicultural entrepreneurship scene, and a diverse range of professional, commercial, and retail enterprises, its market dynamics differ significantly from neighboring GTA hubs.</p>
                    <p className="mb-4">Marketing here requires more than standard, blanket approaches designed for generic audiences. Consumer choices in Markham are driven by high standards of quality, direct value, and established community reputation.</p>
                    <p>Whether your target clients are corporate B2B firms in the tech cluster along Highway 404, retail and hospitality brands in Historic Unionville, professional practices near Downtown Markham, or commercial service providers covering York Region, your digital strategy must feel relevant to the region while remaining scalable across national markets.</p>
                  </div>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Core Digital Services Engineered for Sustainable Growth */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-10">
              <h2 className={styles.sectionHeading}>Core Digital Services Engineered for <span className={styles.gradientText}>Sustainable Growth</span></h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Real momentum isn&apos;t built through disconnected, ad-hoc campaigns. Lasting results happen when search optimization, targeted ads, web design, and conversion strategies work together. Here is how we build and refine your online presence.
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

        {/* Supporting Key Sectors Across Markham and York Region */}
        <section
          ref={industriesRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={industriesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Supporting Key Sectors Across <span className={styles.gradientText}>Markham and York Region</span></h2>
              <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                While core digital principles remain constant, different industries require distinct execution approaches. We adapt our strategies to match the specific purchasing habits and timelines of various sectors:
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
                      <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: industry.color }}>Primary Focus</p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{industry.focus}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: industry.color }}>Key Result Delivered</p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{industry.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Partnering With Altiora Infotech Looks Like */}
        <section ref={workingRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={workingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                What Partnering With <span className={styles.gradientText}>Altiora Infotech</span> Looks Like
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Working with us means gaining a focused team that operates as an extension of your business, committed to your growth objectives.
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


        {/* Other Locations We Serve */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Serving Businesses Across Canada
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Beyond Markham, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-oakville" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Oakville</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-hamilton" className="text-[#f4cc6f] hover:underline">Hamilton</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-ottawa" className="text-[#f4cc6f] hover:underline">Ottawa team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-montreal" className="text-[#f4cc6f] hover:underline">growing brands in Montreal</Link>.
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
                  Ready to Accelerate Your{' '}
                  <span className={styles.gradientText}>Digital Growth in Markham?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  If you are looking for a marketing approach that moves past generic tactics and focuses on measurable revenue growth, let&apos;s connect. We can evaluate your current digital performance, discuss your goals, and map out a practical path forward.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }}>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                    Reach Out To Altiora Infotech Today
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
