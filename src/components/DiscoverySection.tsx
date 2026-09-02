"use client";

import { CATEGORIES } from "@/data/categories";
import { Category, CategoryId } from "@/types/website";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedCounter } from "./AnimatedCounter";

interface DiscoverySectionProps {
  onOptionSelect: (catId: CategoryId) => void;
}

export function DiscoverySection({ onOptionSelect }: DiscoverySectionProps) {
  if (!CATEGORIES || CATEGORIES.length === 0) {
    return null;
  }

  // Split categories into 3 roughly equal chunks for the 3 columns
  const col1 = CATEGORIES.slice(0, Math.ceil(CATEGORIES.length / 3));
  const col2 = CATEGORIES.slice(Math.ceil(CATEGORIES.length / 3), Math.ceil((CATEGORIES.length * 2) / 3));
  const col3 = CATEGORIES.slice(Math.ceil((CATEGORIES.length * 2) / 3));

  const renderPill = (cat: Category) => (
    <button
      key={cat.id}
      onClick={() => onOptionSelect(cat.id)}
      className="flex items-center gap-4 w-full bg-white p-3 rounded-full border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 shrink-0 group focus:outline-none"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-50 flex items-center justify-center p-1 relative">
        <Image 
          src={cat.logo || "/images/logo.webp"} 
          alt={`${cat.name} category icon`} 
          width={36}
          height={36}
          unoptimized
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="font-bold text-slate-800 text-sm text-left group-hover:text-blue-700 transition-colors line-clamp-1">
        {cat.name}
      </span>
    </button>
  );

  return (
    <section className="w-full py-20 lg:py-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Auto-Sliding Pills Columns */}
          <div className="relative h-[600px] w-full overflow-hidden flex gap-6 sm:gap-8 justify-center">
            {/* Fade overlays for the sliding effect */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

            {/* Column 1 (Slides Up) */}
            <div className="w-1/3 max-w-[200px] flex flex-col gap-6 sm:gap-8 animate-marquee-vertical hover:[animation-play-state:paused]">
              {[...col1, ...col1].map((cat, idx) => (
                <div key={`${cat.id}-${idx}`}>{renderPill(cat)}</div>
              ))}
            </div>

            {/* Column 2 (Slides Down) */}
            <div className="w-1/3 max-w-[200px] flex flex-col gap-6 sm:gap-8 animate-marquee-vertical-reverse hover:[animation-play-state:paused]">
              {[...col2, ...col2].map((cat, idx) => (
                <div key={`${cat.id}-${idx}`}>{renderPill(cat)}</div>
              ))}
            </div>

            {/* Column 3 (Slides Up) */}
            <div className="w-1/3 max-w-[200px] flex flex-col gap-6 sm:gap-8 animate-marquee-vertical hover:[animation-play-state:paused]">
              {[...col3, ...col3].map((cat, idx) => (
                <div key={`${cat.id}-${idx}`}>{renderPill(cat)}</div>
              ))}
            </div>
          </div>

          {/* Right Side: Text & CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              <AnimatedCounter end={10000} suffix="+" className="text-blue-600" /> Students <br className="hidden sm:block" />
              can&apos;t be wrong
            </h2>
            
            <div className="space-y-4 max-w-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                Your Ultimate Resource Directory
              </h3>
              <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                Discover the most trusted educational platforms, tools, and materials used by top students across the country—all in one place.
              </p>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/categories"
                className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg sm:text-xl transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
              >
                <span>Browse Directory</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
