"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  Eye,
  Search,
  Shield,
  TrendingUp,
  BarChart3,
  Target,
  Settings,
  Zap,
  FileText,
  Link as LinkIcon,
  Monitor,
  Star,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaHandshake,
  FaChartLine,
  FaKeyboard,
  FaCog,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import { iconGradient } from "@/lib/iconGradients";

// SEO Pillar Card Component
const SEOPillarCard = ({ pillar, className }: { pillar: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border transition-all duration-500 ${pillar.borderColor} ${pillar.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col shadow-sm hover:shadow-md`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#002387] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Pillar Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl ${pillar.iconBg} mb-6 relative z-10 shadow-md`}
        >
          <pillar.icon className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 ${pillar.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{pillar.name}</h3>
          <p className="text-[#3B4456] text-base md:text-lg mb-4 leading-relaxed flex-1">{pillar.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-white border border-slate-200/60">
            <div className="text-center">
              <div className={`text-2xl font-bold ${pillar.textColor}`}>{pillar.avgImprovement}</div>
              <div className="text-xs text-slate-500 font-medium">Avg. Improvement</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${pillar.textColor}`}>{pillar.timeline}</div>
              <div className="text-xs text-slate-500 font-medium">Timeline</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {pillar.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                <span className="text-xs sm:text-sm text-[#3B4456]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

// SEO Metrics Dashboard Component
const SEODashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Organic Traffic", value: "145K", change: "+67%", icon: TrendingUp },
    { label: "Keywords Ranking", value: "2,340", change: "+89%", icon: Search },
    { label: "Page 1 Rankings", value: "456", change: "+123%", icon: Star },
    { label: "Domain Authority", value: "78", change: "+34%", icon: Shield }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7F8FA] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradient(1)} flex items-center justify-center shadow-md`}>
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">SEO Performance</h3>
          <p className="text-slate-500 text-sm font-medium">Real-time organic growth metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index
                ? 'border-[#C9A227] bg-[#C9A227]/15 shadow-sm'
                : 'border-slate-200/80 bg-white'
                }`}
              animate={activeMetric === index ? { scale: 1.05 } : { scale: 1 }}
            >
              <Icon className="w-5 h-5 text-[#002387] mb-2" />
              <div className="text-2xl font-extrabold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-xs text-slate-500 mb-1">{metric.label}</div>
              <div className="text-xs font-bold text-[#002387]">{metric.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function SEOClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = 6;
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % total;
        if (sliderRef.current) {
          const cardWidth = sliderRef.current.scrollWidth / total;
          sliderRef.current.scrollTo({ left: cardWidth * next, behavior: "smooth" });
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const seoPillars = [
    {
      name: "On-Page SEO",
      icon: FileText,
      description: "Optimize every page to precisely match search intent, improve click-through rates, and convert organic visitors into qualified leads and revenue.",
      avgImprovement: "+145%",
      timeline: "2-4 months",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Search Intent Matching", "Meta Tag Optimization", "Heading Structure", "Internal Link Strategy", "Conversion Optimization", "Schema Markup"]
    },
    {
      name: "Technical SEO",
      icon: Settings,
      description: "Resolve crawl inefficiencies, indexation conflicts, Core Web Vitals issues, and performance bottlenecks that silently block your rankings.",
      avgImprovement: "+89%",
      timeline: "1-3 months",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Core Web Vitals", "Crawl Optimization", "Structured Data", "Site Speed", "Mobile Performance", "Index Management"]
    },
    {
      name: "Link Building",
      icon: LinkIcon,
      description: "Build domain authority through niche-relevant placements, digital PR, and strategic backlink acquisition that search engines trust and reward.",
      avgImprovement: "+178%",
      timeline: "3-6 months",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Contextual Backlinks", "Digital PR Campaigns", "Brand Mentions", "Guest Publishing", "Competitor Analysis", "Authority Signals"]
    },
    {
      name: "Content Strategy",
      icon: Monitor,
      description: "Build topical authority through structured content clusters engineered to match buyer intent and drive consistent, compounding organic demand.",
      avgImprovement: "+234%",
      timeline: "4-8 months",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Topic Cluster Strategy", "Keyword-Intent Mapping", "Content Gap Analysis", "Semantic Optimization", "E-E-A-T Signals", "Conversion Copy"]
    },
    {
      name: "Local SEO",
      icon: Globe,
      description: "Dominate local search results and Google Maps for high-intent queries in your service areas with geo-targeted optimization strategies.",
      avgImprovement: "+312%",
      timeline: "60-90 days",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Google Business Profile", "Local Citations", "NAP Consistency", "Review Management", "Local Landing Pages", "Proximity Signals"]
    },
    {
      name: "SEO Analytics",
      icon: BarChart3,
      description: "Track every ranking shift, traffic trend, and conversion path with real-time dashboards built to surface actionable insights not vanity data.",
      avgImprovement: "+95%",
      timeline: "Ongoing",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Rank Tracking", "Traffic Attribution", "Competitor Monitoring", "Conversion Reporting", "Algorithm Impact", "Monthly Roadmaps"]
    }
  ];

  const services = [
    {
      title: <>Keyword Research & <span className="text-[#002387]">Strategy</span></>,
      description: "We identify buyer-intent keywords at every decision stage to build rankings that grow toward high-value, competitive search terms that drive real revenue.",
      icon: <FaKeyboard className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>On-Page SEO <span className="text-[#002387]">Optimization</span></>,
      description: "We optimize intent matching, page structure, internal linking hierarchy, and conversion positioning for higher-quality organic traffic and better rankings.",
      icon: <FileText className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>Technical SEO & <span className="text-[#002387]">Indexability</span></>,
      description: "We resolve crawl inefficiencies, duplicate pages, rendering issues, and structured data gaps unlocking rankings already within reach of your domain.",
      icon: <Settings className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>Authority & <span className="text-[#002387]">Link Building</span></>,
      description: "We build topical authority through niche-relevant placements, entity signals, branded search growth, and strategic citation reinforcement.",
      icon: <LinkIcon className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>Local <span className="text-[#002387]">SEO</span></>,
      description: "We optimize business profile relevance, service area pages, local landing structure, and review consistency to dominate high-intent local searches.",
      icon: <Globe className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>SEO Analytics & <span className="text-[#002387]">Reporting</span></>,
      description: "Comprehensive dashboards with ranking tracking, traffic attribution, competitor insights, and prioritized monthly strategy roadmaps for continuous growth.",
      icon: <BarChart3 className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
  ];

  const whyChoosePoints = [
    {
      title: "Data-Driven Strategy",
      description: "Every decision is backed by advanced keyword intelligence, competitor gap analysis, and real conversion data eliminating guesswork and maximizing ROI on every dollar invested in organic growth.",
      icon: BarChart3,
    },
    {
      title: "Technical Excellence",
      description: "Deep technical SEO knowledge across crawl optimization, Core Web Vitals, structured data, and indexation control ensures search engines can fully interpret and rank your website.",
      icon: Settings,
    },
    {
      title: "Proven Results",
      description: "A track record of consistent organic growth across service businesses, SaaS platforms, and e-commerce stores with transparent reporting that connects SEO directly to pipeline and revenue.",
      icon: TrendingUp,
    },
    {
      title: "White-Hat Practices",
      description: "Ethical, algorithm-aligned SEO techniques that build sustainable authority no shortcuts, no penalties, no risky tactics. Every strategy is designed for compounding, long-term organic results.",
      icon: Shield,
    },
    {
      title: "Custom Reporting",
      description: "Clear, actionable monthly reports with ranking movements, traffic trends, conversion attribution, and prioritized next steps so you always know exactly what's working and what's next.",
      icon: Eye,
    },
    {
      title: "Algorithm Adaptability",
      description: "Continuous monitoring of Google's algorithm updates and search quality signals ensures your strategy evolves with the landscape protecting rankings and capitalizing on new opportunities.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full">
        <div className="absolute inset-0">
          <Image src="/images/services-bg/SEO.jpg.jpeg" alt="SEO Services" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs tracking-wider text-[#3B4456] shadow-sm backdrop-blur-sm">
                  <Search className="w-4 h-4 text-[#002387]" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                  Professional SEO
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  For Businesses That Need Consistent Leads Not Just Traffic
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#C9A227] to-[#B18B1E] text-[#001A66] hover:shadow-lg hover:shadow-[#C9A227]/25 focus:shadow-lg focus:shadow-[#C9A227]/25 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105 w-[60%] sm:w-auto">
                    Get SEO Growth Plan
                    <FaRocket className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
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
            className="rounded-3xl border border-[#C9A227]/30 bg-[#F7F8FA] p-6 sm:p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#B18B1E] font-extrabold text-xs uppercase tracking-[0.2em]">
                <span className="h-2 w-2 rounded-full bg-[#C9A227] animate-pulse" />
                Quick Answer
              </span>
            </div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-4 leading-tight">
              What are SEO services and what do they actually deliver?
            </h2>
            <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mb-6">
              SEO services are an ongoing programme of technical, content and authority work that improves your website&apos;s ranking in <span className="text-[#002387] font-semibold">Google</span>, <span className="text-[#002387] font-semibold">Bing</span> and AI-powered search engines like ChatGPT and Perplexity. Altiora Infotech delivers technical audits, keyword strategy, on-page optimization, local SEO, link building and monthly performance reporting, tuned for traditional search, AEO and GEO together.
            </p>
            <p className="text-slate-900 text-sm sm:text-base font-bold mb-3">Core deliverables in our SEO programme:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Technical SEO audit and ongoing fixes",
                "Keyword research and search-intent mapping",
                "On-page optimization and content production",
                "Local SEO and Google Business Profile management",
                "Link building and digital PR for authority",
                "AEO and GEO optimization for AI search engines",
                "Core Web Vitals and page-speed improvements",
                "Monthly reporting tied to traffic, leads and revenue",
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
        ref={overviewRef}
        className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#C9A227]/60 to-transparent" />
              <span className="text-[#B18B1E] font-extrabold text-sm sm:text-base uppercase tracking-[0.3em] bg-[#C9A227]/15 px-4 py-1.5 rounded-full border border-[#C9A227]/40">
                Overview
              </span>
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#C9A227]/60 to-transparent" />
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[32px] border border-[#C9A227]/30 bg-[#F7F8FA] shadow-sm relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 text-[#3B4456] font-medium`}>
                  Our <Link href="/" className="text-[#002387] font-bold hover:underline">SEO Services</Link> help businesses turn their website into a reliable acquisition channel through search-intent optimization, technical authority, and long-term ranking strategy. We go beyond keyword rankings we build the organic infrastructure that consistently attracts, engages, and converts your ideal customers. Best suited for service businesses, local companies, SaaS platforms, and high-ticket providers looking for predictable, compounding organic growth.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Pillars Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900">
              <span className="text-[#C9A227]">SEO</span> Growth Pillars We Master
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              Strategic frameworks engineered to increase qualified organic demand not just traffic numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoPillars.map((pillar, index) => (
              <SEOPillarCard key={index} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Performance Dashboard */}
      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900">
                Real-Time SEO Performance
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-8 leading-relaxed">
                Track your organic growth with our comprehensive SEO analytics dashboard. Monitor rankings, traffic, and conversions across all your target keywords in real-time.
              </p>
              <div className="space-y-4">
                {[
                  "Live keyword ranking tracking across all search engines",
                  "Organic traffic growth and user behavior analytics",
                  "Competitor analysis and market share insights",
                  "Technical SEO health monitoring and alerts"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-[#3B4456] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SEODashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900 text-center">
              Our SEO Services & <span className="text-[#C9A227]">What We Do</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              Comprehensive SEO solutions designed to turn your website into a reliable, high-converting organic acquisition channel.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  hideServiceTag={true}
                  iconVariant="gray"
                />
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  hideServiceTag={true}
                  iconVariant="gray"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO */}
      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900">
              Why Choose Our <span className="text-[#C9A227]">SEO Services</span>?
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with proven strategies to deliver SEO results that drive sustainable organic growth and real revenue.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#C9A227]/60 flex flex-col overflow-hidden">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradient(index)} flex items-center justify-center mb-5 flex-shrink-0 shadow-md`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-base text-[#3B4456] leading-relaxed flex-1">
                      {point.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
              {whyChoosePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="group relative flex-shrink-0 w-[82vw] snap-start">
                    <div className="relative h-full p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:border-[#C9A227]/50 flex flex-col overflow-hidden">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradient(index)} flex items-center justify-center mb-5 flex-shrink-0 shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                      <p className="text-base text-[#3B4456] leading-relaxed flex-1">{point.description}</p>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {whyChoosePoints.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#C9A227]" : "w-2 bg-slate-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process Timeline */}
      <ProcessTimeline
        title="Our SEO <span className='text-[#002387]'>Process</span>"
        subtitle="A strategic approach that transforms your website into a search engine authority and organic traffic generator."
        steps={[
          {
            step: "01",
            title: "SEO Audit & Analysis",
            description: "Comprehensive website analysis, technical SEO assessment, and competitive landscape evaluation to uncover the highest-value ranking opportunities.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Keyword Research & Strategy",
            description: "In-depth keyword analysis, search intent mapping, and content gap identification for maximum organic potential and buyer-aligned visibility.",
            icon: Target,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "03",
            title: "Technical SEO Implementation",
            description: "Site structure optimization, Core Web Vitals improvements, mobile responsiveness, and complete technical issue resolution for full crawlability.",
            icon: Settings,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "04",
            title: "Content Optimization",
            description: "On-page optimization, content creation, semantic keyword integration, and user experience enhancement aligned with conversion goals.",
            icon: FileText,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Link Building & Authority",
            description: "Strategic link acquisition, digital PR campaigns, and domain authority building initiatives that strengthen your site's topical trust.",
            icon: LinkIcon,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Monitoring & Optimization",
            description: "Performance tracking, ranking monitoring, and continuous optimization for sustained, compounding organic growth month over month.",
            icon: BarChart3,
            color: "from-indigo-500 to-purple-500"
          }
        ]}
      />

      {/* Why Work With Altiora */}
      <section className="px-4 md:px-6 py-24 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 mb-4">
              Why Work With <span className="text-[#C9A227]">Altiora Infotech</span>?
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              Partner with SEO experts who deliver sustainable organic growth and measurable, revenue-linked results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Proven Results Track record of improving organic rankings and driving qualified traffic growth consistently.", icon: FaChartLine },
              { text: "White-Hat Techniques Ethical SEO practices that comply with search engine guidelines and algorithm updates.", icon: FaShieldAlt },
              { text: "Technical Expertise Advanced technical SEO knowledge and implementation capabilities across all platforms.", icon: FaCog },
              { text: "Data-Driven Approach Analytics-based strategies with measurable results and comprehensive ROI tracking.", icon: FaCode },
              { text: "Industry Experience Deep understanding of SEO across various business verticals and market segments.", icon: FaNetworkWired },
              { text: "Ongoing Support Continuous optimization and adaptation to algorithm changes and evolving market trends.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-green-500 to-emerald-500', 'from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-red-500 to-orange-500', 'from-yellow-500 to-orange-500', 'from-teal-500 to-cyan-500'];
              const titles = ['Proven', 'White-Hat', 'Technical', 'Data-Driven', 'Industry', 'Ongoing'];
              const subtitles = ['Results', 'Techniques', 'Expertise', 'Approach', 'Experience', 'Support'];
              return (
                <div key={index} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-slate-200/80 bg-[#F7F8FA] backdrop-blur-sm p-4 md:p-6 transition-all duration-300 hover:bg-white hover:border-[#002387]/40 hover:shadow-md hover:-translate-y-1">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-md`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#C9A227] transition-colors duration-300">{titles[index]}</h3>
                          <span className="text-sm text-slate-500 font-medium">{subtitles[index]}</span>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg text-[#3B4456] group-hover:text-slate-900 transition-colors duration-300">{benefit.text}</p>
                      <div className="mt-3 md:mt-4 h-1 w-full bg-slate-200/80 rounded-full overflow-hidden hidden md:block">
                        <div className={`h-full w-0 bg-gradient-to-r ${colors[index]} transition-all duration-700 group-hover:w-full rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative p-8 sm:p-12 md:p-16 text-center rounded-3xl border border-[#C9A227]/30 bg-gradient-to-br from-[#001A66] via-[#002387] to-[#001A66] text-white shadow-xl overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 mb-8 mx-auto shadow-md">
                <Search className="w-10 h-10 text-[#C9A227]" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Ready to Dominate Search Results?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 leading-relaxed">
                Transform your website&apos;s search visibility with our comprehensive SEO services. At Altiora Infotech, we combine technical expertise with proven strategies to deliver sustainable organic growth and improved search rankings that turn visitors into customers.
              </p>
              <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                Ready to climb the search rankings? Share your website and goals, and we&apos;ll provide a comprehensive SEO strategy: technical audit findings, keyword opportunities, content recommendations, and a clear roadmap to search success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] shadow-lg shadow-[#C9A227]/25 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book SEO Audit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get SEO Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
