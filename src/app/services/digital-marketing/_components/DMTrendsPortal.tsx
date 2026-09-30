"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DMTrendsPortalProps {
  trends: string[];
}

export default function DMTrendsPortal({ trends }: DMTrendsPortalProps) {
  const [hoveredTrend, setHoveredTrend] = useState<number | null>(null);

  const digitalMarketingTrends = [
    {
      id: 0,
      emoji: '🔍',
      title: 'SEO Mastery',
      description: 'Advanced search engine optimization strategies'
    },
    {
      id: 1,
      emoji: '📱',
      title: 'Social Media',
      description: 'Engaging social media campaigns and management'
    },
    {
      id: 2,
      emoji: '✍️',
      title: 'Content Marketing',
      description: 'Compelling content that drives engagement'
    },
    {
      id: 3,
      emoji: '💰',
      title: 'PPC Campaigns',
      description: 'High-converting pay-per-click advertising'
    },
    {
      id: 4,
      emoji: '📊',
      title: 'Analytics',
      description: 'Data-driven insights and performance tracking'
    },
    {
      id: 5,
      emoji: '📧',
      title: 'Email Marketing',
      description: 'Personalized email campaigns that convert'
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {digitalMarketingTrends.map((trend) => (
          <div
            key={trend.id}
            className="relative flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setHoveredTrend(trend.id)}
            onMouseLeave={() => setHoveredTrend(null)}
          >
            {/* Icon */}
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl mb-3 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {trend.emoji}
            </motion.div>
            
            {/* Title */}
            <h3 className="text-sm md:text-base font-bold text-slate-900 text-center mb-2">
              {trend.title}
            </h3>
            
            {/* Hover Card */}
            <AnimatePresence>
              {hoveredTrend === trend.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 z-20 w-48"
                >
                  <div className="bg-white border border-[#C9A227]/30 rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-[#3B4456] text-center">
                      {trend.description}
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-[#C9A227]/30 rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
