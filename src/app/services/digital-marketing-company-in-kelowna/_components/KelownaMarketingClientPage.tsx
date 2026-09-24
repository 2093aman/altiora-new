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
  Smartphone,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../digital-marketing-company-in-kelowna.module.css";

export default function KelownaMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [lookGreatRef, lookGreatInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [growRef, growInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [competitionRef, competitionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const services = [
    { icon: Search, title: "SEO Services", description: "Improve rankings and increase organic traffic through proven search engine optimization strategies.", color: "#f4cc6f" },
    { icon: Target, title: "Paid Advertising (PPC)", description: "Generate immediate visibility and qualified leads through Google Ads and paid social campaigns.", color: "#EC4899" },
    { icon: Share2, title: "Social Media Marketing", description: "Build awareness, engage audiences, and strengthen your online presence.", color: "#3B82F6" },
    { icon: Monitor, title: "Website Development", description: "Create fast, modern, and conversion-focused websites designed to support business growth.", color: "#10B981" },
    { icon: Smartphone, title: "Mobile App Development", description: "Develop scalable mobile applications that improve customer experiences and business efficiency.", color: "#8B5CF6" },
    { icon: Palette, title: "Graphic Design", description: "Build a memorable brand identity through professional visual design solutions.", color: "#f4cc6f" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700">
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section ref={heroRef} className="py-8 px-4 pt-24 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-[#f4cc6f] rounded-full opacity-20 animate-pulse"
                style={{ left: `${(i * 17 + 5) % 100}%`, top: `${(i * 13 + 7) % 100}%`, animationDelay: `${(i * 0.3) % 3}s`, animationDuration: `${2 + (i % 3) * 0.7}s` }} />
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
                  <span className={styles.gradientText}>Kelowna</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-600/80 mb-3 sm:mb-4"
                >
                  Grow Your Business with a Trusted Digital Marketing Company in Kelowna
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 }}
                  className="text-sm sm:text-base text-slate-600/65 mb-3 leading-relaxed"
                >
                  Looking for a reliable{' '}
                  <Link href="https://altiorainfotech.ca/" className="text-[#f4cc6f] hover:underline underline-offset-4">Digital Marketing Company in Kelowna</Link>
                  {' '}that can help your business generate more leads, improve online visibility, and drive measurable growth? At Altiora Infotech, we help businesses across Kelowna achieve sustainable success through strategic SEO, paid advertising, social media marketing, website development, and data-driven digital marketing solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-sm sm:text-base text-slate-600/65 mb-6 sm:mb-8 leading-relaxed"
                >
                  As a results-focused Digital Marketing Company in Kelowna, our goal is to help businesses attract qualified customers, strengthen their online presence, and maximize their return on investment through customized marketing strategies designed for long-term growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                    Get Free Strategy Session
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black/20 text-slate-900 text-sm sm:text-base font-semibold hover:bg-black/[0.08] hover:border-black/40 transition-all duration-300">
                    Talk To Marketing Expert
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
                      <motion.div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl"
                        style={{ background: "radial-gradient(circle, #f4cc6f, #EC4899, #3B82F6, transparent)" }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
                      <motion.div className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full"
                        style={{ background: "conic-gradient(from 0deg, #f4cc6f, #EC4899, #8B5CF6, #3B82F6, #10B981, #f4cc6f)", padding: "2px", WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))", mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))" }}
                        animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                      <motion.div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
                        style={{ background: "conic-gradient(from 180deg, #3B82F6, #8B5CF6, #EC4899, #f4cc6f, #10B981, #3B82F6)", padding: "2px", WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))", mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))" }}
                        animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
                      <motion.div className="absolute w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(244,204,111,0.15), rgba(139,92,246,0.1), transparent)" }}
                        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                      <div className="relative z-10 flex items-center justify-center">
                        <motion.div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{ background: "linear-gradient(135deg, #f4cc6f, #EC4899, #8B5CF6)", boxShadow: "0 20px 60px rgba(244,204,111,0.3), 0 0 40px rgba(236,72,153,0.2), 0 0 60px rgba(139,92,246,0.15)" }}
                          animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                          <Globe className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.div key={`dot-${i}`} className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{ background: (['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'] as string[])[i], boxShadow: `0 0 12px ${(['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'] as string[])[i]}80`, top: `${15 + Math.sin(i * 1.05) * 35}%`, left: `${50 + Math.cos(i * 1.05) * 40}%` }}
                          animate={{ y: [0, -10 - i * 2, 0], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} />
                      ))}
                      {[
                        { Icon: Megaphone, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Search, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Globe, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: BarChart3, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
                        { Icon: Zap, color: "#f4cc6f", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
                      ].map((item, i) => (
                        <motion.div key={`icon-${i}`} className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                          style={{ top: item.top, left: item.left, background: item.bg, border: `1px solid ${item.color}30`, boxShadow: `0 4px 20px ${item.color}20` }}
                          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}>
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
              className="rounded-3xl border border-[#f4cc6f]/20 bg-black/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#f4cc6f] shadow-[0_0_12px_#f4cc6f]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#f4cc6f]/90 font-semibold">Quick Answer</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                What does a Digital Marketing Company in Kelowna actually do?
              </h2>
              <p className="text-slate-600/85 text-base sm:text-lg leading-relaxed mb-6">
                A Digital Marketing Company helps businesses connect with potential customers online through strategic marketing channels including search engines, social media platforms, paid advertising, and optimized websites. The goal is simple: generate more visibility, attract qualified leads, and convert opportunities into measurable business growth.
              </p>
              <p className="text-slate-600/75 text-sm sm:text-base font-semibold mb-3">How Digital Marketing Helps Businesses Grow:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Increase Online Visibility",
                  "Generate Qualified Leads",
                  "Improve Website Conversions",
                  "Strengthen Brand Authority",
                  "Reach Local Kelowna Customers",
                  "Create Sustainable Growth",
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
        <section ref={introRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={introInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#f4cc6f]/50 to-transparent" />
                <span className={styles.overviewTitle}>Overview</span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
              </div>
              <div className="flex flex-col items-center">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={introInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">Strategic Digital Marketing Built for Kelowna Businesses</h3>
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    Kelowna has become one of British Columbia&apos;s fastest-growing business communities. With thriving industries including tourism, hospitality, real estate, healthcare, construction, professional services, retail, and technology, competition continues to increase across the region.
                    <br /><br />
                    Today&apos;s customers rely heavily on Google searches, social media platforms, online reviews, and websites before making purchasing decisions. Businesses that maintain a strong online presence are significantly more likely to attract qualified leads and generate new opportunities.
                    <br /><br />
                    At Altiora Infotech, we help Kelowna businesses establish stronger visibility online through customized digital marketing strategies focused on measurable outcomes. Every campaign is designed around your business objectives, target audience, and long-term growth goals.
                    <br /><br />
                    Whether you serve Downtown Kelowna, Glenmore, Rutland, Mission, West Kelowna, or surrounding communities, our team develops marketing solutions that help your business stand out in a competitive marketplace.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Branding & Marketing Support */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Branding &amp; Marketing <span className={styles.gradientText}>Support</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Your Marketing Partner for Sustainable Growth</h3>
                <p className="text-slate-600/75 text-base sm:text-lg leading-relaxed">
                  Managing digital marketing internally can be time-consuming and challenging. Search algorithms change regularly, customer expectations evolve, and competition continues to increase.
                </p>
                <p className="text-slate-600/75 text-base sm:text-lg leading-relaxed">
                  Our team provides complete digital marketing support, allowing business owners and organizations to focus on operations while we focus on growth.
                </p>
                <p className="text-slate-600/75 text-base font-semibold">What You Get:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { text: "Dedicated Marketing Experts", color: "#f4cc6f" },
                    { text: "Strategic Growth Planning", color: "#EC4899" },
                    { text: "Transparent Reporting", color: "#3B82F6" },
                    { text: "Performance Tracking", color: "#10B981" },
                    { text: "Continuous Optimization", color: "#8B5CF6" },
                    { text: "Long-Term Partnership", color: "#f4cc6f" },
                  ].map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: item.color }} />
                      <span className="text-slate-600/80 text-sm sm:text-base font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
                <div className="relative p-8 sm:p-10 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/10 via-[#EC4899]/5 to-[#8B5CF6]/10 rounded-3xl" />
                  <div className="absolute inset-[1px] rounded-3xl bg-white/95 backdrop-blur-xl" />
                  <motion.div className="absolute inset-0 rounded-3xl"
                    style={{ background: "conic-gradient(from 0deg, #f4cc6f, #EC4899, #8B5CF6, #3B82F6, #f4cc6f)", padding: "3px", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
                    animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                  <div className="absolute -inset-4 bg-[#f4cc6f]/5 blur-[40px] rounded-full pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <motion.div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                      style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.2), rgba(236,72,153,0.15))", border: "1px solid rgba(244,204,111,0.3)", boxShadow: "0 10px 40px rgba(244,204,111,0.15)" }}
                      animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                      <Clock className="w-10 h-10 text-[#f4cc6f]" />
                      <motion.div className="absolute inset-0 rounded-2xl border border-[#f4cc6f]/30" animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Win Your Time <span className={styles.gradientText}>Back</span></h3>
                    <p className="text-slate-600/65 text-base sm:text-lg max-w-sm mx-auto leading-relaxed mb-8">Let our experts handle your digital marketing while you focus on running and growing your Kelowna business.</p>
                    <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40">
                      Get Started Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Market Reality */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#3B82F6]/6 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} className="text-center mb-10">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Market Reality in <span className={styles.gradientText}>Kelowna</span>
              </h2>
              <p className="text-slate-600/60 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
                Consumer behavior has changed dramatically over the last decade. Before contacting a business, customers often search online, compare competitors, read reviews, and evaluate credibility. Businesses that consistently appear in search results, maintain active social media profiles, and provide strong digital experiences are more likely to attract customers and generate revenue.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl mx-auto rounded-3xl border border-[#f4cc6f]/15 bg-black/[0.03] backdrop-blur-sm p-8 sm:p-10">
              <p className="text-slate-600/80 text-sm sm:text-base font-semibold mb-5">Why Digital Marketing Matters:</p>
              <ul className="space-y-4">
                {[
                  { text: "Customers search online before making decisions", color: "#f4cc6f", icon: Search },
                  { text: "Local searches generate high-intent leads", color: "#EC4899", icon: Target },
                  { text: "Mobile traffic continues to increase", color: "#3B82F6", icon: Monitor },
                  { text: "Strong digital visibility improves trust", color: "#10B981", icon: Eye },
                  { text: "Consistent marketing creates long-term advantages", color: "#8B5CF6", icon: BarChart3 },
                ].map((item, index) => (
                  <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-black/[0.06] bg-black/[0.02] hover:bg-black/[0.05] transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="text-slate-600/80 text-sm sm:text-base font-medium group-hover:text-slate-900 transition-colors">{item.text}</span>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Growth Formula - 4 Steps */}
        <section ref={lookGreatRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#f4cc6f]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={lookGreatInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className={styles.sectionHeading}>Growth <span className={styles.gradientText}>Formula</span></h2>
            </motion.div>

            {/* Step 01 */}
            <motion.div initial={{ opacity: 0, x: -60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#f4cc6f]/15 hover:border-[#f4cc6f]/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4cc6f]/[0.08] via-[#FF9F43]/[0.04] to-transparent" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #f4cc6f, #FF9F43, #f4cc6f)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#f4cc6f]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(244,204,111,0.3), rgba(255,159,67,0.15), rgba(244,204,111,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }}>01</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #e6b85c)", boxShadow: "0 8px 30px rgba(244,204,111,0.35)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><Palette className="w-7 h-7 text-[#010b22]" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Position Your <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #f4cc6f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Brand</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Build awareness and establish credibility where your customers spend time online.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #f4cc6f, #3B82F6)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.6 }} /></div>
            </motion.div>

            {/* Step 02 */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#3B82F6]/15 hover:border-[#3B82F6]/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-l from-[#3B82F6]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <motion.div className="absolute right-0 top-0 bottom-0 w-1.5 rounded-r-3xl" style={{ background: "linear-gradient(to bottom, #3B82F6, #06B6D4, #3B82F6)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3B82F6]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row-reverse items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#3B82F6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.3), rgba(6,182,212,0.15), rgba(59,130,246,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>02</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #2563EB)", boxShadow: "0 8px 30px rgba(59,130,246,0.35)" }} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 200 }}><Eye className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Build Your Digital <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Presence</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Create a strong foundation through website optimization, local visibility, and strategic content.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #3B82F6, #10B981)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.9 }} /></div>
            </motion.div>

            {/* Step 03 */}
            <motion.div initial={{ opacity: 0, x: -60 }} animate={lookGreatInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="relative mb-6 group">
              <div className="relative rounded-3xl overflow-hidden border border-[#10B981]/15 hover:border-[#10B981]/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #10B981, #06B6D4, #10B981)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#10B981]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(16,185,129,0.3), rgba(6,182,212,0.15), rgba(16,185,129,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }}>03</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #10B981, #06B6D4)", boxShadow: "0 8px 30px rgba(16,185,129,0.35)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><Target className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Generate <span style={{ color: "#10B981" }}>Results</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Use SEO, PPC, and social media marketing to attract customers actively searching for your services.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center py-2"><motion.div className="w-[2px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #10B981, #8B5CF6)" }} initial={{ scaleY: 0, opacity: 0 }} animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 1.1 }} /></div>
            </motion.div>

            {/* Step 04 */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={lookGreatInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.7 }} className="relative group">
              <div className="relative rounded-3xl overflow-hidden border border-[#8B5CF6]/15 hover:border-[#8B5CF6]/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.08] via-[#7C3AED]/[0.04] to-[#EC4899]/[0.03]" />
                <motion.div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #8B5CF6, #EC4899, #8B5CF6)", backgroundSize: "100% 200%" }} animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#8B5CF6]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-stretch">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span className="text-[5rem] md:text-[6rem] font-black leading-none select-none" style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.3), rgba(236,72,153,0.08))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 3 }}>04</motion.span>
                      <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10" style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)", boxShadow: "0 8px 30px rgba(139,92,246,0.35)" }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}><BarChart3 className="w-7 h-7 text-white" /></motion.div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Scale <span className="text-[#8B5CF6]">Consistently</span></h3>
                    <p className="text-slate-600/55 text-sm sm:text-base leading-relaxed">Leverage performance data and optimization strategies to support sustainable business growth.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Grow Faster */}
        <section ref={growRef} className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f4cc6f]/6 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8B5CF6]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(244,204,111,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.4) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className={`${styles.sectionHeading} mb-4`}>Grow Faster With a <span className={styles.gradientText}>Structured Strategy</span></h2>
            </motion.div>
            <div className="relative max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={growInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
                <div className="relative rounded-[2rem] overflow-hidden border border-black/[0.08]" style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.04), rgba(236,72,153,0.02), rgba(59,130,246,0.04))" }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div className="h-full w-1/3" style={{ background: "linear-gradient(90deg, transparent, #f4cc6f, #EC4899, transparent)" }} animate={{ x: ["-100%", "400%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  </div>
                  <div className="relative z-10 p-8 sm:p-12 md:p-16">
                    <motion.div initial={{ opacity: 0 }} animate={growInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mb-10">
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#f4cc6f]/20 text-[#f4cc6f]/80" style={{ background: "rgba(244,204,111,0.06)" }}>Our Approach</span>
                    </motion.div>
                    <div className="relative">
                      <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-[1px]">
                        <motion.div className="h-full w-full" style={{ background: "linear-gradient(90deg, #f4cc6f40, #EC489940, #3B82F640)" }} initial={{ scaleX: 0 }} animate={growInView ? { scaleX: 1 } : {}} transition={{ duration: 1.2, delay: 0.8 }} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                        {[
                          { text: "Search Visibility", icon: Search, color: "#f4cc6f", number: "01", description: "Appear in front of customers actively searching for your products and services." },
                          { text: "Conversion-Focused Websites", icon: Monitor, color: "#EC4899", number: "02", description: "Transform website visitors into qualified leads through strategic design and user experience." },
                          { text: "Continuous Optimization", icon: BarChart3, color: "#3B82F6", number: "03", description: "Monitor performance, refine campaigns, and maximize marketing effectiveness." },
                        ].map((item, index) => (
                          <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }} className="text-center group">
                            <div className="relative inline-flex mb-5">
                              <motion.div className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center relative z-10" style={{ background: `linear-gradient(135deg, ${item.color}25, ${item.color}08)`, border: `2px solid ${item.color}35`, boxShadow: `0 0 30px ${item.color}15` }} whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 200 }}>
                                <item.icon className="w-7 h-7" style={{ color: item.color }} />
                              </motion.div>
                              <motion.div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${item.color}` }} animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }} />
                              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20" style={{ background: item.color, color: "#010b22" }}>{item.number}</div>
                            </div>
                            <h4 className="text-slate-900 font-bold text-lg mb-2">{item.text}</h4>
                            <p className="text-slate-600/50 text-sm leading-relaxed max-w-[200px] mx-auto">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={growInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 1.2 }} className="mt-14 pt-10 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
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
                        Start Growing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Services We <span className={styles.gradientText}>Provide</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }} transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }} className="group">
                  <div className="relative flex items-start gap-4 rounded-xl p-5 transition-all duration-500 hover:translate-x-2 border border-transparent hover:border-black/[0.06]">
                    <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-all duration-500" style={{ background: service.color }} />
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 group-hover:scale-110" style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}>
                      <service.icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-slate-600/95 transition-colors">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600/50 leading-relaxed group-hover:text-slate-600/65 transition-colors">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section ref={whyChooseRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-8">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>Why Choose <span className={styles.gradientText}>Altiora Infotech?</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Customized", subtitle: "Marketing Strategies", text: "Every business receives a tailored growth plan based on its goals and market position.", icon: Target, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
                { title: "Full-Service", subtitle: "Expertise", text: "Access SEO, PPC, social media marketing, website development, and branding services under one trusted partner.", icon: Briefcase, gradient: "from-[#3B82F6] to-[#06B6D4]" },
                { title: "Data-Driven", subtitle: "Decisions", text: "Marketing strategies guided by analytics, performance data, and measurable outcomes.", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
                { title: "Transparent", subtitle: "Communication", text: "Regular reporting and clear insights into campaign performance.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
                { title: "Scalable", subtitle: "Growth Solutions", text: "Marketing systems designed to evolve alongside your business.", icon: Zap, gradient: "from-[#EC4899] to-[#f4cc6f]" },
                { title: "Experienced", subtitle: "Team", text: "Professionals committed to delivering measurable results and long-term value.", icon: Globe, gradient: "from-[#f4cc6f] to-[#10B981]" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={whyChooseInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                          <span className="text-sm text-slate-600/60">{item.subtitle}</span>
                        </div>
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

        {/* Industries */}
        <section ref={competitionRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-[#EAF0FB] to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={competitionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className={styles.sectionHeading}>Industries We Commonly <span className={styles.gradientText}>Support</span></h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {[
                { text: "Real Estate", icon: Building2, color: "#f4cc6f" },
                { text: "Healthcare", icon: Briefcase, color: "#EC4899" },
                { text: "Construction", icon: PenTool, color: "#3B82F6" },
                { text: "Restaurants", icon: Megaphone, color: "#10B981" },
                { text: "Tourism & Hospitality", icon: Globe, color: "#8B5CF6" },
                { text: "Immigration Consultants", icon: Target, color: "#f4cc6f" },
                { text: "Educational Institutions", icon: Eye, color: "#EC4899" },
                { text: "Professional Services", icon: Briefcase, color: "#3B82F6" },
                { text: "E-Commerce", icon: BarChart3, color: "#10B981" },
                { text: "Home Services", icon: Zap, color: "#8B5CF6" },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 25 }} animate={competitionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }} className="group w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)]">
                  <div className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:translate-y-[-6px] p-5 text-center" style={{ borderColor: `${item.color}15`, background: `linear-gradient(160deg, ${item.color}06, transparent 60%)` }}>
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 35px ${item.color}10, inset 0 0 35px ${item.color}05`, border: `1px solid ${item.color}30` }} />
                    <div className="relative z-10">
                      <motion.div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }} whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </motion.div>
                      <p className="text-slate-600/80 text-xs sm:text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Communities */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#EC4899]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#3B82F6]/6 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Kelowna Communities <span className={styles.gradientText}>We Serve</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {["Downtown Kelowna", "Rutland", "Glenmore", "Upper Mission", "Lower Mission", "West Kelowna", "Lake Country", "Peachland", "Black Mountain", "University District"].map((area, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-center text-sm sm:text-base text-slate-600/80 hover:border-[#f4cc6f]/40 hover:bg-black/[0.06] transition-all duration-300">
                  {area}
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-slate-600/70 text-base sm:text-lg leading-relaxed text-center mt-10 max-w-3xl mx-auto">
              We combine high-intent{' '}
              <Link href="/services/seo" className="text-[#f4cc6f] underline-offset-4 hover:underline">Kelowna SEO services</Link>
              {' '}with measurable{' '}
              <Link href="/services/paid-advertisement-services" className="text-[#f4cc6f] underline-offset-4 hover:underline">paid advertising campaigns</Link>
              {' '}so your brand earns visibility instead of renting it.
            </motion.p>
          </div>
        </section>


        {/* Other Locations We Serve */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Serving Businesses Across Canada
            </h2>
            <p className="text-slate-600/70 text-sm sm:text-base leading-relaxed">
              Beyond Kelowna, we also operate as a{' '}
              <Link href="/services/digital-marketing-company-in-whistler" className="text-[#f4cc6f] hover:underline">Digital Marketing Company in Whistler</Link>{' '}
              and support businesses in{' '}
              <Link href="/services/digital-marketing-company-in-victoria" className="text-[#f4cc6f] hover:underline">Victoria</Link>.{' '}
              Our{' '}
              <Link href="/services/digital-marketing-company-in-Calgary" className="text-[#f4cc6f] hover:underline">Calgary team</Link>{' '}
              brings the same data-driven approach to{' '}
              <Link href="/services/digital-marketing-company-in-edmonton" className="text-[#f4cc6f] hover:underline">growing brands in Edmonton</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section ref={faqRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className={styles.sectionHeading}><span className={styles.gradientText}>FAQ</span></h2>
            </motion.div>
            <div className="space-y-4">
              {[
                { question: "What does a Digital Marketing Company in Kelowna do?", answer: "A Digital Marketing Company helps businesses improve online visibility, generate qualified leads, and grow revenue through SEO, paid advertising, social media marketing, website development, and content marketing." },
                { question: "Which is the best digital marketing company in Kelowna?", answer: "The best digital marketing company is one that understands your goals, provides transparent reporting, and delivers measurable results through customized strategies." },
                { question: "Is hiring a Digital Marketing Company worth it?", answer: "Yes. Businesses gain access to specialized expertise, advanced marketing tools, and proven strategies that help maximize growth opportunities." },
                { question: "How much does digital marketing cost in Kelowna?", answer: "Costs vary depending on your business goals, industry competition, and required services. Most businesses benefit from a customized marketing strategy." },
                { question: "What is the difference between SEO and PPC?", answer: "SEO improves organic visibility over time, while PPC uses paid advertising to generate immediate traffic and leads." },
                { question: "How long does SEO take to show results?", answer: "SEO generally requires several months to build authority and deliver sustainable rankings." },
                { question: "Can digital marketing help local businesses?", answer: "Absolutely. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing help businesses attract nearby customers." },
                { question: "Why is local SEO important?", answer: "Local SEO helps businesses appear in location-based searches, Google Maps results, and local listings, making it easier for nearby customers to find and contact them." },
              ].map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.07 }}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:bg-black/[0.05] hover:border-black/20">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{faq.question}</h3>
                      <svg className={`w-5 h-5 text-[#f4cc6f] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-56 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
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
                  Ready to Grow Your Business in <span className={styles.gradientText}>Kelowna?</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-3 max-w-2xl mx-auto leading-relaxed">
                  Partner with Altiora Infotech and discover how strategic digital marketing can help your business generate more leads, increase visibility, and achieve sustainable growth.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-sm sm:text-base text-white/65 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Whether you&apos;re looking to improve search rankings, attract more qualified customers, strengthen your brand, or increase revenue, our team is ready to help.
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
