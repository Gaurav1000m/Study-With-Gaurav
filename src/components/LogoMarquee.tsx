"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export function LogoMarquee() {
  // Extract all categories with real logos
  const validLogos = CATEGORIES.filter((c) => Boolean(c.logo));
  // Duplicate categories array for seamless infinite marquee scrolling
  const logos = [...validLogos, ...validLogos];

  return (
    <section
      aria-label="Verified Educational Platforms"
      className="relative w-full py-4 sm:py-5 bg-white border-y border-slate-100 overflow-hidden select-none"
    >
      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-4 mb-2.5 sm:mb-3 text-center">
        <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
          Verified Platforms & Coaching Channels
        </p>
      </div>

      {/* Infinite Scrolling Large Logo Slider */}
      <div className="relative w-full flex items-center overflow-hidden py-0.5">
        {/* Left & Right Pure White Fade Edge Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Clean, Evenly Spaced Logo Track */}
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max items-center gap-4 sm:gap-6 md:gap-8 px-4 will-change-transform">
          {logos.map((category, index) => (
            <Link
              key={`${category.id}-${index}`}
              href={`/categories/${category.id}`}
              title={category.name}
              className="group relative flex items-center justify-center shrink-0 cursor-pointer focus:outline-none transition-transform duration-200 hover:scale-105 px-1"
            >
              {/* Clean Large Logo Floating on White Background */}
              <div className="relative h-13 sm:h-16 md:h-18 w-20 sm:w-26 md:w-28 flex items-center justify-center">
                <Image
                  src={category.logo || "/images/logo.webp"}
                  alt={category.name}
                  width={140}
                  height={80}
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
