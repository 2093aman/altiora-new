"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  CheckCircle,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Eye,
  Compass,
  BookOpen,
  Layers,
  Users,
  MessageSquare,
  Shield,
  Star,
  Award,
  Globe,
  RefreshCw,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

const BrandingServiceCard = ({ item, className }: { item: any; className?: string }) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${className || ""}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border transition-all duration-500 ${item.borderColor} bg-white shadow-lg backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4cc6f] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1945a6] rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <motion.div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.iconBg} mb-6 relative z-10 shadow-md`}>
          <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`} />
        </motion.div>
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: item.highlightedName }} />
          <p className="text-slate-700 text-base md:text-lg mb-4 leading-relaxed flex-1">{item.description}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${item.textColor}`}>{item.stat1}</div>
              <div className="text-xs text-slate-600">{item.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${item.textColor}`}>{item.stat2}</div>
              <div className="text-xs text-slate-600">{item.stat2Label}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {item.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f4cc6f]" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      </div>
    </motion.div>
  );
};

const BrandImpactWidget = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: "Brand Recognition", value: "+127%", change: "Avg increase", icon: Star },
    { label: "Customer Trust", value: "+89%", change: "Trust score lift", icon: Shield },
    { label: "Market Position", value: "Top 10%", change: "Industry ranking", icon: TrendingUp },
    { label: "Revenue Impact", value: "3x", change: "ROI on branding", icon: BarChart3 },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#F8FAFC] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-black/10 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center shadow-md">
          <Award className="w-6 h-6 text-[#010c22]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Brand Impact Metrics</h3>
          <p className="text-slate-600 text-sm">Average results after branding</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index ? "border-[#1945a6] bg-[#1945a6]/10 shadow-md" : "border-black/10 bg-white"}`}
              animate={activeMetric === index ? { scale: 1.05 } : { scale: 1 }}
            >
              <Icon className="w-5 h-5 text-[#1945a6] mb-2" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-xs text-slate-600 mb-1">{metric.label}</div>
              <div className="text-xs font-semibold text-[#1945a6]">{metric.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function BrandingClientPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const brandingAreas = [
    {
      highlightedName: "Brand <span class='text-[#1945a6]'>Strategy</span>",
      icon: Compass,
      description: "The strategic foundation that defines who you are, what you stand for, and why customers should choose you over every competitor.",
      stat1: "100%",
      stat1Label: "Research-Led",
      stat2: "Long",
      stat2Label: "Term Impact",
      borderColor: "border-[#1945a6]/20",
      bgGradient: "bg-white",
      iconBg: "bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c]",
      iconColor: "text-[#010c22]",
      textColor: "text-[#1945a6]",
      hoverGradient: "bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5",
      features: ["Mission & Vision", "Brand Values", "Competitive Analysis", "Target Audience", "Positioning Statement", "Brand Architecture"],
    },
    {
      highlightedName: "Visual <span class='text-[#1945a6]'>Identity</span>",
      icon: Layers,
      description: "A cohesive visual system logo, colors, typography, and imagery that makes your brand instantly recognizable and visually compelling.",
      stat1: "500+",
      stat1Label: "Brands Built",
      stat2: "98%",
      stat2Label: "Satisfaction",
      borderColor: "border-[#1945a6]/20",
      bgGradient: "bg-white",
      iconBg: "bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c]",
      iconColor: "text-[#010c22]",
      textColor: "text-[#1945a6]",
      hoverGradient: "bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5",
      features: ["Logo Design", "Color Palette", "Typography System", "Imagery Style", "Icon Library", "Visual Language"],
    },
    {
      highlightedName: "Brand <span class='text-[#1945a6]'>Messaging</span>",
      icon: MessageSquare,
      description: "Your brand's voice, tone, and language crafted to resonate deeply with your target audience and communicate your value with clarity.",
      stat1: "Clear",
      stat1Label: "Value Prop",
      stat2: "Unified",
      stat2Label: "Voice & Tone",
      borderColor: "border-[#1945a6]/20",
      bgGradient: "bg-white",
      iconBg: "bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c]",
      iconColor: "text-[#010c22]",
      textColor: "text-[#1945a6]",
      hoverGradient: "bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5",
      features: ["Brand Voice", "Tagline Creation", "Value Proposition", "Key Messages", "Tone of Voice", "Copywriting Framework"],
    },
    {
      highlightedName: "Brand <span class='text-[#1945a6]'>Guidelines</span>",
      icon: BookOpen,
      description: "Comprehensive brand standards documentation that ensures perfect consistency across every team member, agency, and platform your brand touches.",
      stat1: "Full",
      stat1Label: "Documentation",
      stat2: "Team",
      stat2Label: "Ready",
      borderColor: "border-[#1945a6]/20",
      bgGradient: "bg-white",
      iconBg: "bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c]",
      iconColor: "text-[#010c22]",
      textColor: "text-[#1945a6]",
      hoverGradient: "bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5",
      features: ["Logo Usage Rules", "Color Codes", "Typography Specs", "Do's & Don'ts", "Application Examples", "Digital & Print"],
    },
    {
      highlightedName: "Brand <span class='text-[#1945a6]'>Positioning</span>",
      icon: Target,
      description: "Define and own your unique market position the specific place in your customer's mind where your brand lives and why you're the obvious choice.",
      stat1: "Market",
      stat1Label: "Differentiation",
      stat2: "Customer",
      stat2Label: "Clarity",
      borderColor: "border-[#1945a6]/20",
      bgGradient: "bg-white",
      iconBg: "bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c]",
      iconColor: "text-[#010c22]",
      textColor: "text-[#1945a6]",
      hoverGradient: "bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5",
      features: ["Market Research", "Competitor Analysis", "Positioning Map", "Unique Differentiators", "Perception Strategy", "Customer Promise"],
    },
    {
      highlightedName: "Brand <span class='text-[#1945a6]'>Relaunch</span>",
      icon: RefreshCw,
      description: "Modernize and reposition established brands for new audiences, changing markets, or business pivots without losing existing brand equity.",
      stat1: "Fresh",
      stat1Label: "Market Entry",
      stat2: "Equity",
      stat2Label: "Preserved",
      borderColor: "border-[#1945a6]/20",
      bgGradient: "bg-white",
      iconBg: "bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c]",
      iconColor: "text-[#010c22]",
      textColor: "text-[#1945a6]",
      hoverGradient: "bg-gradient-to-br from-[#1945a6]/5 to-[#f4cc6f]/5",
      features: ["Brand Audit", "Repositioning Strategy", "Visual Refresh", "Message Evolution", "Audience Expansion", "Launch Planning"],
    },
  ];

  const services = [
    {
      title: <>Brand <span className="text-[#1945a6]">Strategy</span></>,
      description: "A comprehensive brand strategy defining your mission, values, positioning, and competitive differentiation to guide every business decision.",
      icon: <Compass className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Visual <span className="text-[#1945a6]">Identity</span></>,
      description: "Complete visual identity systems logo, colors, typography, and imagery that make your brand instantly recognizable across all touchpoints.",
      icon: <Layers className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Brand <span className="text-[#1945a6]">Messaging</span></>,
      description: "Compelling brand voice, taglines, value propositions, and messaging frameworks that communicate your unique value with clarity and confidence.",
      icon: <MessageSquare className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Brand <span className="text-[#1945a6]">Guidelines</span></>,
      description: "Comprehensive brand standards documentation ensuring perfect consistency across every team, agency, and platform your brand appears on.",
      icon: <BookOpen className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Brand <span className="text-[#1945a6]">Positioning</span></>,
      description: "Strategic market positioning that carves out your unique space in the competitive landscape and makes you the obvious choice for your ideal customer.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Brand <span className="text-[#1945a6]">Audit</span></>,
      description: "A thorough analysis of your current brand health, perception gaps, and opportunities the essential first step before any brand evolution.",
      icon: <Eye className="w-12 h-12" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Strategic Foundation",
      description: "Every branding decision we make is rooted in research, competitive analysis, and a deep understanding of your target audience's psychology and decision-making.",
      icon: Compass,
    },
    {
      title: "Consistent Identity",
      description: "We build visual and messaging systems that maintain perfect consistency across every touchpoint from social media to print to packaging to website.",
      icon: Layers,
    },
    {
      title: "Memorable Positioning",
      description: "We help you own a distinct, ownable position in the market that makes your brand the first and only name that comes to mind for your ideal customer.",
      icon: Target,
    },
    {
      title: "Audience Clarity",
      description: "Deep understanding of your target audience's motivations, fears, and aspirations ensures your brand speaks directly to the people most likely to buy from you.",
      icon: Users,
    },
    {
      title: "Long-Term Value",
      description: "Great branding is an investment, not an expense. We build brands that appreciate in value over time, reducing customer acquisition costs and commanding premium pricing.",
      icon: TrendingUp,
    },
    {
      title: "Expert Team",
      description: "Seasoned brand strategists, designers, and copywriters who've built brands across industries bringing the depth of expertise your brand deserves.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full"
      >
        <div className="absolute inset-0">
          <Image src="/images/services-bg/Branding.jpg.jpeg" alt="Branding Services" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Branding Services
                  <br />
                  That Build Trust
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Shape Perception, Build Authority & Drive Business Growth
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-[60%] sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                  >
                    Build Your Brand
                    <FaRocket className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={overviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#1945a6]/50 to-transparent" />
              <span className={styles.overviewTitle}>Overview</span>
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#1945a6]/50 to-transparent" />
            </div>
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[40px] border border-black/10 bg-[#F8FAFC] backdrop-blur-xl shadow-md relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-slate-800`}>
                  Your brand is the most valuable asset your business owns yet most businesses treat it as an afterthought. At Altiora Infotech, we build <Link href="/" className="text-[#1945a6] font-semibold hover:underline">brands</Link> that shape perception, command premium pricing, and create the kind of deep customer trust that drives long-term business growth. From brand strategy and visual identity to messaging frameworks and brand guidelines, we craft every element with strategic intent ensuring your brand doesn't just look good, but actively works to grow your business.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#1945a6]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Branding Areas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
              Branding <span className="text-[#1945a6]">Solutions</span> We Deliver
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive branding services that build cohesive, powerful brand identities from strategy through execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingAreas.map((item, index) => (
              <BrandingServiceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                Branding That Delivers <span className="text-[#1945a6]">Measurable Results</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                Strong branding isn't just about looking good it's a business multiplier. Businesses with consistent, strategic branding see dramatically higher customer trust, faster sales cycles, and the ability to command premium prices in their market.
              </p>
              <div className="space-y-4">
                {[
                  "127% average increase in brand recognition after rebrand",
                  "3x higher revenue impact from consistent brand identity",
                  "89% boost in customer trust and perceived credibility",
                  "Reduced customer acquisition costs through brand authority",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <BrandImpactWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 text-center">
              Our Branding <span className="text-[#1945a6]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              End-to-end branding solutions designed to build a powerful brand identity that attracts your ideal customers and drives business growth.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} />
            ))}
          </div>
          <div className="block md:hidden grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
              Why Choose Our <span className="text-[#1945a6]">Branding Services?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We build brands that don't just look impressive they actively work to grow your business and command premium market positioning.
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative">
                  <div className="relative h-full p-6 rounded-2xl border border-black/10 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#1945a6]/40 flex flex-col overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center mb-5 flex-shrink-0 shadow-md">
                      <Icon className="w-7 h-7 text-[#010c22]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1945a6] transition-colors duration-300">{point.title}</h3>
                    <p className="text-base text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 flex-1">{point.description}</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1945a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="md:hidden">
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
              {whyChoosePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="group relative flex-shrink-0 w-[82vw] snap-start">
                    <div className="relative h-full p-6 rounded-2xl border border-black/10 bg-white shadow-md hover:border-[#1945a6]/40 flex flex-col overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center mb-5 flex-shrink-0 shadow-md">
                        <Icon className="w-7 h-7 text-[#010c22]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                      <p className="text-base text-slate-700 leading-relaxed flex-1">{point.description}</p>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1945a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {whyChoosePoints.map((_, index) => (
                <div key={index} className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#1945a6]" : "w-2 bg-black/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Our Branding Process"
        subtitle="A strategic, research-led approach that builds powerful brand identities from the ground up with measurable results at every stage."
        steps={[
          { step: "01", title: "Brand Discovery", description: "Deep-dive sessions to understand your business, values, competitive landscape, and target audience psychology before any creative work begins.", icon: Eye, color: "from-blue-500 to-cyan-500" },
          { step: "02", title: "Strategy Development", description: "Build your brand positioning, messaging framework, value proposition, and competitive differentiation strategy backed by research.", icon: Compass, color: "from-purple-500 to-pink-500" },
          { step: "03", title: "Visual Identity Design", description: "Create your logo, color palette, typography system, and visual language that embodies your brand strategy and resonates with your audience.", icon: Layers, color: "from-green-500 to-emerald-500" },
          { step: "04", title: "Messaging & Voice", description: "Develop your brand voice, tone, tagline, and key messaging framework that communicates your value clearly and compellingly across all channels.", icon: MessageSquare, color: "from-yellow-500 to-orange-500" },
          { step: "05", title: "Brand Guidelines", description: "Document every element of your brand into a comprehensive guidelines manual that ensures consistency wherever your brand appears.", icon: BookOpen, color: "from-red-500 to-pink-500" },
          { step: "06", title: "Launch & Implementation", description: "Roll out your new brand across all touchpoints website, social media, collateral, and communications with strategic launch support.", icon: Zap, color: "from-indigo-500 to-purple-500" },
        ]}
      />

      {/* Why Work With Altiora */}
      <section className="px-4 md:px-6 py-24 md:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Why Work With Altiora <span className="text-[#1945a6]">Infotech?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Partner with branding experts who build brands that become business assets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Strategic Depth We start with strategy, not aesthetics, ensuring every design decision serves your business goals.", icon: FaNetworkWired },
              { text: "Holistic Approach From strategy and identity to messaging and guidelines, we handle your brand as a complete ecosystem.", icon: FaTools },
              { text: "Research-Driven Every decision is backed by audience research, competitive analysis, and market positioning data.", icon: FaCode },
              { text: "Proven Results A track record of building brands that command premium positioning and drive measurable business growth.", icon: FaShieldAlt },
              { text: "Long-Term Partnership We invest in understanding your business deeply so we can continue evolving your brand as you grow.", icon: FaRocket },
              { text: "Full Ownership You own 100% of all brand assets, files, and intellectual property created during our engagement.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ["from-pink-500 to-purple-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-red-500 to-orange-500", "from-yellow-500 to-orange-500", "from-teal-500 to-cyan-500"];
              const titles = ["Strategic", "Holistic", "Research", "Proven", "Long-Term", "Full"];
              const subtitles = ["Depth", "Approach", "Driven", "Results", "Partnership", "Ownership"];
              return (
                <div key={index} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-black/10 bg-[#F8FAFC] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-white hover:border-[#1945a6]/30 hover:shadow-xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#1945a6] transition-colors duration-300">{titles[index]}</h3>
                          <span className="text-sm text-slate-600">{subtitles[index]}</span>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{benefit.text}</p>
                      <div className="mt-3 md:mt-4 h-1 w-full bg-black/10 rounded-full overflow-hidden hidden md:block">
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
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative p-6 sm:p-8 md:p-12 text-center rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Branding Services" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Award className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Build a Brand That Stands Apart?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Your brand is the foundation everything else is built on. At Altiora Infotech, we build brands that attract premium customers, command higher prices, and create lasting business value through strategic identity and consistent presence.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Share your business goals and brand vision, and we&apos;ll create a comprehensive branding proposal including strategy, visual concepts, and a clear roadmap for your brand transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="https://calendly.com/altiorainfotech/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105">
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Brand Strategy Call
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300">
                  <FaEye className="mr-2 w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        @keyframes float {
          0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50%{ transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
        }
      `}</style>
    </div>
  );
}
