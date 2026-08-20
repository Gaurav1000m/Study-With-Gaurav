"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className="group relative overflow-hidden text-left p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-blue-400/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[44px]"
    >
      {/* Background Watermark */}
      {category.logo && (
        <div className="absolute -right-3 -bottom-3 w-20 h-20 sm:w-32 sm:h-32 opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-110 transition-all duration-300 pointer-events-none select-none overflow-hidden">
          <img
            src={category.logo}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain filter blur-[0.5px]"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Hover Ambient Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-3">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200/90 shadow-2xs group-hover:border-blue-200 flex items-center justify-center transition-colors shrink-0 overflow-hidden p-1 z-20 relative">
            {category.logo ? (
              <img
                src={category.logo}
                alt={`${category.name} logo`}
                className="w-full h-full object-contain relative z-20"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full rounded-md bg-blue-600 text-white flex items-center justify-center font-black text-xs sm:text-sm relative z-20">
                {category.name.charAt(0)}
              </div>
            )}
          </div>
          <span className="text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border bg-slate-50 text-slate-600 border-slate-200/80 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors whitespace-nowrap relative z-20">
            {count} {count === 1 ? "res" : "resources"}
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
        <span>Explore</span>
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

