'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Apple,
  Layers,
  PenTool,
  RefreshCw,
  Briefcase,
  ShoppingCart,
  HeartPulse,
  Truck,
  GraduationCap,
  Wallet,
  Search,
  Code2,
  ShieldCheck,
  Rocket,
  Wrench,
  Cloud,
  Boxes,
  Globe,
  Building2,
  Landmark,
  Factory,
  Users,
  Eye,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../mobile-app-development-company-canada.module.css";

const STEP_COLORS = ["#C9A227", "#EC4899", "#3B82F6", "#10B981", "#8B5CF6"];

export default function MobileAppDevelopmentClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [appsRef, appsInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
      icon: Boxes,
      title: "Custom Mobile App Development",
      description: "Every business has unique requirements. We develop custom mobile applications that align with your operational processes, customer expectations, and long-term business strategy.",
      intro: "Our services include:",
      items: [
        "Business mobile applications",
        "Customer-facing mobile apps",
        "Enterprise mobility solutions",
        "On-demand service applications",
        "SaaS mobile applications",
        "Custom digital products",
      ],
      color: "#C9A227",
    },
    {
      icon: Apple,
      title: "iOS App Development",
      description: "Create premium applications for Apple's ecosystem using modern development standards.",
      intro: "Our iOS development services include:",
      items: [
        "Native iPhone applications",
        "iPad applications",
        "Swift development",
        "Apple ecosystem integration",
        "App Store deployment",
        "Performance optimization",
      ],
      color: "#EC4899",
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Develop scalable Android applications designed for millions of users across a wide range of devices.",
      intro: "Solutions include:",
      items: [
        "Native Android applications",
        "Kotlin development",
        "Java development",
        "Android tablet applications",
        "Google Play deployment",
        "Device optimization",
      ],
      color: "#3B82F6",
    },
    {
      icon: Layers,
      title: "Cross-Platform App Development",
      description: "Reduce development time and costs with applications that run seamlessly across multiple platforms.",
      intro: "Technologies include:",
      items: [
        "Flutter",
        "React Native",
        "Progressive Web Apps (PWAs)",
        "Shared code architecture",
        "Multi-platform deployment",
      ],
      color: "#10B981",
    },
    {
      icon: PenTool,
      title: "UI/UX Design for Mobile Apps",
      description: "User experience is critical to application success. Our designers create intuitive, visually appealing interfaces focused on usability and engagement.",
      intro: "Services include:",
      items: [
        "Wireframing",
        "Interactive prototypes",
        "User journey mapping",
        "Interface design",
        "Accessibility optimization",
        "Design systems",
      ],
      color: "#8B5CF6",
    },
    {
      icon: RefreshCw,
      title: "Mobile App Modernization",
      description: "Already have an application? We modernize outdated apps by improving performance, redesigning interfaces, updating technologies, and adding new features.",
      intro: "",
      items: [] as string[],
      color: "#C9A227",
    },
  ];

  const appsWeBuild = [
    {
      icon: Briefcase,
      title: "Business Applications",
      description: "Improve internal collaboration, automate workflows, and increase operational efficiency.",
      gradient: "from-[#C9A227] to-[#FF9F43]",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Apps",
      description: "Deliver seamless shopping experiences with secure payment integration, inventory management, and personalized recommendations.",
      gradient: "from-[#3B82F6] to-[#06B6D4]",
    },
    {
      icon: HeartPulse,
      title: "Healthcare Applications",
      description: "Build secure healthcare apps for patient engagement, appointment scheduling, telemedicine, and health record management.",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      icon: Truck,
      title: "Logistics & Delivery Apps",
      description: "Manage deliveries, fleet tracking, driver management, and real-time shipment monitoring.",
      gradient: "from-[#10B981] to-[#06B6D4]",
    },
    {
      icon: GraduationCap,
      title: "Education Applications",
      description: "Create engaging e-learning platforms with virtual classrooms, assessments, and student management features.",
      gradient: "from-[#EC4899] to-[#C9A227]",
    },
    {
      icon: Wallet,
      title: "FinTech Applications",
      description: "Develop secure financial applications with payment processing, transaction management, budgeting tools, and account management.",
      gradient: "from-[#C9A227] to-[#10B981]",
    },
  ];

  const industries = [
    { text: "Healthcare", icon: HeartPulse, color: "#C9A227" },
    { text: "Real Estate", icon: Building2, color: "#EC4899" },
    { text: "Finance", icon: Landmark, color: "#3B82F6" },
    { text: "Insurance", icon: ShieldCheck, color: "#10B981" },
    { text: "Retail", icon: ShoppingCart, color: "#8B5CF6" },
    { text: "E-commerce", icon: Globe, color: "#C9A227" },
    { text: "Education", icon: GraduationCap, color: "#EC4899" },
    { text: "Logistics", icon: Truck, color: "#3B82F6" },
    { text: "Manufacturing", icon: Factory, color: "#10B981" },
    { text: "Hospitality", icon: Briefcase, color: "#8B5CF6" },
    { text: "Construction", icon: Wrench, color: "#C9A227" },
    { text: "Professional Services", icon: Users, color: "#EC4899" },
    { text: "Government", icon: Landmark, color: "#3B82F6" },
    { text: "Technology", icon: Code2, color: "#10B981" },
    { text: "SaaS Companies", icon: Cloud, color: "#8B5CF6" },
  ];

  const techCategories = [
    { name: "Native Development", items: ["Swift", "Kotlin", "Java"], color: "#C9A227" },
    { name: "Cross-Platform Frameworks", items: ["Flutter", "React Native"], color: "#EC4899" },
    { name: "Frontend", items: ["React", "Next.js"], color: "#3B82F6" },
    { name: "Backend", items: ["Node.js", "Python", "Laravel", ".NET"], color: "#10B981" },
    { name: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "MySQL"], color: "#8B5CF6" },
    { name: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud Platform"], color: "#C9A227" },
    { name: "API Integration", items: ["REST APIs", "GraphQL", "Firebase Services", "Third-party API Integration"], color: "#EC4899" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin by understanding your business goals, target audience, technical requirements, and market opportunities.",
      icon: Search,
    },
    {
      number: "02",
      title: "Product Planning & UI/UX Design",
      description: "Our team creates wireframes, user flows, prototypes, and interface designs focused on delivering an exceptional user experience.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Application Development",
      description: "Developers build secure, scalable, and high-performance applications using modern technologies and agile methodologies.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Every application undergoes extensive testing, including functional testing, usability testing, security validation, and performance optimization.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Deployment",
      description: "We publish applications to the Apple App Store and Google Play Store while ensuring compliance with platform guidelines.",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Maintenance & Continuous Improvement",
      description: "After launch, we provide monitoring, updates, feature enhancements, bug fixes, and ongoing optimization to keep your application performing at its best.",
      icon: Wrench,
    },
  ];

  const whyChoose = [
    {
      icon: Smartphone,
      title: "Custom Mobile Solutions",
      description: "Applications tailored to your business objectives and workflows",
      gradient: "from-[#C9A227] to-[#FF9F43]",
    },
    {
      icon: Layers,
      title: "Native & Cross-Platform Expertise",
      description: "Development for iOS, Android, Flutter, and React Native",
      gradient: "from-[#3B82F6] to-[#06B6D4]",
    },
    {
      icon: Eye,
      title: "User-Centered Design",
      description: "Intuitive interfaces that improve engagement and retention",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      icon: Cloud,
      title: "Scalable Architecture",
      description: "Cloud-ready applications built for long-term growth",
      gradient: "from-[#10B981] to-[#06B6D4]",
    },
    {
      icon: ShieldCheck,
      title: "Secure Development",
      description: "Enterprise-grade security, encrypted data, and secure authentication",
      gradient: "from-[#EC4899] to-[#C9A227]",
    },
    {
      icon: Rocket,
      title: "End-to-End Delivery",
      description: "Strategy, design, development, deployment, and ongoing support",
      gradient: "from-[#C9A227] to-[#10B981]",
    },
  ];

  const benefits = [
    "Increase customer engagement",
    "Improve accessibility and convenience",
    "Strengthen brand presence",
    "Automate business processes",
    "Enhance customer loyalty",
    "Generate new revenue opportunities",
    "Improve operational efficiency",
    "Support remote work and field operations",
    "Deliver personalized user experiences",
    "Scale your digital business effectively",
  ];

  const faqs = [
    {
      question: "Should I build a native or cross-platform mobile app?",
      answer: "The right approach depends on your business goals, budget, performance requirements, and timeline. We help you choose the most suitable technology based on your project.",
    },
    {
      question: "Can you develop apps for both Android and iOS?",
      answer: "Yes. We build native applications for both platforms as well as cross-platform applications using Flutter and React Native.",
    },
    {
      question: "Can you integrate my mobile app with existing business software?",
      answer: "Absolutely. We integrate mobile applications with CRM systems, ERP platforms, payment gateways, cloud services, APIs, and third-party software.",
    },
    {
      question: "Will you help publish the app to the App Store and Google Play?",
      answer: "Yes. We manage the submission, review, and deployment process for both app stores while ensuring compliance with platform requirements.",
    },
    {
      question: "Is my application secure?",
      answer: "Yes. Security is built into every application through encrypted communication, secure authentication, role-based access control, and secure coding practices.",
    },
    {
      question: "Do you provide maintenance after launch?",
      answer: "Yes. We offer long-term support including feature enhancements, performance monitoring, operating system updates, bug fixes, and ongoing maintenance.",
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
                  Mobile App Development{' '}
                  <span className={styles.gradientText}>
                    Company Canada
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-3 sm:mb-4"
                >
                  Transform Your Ideas into Powerful Mobile Applications
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 }}
                  className="text-sm sm:text-base text-[#3B4456] mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
                >
                  Mobile applications have become an essential part of how businesses connect with customers, streamline operations, and create new revenue opportunities. Whether you&apos;re launching a startup, digitizing internal business processes, or expanding your existing digital ecosystem, a professionally developed mobile application can help you deliver seamless user experiences and stay competitive in today&apos;s digital landscape.
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
                          <Smartphone className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
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
                        { Icon: Code2, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Apple, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Cloud, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: ShieldCheck, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
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
                What does a mobile app development company do?
              </h2>
              <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mb-6">
                At Altiora Infotech, we are a trusted mobile app development company in Canada delivering custom mobile applications for startups, SMEs, and enterprise organizations. Our team designs and develops secure, scalable, and high-performance applications for iOS, Android, and cross-platform environments that align with your business objectives and user expectations.
              </p>
              <p className="text-[#3B4456] text-sm sm:text-base font-semibold mb-3">Our Mobile App Development Services:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Custom Mobile App Development",
                  "iOS App Development",
                  "Android App Development",
                  "Cross-Platform App Development",
                  "UI/UX Design for Mobile Apps",
                  "Mobile App Modernization",
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
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-black/5 bg-black/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    We combine strategic planning, intuitive UI/UX design, modern development frameworks, and cloud-native architectures to create mobile solutions that are reliable, scalable, and easy to maintain. From customer-facing applications and eCommerce platforms to enterprise mobility solutions and SaaS products, we build applications that solve real business problems and deliver measurable value.
                    <br />
                    Whether you need a native mobile app, a cross-platform solution, or a complete digital product from concept to launch, Altiora Infotech provides end-to-end mobile application development services tailored to your industry and growth goals.
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
                Our Mobile App Development{' '}
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
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-[#3B4456] transition-colors">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-[#3B4456] transition-colors mb-2">{service.description}</p>
                      {service.items.length > 0 && (
                        <>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mb-1.5">{service.intro}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {service.items.map((item, i) => (
                              <span
                                key={i}
                                className="text-[11px] sm:text-xs text-[#3B4456] px-2.5 py-1 rounded-full border"
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

        {/* Mobile Applications We Build */}
        <section ref={appsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={appsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Mobile Applications We{' '}
                <span className={styles.gradientText}>Build</span>
              </h2>
              <p className={`${styles.sectionDescription} mt-4`}>
                Our developers create applications across multiple industries and business models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {appsWeBuild.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={appsInView ? { opacity: 1, y: 0 } : {}}
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
                background: ['#C9A227', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6'][i % 5],
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
                Our mobile app development services support businesses across various industries.
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
        <section ref={techRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#3B82F6]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#C9A227]/6 blur-[100px] rounded-full pointer-events-none" />

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
                Our mobile applications are built using modern technologies that ensure performance, security, and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden border p-6"
                  style={{ borderColor: `${category.color}20`, background: `linear-gradient(160deg, ${category.color}08, transparent 70%)` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${category.color}, transparent)` }}
                  />
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider mb-4" style={{ color: category.color }}>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm text-[#3B4456] px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.04]"
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

        {/* Process Section */}
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
                Our Mobile App Development{' '}
                <span className={styles.gradientText}>Process</span>
              </h2>
            </motion.div>

            {processSteps.map((step, index) => {
              const color = STEP_COLORS[index % STEP_COLORS.length];
              const isReversed = index % 2 === 1;
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.15 }}
                  className={`relative group ${index < processSteps.length - 1 ? 'mb-6' : ''}`}
                >
                  <div
                    className="relative rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-[0_0_50px_rgba(244,204,111,0.08)]"
                    style={{ borderColor: `${color}25` }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: isReversed ? `linear-gradient(to left, ${color}14, transparent)` : `linear-gradient(to right, ${color}14, transparent)` }}
                    />
                    <motion.div
                      className={`absolute ${isReversed ? 'right-0 rounded-r-3xl' : 'left-0 rounded-l-3xl'} top-0 bottom-0 w-1.5`}
                      style={{ background: `linear-gradient(to bottom, ${color}, #ffffff40, ${color})`, backgroundSize: "100% 200%" }}
                      animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div
                      className={`absolute -top-20 ${isReversed ? '-right-20' : '-left-20'} w-40 h-40 blur-[60px] rounded-full pointer-events-none group-hover:opacity-150 transition-all duration-500`}
                      style={{ background: `${color}10` }}
                    />

                    <div className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch`}>
                      <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                        <div className="relative z-10 flex flex-col items-center">
                          <motion.span
                            className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                            style={{ background: `linear-gradient(180deg, ${color}4d, ${color}0d)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                          >
                            {step.number}
                          </motion.span>
                          <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                            style={{ background: `linear-gradient(135deg, ${color}, #ffffff30)`, boxShadow: `0 8px 30px ${color}55` }}
                            whileHover={{ scale: 1.1, rotate: isReversed ? 5 : -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <StepIcon className="w-7 h-7 text-[#001A66]" />
                          </motion.div>
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
                        style={{ background: `linear-gradient(to bottom, ${color}, ${STEP_COLORS[(index + 1) % STEP_COLORS.length]})` }}
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

        {/* Benefits of Mobile App Development */}
        <section ref={benefitsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F3F6FC]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FC] via-white to-[#F3F6FC]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className={styles.sectionHeading}>
                Benefits of Mobile{' '}
                <span className={styles.gradientText}>App Development</span>
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
                      className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
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
                  Ready to Build Your{' '}
                  <span className={styles.gradientText}>Mobile Application?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed"
                >
                  Whether you&apos;re launching a customer-facing app, digitizing business operations, or creating an innovative SaaS product, Altiora Infotech delivers mobile applications that are secure, scalable, and designed for long-term success.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm sm:text-base text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Book a consultation today to discuss your mobile app project and discover how our development team can turn your vision into a high-performing digital product.
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
