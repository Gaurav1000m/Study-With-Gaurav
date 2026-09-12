"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Category } from "@/types/website";

interface CategoryCardProps {
  category: Category;
  count: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative overflow-hidden text-left p-3 sm:p-5 rounded-2xl border border-slate-200/90 hover:border-blue-400/80 hover:shadow-md active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-full bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[44px]"
    >
      {/* Background Watermark */}
      {category.logo && (
        <div className="absolute -right-2 -bottom-2 w-16 h-16 sm:w-28 sm:h-28 opacity-[0.06] group-hover:opacity-[0.14] group-hover:scale-110 transition-all duration-300 pointer-events-none select-none overflow-hidden">
          <Image
            src={category.logo || "/images/logo.webp"}
            alt=""
            aria-hidden="true"
            width={112}
            height={112}
            unoptimized
            className="w-full h-full object-contain filter blur-[0.3px]"
          />
        </div>
      )}

      {/* Hover Ambient Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/90 shadow-2xs group-hover:border-blue-200 flex items-center justify-center transition-colors shrink-0 overflow-hidden p-1.5 z-20 relative">
            {category.logo ? (
              <Image
                src={category.logo || "/images/logo.webp"}
                alt={`${category.name} portal logo`}
                width={44}
                height={44}
                unoptimized
                className="w-full h-full object-contain relative z-20"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs sm:text-sm relative z-20">
                {category.name.charAt(0)}
              </div>
            )}
          </div>
          <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border bg-blue-50/80 text-blue-700 border-blue-200/70 group-hover:bg-blue-100 transition-colors whitespace-nowrap relative z-20">
            {count} {count === 1 ? "portal" : "portals"}
          </span>
        </div>

        {/* Category Title */}
        <h3 className="text-xs sm:text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors mb-0.5 sm:mb-1 line-clamp-1">
          {category.name}
        </h3>

        {/* Category Description */}
        <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
          {category.description}
        </p>
      </div>

      {/* Card Action Link Indicator */}
      <div className="relative z-10 mt-2 sm:mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-500 group-hover:text-blue-600">
        <span>Explore Batches</span>
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

