'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  Database,
  TrendingUp,
  Headphones,
  Share2,
  RefreshCw,
  Building2,
  Megaphone,
  Truck,
  Layers,
  Settings,
  Workflow,
  Server,
  ShieldCheck,
  Link2,
  HeartHandshake,
  Search,
  PenTool,
  Code,
  GraduationCap,
  Home,
  HeartPulse,
  Banknote,
  Umbrella,
  Factory,
  HardHat,
  Store,
  ShoppingCart,
  Scale,
  Hotel,
  Landmark,
  Cloud,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../custom-crm-development.module.css";

const PALETTE = ["#C9A227", "#EC4899", "#3B82F6", "#10B981", "#8B5CF6"];

export default function CrmDevelopmentClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "CRM Strategy & Consulting",
      description: "Every successful CRM project begins with understanding your business. We analyze your current processes, identify operational challenges, and design a CRM solution that aligns with your goals.",
      lead: "Our consulting services include:",
      items: ["Business process analysis", "CRM planning and strategy", "Feature prioritization", "Workflow optimization", "User role planning", "Digital transformation consulting"],
      color: "#C9A227",
    },
    {
      icon: Database,
      title: "Custom CRM Software Development",
      description: "We build CRM systems from the ground up, ensuring every feature supports your unique business operations.",
      lead: "Our CRM solutions include:",
      items: ["Lead management", "Customer management", "Contact management", "Opportunity tracking", "Sales pipeline management", "Activity management", "Task automation", "Customer communication history"],
      color: "#EC4899",
    },
    {
      icon: TrendingUp,
      title: "Sales Automation",
      description: "Improve sales productivity by automating repetitive tasks and providing your team with real-time insights.",
      lead: "Features include:",
      items: ["Lead assignment", "Follow-up reminders", "Quote generation", "Proposal management", "Sales forecasting", "Performance dashboards", "Revenue tracking"],
      color: "#3B82F6",
    },
    {
      icon: Headphones,
      title: "Customer Support CRM",
      description: "Deliver exceptional customer experiences through centralized support management.",
      lead: "Capabilities include:",
      items: ["Ticket management", "Customer support portal", "Service request tracking", "Knowledge base", "Live chat integration", "SLA management"],
      color: "#10B981",
    },
    {
      icon: Share2,
      title: "CRM Integration Services",
      description: "Connect your CRM with the software your business already uses.",
      lead: "We integrate with:",
      items: ["ERP systems", "Accounting software", "Email platforms", "Marketing automation tools", "Payment gateways", "Inventory systems", "HR software", "Third-party APIs"],
      color: "#8B5CF6",
    },
    {
      icon: RefreshCw,
      title: "CRM Modernization",
      description: "Already have an outdated CRM? We help modernize legacy systems with improved performance, usability, automation, and security while preserving valuable business data.",
      lead: "",
      items: [] as string[],
      color: "#C9A227",
    },
  ];

  const crmSolutions = [
    { title: "Sales CRM", description: "Manage leads, opportunities, customer interactions, and sales pipelines from one centralized platform.", icon: TrendingUp, gradient: "from-[#C9A227] to-[#FF9F43]" },
    { title: "Customer Service CRM", description: "Improve customer satisfaction through faster issue resolution and better support management.", icon: Headphones, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Marketing CRM", description: "Track campaigns, automate lead nurturing, and measure marketing performance.", icon: Megaphone, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Field Service CRM", description: "Support mobile teams with scheduling, work orders, customer information, and real-time updates.", icon: Truck, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "Enterprise CRM", description: "Centralize customer information across multiple departments while improving collaboration and reporting.", icon: Building2, gradient: "from-[#EC4899] to-[#C9A227]" },
    { title: "Industry-Specific CRM", description: "Custom CRM platforms designed specifically for healthcare, real estate, legal, manufacturing, education, finance, and other industries.", icon: Layers, gradient: "from-[#C9A227] to-[#10B981]" },
  ];

  const industries = [
    { text: "Real Estate", icon: Home },
    { text: "Healthcare", icon: HeartPulse },
    { text: "Financial Services", icon: Banknote },
    { text: "Insurance", icon: Umbrella },
    { text: "Manufacturing", icon: Factory },
    { text: "Construction", icon: HardHat },
    { text: "Logistics", icon: Truck },
    { text: "Education", icon: GraduationCap },
    { text: "Retail", icon: Store },
    { text: "E-commerce", icon: ShoppingCart },
    { text: "Legal Services", icon: Scale },
    { text: "Hospitality", icon: Hotel },
    { text: "Professional Services", icon: Briefcase },
    { text: "Technology", icon: Code },
    { text: "Government", icon: Landmark },
  ].map((item, i) => ({ ...item, color: PALETTE[i % PALETTE.length] }));

  const techCategories = [
    { title: "Frontend", icon: Code, items: ["React", "Next.js", "Angular"] },
    { title: "Backend", icon: Server, items: ["Node.js", "Python", "Laravel", ".NET"] },
    { title: "Databases", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { title: "Cloud Platforms", icon: Cloud, items: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
    { title: "API Development", icon: Link2, items: ["REST APIs", "GraphQL", "Webhooks", "OAuth Authentication"] },
  ];

  const processSteps = [
    { number: "01", title: "Business Discovery", description: "We work closely with your stakeholders to understand business processes, customer journeys, reporting requirements, and operational goals.", icon: Search },
    { number: "02", title: "CRM Planning & Architecture", description: "Our solution architects design database structures, user roles, workflows, automation rules, dashboards, and integrations.", icon: Layers },
    { number: "03", title: "UI/UX Design", description: "We create intuitive interfaces that improve productivity while minimizing training requirements for your team.", icon: PenTool },
    { number: "04", title: "Development & Integration", description: "Our developers build the CRM platform and integrate it with your existing software ecosystem, including ERPs, accounting systems, email platforms, and marketing tools.", icon: Code },
    { number: "05", title: "Testing & Deployment", description: "Every CRM undergoes comprehensive quality assurance, security testing, and user acceptance testing before deployment.", icon: ShieldCheck },
    { number: "06", title: "Training & Ongoing Support", description: "After launch, we provide user training, maintenance, performance optimization, feature enhancements, and technical support.", icon: GraduationCap },
  ].map((step, i) => ({ ...step, color: PALETTE[i % PALETTE.length] }));

  const whyChoose = [
    { title: "Tailored CRM Solutions", text: "Built around your unique workflows and business processes", icon: Settings, gradient: "from-[#C9A227] to-[#FF9F43]" },
    { title: "End-to-End Development", text: "Consulting, design, development, deployment, and support", icon: Workflow, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Scalable Architecture", text: "Designed to grow with your business and user base", icon: Server, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Enterprise Security", text: "Secure authentication, encryption, and role-based access controls", icon: ShieldCheck, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "Seamless Integrations", text: "Connects with your existing business applications and APIs", icon: Link2, gradient: "from-[#EC4899] to-[#C9A227]" },
    { title: "Long-Term Partnership", text: "Ongoing maintenance, upgrades, and optimization services", icon: HeartHandshake, gradient: "from-[#C9A227] to-[#10B981]" },
  ];

  const benefits = [
    "Centralize customer information",
    "Improve sales efficiency",
    "Enhance customer relationships",
    "Automate repetitive business tasks",
    "Increase team collaboration",
    "Improve reporting and analytics",
    "Reduce manual data entry",
    "Support business growth with scalable systems",
    "Improve customer retention",
    "Make informed decisions using real-time business insights",
  ];

  const faqs = [
    {
      question: "Why choose a custom CRM instead of an off-the-shelf solution?",
      answer: "A custom CRM is designed around your business processes, providing only the features you need while offering greater flexibility, scalability, and integration capabilities than generic software.",
    },
    {
      question: "Can you migrate data from our existing CRM?",
      answer: "Yes. We securely migrate customer records, sales history, documents, and other business data while minimizing downtime.",
    },
    {
      question: "Can the CRM integrate with our existing software?",
      answer: "Absolutely. We integrate CRM platforms with ERP systems, accounting software, marketing tools, payment gateways, communication platforms, and custom business applications.",
    },
    {
      question: "Is the CRM mobile-friendly?",
      answer: "Yes. We develop responsive CRM applications that work across desktops, tablets, and smartphones, with dedicated mobile apps available when required.",
    },
    {
      question: "How secure is the CRM?",
      answer: "Security is built into every solution through encrypted data storage, secure authentication, role-based permissions, audit logs, and regular security updates.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes. We offer ongoing maintenance, monitoring, performance optimization, feature enhancements, user training, and technical support to ensure your CRM continues to evolve with your business.",
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
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
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
                  Custom{' '}
                  <span className={styles.gradientText}>
                    CRM Development
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-3 sm:mb-4"
                >
                  Build a CRM That Fits Your Business, Not the Other Way Around
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-[#3B4456] text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
                >
                  Customer relationships are at the heart of every successful business. However, as organizations grow, managing customer interactions through spreadsheets, disconnected tools, or generic CRM platforms can lead to inefficiencies, missed opportunities, and poor customer experiences. A custom Customer Relationship Management (CRM) system gives your business complete control over how you manage leads, customers, sales, marketing, and support.
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
                    Book A Consultation Today
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
                          <Database className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>

                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={`dot-${i}`}
                          className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{
                            background: ['#C9A227', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#C9A227'][i],
                            boxShadow: `0 0 12px ${['#C9A227', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#C9A227'][i]}80`,
                            top: `${15 + Math.sin(i * 1.05) * 35}%`,
                            left: `${50 + Math.cos(i * 1.05) * 40}%`,
                          }}
                          animate={{
                            y: [0, -10 - i * 2, 0],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        />
                      ))}

                      {[
                        { Icon: TrendingUp, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Headphones, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: ShieldCheck, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: Share2, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
                        { Icon: Layers, color: "#C9A227", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
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

        {/* Quick Answer (AEO / GEO) */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
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
                What is custom CRM development?
              </h2>
              <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mb-6">
                At Altiora Infotech, we provide custom CRM development services that help businesses streamline operations, centralize customer data, and improve team collaboration. Instead of forcing your business to adapt to off-the-shelf software, we build CRM platforms around your workflows, processes, and growth objectives.
              </p>
              <p className="text-[#3B4456] text-sm sm:text-base font-semibold mb-3">Our Custom CRM Development Services:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "CRM Strategy & Consulting",
                  "Custom CRM Software Development",
                  "Sales Automation",
                  "Customer Support CRM",
                  "CRM Integration Services",
                  "CRM Modernization",
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

        {/* Overview Section */}
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
                <span className={styles.overviewTitle}>
                  Overview
                </span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#C9A227]/50 to-transparent" />
              </div>

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    Whether you need a CRM for sales management, customer support, marketing automation, field service operations, or enterprise relationship management, our team develops secure, scalable, and cloud-ready solutions tailored to your organization. From startups looking to manage leads more effectively to enterprises requiring advanced automation and integrations, we create CRM systems that improve productivity, enhance customer engagement, and support long-term business growth.
                    <br />
                    Our development approach focuses on flexibility, usability, and performance, ensuring your CRM becomes a valuable business asset rather than another software tool.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A227]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Our Custom CRM Development{' '}
                <span className={styles.gradientText}>Services</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="group"
                >
                  <div
                    className="relative flex items-start gap-4 rounded-xl p-5 transition-all duration-500 hover:translate-x-2 border border-transparent hover:border-black/[0.06]"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-all duration-500"
                      style={{ background: service.color }}
                    />

                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}
                    >
                      <service.icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-[#3B4456] transition-colors">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-[#3B4456] transition-colors mb-3">{service.description}</p>
                      {service.items.length > 0 && (
                        <>
                          <p className="text-[#3B4456] text-xs sm:text-sm font-semibold mb-2">{service.lead}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.items.map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs text-[#3B4456] border"
                                style={{ background: `${service.color}0d`, borderColor: `${service.color}25` }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Solutions We Build */}
        <section
          ref={solutionsRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                CRM Solutions We{' '}
                <span className={styles.gradientText}>Build</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl mt-4`}>
                Our development team creates CRM platforms for businesses of all sizes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {crmSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#C9A227] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.description}</p>
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Industries We{' '}
                <span className={styles.gradientText}>Serve</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl mt-4`}>
                Our CRM development solutions support businesses across a wide range of sectors.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {industries.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="group w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)]"
                >
                  <div
                    className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:translate-y-[-6px] p-5 text-center"
                    style={{ borderColor: `${item.color}15`, background: `linear-gradient(160deg, ${item.color}06, transparent 60%)` }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 35px ${item.color}10, inset 0 0 35px ${item.color}05`, border: `1px solid ${item.color}30` }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </motion.div>
                      <p className="text-[#3B4456] text-xs sm:text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section
          ref={techRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#3B82F6]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#10B981]/6 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Technologies We{' '}
                <span className={styles.gradientText}>Use</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl mt-4`}>
                Our CRM solutions are built using modern technologies that support performance, scalability, and security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {techCategories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className={`group relative ${index === 3 ? 'sm:col-span-1 lg:col-start-1' : ''} ${index === 4 ? 'sm:col-span-2 lg:col-start-2 lg:col-end-4' : ''}`}
                >
                  <div
                    className="relative h-full rounded-2xl overflow-hidden border p-6"
                    style={{ borderColor: "rgba(244,204,111,0.15)", background: "linear-gradient(145deg, rgba(244,204,111,0.06), transparent)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(244,204,111,0.15)", border: "1px solid rgba(244,204,111,0.25)" }}
                      >
                        <cat.icon className="w-5 h-5 text-[#C9A227]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs sm:text-sm text-[#3B4456] border border-black/10 bg-black/[0.04]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our CRM Development Process */}
        <section
          ref={processRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A227]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className={styles.sectionHeading}>
                Our CRM Development{' '}
                <span className={styles.gradientText}>Process</span>
              </h2>
            </motion.div>

            {processSteps.map((step, index) => {
              const reverse = index % 2 === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.15 }}
                  className="relative mb-6 group"
                >
                  <div
                    className="relative rounded-3xl overflow-hidden border transition-all duration-500"
                    style={{ borderColor: `${step.color}26` }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(${reverse ? 'to left' : 'to right'}, ${step.color}14, transparent)` }}
                    />
                    <div
                      className={`absolute ${reverse ? 'right-0 rounded-r-3xl' : 'left-0 rounded-l-3xl'} top-0 bottom-0 w-1.5`}
                      style={{ background: `linear-gradient(to bottom, ${step.color}, ${step.color}80, ${step.color})` }}
                    />

                    <div className={`relative flex flex-col md:flex-row${reverse ? '-reverse' : ''} items-stretch`}>
                      <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                        <div className="relative z-10 flex flex-col items-center">
                          <span
                            className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                            style={{ background: `linear-gradient(180deg, ${step.color}4d, ${step.color}14)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                          >
                            {step.number}
                          </span>
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                            style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, boxShadow: `0 8px 30px ${step.color}55` }}
                          >
                            <step.icon className="w-7 h-7 text-[#001A66]" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex justify-center py-2">
                      <motion.div
                        className="w-[2px] h-10 rounded-full"
                        style={{ background: `linear-gradient(to bottom, ${step.color}, ${processSteps[index + 1].color})` }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={processInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Altiora Infotech */}
        <section
          ref={whyChooseRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Why Choose{' '}
                <span className={styles.gradientText}>Altiora Infotech</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative cursor-pointer"
                >
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

        {/* Benefits of Custom CRM Development */}
        <section
          ref={benefitsRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-[#F3F6FC]"
        >
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-10"
            >
              <h2 className={styles.sectionHeading}>
                Benefits of Custom CRM{' '}
                <span className={styles.gradientText}>Development</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl border border-[#C9A227]/20 bg-black/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10"
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#3B4456] text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className={styles.sectionHeading}>
                Frequently Asked{' '}
                <span className={styles.gradientText}>Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:bg-black/[0.05] hover:border-black/20"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 text-[#C9A227] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-64 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-[#3B4456] text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section ref={finalCtaRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C9A227]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                >
                  Ready to Build a{' '}
                  <span className={styles.gradientText}>CRM Designed for Your Business?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed"
                >
                  A well-designed CRM can transform the way your business manages customer relationships, improves sales performance, and streamlines operations. Altiora Infotech develops custom CRM solutions that align with your goals, integrate with your existing systems, and scale as your business grows.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm sm:text-base text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Book a consultation today to discuss your CRM requirements and discover how a custom-built solution can improve productivity, customer engagement, and long-term business success.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40"
                  >
                    Book A Consultation Today
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
