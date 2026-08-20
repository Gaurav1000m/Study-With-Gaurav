"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Shield, Sparkles, FolderCheck } from "lucide-react";
import { SearchBar } from "./SearchBar";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onTagClick: (tag: string) => void;
  totalResultsCount: number;
  searchRef?: React.RefObject<HTMLInputElement | null>;
}

export function Hero({
  searchQuery,
  onSearchChange,
  onTagClick,
  totalResultsCount,
  searchRef,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-slate-100/90 via-white to-slate-50 pt-5 pb-6 sm:pt-14 sm:pb-16 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Majestic Lion Background Shadow Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[540px] sm:h-[540px] lg:w-[680px] lg:h-[680px] opacity-[0.06] sm:opacity-[0.09] pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply">
        <img
          src="/black-and-white-portrait-of-a-lion.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain filter drop-shadow-2xl grayscale"
        />
      </div>

      {/* Subtle Academic Dot Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-6">
        {/* Academic Trust Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-[10px] sm:text-xs font-bold shadow-2xs">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
          <span>Verified Student Resource Hub</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-1 sm:space-y-3">
          <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything Students Need,
            <span className="block text-blue-700 mt-0.5 sm:mt-2 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              In One Place.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xs sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
            Discover handpicked educational websites, batch access portals, competitive exam tools, and student resources.
          </p>
        </div>

        {/* Hero Search Box */}
        <div className="pt-0.5 max-w-3xl mx-auto w-full">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            onTagClick={onTagClick}
            totalResultsCount={totalResultsCount}
            inputRef={searchRef}
          />
        </div>

        {/* Quick Category Badges Bar */}
        {CATEGORIES.length > 0 && (
          <div className="pt-0.5 sm:pt-1">
            <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Popular Domains:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-4xl mx-auto">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className="group min-h-[34px] sm:min-h-[38px] flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs transition-all duration-200"
                >
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 group-hover:text-blue-900 transition-colors whitespace-nowrap">
                    {cat.shortName || cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Trust & Value Bar */}
        <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[11px] sm:text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-md py-2 px-3 sm:py-2.5 sm:px-5 rounded-xl border border-slate-200/90 max-w-2xl mx-auto shadow-2xs">
          <div className="flex items-center gap-1">
            <FolderCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100+ Verified Websites</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>29 Categories</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span>100% Free Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
