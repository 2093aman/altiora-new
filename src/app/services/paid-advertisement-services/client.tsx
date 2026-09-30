"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  Server,
  Layers,
  Eye,
  Users,
  Search,
  Shield,
  CreditCard,
  ShoppingCart,
  TrendingUp,
  Package,
  BarChart3,
  Megaphone,
  Target,
  Share2,
  Heart,
  MessageCircle,
  Play,
  Camera,
  Zap,
  ThumbsUp,
  Share,
  Bookmark,
  Send,
  MoreHorizontal,
  ArrowRight,
  Star,
  Clock,
  Calendar
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
  FaSnapchatGhost,
  FaGoogle
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import { iconGradient } from "@/lib/iconGradients";

// Social Media Platform Card Component
const SocialPlatformCard = ({ platform, className }: { platform: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border transition-all duration-500 ${platform.borderColor} ${platform.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col shadow-sm hover:shadow-md`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#002387] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Platform Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl ${platform.iconBg} mb-6 relative z-10 shadow-md`}
        >
          <platform.icon className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 ${platform.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: platform.highlightedName }} />
          <p className="text-[#3B4456] text-base md:text-lg mb-4 leading-relaxed flex-1">{platform.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-white border border-slate-200/60">
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.reach}</div>
              <div className="text-xs text-slate-500 font-medium">Monthly Reach</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.engagement}</div>
              <div className="text-xs text-slate-500 font-medium">Avg Engagement</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {platform.features.map((feature: string, index: number) => (
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

// Social Media Post Mockup Component
const SocialPostMockup = ({ post, delay = 0 }: { post: any; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#F7F8FA] backdrop-blur-sm rounded-2xl p-4 border border-slate-200/80 hover:border-[#C9A227]/40 transition-all duration-300"
    >
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${post.platformColor} flex items-center justify-center`}>
          <post.platformIcon className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-slate-900 font-semibold text-sm">{post.brand}</div>
          <div className="text-slate-500 text-xs">{post.time}</div>
        </div>
        <MoreHorizontal className="w-4 h-4 text-slate-400 ml-auto" />
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-[#3B4456] text-sm leading-relaxed mb-3">{post.content}</p>
        {post.image && (
          <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#002387]/20 to-[#C9A227]/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-8 h-8 text-[#C9A227]" />
            </div>
          </div>
        )}
      </div>

      {/* Post Engagement */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-xs text-slate-500">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4 text-[#C9A227]" />
            <span className="text-xs text-slate-500">{post.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share className="w-4 h-4 text-[#B18B1E]" />
            <span className="text-xs text-slate-500">{post.shares}</span>
          </div>
        </div>
        <div className="text-xs text-slate-400">{post.reach} reach</div>
      </div>
    </motion.div>
  );
};

// Campaign Performance Dashboard Component
const CampaignDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Impressions", value: "2.4M", change: "+23%", color: "text-[#C9A227]", icon: Eye },
    { label: "Engagement", value: "156K", change: "+45%", color: "text-[#B18B1E]", icon: Heart },
    { label: "Clicks", value: "89K", change: "+67%", color: "text-[#C9A227]", icon: Target },
    { label: "Conversions", value: "12.3K", change: "+89%", color: "text-[#B18B1E]", icon: TrendingUp }
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
          <h3 className="text-xl font-bold text-slate-900">Campaign Performance</h3>
          <p className="text-slate-500 text-sm font-medium">Real-time analytics dashboard</p>
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
              <Icon className={`w-5 h-5 ${metric.color} mb-2`} />
              <div className="text-2xl font-extrabold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-xs text-slate-500 mb-1">{metric.label}</div>
              <div className={`text-xs font-bold ${metric.color}`}>{metric.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const ServicesHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-300 block rounded-3xl max-w-full"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-[#F3F6FC] border border-transparent group-hover:border-[#C9A227]/50 relative z-20">
            <div className="relative z-50">
              <div className="mb-6 text-[#C9A227]">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 tracking-wide">
                {item.title}
              </h4>
              <p className="text-base sm:text-lg md:text-xl text-[#3B4456] tracking-wide leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function SocialMediaAdvertisingClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Why Choose slider autoplay
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = 6; // whyChoosePoints.length
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

  // Social Media Platforms Data
  const socialPlatforms = [
    {
      name: "Facebook & Instagram",
      highlightedName: "Facebook & Instagram",
      icon: FaFacebook,
      description: "Reach 3.8B+ users with advanced targeting and creative formats across Meta's ecosystem.",
      reach: "3.8B+",
      engagement: "1.93%",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Advanced Audience Targeting", "Stories & Reels Ads", "Shopping Integration", "Lookalike Audiences", "Dynamic Product Ads", "Messenger Campaigns"]
    },
    {
      name: "LinkedIn",
      highlightedName: "LinkedIn",
      icon: FaLinkedin,
      description: "Target 900M+ professionals with B2B-focused campaigns and thought leadership content.",
      reach: "900M+",
      engagement: "2.74%",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["B2B Lead Generation", "Sponsored Content", "InMail Campaigns", "Company Page Promotion", "Event Promotion", "Talent Solutions"]
    },
    {
      name: "TikTok",
      highlightedName: "TikTok",
      icon: FaTiktok,
      description: "Engage 1B+ users with viral & Trends short-form video content and trending challenges.",
      reach: "1B+",
      engagement: "5.96%",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Viral Video Content", "Hashtag Challenges", "Influencer Partnerships", "Gen Z Targeting", "Brand Takeovers", "Spark Ads"]
    },
    {
      name: "Google Ads",
      highlightedName: "Google Ads",
      icon: FaGoogle,
      description: "Reach billions of users across Google Search, YouTube, Gmail, and the Google Display Network.",
      reach: "4B+",
      engagement: "2.1%",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Search Ads", "YouTube Ads", "Display Network", "Shopping Campaigns", "Gmail Promotions", "Discovery Ads"]
    },
    {
      name: "Twitter/X",
      highlightedName: "Twitter/X",
      icon: FaTwitter,
      description: "Connect with 450M+ users through real-time conversations and trending / viral topics.",
      reach: "450M+",
      engagement: "0.045%",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["Promoted Tweets", "Trend Takeovers", "Real-time Engagement", "News & Updates", "Twitter Spaces", "Follower Campaigns"]
    },
    {
      name: "Snapchat",
      highlightedName: "Snapchat",
      icon: FaSnapchat,
      description: "Engage 750M+ daily active users with AR experiences and vertical video advertising.",
      reach: "750M+",
      engagement: "3.2%",
      borderColor: "border-slate-200/80 hover:border-[#C9A227]/60",
      bgGradient: "bg-[#F7F8FA]",
      iconBg: "bg-gradient-to-br from-[#C9A227] to-[#B18B1E]",
      iconColor: "text-white",
      textColor: "text-[#002387]",
      hoverGradient: "bg-gradient-to-br from-[#C9A227]/10 to-transparent",
      features: ["AR Lens Ads", "Snap Ads", "Story Ads", "Collection Ads", "Dynamic Ads", "Spotlight Ads"]
    }
  ];

  // Sample Social Media Posts
  const samplePosts = [
    {
      brand: "TechStartup Co.",
      platform: "Instagram",
      platformIcon: FaInstagram,
      platformColor: "bg-[#002387]",
      content: "🚀 Launching our new AI-powered analytics dashboard! Get insights that drive real business growth. #TechInnovation #Analytics",
      time: "2h ago",
      likes: "1.2K",
      comments: "89",
      shares: "156",
      reach: "45K",
      image: true
    },
    {
      brand: "Fashion Brand",
      platform: "TikTok",
      platformIcon: FaTiktok,
      platformColor: "bg-[#002387]",
      content: "✨ Summer collection drop! Swipe to see our sustainable fashion line that's taking over social media 🌱 #SustainableFashion",
      time: "4h ago",
      likes: "3.4K",
      comments: "234",
      shares: "567",
      reach: "89K",
      image: true
    },
    {
      brand: "B2B Solutions",
      platform: "LinkedIn",
      platformIcon: FaLinkedin,
      platformColor: "bg-[#002387]",
      content: "📊 How we helped a Fortune 500 company increase their operational efficiency by 40% using our automation platform. Read the full case study.",
      time: "1d ago",
      likes: "892",
      comments: "67",
      shares: "234",
      reach: "23K",
      image: false
    }
  ];

  const services = [
    {
      title: <>Facebook & Instagram <span className="text-[#002387]">Advertising</span></>,
      description: "Targeted campaigns across Meta's platforms with advanced audience segmentation and creative optimization.",
      icon: <FaFacebookF className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>LinkedIn <span className="text-[#002387]">Advertising</span></>,
      description: "Professional B2B campaigns targeting decision-makers with sponsored content and InMail campaigns.",
      icon: <FaLinkedinIn className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>Twitter/X <span className="text-[#002387]">Advertising</span></>,
      description: "Real-time engagement campaigns with promoted tweets, trends, and targeted follower acquisition.",
      icon: <FaTwitter className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>Google <span className="text-[#002387]">Advertising</span></>,
      description: "Comprehensive Google Ads campaigns across Search, Display, YouTube, and Shopping networks.",
      icon: <FaGoogle className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: <>TikTok <span className="text-[#002387]">Advertising</span></>,
      description: "Creative short-form video campaigns targeting Gen Z and millennial audiences with viral potential.",
      icon: <FaTiktok className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
    {
      title: "Campaign Analytics & Optimization",
      description: "Real-time performance tracking, A/B testing, and continuous optimization for maximum ROI.",
      icon: <BarChart3 className="w-7 h-7 text-[#001A66]" />,
      link: "/contact"
    },
  ];

  const mobileServices = [
    {
      title: "Facebook & Instagram Ads",
      icon: <FaFacebookF className="w-8 h-8 text-white" />
    },
    {
      title: "LinkedIn Advertising",
      icon: <FaLinkedinIn className="w-8 h-8 text-white" />
    },
    {
      title: "Twitter/X Advertising",
      icon: <FaTwitter className="w-8 h-8 text-white" />
    },
    {
      title: "Google Advertising",
      icon: <FaGoogle className="w-8 h-8 text-white" />
    },
    {
      title: "TikTok Advertising",
      icon: <FaTiktok className="w-8 h-8 text-white" />
    },
    {
      title: "Analytics & Optimization",
      icon: <BarChart3 className="w-8 h-8 text-white" />
    },
  ];

  const whyChoosePoints = [
    {
      title: "Platform Expertise",
      description: "Deep platform-specific knowledge across Meta, LinkedIn, TikTok, Google, and Snapchat allows us to craft campaigns that maximize reach, engagement, and conversions tailored to your unique business goals and audience behavior.",
      icon: Share2,
    },
    {
      title: "Creative Strategy",
      description: "Data-driven creative strategies that resonate deeply with your target audience and stop the scroll. Every ad copy, visual, and format is crafted with purpose to generate measurable, scalable business outcomes.",
      icon: Target,
    },
    {
      title: "Precise Targeting",
      description: "Advanced audience segmentation, custom lookalike audiences, and behavioral targeting techniques place your ads in front of the right people at the right moment eliminating wasted spend and maximizing every dollar invested.",
      icon: TrendingUp,
    },
    {
      title: "Real-Time Optimization",
      description: "Continuous campaign monitoring, live A/B testing, and real-time bid adjustments ensure your ads perform at peak efficiency. We never set and forget every data signal is acted on to protect and grow your ROI.",
      icon: BarChart3,
    },
    {
      title: "Actionable Reporting",
      description: "Comprehensive analytics dashboards with clear performance insights, trend analysis, and prioritized recommendations you can act on immediately. We translate complex ad data into strategic decisions that keep campaigns growing month over month.",
      icon: Eye,
    },
    {
      title: "Cross-Platform Sync",
      description: "Strategically coordinated campaigns across all social platforms ensure your brand message is consistent, reinforcing, and impossible to ignore. Unified messaging builds trust faster, strengthens brand recall, and delivers compounding results over time.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full">
        <div className="absolute inset-0">
          <Image src="/images/services-bg/digital advertising.jpg.jpeg" alt="Paid Advertising" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs tracking-wider text-[#3B4456] shadow-sm backdrop-blur-sm">
                  <Megaphone className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                  Paid Advertising
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Accelerate Business Growth with High-Performance Advertising Service
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#C9A227] to-[#B18B1E] text-[#001A66] hover:shadow-lg hover:shadow-[#C9A227]/25 focus:shadow-lg focus:shadow-[#C9A227]/25 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105 w-[60%] sm:w-auto">
                    Get Started
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
              What are paid advertising services and what do they deliver?
            </h2>
            <p className="text-[#3B4456] text-base sm:text-lg leading-relaxed mb-6">
              Paid advertising services are the strategy, creative, media buying and optimization work needed to run profitable campaigns on <span className="text-[#002387] font-semibold">Google Ads</span>, <span className="text-[#002387] font-semibold">Meta</span>, <span className="text-[#002387] font-semibold">LinkedIn</span>, Microsoft and TikTok. Altiora Infotech delivers all platforms under one in-house team, from keyword research and landing pages to creative production and weekly ROAS reporting, so growth is measurable, not guesswork.
            </p>
            <p className="text-slate-900 text-sm sm:text-base font-bold mb-3">Platforms and capabilities we cover:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Google Ads Search and Performance Max",
                "Google Shopping and YouTube video ads",
                "Meta paid social (Facebook + Instagram)",
                "LinkedIn B2B lead-generation campaigns",
                "Microsoft (Bing) Ads",
                "TikTok Ads and short-form creative",
                "Landing pages and conversion-rate optimization",
                "Weekly ROAS, CPL and pipeline reporting",
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
              <span className="text-[#B18B1E] font-extrabold text-sm sm:text-base uppercase tracking-[0.3em] bg-[#C9A227]/15 px-4 py-1.5 rounded-full border border-[#C9A227]/40">
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
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[32px] border border-[#C9A227]/30 bg-[#F7F8FA] shadow-sm relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 text-[#3B4456] font-medium`}>
                  Connect with the right audience where they’re already active and turn clicks into real business growth. Our (PPC) <Link href="/" className="text-[#002387] font-bold hover:underline">Paid Advertising Services</Link> are designed to help you reach highly targeted customers through powerful social media campaigns that boost visibility, engagement, and conversions. At Altiora Infotech, we build performance-focused strategies using smart targeting, scroll-stopping creatives, and ongoing optimization to maximize results. Whether your goal is lead generation, increased sales, or stronger brand awareness, we create scalable social ad campaigns built to deliver consistent ROI.
                </p>

                {/* Subtle inner light effect */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A227]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Platforms Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900">
              <span className="text-[#C9A227]">Advertisement</span> Platforms We Master
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              Reach your audience where they spend their time with platform-specific strategies and creative excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <SocialPlatformCard key={index} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Performance Dashboard */}
      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900">
                Real-Time Campaign Performance
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#3B4456] mb-8 leading-relaxed">
                Monitor your social media advertising success with our comprehensive analytics dashboard. Track impressions, engagement, clicks, and conversions across all platforms in real-time.
              </p>
              <div className="space-y-4">
                {[
                  "Live performance metrics across all platforms",
                  "Advanced audience insights and demographics",
                  "ROI tracking and conversion attribution",
                  "Automated optimization recommendations"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-[#3B4456] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CampaignDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900 text-center">
              Our Paid Media Advertisement <span className="text-[#C9A227]">Services</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              Comprehensive Paid media Advertisement solutions designed to maximize engagement and drive conversions.
            </p>
          </div>

          {/* Desktop Layout - New ServiceCard Design */}
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

      {/* Why Choose Our Social Media Advertising */}
      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold mb-6 text-slate-900">
              Why Choose Our <span className="text-[#C9A227]">Paid Advertising</span>?
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#3B4456] max-w-3xl mx-auto leading-relaxed">
              We combine platform expertise with creative excellence to deliver ad campaigns that drive real business results.
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
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-[82vw] snap-start"
                  >
                    <div className="relative h-full p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:border-[#C9A227]/50 flex flex-col overflow-hidden">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradient(index)} flex items-center justify-center mb-5 flex-shrink-0 shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-base text-[#3B4456] leading-relaxed flex-1">
                        {point.description}
                      </p>
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
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index
                      ? "w-6 bg-[#C9A227]"
                      : "w-2 bg-slate-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Process - Timeline */}
      <ProcessTimeline
        title="Our Paid Media Advertising <span className='text-[#002387]'>Process</span>"
        subtitle="A strategic approach that transforms your Paid media presence into a powerful conversion engine."
        steps={[
          {
            step: "01",
            title: "Strategy & Research",
            description: "Deep dive into your target audience, competitor analysis, and platform-specific opportunities to create a winning strategy.",
            icon: Target,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Creative Development",
            description: "Design compelling ad creatives, copy, and multimedia content optimized for each platform's unique format and audience.",
            icon: Camera,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "03",
            title: "Campaign Launch",
            description: "Configure advanced targeting, set optimal budgets, implement bidding strategies, and launch campaigns across selected platforms.",
            icon: Zap,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "04",
            title: "Performance Monitoring",
            description: "Real-time tracking of key metrics, engagement rates, conversion performance, and audience behavior analysis.",
            icon: BarChart3,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Optimization & Testing",
            description: "Continuous A/B testing, creative rotation, audience refinement, and bid optimization for maximum performance.",
            icon: TrendingUp,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Scaling & Reporting",
            description: "Comprehensive analytics, actionable insights, and strategic scaling of successful campaigns for exponential growth.",
            icon: TrendingUp,
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
              Partner with paid advertising experts who deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Platform Expertise Deep knowledge of all major social media advertising platforms and their unique features.", icon: FaNetworkWired },
              { text: "Creative Excellence Creative team that produces high-converting ad content.", icon: FaTools },
              { text: "Data-Driven Approach Advanced analytics and optimization strategies for maximum ROI.", icon: FaCode },
              { text: "Audience Mastery Sophisticated targeting and segmentation for precise audience reach.", icon: FaShieldAlt },
              { text: "Scalable Campaigns Proven strategies for scaling successful campaigns across multiple platforms.", icon: FaRocket },
              { text: "Transparent Reporting Clear, actionable insights and regular performance updates.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-pink-500 to-purple-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-red-500 to-orange-500', 'from-yellow-500 to-orange-500', 'from-teal-500 to-cyan-500'];
              const titles = ['Platform', 'Creative', 'Data-Driven', 'Audience', 'Scalable', 'Transparent'];
              const subtitles = ['Expertise', 'Excellence', 'Approach', 'Mastery', 'Campaigns', 'Reporting'];
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
                <Megaphone className="w-10 h-10 text-[#C9A227]" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Ready to Amplify Your Paid Advertising Performance?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 leading-relaxed">
                Transform your advertising channels into powerful conversion engines. At Altiora Infotech, we combine creative excellence with data-driven strategies to deliver paid advertising campaigns that drive real business results.
              </p>
              <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                Ready to turn ad spend into revenue? Share your goals and target audience, and we&apos;ll create a comprehensive advertising strategy: platform recommendations, creative concepts, targeting strategies, and budget allocation that maximizes your ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold bg-gradient-to-r from-[#C9A227] to-[#B18B1E] hover:from-[#B18B1E] hover:to-[#C9A227] text-[#001A66] shadow-lg shadow-[#C9A227]/25 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Strategy Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                >
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
          0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg);} 
          50%{ transform: translateY(-20px) rotateX(5deg) rotateY(5deg);} 
        }
      `}</style>
    </div>
  );
}