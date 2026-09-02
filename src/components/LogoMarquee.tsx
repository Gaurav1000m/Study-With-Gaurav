"use client";

import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/utils";

export function LogoMarquee() {
  // We duplicate the logos array so that the CSS marquee can scroll seamlessly.
  const logos = [...CATEGORIES, ...CATEGORIES];

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <h3 className="text-center text-sm sm:text-base font-bold text-slate-500 uppercase tracking-widest">
          Trusted by students from top platforms
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left and Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max">
          {logos.map((category, index) => (
            <div
              key={`${category.id}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[160px] px-6 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-16 sm:h-20 w-16 sm:w-20">
                <Image
                  src={category.logo || "/images/logo.webp"}
                  alt={`${category.name} platform logo`}
                  width={80}
                  height={80}
                  unoptimized
                  className="w-full h-full object-contain rounded-lg drop-shadow-sm"
                  title={category.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
