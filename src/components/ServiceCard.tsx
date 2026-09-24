import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  link: string;
  hideServiceTag?: boolean;
  iconVariant?: 'gold' | 'gray';
}

export default function ServiceCard({ title, description, icon, link, hideServiceTag = false, iconVariant = 'gold' }: ServiceCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="relative w-full bg-[#F8FAFC] text-slate-900 rounded-2xl p-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-200/80 group-hover:border-[#f4cc6f]/60 h-[280px] flex flex-col">
        {/* Top Right Icon */}
        {iconVariant === 'gold' ? (
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#f4cc6f]/10 rounded-bl-[40px] flex items-start justify-end p-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center shadow-md">
              <div className="text-[#010c22] text-lg">
                {icon}
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute top-0 right-0 w-24 h-24 flex items-start justify-end p-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center shadow-md border border-[#f4cc6f]/40">
              <div className="text-[#010c22]">
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* Service Tag */}
        {!hideServiceTag && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#f4cc6f] text-[#010c22] text-sm rounded-full font-medium">
              Service
            </span>
          </div>
        )}

        {/* Content */}
        <div className={`${iconVariant === 'gray' ? 'pr-20' : 'pr-8'} flex-1 flex flex-col ${hideServiceTag ? 'pt-2' : ''}`}>
          <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-wide group-hover:text-[#1945a6] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 tracking-wide leading-relaxed group-hover:text-slate-900 transition-colors duration-300 flex-1">
            {description}
          </p>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </Link>
  );
}
