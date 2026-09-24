'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Workflow,
  Headphones,
  Users,
  Megaphone,
  FileText,
  Database,
  Brain,
  BarChart3,
  Mail,
  Cpu,
  TrendingUp,
  Target,
  ShieldCheck,
  Network,
  Layers,
  Search,
  Settings,
  RefreshCw,
  Stethoscope,
  DollarSign,
  Factory,
  ShoppingBag,
  Truck,
  Navigation,
  GraduationCap,
  Landmark,
  HardHat,
  Scale,
  Home,
  Hotel,
  Briefcase,
  Zap,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../ai-automation-services-canada.module.css";

export default function AiAutomationClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [technologiesRef, technologiesInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
      icon: Workflow,
      title: "Business Process Automation",
      description: "Manual business processes consume valuable time and increase operational costs. We automate repetitive workflows using AI-driven decision-making and intelligent process management.",
      solutionsLabel: "Our solutions include:",
      items: ["Workflow automation", "Approval management", "Employee onboarding", "HR automation", "Invoice processing", "Procurement automation", "Compliance workflows"],
      color: "#f4cc6f",
    },
    {
      icon: Headphones,
      title: "AI-Powered Customer Support",
      description: "Deliver faster and more consistent customer service with intelligent AI assistants.",
      solutionsLabel: "Our solutions include:",
      items: ["AI chatbots", "Virtual customer assistants", "24/7 automated support", "Ticket routing", "Customer self-service portals", "Omnichannel messaging automation"],
      color: "#EC4899",
    },
    {
      icon: Users,
      title: "Sales & CRM Automation",
      description: "Improve lead management and increase sales productivity with intelligent automation.",
      solutionsLabel: "Services include:",
      items: ["Lead qualification", "CRM automation", "Sales pipeline management", "Follow-up automation", "Proposal generation", "Appointment scheduling", "Customer segmentation"],
      color: "#3B82F6",
    },
    {
      icon: Megaphone,
      title: "Marketing Automation",
      description: "Automate repetitive marketing activities while improving campaign performance.",
      solutionsLabel: "Solutions include:",
      items: ["Email automation", "Lead nurturing", "Campaign scheduling", "Audience segmentation", "AI-powered content recommendations", "Performance reporting"],
      color: "#10B981",
    },
    {
      icon: FileText,
      title: "Intelligent Document Processing",
      description: "Convert paper-based and digital documents into structured business data using AI.",
      solutionsLabel: "Applications include:",
      items: ["Invoice automation", "OCR data extraction", "Contract analysis", "Claims processing", "Financial document processing", "Form digitization"],
      color: "#8B5CF6",
    },
    {
      icon: Database,
      title: "ERP & Business System Automation",
      description: "Connect business applications and automate data movement across departments.",
      solutionsLabel: "Examples include:",
      items: ["ERP automation", "CRM integration", "Accounting software integration", "Inventory synchronization", "Procurement workflows", "Multi-system reporting"],
      color: "#f4cc6f",
    },
  ];

  const solutionsWeBuild = [
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "Replace manual approvals and repetitive administrative tasks with automated workflows.",
      gradient: "from-[#f4cc6f] to-[#FF9F43]",
    },
    {
      icon: Brain,
      title: "AI Knowledge Assistants",
      description: "Provide employees with instant answers from internal documentation, policies, and business knowledge.",
      gradient: "from-[#3B82F6] to-[#06B6D4]",
    },
    {
      icon: BarChart3,
      title: "Automated Reporting",
      description: "Generate real-time reports and dashboards without manual data collection.",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      icon: Mail,
      title: "AI Email Automation",
      description: "Automatically categorize, prioritize, summarize, and respond to incoming emails.",
      gradient: "from-[#10B981] to-[#06B6D4]",
    },
    {
      icon: Cpu,
      title: "AI Data Processing",
      description: "Process thousands of records quickly while reducing manual errors.",
      gradient: "from-[#EC4899] to-[#f4cc6f]",
    },
    {
      icon: TrendingUp,
      title: "Predictive Business Automation",
      description: "Use machine learning to automate decisions based on historical business data.",
      gradient: "from-[#f4cc6f] to-[#10B981]",
    },
  ];

  const industries = [
    { text: "Healthcare", icon: Stethoscope, color: "#f4cc6f" },
    { text: "Financial Services", icon: DollarSign, color: "#EC4899" },
    { text: "Insurance", icon: ShieldCheck, color: "#3B82F6" },
    { text: "Manufacturing", icon: Factory, color: "#10B981" },
    { text: "Retail", icon: ShoppingBag, color: "#8B5CF6" },
    { text: "Logistics", icon: Truck, color: "#f4cc6f" },
    { text: "Transportation", icon: Navigation, color: "#EC4899" },
    { text: "Education", icon: GraduationCap, color: "#3B82F6" },
    { text: "Government", icon: Landmark, color: "#10B981" },
    { text: "Construction", icon: HardHat, color: "#8B5CF6" },
    { text: "Legal Services", icon: Scale, color: "#f4cc6f" },
    { text: "Real Estate", icon: Home, color: "#EC4899" },
    { text: "Hospitality", icon: Hotel, color: "#3B82F6" },
    { text: "Technology", icon: Cpu, color: "#10B981" },
    { text: "Professional Services", icon: Briefcase, color: "#8B5CF6" },
  ];

  const technologyCategories = [
    { category: "Artificial Intelligence", color: "#f4cc6f", items: ["OpenAI", "Azure AI", "Google Vertex AI", "Anthropic", "LangChain"] },
    { category: "Automation Platforms", color: "#EC4899", items: ["Microsoft Power Automate", "n8n", "Make (Integromat)", "Zapier", "UiPath"] },
    { category: "Backend Technologies", color: "#3B82F6", items: ["Python", "Node.js", "FastAPI", "Django"] },
    { category: "Databases", color: "#10B981", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "Cloud Platforms", color: "#8B5CF6", items: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Business Process Assessment",
      description: "We analyze your existing workflows, identify bottlenecks, and prioritize automation opportunities that deliver measurable business value.",
      icon: Search,
      color: "#f4cc6f",
      secondColor: "#FF9F43",
      reverse: false,
    },
    {
      number: "02",
      title: "Automation Strategy",
      description: "Our team designs a tailored automation roadmap, selecting the right AI models, workflow engines, and integration approach for your business.",
      icon: Target,
      color: "#EC4899",
      secondColor: "#f4cc6f",
      reverse: true,
    },
    {
      number: "03",
      title: "Solution Design & Development",
      description: "We build automation workflows, AI agents, integrations, and dashboards that align with your operational requirements.",
      icon: Settings,
      color: "#3B82F6",
      secondColor: "#06B6D4",
      reverse: false,
    },
    {
      number: "04",
      title: "System Integration",
      description: "Our engineers connect automation solutions with your CRM, ERP, HR, accounting, marketing, and other business platforms.",
      icon: Network,
      color: "#10B981",
      secondColor: "#06B6D4",
      reverse: true,
    },
    {
      number: "05",
      title: "Testing & Deployment",
      description: "Every automation workflow is tested thoroughly to ensure reliability, security, and performance before deployment.",
      icon: CheckCircle,
      color: "#8B5CF6",
      secondColor: "#EC4899",
      reverse: false,
    },
    {
      number: "06",
      title: "Optimization & Continuous Improvement",
      description: "After launch, we monitor automation performance, refine AI models, and identify new opportunities to improve efficiency as your business evolves.",
      icon: RefreshCw,
      color: "#f4cc6f",
      secondColor: "#10B981",
      reverse: true,
    },
  ];

  const whyChooseCards = [
    { title: "Custom Automation", subtitle: "Solutions", text: "Designed specifically around your business processes", icon: Target, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
    { title: "AI-First", subtitle: "Approach", text: "Combines artificial intelligence with workflow automation", icon: Brain, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "System Integration", subtitle: "Expertise", text: "Connects seamlessly with existing software and cloud platforms", icon: Network, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Secure & Scalable", subtitle: "Solutions", text: "Built with enterprise-grade security and future growth in mind", icon: ShieldCheck, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "End-to-End", subtitle: "Implementation", text: "From strategy and development to deployment and ongoing support", icon: Layers, gradient: "from-[#EC4899] to-[#f4cc6f]" },
    { title: "Measurable Business", subtitle: "Outcomes", text: "Focused on improving productivity, reducing costs, and increasing operational efficiency", icon: BarChart3, gradient: "from-[#f4cc6f] to-[#10B981]" },
  ];

  const benefits = [
    "Reduce repetitive manual work",
    "Improve operational efficiency",
    "Minimize human error",
    "Increase employee productivity",
    "Accelerate response times",
    "Lower operational costs",
    "Improve customer satisfaction",
    "Enable faster decision-making",
    "Scale business operations without increasing overhead",
    "Free teams to focus on strategic initiatives",
  ];

  const faqs = [
    {
      question: "What is AI automation?",
      answer: "AI automation combines artificial intelligence with workflow automation to automate repetitive tasks, analyze data, make decisions, and improve business processes with minimal human intervention.",
    },
    {
      question: "Which business processes can be automated?",
      answer: "Organizations commonly automate customer support, sales, HR, finance, marketing, procurement, document processing, inventory management, reporting, and approval workflows.",
    },
    {
      question: "Can AI automation integrate with our existing software?",
      answer: "Yes. We integrate AI automation with CRMs, ERPs, accounting systems, HR platforms, cloud applications, and custom business software to create connected workflows.",
    },
    {
      question: "Is AI automation suitable for small businesses?",
      answer: "Absolutely. AI automation can help businesses of all sizes improve productivity, reduce costs, and scale operations more efficiently.",
    },
    {
      question: "How secure are AI automation solutions?",
      answer: "Security is built into every solution. We implement role-based access controls, encrypted data transmission, secure APIs, audit logs, and follow industry best practices for protecting sensitive information.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We provide monitoring, maintenance, optimization, and continuous improvements to ensure your automation workflows continue to deliver value as your business grows.",
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
                className="absolute w-1 h-1 bg-[#f4cc6f] rounded-full opacity-20 animate-pulse"
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
                  AI Automation Services{' '}
                  <span className={styles.gradientText}>
                    Canada
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-slate-700 mb-3 sm:mb-4"
                >
                  Transform Your Business with AI Automation Services in Canada
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl"
                >
                  Businesses across Canada are under increasing pressure to improve efficiency, reduce operational costs, and deliver faster customer experiences. Manual processes, repetitive tasks, and disconnected systems often slow growth and prevent teams from focusing on high-value work. AI automation provides a smarter way to streamline operations, improve productivity, and make better use of business data.
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
                    Contact Our Team Today
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
                          <Brain className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>

                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={`dot-${i}`}
                          className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{
                            background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'][i],
                            boxShadow: `0 0 12px ${['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'][i]}80`,
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
                        { Icon: Workflow, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Headphones, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Database, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
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

        {/* Quick Answer (AEO / GEO) */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-white">
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
                What is AI automation?
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                AI automation combines artificial intelligence with workflow automation to automate repetitive tasks, analyze data, make decisions, and improve business processes with minimal human intervention.
              </p>
              <p className="text-slate-600 text-sm sm:text-base font-semibold mb-3">Our AI Automation Services:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Business Process Automation",
                  "AI-Powered Customer Support",
                  "Sales & CRM Automation",
                  "Marketing Automation",
                  "Intelligent Document Processing",
                  "ERP & Business System Automation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#f4cc6f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Intro / Overview Section */}
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
                <span className={styles.overviewTitle}>
                  Overview
                </span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
              </div>

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    At Altiora Infotech, we provide AI automation services in Canada that help organizations automate workflows, enhance decision-making, and improve operational performance. We combine artificial intelligence, machine learning, intelligent document processing, workflow automation, and system integrations to create solutions tailored to your business.
                    <br />
                    Whether you&apos;re looking to automate customer support, sales processes, HR workflows, finance operations, marketing campaigns, or internal approvals, our AI automation experts build secure and scalable solutions that integrate seamlessly with your existing systems.
                    <br />
                    Our goal is simple: eliminate repetitive work, improve efficiency, reduce human error, and allow your team to focus on strategic initiatives that drive business growth.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Our AI Automation{' '}
                <span className={styles.gradientText}>Services</span>
              </h2>
            </motion.div>

            {/* Two-column list layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    {/* Left color bar */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-[0_0_8px_var(--bar-color)]"
                      style={{ background: service.color, '--bar-color': service.color } as React.CSSProperties}
                    />

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}
                    >
                      <service.icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors mb-3">{service.description}</p>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">{service.solutionsLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs text-slate-600 border"
                            style={{ background: `${service.color}0d`, borderColor: `${service.color}25` }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Automation Solutions We Build */}
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
                AI Automation{' '}
                <span className={styles.gradientText}>Solutions We Build</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl mt-4`}>
                Our automation platforms are designed to improve efficiency across every department.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {solutionsWeBuild.map((item, index) => (
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
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{item.description}</p>
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
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/4 blur-[150px] rounded-full pointer-events-none" />

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {mounted && [...Array(10)].map((_, i) => (
            <motion.div
              key={`industry-particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6'][i % 5],
              }}
              animate={{
                y: [0, -20 - Math.random() * 20, 0],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Industries{' '}
                <span className={styles.gradientText}>We Serve</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
                Our AI automation services support organizations across multiple sectors.
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
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section
          ref={technologiesRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#EC4899]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#3B82F6]/6 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Technologies{' '}
                <span className={styles.gradientText}>We Use</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl mt-4`}>
                We build automation solutions using modern AI technologies and cloud platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {technologyCategories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className="relative rounded-2xl border p-6"
                  style={{ borderColor: `${cat.color}20`, background: `linear-gradient(145deg, ${cat.color}08, transparent)` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-50"
                    style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                  />
                  <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-4" style={{ color: cat.color }}>{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm text-slate-600 border"
                        style={{ background: `${cat.color}0d`, borderColor: `${cat.color}25` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our AI Automation Process */}
        <section
          ref={processRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]" />
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
                Our AI Automation{' '}
                <span className={styles.gradientText}>Process</span>
              </h2>
            </motion.div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.reverse ? 60 : -60 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.15 }}
                className={`relative group ${index < processSteps.length - 1 ? 'mb-6' : ''}`}
              >
                <div
                  className="relative rounded-3xl overflow-hidden border transition-all duration-500"
                  style={{ borderColor: `${step.color}25` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: step.reverse
                        ? `linear-gradient(to left, ${step.color}14, ${step.secondColor}0a, transparent)`
                        : `linear-gradient(to right, ${step.color}14, ${step.secondColor}0a, transparent)`,
                    }}
                  />
                  <motion.div
                    className={`absolute top-0 bottom-0 w-1.5 ${step.reverse ? 'right-0 rounded-r-3xl' : 'left-0 rounded-l-3xl'}`}
                    style={{ background: `linear-gradient(to bottom, ${step.color}, ${step.secondColor}, ${step.color})`, backgroundSize: "100% 200%" }}
                    animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div
                    className={`absolute -top-20 w-40 h-40 blur-[60px] rounded-full pointer-events-none ${step.reverse ? '-right-20' : '-left-20'}`}
                    style={{ background: `${step.color}10` }}
                  />

                  <div className={`relative flex flex-col md:flex-row${step.reverse ? '-reverse' : ''} items-stretch`}>
                    <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                      <div className="relative z-10 flex flex-col items-center">
                        <span
                          className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                          style={{ background: `linear-gradient(180deg, ${step.color}4d, ${step.secondColor}26, ${step.color}0d)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        >
                          {step.number}
                        </span>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                          style={{ background: `linear-gradient(135deg, ${step.color}, ${step.secondColor})`, boxShadow: `0 8px 30px ${step.color}55` }}
                        >
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{step.description}</p>
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
            ))}
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
              {whyChooseCards.map((item, index) => (
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
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                          <span className="text-sm text-slate-600">{item.subtitle}</span>
                        </div>
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

        {/* Benefits of AI Automation */}
        <section
          ref={benefitsRef}
          className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-[#F3F6FC]"
        >
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-10"
            >
              <h2 className={styles.sectionHeading}>
                Benefits of{' '}
                <span className={styles.gradientText}>AI Automation</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl border border-[#f4cc6f]/20 bg-black/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10"
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#f4cc6f]" />
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
                        className={`w-5 h-5 text-[#f4cc6f] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
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
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f4cc6f]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                >
                  Ready to{' '}
                  <span className={styles.gradientText}>Automate Your Business?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed"
                >
                  Modern businesses need intelligent systems that eliminate repetitive work and improve operational efficiency. Altiora Infotech helps organizations across Canada implement AI-powered automation solutions that streamline workflows, reduce costs, and support sustainable growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Contact our team today to discover how AI automation can transform your business processes and help your organization operate more efficiently.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Contact Our Team Today
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
