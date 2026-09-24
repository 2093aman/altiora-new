"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../../ui/Reveal";
import { services } from "../../../data/about";

export default function AboutServices() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 320;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="px-6 py-12 border-y border-black/10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-slate-600">
            Other Products & Services
          </h2>
          <div className="flex gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCards("left")}
              className="rounded-full border border-black/20 px-3 py-1.5 text-sm hover:bg-black/10 text-slate-700"
            >
              ←
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCards("right")}
              className="rounded-full border border-black/20 px-3 py-1.5 text-sm hover:bg-black/10 text-slate-700"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal cards */}
        <div
          ref={scrollerRef}
          className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {/* hide scrollbars (webkit) */}
          <style jsx>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {services.map((s, i) => (
            <Reveal
              key={i}
              className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl border border-black/10 bg-[#F3F6FC] hover:bg-black/5 transition"
            >
              <Link href={s.href} className="block focus:outline-none focus:ring-2 focus:ring-[#4BD3A5] rounded-2xl">
                <div className="p-5 flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-black/5 p-4 border border-black/10">
                    {/* prefer real svg/png in /public/icons */}
                    <Image src={s.icon} alt="" width={32} height={32} className="opacity-90" />
                  </div>
                  <div>
                    <div className="inline-block text-xs uppercase tracking-wide bg-black/5 text-slate-700 px-2 py-0.5 rounded">
                      {s.badge}
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                    <span className="mt-3 inline-block underline text-[#1D5AC9]">Explore →</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
