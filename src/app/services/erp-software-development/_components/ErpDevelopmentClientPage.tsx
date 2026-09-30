'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Settings,
  DollarSign,
  Package,
  Users,
  TrendingUp,
  Truck,
  Layers,
  Server,
  Database,
  Cloud,
  GitBranch,
  ShieldCheck,
  Plug,
  HeartHandshake,
  Factory,
  BarChart3,
  ClipboardList,
  Workflow,
  PenTool,
  Cpu,
  FlaskConical,
  LifeBuoy,
  ShoppingCart,
  Globe,
  HardHat,
  Stethoscope,
  Route,
  GraduationCap,
  Utensils,
  Landmark,
  Home,
  Briefcase,
  Scale,
  Wheat,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../erp-software-development.module.css";

const PALETTE = ["#C9A227", "#EC4899", "#3B82F6", "#10B981", "#8B5CF6"];

export default function ErpDevelopmentClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
      icon: Settings,
      title: "Custom ERP Development",
      description: "Every business operates differently. We develop ERP systems tailored to your processes, ensuring your software supports your operations rather than forcing you to adapt.",
      subLabel: "Our ERP solutions include:",
      items: ["Business process management", "Workflow automation", "Multi-department management", "Real-time reporting", "Document management", "User role management"],
      color: "#C9A227",
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting Management",
      description: "Manage financial operations from a centralized platform with complete visibility.",
      subLabel: "Features include:",
      items: ["General ledger", "Accounts payable", "Accounts receivable", "Budget management", "Expense tracking", "Financial reporting", "Tax management"],
      color: "#EC4899",
    },
    {
      icon: Package,
      title: "Inventory & Warehouse Management",
      description: "Gain complete control over inventory movement and warehouse operations.",
      subLabel: "Capabilities include:",
      items: ["Inventory tracking", "Stock management", "Barcode integration", "Purchase orders", "Warehouse management", "Supplier management", "Inventory forecasting"],
      color: "#3B82F6",
    },
    {
      icon: Users,
      title: "Human Resource Management",
      description: "Simplify HR processes with intelligent workforce management.",
      subLabel: "Modules include:",
      items: ["Employee records", "Payroll integration", "Leave management", "Attendance tracking", "Recruitment management", "Performance evaluations"],
      color: "#10B981",
    },
    {
      icon: TrendingUp,
      title: "Sales & Customer Management",
      description: "Improve customer relationships while streamlining your sales process.",
      subLabel: "Features include:",
      items: ["Lead management", "Quotation management", "Sales orders", "Customer database", "Contract management", "Revenue reporting"],
      color: "#8B5CF6",
    },
    {
      icon: Truck,
      title: "Procurement & Supply Chain Management",
      description: "Optimize purchasing and vendor relationships.",
      subLabel: "Services include:",
      items: ["Vendor management", "Procurement automation", "Purchase approvals", "Contract management", "Supply chain visibility", "Vendor performance reporting"],
      color: "#C9A227",
    },
  ];

  const modules = [
    { icon: DollarSign, title: "Finance & Accounting", description: "Track financial performance, automate accounting processes, and improve financial reporting.", gradient: "from-[#C9A227] to-[#FF9F43]" },
    { icon: Package, title: "Inventory Management", description: "Monitor stock levels, warehouse operations, procurement activities, and inventory movement.", gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { icon: Users, title: "Human Resources", description: "Manage employee information, payroll, attendance, and recruitment through a centralized platform.", gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { icon: HeartHandshake, title: "Customer Relationship Management", description: "Strengthen customer engagement through integrated sales and service management.", gradient: "from-[#10B981] to-[#06B6D4]" },
    { icon: Factory, title: "Manufacturing Management", description: "Monitor production planning, quality control, material requirements, and production scheduling.", gradient: "from-[#EC4899] to-[#C9A227]" },
    { icon: BarChart3, title: "Business Intelligence & Analytics", description: "Generate real-time dashboards, KPI reporting, operational insights, and executive decision support.", gradient: "from-[#C9A227] to-[#10B981]" },
  ];

  const industries = [
    { text: "Manufacturing", icon: Factory },
    { text: "Distribution", icon: Truck },
    { text: "Retail", icon: ShoppingCart },
    { text: "E-commerce", icon: Globe },
    { text: "Construction", icon: HardHat },
    { text: "Healthcare", icon: Stethoscope },
    { text: "Logistics", icon: Route },
    { text: "Education", icon: GraduationCap },
    { text: "Hospitality", icon: Utensils },
    { text: "Financial Services", icon: Landmark },
    { text: "Real Estate", icon: Home },
    { text: "Professional Services", icon: Briefcase },
    { text: "Government", icon: Scale },
    { text: "Agriculture", icon: Wheat },
    { text: "Technology", icon: Cpu },
  ].map((item, index) => ({ ...item, color: PALETTE[index % PALETTE.length] }));

  const techCategories = [
    { category: "Frontend", icon: Layers, color: "#C9A227", items: ["React", "Next.js", "Angular"] },
    { category: "Backend", icon: Server, color: "#EC4899", items: ["Node.js", "Python", "Laravel", ".NET"] },
    { category: "Databases", icon: Database, color: "#3B82F6", items: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB"] },
    { category: "Cloud Platforms", icon: Cloud, color: "#10B981", items: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
    { category: "Integration Technologies", icon: GitBranch, color: "#8B5CF6", items: ["REST APIs", "GraphQL", "Webhooks", "OAuth", "Third-party ERP integrations"] },
  ];

  const processSteps = [
    { number: "01", title: "Business Analysis", icon: ClipboardList, description: "We analyze your current business processes, identify operational challenges, and define ERP objectives aligned with your organization." },
    { number: "02", title: "ERP Planning & Architecture", icon: Workflow, description: "Our solution architects design workflows, database structures, user roles, modules, and system integrations based on your requirements." },
    { number: "03", title: "UI/UX Design", icon: PenTool, description: "We create intuitive interfaces that make daily operations easier for employees across every department." },
    { number: "04", title: "ERP Development", icon: Cpu, description: "Our development team builds secure, scalable ERP modules using modern technologies and industry best practices." },
    { number: "05", title: "Testing & Implementation", icon: FlaskConical, description: "Every ERP system undergoes functional testing, security validation, performance optimization, and user acceptance testing before deployment." },
    { number: "06", title: "Support & Continuous Improvement", icon: LifeBuoy, description: "After implementation, we provide ongoing maintenance, feature enhancements, security updates, training, and technical support to ensure your ERP evolves with your business." },
  ];

  const whyChoose = [
    { title: "Custom ERP Solutions", text: "Designed around your unique business processes and operational goals.", icon: Settings, gradient: "from-[#C9A227] to-[#FF9F43]" },
    { title: "Modular Architecture", text: "Add new modules and features as your business grows.", icon: Layers, gradient: "from-[#3B82F6] to-[#06B6D4]" },
    { title: "Enterprise-Grade Security", text: "Secure authentication, encrypted data storage, and role-based access controls.", icon: ShieldCheck, gradient: "from-[#8B5CF6] to-[#EC4899]" },
    { title: "Seamless Integrations", text: "Connect with CRM, accounting software, payment gateways, HR systems, and third-party applications.", icon: Plug, gradient: "from-[#10B981] to-[#06B6D4]" },
    { title: "Scalable Cloud Infrastructure", text: "Cloud-ready ERP systems built for long-term business expansion.", icon: Cloud, gradient: "from-[#EC4899] to-[#C9A227]" },
    { title: "End-to-End Services", text: "Consulting, development, implementation, migration, training, and ongoing support.", icon: LifeBuoy, gradient: "from-[#C9A227] to-[#10B981]" },
  ];

  const benefits = [
    "Centralize business operations",
    "Improve operational efficiency",
    "Reduce manual work and duplicate data entry",
    "Increase productivity across departments",
    "Gain real-time visibility into business performance",
    "Improve inventory and financial management",
    "Support informed decision-making with analytics",
    "Enhance collaboration between teams",
    "Automate repetitive business processes",
    "Scale operations with confidence",
  ];

  const faqs = [
    { question: "What is ERP software?", answer: "Enterprise Resource Planning (ERP) software is a centralized platform that integrates business functions such as finance, inventory, sales, HR, procurement, manufacturing, and reporting into a single system." },
    { question: "Why choose a custom ERP instead of a ready-made solution?", answer: "A custom ERP is built around your specific workflows, business rules, and operational requirements. It offers greater flexibility, scalability, and integration capabilities than many off-the-shelf platforms." },
    { question: "Can you integrate ERP with our existing software?", answer: "Yes. We integrate ERP systems with CRM platforms, accounting software, payroll solutions, inventory tools, payment gateways, and other business applications using secure APIs." },
    { question: "Is cloud-based ERP available?", answer: "Yes. We develop both cloud-based and on-premise ERP solutions depending on your business requirements, security policies, and infrastructure preferences." },
    { question: "Can ERP software support multiple business locations?", answer: "Absolutely. Our ERP solutions support multi-location operations, multiple warehouses, multiple currencies, and role-based access for distributed teams." },
    { question: "Do you provide ERP maintenance and support?", answer: "Yes. We provide ongoing maintenance, performance optimization, security updates, user training, and feature enhancements to ensure your ERP continues to meet evolving business needs." },
  ];

  const orbitIcons = [
    { Icon: DollarSign, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
    { Icon: Package, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
    { Icon: Users, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
    { Icon: BarChart3, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
    { Icon: Truck, color: "#C9A227", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
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
                  ERP Software{' '}
                  <span className={styles.gradientText}>
                    Development
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-3 sm:mb-4"
                >
                  Streamline Your Business Operations with Custom ERP Software Development
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-sm sm:text-base text-[#3B4456] mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  As businesses grow, managing operations across multiple departments becomes increasingly complex. Finance, inventory, procurement, sales, manufacturing, human resources, and customer management often rely on separate systems that don&apos;t communicate efficiently. This lack of integration creates data silos, delays decision-making, and reduces productivity.
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
                    Schedule A Consultation Today
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

                      {orbitIcons.map((item, i) => (
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
                What is ERP software?
              </h2>
              <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mb-6">
                Enterprise Resource Planning (ERP) software is a centralized platform that integrates business functions such as finance, inventory, sales, HR, procurement, manufacturing, and reporting into a single system.
              </p>
              <p className="text-[#3B4456] text-sm sm:text-base font-semibold mb-3">Our ERP Software Development Services:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#3B4456] text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
                    <span>{item.title}</span>
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
                    At Altiora Infotech, we provide ERP software development services that help businesses centralize operations through a unified, scalable, and secure platform. Our custom Enterprise Resource Planning (ERP) solutions bring together critical business functions into one system, enabling real-time visibility, process automation, and data-driven decision-making.
                    <br />
                    Unlike off-the-shelf ERP software, our custom ERP solutions are designed around your organization&apos;s workflows, business rules, and operational goals. Whether you&apos;re a growing company replacing spreadsheets or an enterprise modernizing legacy systems, we build ERP platforms that improve efficiency today while supporting future growth.
                    <br />
                    From strategy and architecture to implementation, integration, and long-term support, our team delivers ERP systems that simplify complex operations and empower organizations to scale confidently.
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

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Our ERP Software{' '}
                <span className={styles.gradientText}>Development Services</span>
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
                    className="relative flex items-start gap-4 rounded-xl p-5 transition-all duration-500 hover:translate-x-2 border border-transparent hover:border-black/[0.06] h-full"
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
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-[#3B4456] transition-colors">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-[#3B4456] transition-colors mb-3">{service.description}</p>
                      <p className="text-[#3B4456] text-xs font-semibold mb-2">{service.subLabel}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.items.map((chip, chipIndex) => (
                          <span
                            key={chipIndex}
                            className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full text-[#3B4456]"
                            style={{ background: `${service.color}0f`, border: `1px solid ${service.color}25` }}
                          >
                            {chip}
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

        {/* ERP Modules We Develop */}
        <section
          ref={modulesRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={modulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                ERP Modules We{' '}
                <span className={styles.gradientText}>Develop</span>
              </h2>
              <p className={`${styles.sectionDescription} mt-4`}>
                Our ERP systems can include any combination of modules based on your business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {modules.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-black/[0.08] hover:border-black/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
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

          {mounted && [...Array(10)].map((_, i) => (
            <motion.div
              key={`industry-particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: PALETTE[i % PALETTE.length],
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
                Industries We{' '}
                <span className={styles.gradientText}>Serve</span>
              </h2>
              <p className={`${styles.sectionDescription} mt-4`}>
                Our ERP development services support organizations across multiple industries.
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
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#EC4899]/6 blur-[100px] rounded-full pointer-events-none" />

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
              <p className={`${styles.sectionDescription} mt-4`}>
                We develop ERP systems using modern technologies designed for security, scalability, and long-term performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techCategories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className={`rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-6 ${index === 4 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}
                    >
                      <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-full text-[#3B4456]"
                        style={{ background: `${cat.color}0f`, border: `1px solid ${cat.color}25` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our ERP Development Process */}
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
                Our ERP Development{' '}
                <span className={styles.gradientText}>Process</span>
              </h2>
            </motion.div>

            {processSteps.map((step, index) => {
              const color = PALETTE[index % PALETTE.length];
              const isReversed = index % 2 === 1;
              const isLast = index === processSteps.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.15 }}
                  className="relative mb-6 group"
                >
                  <div
                    className="relative rounded-3xl overflow-hidden border transition-all duration-500"
                    style={{ borderColor: `${color}26` }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{ background: `linear-gradient(${isReversed ? "to left" : "to right"}, ${color}, transparent)` }}
                    />
                    <div
                      className={`absolute top-0 bottom-0 w-1.5 ${isReversed ? "right-0 rounded-r-3xl" : "left-0 rounded-l-3xl"}`}
                      style={{ background: `linear-gradient(to bottom, ${color}, ${color})` }}
                    />
                    <div className={`absolute ${isReversed ? "-top-20 -right-20" : "-top-20 -left-20"} w-40 h-40 blur-[60px] rounded-full pointer-events-none`} style={{ background: `${color}1a` }} />

                    <div className={`relative flex flex-col md:flex-row${isReversed ? "-reverse" : ""} items-stretch`}>
                      <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                        <div className="relative z-10 flex flex-col items-center">
                          <span
                            className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                            style={{ background: `linear-gradient(180deg, ${color}4d, ${color}0d)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                          >
                            {step.number}
                          </span>
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 8px 30px ${color}59` }}
                          >
                            <step.icon className="w-7 h-7 text-white" />
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

                  {!isLast && (
                    <div className="hidden md:flex justify-center py-2">
                      <motion.div
                        className="w-[2px] h-10 rounded-full"
                        style={{ background: `linear-gradient(to bottom, ${color}, ${PALETTE[(index + 1) % PALETTE.length]})` }}
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
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
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

        {/* Benefits of Custom ERP Software */}
        <section
          ref={benefitsRef}
          className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-10 relative bg-[#F3F6FC]"
        >
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-[#C9A227]/20 bg-black/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-6 leading-tight text-center">
                Benefits of Custom{' '}
                <span className={styles.gradientText}>ERP Software</span>
              </h2>
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
                      className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="faq-answer text-[#3B4456] text-sm sm:text-base leading-relaxed">{faq.answer}</p>
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
                  Ready to Modernize Your Business with{' '}
                  <span className={styles.gradientText}>Custom ERP Software?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed"
                >
                  Managing multiple systems shouldn&apos;t slow your business down. Altiora Infotech develops custom ERP software that connects departments, automates operations, and provides real-time visibility across your organization. Whether you&apos;re replacing legacy software or building a modern enterprise platform, our team is ready to help.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm sm:text-base text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Schedule a consultation today to discuss your ERP requirements and discover how a custom-built ERP solution can improve efficiency, support growth, and simplify business management.
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
                    Schedule A Consultation Today
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
