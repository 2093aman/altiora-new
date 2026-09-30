'use client';

import React, { useEffect, useState, type ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  TrendingUp,
  Target,
  Megaphone,
  Share2,
  DollarSign,
  LineChart,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Eye,
  Activity,
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Palette,
  Video,
  Briefcase,
  PenTool,
  Star,
  Brain,
  Smartphone
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import DMHeroAnimation from "./DMHeroAnimation";
import DMTrendsPortal from "./DMTrendsPortal";
import DMCosmicPortal from "./DMCosmicPortal";
import styles from "../dm.module.css";

const GOLD = "#C9A227";
const ICON_GRADIENTS = [
  "from-pink-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-red-500 to-orange-500",
  "from-yellow-500 to-orange-500",
  "from-teal-500 to-cyan-500",
];
//import ClientTestimonials from "@/components/sections/ClientTestimonials";

// Icon mapping
const iconMap: Record<string, ComponentType<{ className?: string; size?: string | number }>> = {
  Search,
  TrendingUp,
  Target,
  Megaphone,
  Share2,
  DollarSign,
  LineChart,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Eye,
  Activity,
  Monitor,
  Palette,
  Video,
  Briefcase,
  PenTool,
  Star,
  Brain,
  Smartphone
};

// Default fallback data
const defaultDigitalMarketingServices = [
  {
    title: "Paid Advertisement Services",
    description: "Platforms like Facebook, Instagram, Google YouTube and TikTok are taking over the advertising space... and it makes sense; these companies have so much data that it allows us to create targeted ad campaigns that put your brand in front of the right people, creating brand awareness and increasing your sales.",
    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Google YouTube Ads",
      "TikTok Ads",
      "Targeted ad campaigns for brand growth"
    ],
    link: "/services/paid-advertisement-services",
    metric: "",
    metricLabel: "",
    icon: "Megaphone",
    iconName: "ADS",
    color: "#3B82F6",
  },
  {
    title: "SEO (Search Engine Optimization)",
    description: "Ranking #1 on Google is a battle; but we've done it for ourselves (Google \"Langley Marketing Agency\"). We can do it for you too using straightforward strategies that get results.",
    features: [
      "Keyword research and strategy",
      "On-page SEO optimization",
      "Technical SEO improvements",
      "Local SEO ranking boost",
      "Long-term organic traffic growth"
    ],
    link: "/services/seo",
    metric: "",
    metricLabel: "",
    icon: "Search",
    iconName: "SEO",
    color: "#10B981",
  },
  {
    title: "Mobile App Development",
    description: "Build powerful, high-performance mobile applications that deliver exceptional user experiences. From iOS and Android to cross-platform solutions, we develop apps that engage users and support your business growth.",
    features: [
      "iOS & Android app development",
      "Cross-platform (Flutter/React Native)",
      "UI/UX design & prototyping",
      "App Store optimization & launch",
      "Ongoing maintenance & support"
    ],
    link: "/services/mobile-app-development",
    metric: "",
    metricLabel: "",
    icon: "Smartphone",
    iconName: "APP",
    color: "#14B8A6",
  },
  {
    title: "Website Development Services",
    description: "Convert visitors into value with a website that gives a great first impression. Our team of web developers design websites that not only look great but also help you rank better in search results. We can even dedicate the time to writing your written content and providing photos & videos.",
    features: [
      "Modern website design",
      "Mobile responsive development",
      "SEO-friendly website structure",
      "Content writing support",
      "Photos & video integration"
    ],
    link: "/services/website-development-services",
    metric: "",
    metricLabel: "",
    icon: "Monitor",
    iconName: "WEB",
    color: "#EC4899",
  },
  {
    title: "Social Media Management",
    description: "Staying top of mind is an important marketing principle; social media is a consistent way to increase brand loyalty and grow your business. Altiora infotech offers social media services such as viral video content, social media management and influencer marketing.",
    features: [
      "Viral video content",
      "Social media management",
      "Influencer marketing",
      "Audience engagement strategy",
      "Brand loyalty improvement"
    ],
    link: "/services/social-media-management",
    metric: "",
    metricLabel: "",
    icon: "Share2",
    iconName: "SMM",
    color: "#EF4444",
  },
  {
    title: "Graphic Design",
    description: "Graphic design helps you share your business or organization in a way that feels polished and consistent. We design business cards, brochures, signage, presentation decks, and other materials that reflect your brand and are ready when you need them.",
    features: [
      "Business cards design",
      "Brochure design",
      "Signage design",
      "Presentation decks",
      "Marketing materials & brand assets"
    ],
    link: "/services/graphic-design",
    metric: "",
    metricLabel: "",
    icon: "PenTool",
    iconName: "GFX",
    color: "#F59E0B",
  },
  {
    title: "Branding",
    description: "Branding includes your logo, colour palette, messaging, typography, and graphic elements that set the tone for how people experience your business. We build branding that feels cohesive, professional, and ready to grow with you.",
    features: [
      "Logo and identity design",
      "Colour palette selection",
      "Typography and style guide",
      "Brand messaging development",
      "Complete brand consistency setup"
    ],
    link: "/services/branding",
    metric: "",
    metricLabel: "",
    icon: "Palette",
    iconName: "BRD",
    color: "#7c69ef",
  },
  {
    title: "Video Production",
    description: "Telling your story through video is the most effective way to get your message understood. Attention spans are short and standing out is key to marketing results; our video production agency is here to help.",
    features: [
      "Business promotional videos",
      "Social media reels & shorts",
      "Editing and post-production",
      "Storytelling video creation",
      "High-quality branded video content"
    ],
    link: "/services/video-production",
    metric: "",
    metricLabel: "",
    icon: "Video",
    iconName: "VID",
    color: "#06B6D4",
  },
  {
    title: "Business Consulting",
    description: "Growing your business alone is stressful but as a busy business leader, finding the hours to develop a comprehensive digital marketing plan can be daunting. Our team will help outline a growth path for your business that gets results.",
    features: [
      "Business growth planning",
      "Marketing roadmap development",
      "Strategy and goal setting",
      "Competitor and market analysis",
      "Ongoing consulting support"
    ],
    link: "/services/business-consulting",
    metric: "",
    metricLabel: "",
    icon: "Briefcase",
    iconName: "BIZ",
    color: "#8B5CF6",
  },
  {
    title: "Influencer & UGC Marketing",
    description: "Harness the power of authentic creator content to build trust, expand reach, and drive conversions. We connect your brand with vetted influencers and UGC creators who produce real content that resonates with your target audience.",
    features: [
      "Micro & macro influencer campaigns",
      "UGC content creation & licensing",
      "TikTok, Instagram & YouTube creators",
      "Campaign management & outreach",
      "Performance tracking & ROI reporting"
    ],
    link: "/services/influencer-ugc-marketing",
    metric: "",
    metricLabel: "",
    icon: "Star",
    iconName: "UGC",
    color: "#F97316",
  },
  {
    title: "AEO & GEO",
    description: "Future-proof your search visibility by optimizing for AI-powered answer engines and generative search platforms. Get your brand cited in ChatGPT, Google AI Overviews, Perplexity, voice search, and featured snippets.",
    features: [
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Featured snippet & Position Zero capture",
      "Schema markup & structured data",
      "Voice search & AI visibility monitoring"
    ],
    link: "/services/aeo-geo",
    metric: "",
    metricLabel: "",
    icon: "Brain",
    iconName: "AEO",
    color: "#06B6D4",
  },
];

const defaultWorkflowSteps = [
  {
    icon: "Target",
    title: "Strategy & Market Research",
    description: "We analyze your industry, competitors, and target audience in Canada and the USA to create a customized growth roadmap.",
  },
  {
    icon: "LineChart",
    title: "Build & Optimize",
    description: "Whether it's website development, SEO optimization, or campaign setup, we implement high-performance digital assets.",
  },
  {
    icon: "Zap",
    title: "Traffic & Lead Generation",
    description: "As a trusted PPC management and social media marketing company, we drive targeted traffic through Google Ads, Meta Ads, SEO, and content marketing.",
  },
  {
    icon: "Activity",
    title: "Measure, Improve & Scale",
    description: "We track KPIs, optimize conversion funnels, and scale profitable campaigns to maximize ROI.",
  }
];

const defaultOutcomes = [
  {
    icon: "Settings",
    title: "Customized strategies not templates",
    subtitle: "",
    description: "",
    emoji: "⚙️"
  },
  {
    icon: "Target",
    title: "ROI-focused campaign execution",
    subtitle: "",
    description: "",
    emoji: "🎯"
  },
  {
    icon: "Eye",
    title: "Transparent reporting<br />and communication",
    subtitle: "",
    description: "",
    emoji: "👁️"
  },
  {
    icon: "Users",
    title: "Experienced digital marketing specialists",
    subtitle: "",
    description: "",
    emoji: "�"
  }
];

interface DigitalMarketingClientPageProps {
  pageData?: any;
}

export default function DigitalMarketingClientPage({ pageData }: DigitalMarketingClientPageProps) {
  const [mounted, setMounted] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [outcomesRef, outcomesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      mouseX.set(e.clientX - rect.width / 2);
      mouseY.set(e.clientY - rect.height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animated Counter Component
  const AnimatedCounter = ({ value, prefix = "", suffix = "", inView }: {
    value: number;
    prefix?: string;
    suffix?: string;
    inView: boolean;
  }) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 4000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      motionValue.set(0);
      setDisplayValue(0);
    }, [motionValue]);

    useEffect(() => {
      if (inView) {
        motionValue.set(value);
      }
    }, [inView, value, motionValue]);

    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });
      return unsubscribe;
    }, [springValue]);

    return (
      <span>
        {prefix}{displayValue}{suffix}
      </span>
    );
  };

  const heroSection = pageData?.heroSection || {
    badge: "Digital Marketing Excellence",
    title: "Digital Marketing Company in Canada, Engineered for Growth Acceleration",
    subtitle: "Altiora builds scalable growth engines for Canadian businesses using performance marketing, precision paid ad's, strategic content, advanced SEO, and optimized conversion systems that deliver consistent, measurable revenue growth.",
  };

  const servicesSection = pageData?.servicesSection || {
    services: defaultDigitalMarketingServices
  };

  return (
    <div className={`${styles.dmRoot} min-h-screen flex flex-col bg-white text-[#111827]`}>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-8 px-4 pt-16 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-24 relative h-screen"
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: "none",
                imageRendering: "crisp-edges",
                transform: "translate3d(0, 0, 0)",
                willChange: "auto"
              }}
            >
              <source src="https://pub-712c102a5f654fa5b5f30a2dd821a83d.r2.dev/assets/cml524h6z0004ruouz3x3w5x8/videohome.mp4" type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A66]/85 via-[#001A66]/60 to-[#001A66]/35" />
          </div>

          <div className="max-w-7xl mx-auto relative z-20 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
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
                  {heroSection.title.split('Digital Marketing Company').map((part: string, i: number, arr: string[]) => (
                    <React.Fragment key={i}>
                      {i > 0 && <a href="https://altiorainfotech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Marketing Company</a>}
                      {i === arr.length - 1 ? (
                        <>
                          {part.split(' ').slice(0, -2).join(' ')}{' '}
                          <span className={styles.gradientText}>
                            {part.split(' ').slice(-2).join(' ')}
                          </span>
                        </>
                      ) : part}
                    </React.Fragment>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {heroSection.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#002387] hover:bg-[#C9A227] border border-white/20 hover:border-[#C9A227] text-white text-sm sm:text-base font-semibold transition-colors duration-300 shadow-md"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                </motion.div>
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
              className="rounded-3xl border border-[#E7E8EC] bg-[#F7F8FA] shadow-sm p-6 sm:p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F1E6] border border-[#C9A227]/40 text-[#B18B1E] font-bold text-xs uppercase tracking-[0.2em]">
                  <span className="h-2 w-2 rounded-full bg-[#C9A227] animate-pulse" />
                  Quick Answer
                </span>
              </div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-[#0A0A0A] mb-4 leading-tight">
                What is digital marketing and how does Altiora Infotech approach it?
              </h2>
              <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mb-6">
                Digital marketing is the coordinated use of search engines, paid advertising, social media, content and websites to acquire customers and drive measurable revenue. Altiora Infotech delivers <span className="text-[#002387] font-semibold">SEO</span>, <span className="text-[#002387] font-semibold">Google Ads</span>, paid social, content production, conversion-focused websites and brand strategy as one in-house programme, with AEO and GEO built in so brands also surface in ChatGPT, Perplexity and Google AI Overviews.
              </p>
              <p className="text-[#002387] text-sm sm:text-base font-bold mb-3">Core services in our digital marketing programme:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Search engine optimization (SEO)",
                  "Google Ads and paid search",
                  "Meta and LinkedIn paid social",
                  "Social media management and content",
                  "Conversion-focused websites and landing pages",
                  "Brand identity and creative production",
                  "Marketing strategy and growth consulting",
                  "Answer Engine and Generative Engine Optimization",
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
              {/* Top - Label with centered lines */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#C9A227]/60 to-transparent" />
                <span className="text-[#B18B1E] font-bold text-sm sm:text-base uppercase tracking-[0.3em] bg-[#F4F1E6] px-4 py-1.5 rounded-full border border-[#C9A227]/40">
                  Overview
                </span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#C9A227]/60 to-transparent" />
              </div>

              {/* Main Content Centered */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-w-5xl mx-auto pt-[5px] px-8 pb-8 sm:px-12 sm:pb-12 md:px-14 md:pb-14 rounded-[32px] border border-[#E7E8EC] bg-[#F7F8FA] shadow-sm relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10 text-[#3B4456] font-medium`}>
                    <span className="">As an experienced <Link href="/about" className="text-[#002387] font-bold hover:text-[#C9A227] hover:underline">Digital Marketing Company</Link>, we focus on measurable outcomes not just impressions or clicks.</span> Every strategy is designed to attract high-intent customers and convert them into revenue.

                    From local businesses to national brands, our team builds scalable digital ecosystems that drive long-term success.
                  </p>

                  {/* Subtle inner light effect */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#F7F8FA] border-y border-[#E7E8EC]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 relative">
              {/* Vertical dividers between stats (desktop only) */}
              <div className="hidden sm:block absolute left-1/3 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent" />
              <div className="hidden sm:block absolute left-2/3 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent" />

              {[
                {
                  value: 80,
                  suffix: "+",
                  prefix: "",
                  label: "Clients Served",
                  desc: "across Canada and the USA trust Altiora Infotech as their growth partner.",
                },
                {
                  value: 5,
                  suffix: "M+",
                  prefix: "$",
                  label: "Revenue Generated",
                  desc: "in trackable revenue driven for our clients through digital campaigns.",
                },
                {
                  value: 12,
                  suffix: "+",
                  prefix: "",
                  label: "Industries Covered",
                  desc: "from healthcare to e-commerce, delivering tailored marketing solutions.",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                  className="text-center py-4"
                >
                  <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 text-[#002387] leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      inView={statsInView}
                    />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-[#002387] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm sm:text-base text-[#3B4456] max-w-[280px] mx-auto leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${['#C9A227', '#002387', '#C9A227'][i % 3]}, transparent)`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
            >
              <motion.h2
                className={`${styles.sectionHeading} text-center mb-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Our Digital Marketing <span className="text-[#C9A227]">Services</span>
              </motion.h2>
              <motion.p
                className={`${styles.sectionDescription} max-w-4xl mx-auto`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                We offer a complete suite of digital marketing services that work together to maximize visibility, conversions, and ROI.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {servicesSection.services.map((service: any, index: number) => {
                const IconComponent = typeof service.icon === 'string'
                  ? iconMap[service.icon] || Target
                  : service.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`h-full group${index === servicesSection.services.length - 1 && servicesSection.services.length % 2 !== 0 ? ' sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
                  >
                    <Link href={service.link} className="block h-full">
                      <div className={`${styles.serviceCardEnhanced} h-full flex flex-col p-4 relative`}>
                        {/* Animated Gradient Border */}
                        <div
                          className={styles.animatedBorder}
                          style={{
                            background: `linear-gradient(135deg, ${GOLD}, ${GOLD}80, transparent)`,
                          }}
                        />

                        {/* Hover Glow Effect */}
                        <div
                          className={styles.hoverGlow}
                          style={{
                            background: `radial-gradient(circle at center, ${GOLD}40, transparent 70%)`,
                          }}
                        />

                        {/* Icon + Title row */}
                        <div className="flex items-center gap-3 mb-3 relative z-10">
                          <div
                            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 bg-gradient-to-br ${ICON_GRADIENTS[index % ICON_GRADIENTS.length]} shadow-md`}
                          >
                            <IconComponent
                              className="w-5 h-5 text-white"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-[#C9A227]">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-sm text-[#3B4456] mb-3 relative z-10 line-clamp-2">
                          {service.description}
                        </p>

                        {/* Features List */}
                        {service.features && service.features.length > 0 && (
                          <ul className="space-y-1 mb-3 relative z-10">
                            {service.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-1.5 text-xs text-[#3B4456]">
                                <CheckCircle
                                  className="w-3 h-3 flex-shrink-0 text-[#C9A227]"
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Learn More */}
                        <motion.div
                          className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold relative z-10 text-[#002387] group-hover:text-[#B18B1E]"
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ArrowUpRight className="w-3 h-3" />
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grow Your Business Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          {/* Decorative blurred orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A227]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#002387]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className={`${styles.sectionHeading} max-w-4xl mx-auto`}>
                We Invest the Time &amp; Expertise to{' '}
                <span className="text-[#C9A227]">Scale Your Business</span>{' '}
                with Strategic Digital Marketing.
              </h2>
            </motion.div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
              {[
                {
                  icon: Target,
                  title: "You Focus on Business",
                  desc: "Running a company is demanding. Let us handle your entire digital marketing from SEO and ads to social media and content while you focus on growth.",
                },
                {
                  icon: TrendingUp,
                  title: "We Drive the Results",
                  desc: "Our dedicated team builds and manages campaigns across Google Ads, Meta, web design, branding, and more all optimized for real, measurable outcomes.",
                },
                {
                  icon: Users,
                  title: "Together We Grow",
                  desc: "Think of us as your in-house marketing department. We align with your goals, report transparently, and continuously improve to scale your revenue.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E8EC] hover:border-[#C9A227]/50 transition-all duration-300 hover:shadow-md"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ICON_GRADIENTS[index % ICON_GRADIENTS.length]} flex items-center justify-center mb-5 shadow-md`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#C9A227] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#3B4456] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#F4F1E6] border border-[#C9A227]/30"
            >
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="w-3 h-3 rounded-full bg-[#C9A227] animate-pulse flex-shrink-0" />
                <p className="text-base sm:text-lg text-[#002387] font-bold">
                  Altiora Infotech is here to help let&apos;s build something great together.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#002387] hover:bg-[#C9A227] text-white font-semibold text-sm sm:text-base transition-colors duration-300 shadow-md flex-shrink-0"
              >
                Let&apos;s Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How We Work Section - Timeline Style */}
        <section ref={workflowRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-white">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F8FA] to-white" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={workflowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                How Our <a href="https://altiorainfotech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Marketing Company</a> Delivers Consistent <span className="text-[#C9A227]">Growth</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                A structured, data-driven approach designed to produce sustainable results.
              </motion.p>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227]/40 via-[#002387]/30 to-[#C9A227]/40 transform -translate-y-1/2" />

              <div className="grid grid-cols-4 gap-6">
                {defaultWorkflowSteps.map((step: any, index: number) => {
                  const IconComponent = typeof step.icon === 'string'
                    ? iconMap[step.icon] || Target
                    : step.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                      animate={workflowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                      transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
                      className="relative group"
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          className={`w-14 h-14 rounded-full bg-gradient-to-br ${ICON_GRADIENTS[index % ICON_GRADIENTS.length]} flex items-center justify-center shadow-md text-white`}
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>

                      {/* Card */}
                      <motion.div
                        className={`relative p-5 rounded-2xl bg-white border border-[#E7E8EC] shadow-sm ${index % 2 === 0 ? 'mb-64' : 'mt-64'}`}
                        whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 35, 135, 0.12)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold mb-2 text-[#C9A227]">
                            {step.title}
                          </h3>

                          <p className="text-sm text-[#3B4456] leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'bottom-0 translate-y-8' : 'top-0 -translate-y-8'}`}>
                          <div className="w-0.5 h-8 bg-gradient-to-b from-[#C9A227] to-transparent" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet Vertical Timeline */}
            <div className="lg:hidden space-y-8">
              {defaultWorkflowSteps.map((step: any, index: number) => {
                const IconComponent = typeof step.icon === 'string'
                  ? iconMap[step.icon] || Target
                  : step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={workflowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex items-start gap-4 group"
                  >
                    {/* Timeline line */}
                    {index < defaultWorkflowSteps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-[#C9A227] to-transparent" />
                    )}

                    {/* Node */}
                    <motion.div
                      className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${ICON_GRADIENTS[index % ICON_GRADIENTS.length]} flex items-center justify-center shadow-md text-white`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="flex-1 p-5 rounded-xl bg-white border border-[#E7E8EC] shadow-sm"
                      whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(0, 35, 135, 0.12)" }}
                    >
                      <h3 className="text-lg font-bold mb-2 text-[#C9A227]">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#3B4456] leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        {/* <ClientTestimonials /> */}

        {/* CTA Section */}
        <section ref={ctaRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/about/services.jpg"
                  alt="Digital Marketing Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#002387]/95 via-[#002387]/90 to-[#002387]/95" />
              </div>

              <div className="relative z-10">
                <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white mb-4 sm:mb-5 md:mb-6">
                  Let's Build Your Digital Growth Engine
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  If you're ready to scale your business with strategic, performance-driven digital marketing, Altiora Infotech is here to help. Let's turn your online presence into a powerful growth engine.
                  <br /><br />
                📩 Contact us today to discuss your goals and discover how our <Link href="/services/digital-marketing-strategy" className="text-[#C9A227] hover:text-white underline transition-colors">digital marketing services </Link> can help your business grow smarter and faster.
                </p>

                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C9A227] text-[#002387] hover:bg-white text-sm sm:text-base font-semibold transition-colors duration-300 shadow-md"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


