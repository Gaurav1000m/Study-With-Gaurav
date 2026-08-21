"use client";

import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import { Category } from "@/types/website";
import { ChevronRight } from "lucide-react";

function CategoryCardItem({ cat }: { cat: Category }) {


  return (
    <Link
      href={`/categories/${cat.id}`}
      className="group relative overflow-hidden p-5 sm:p-6 bg-white border border-slate-200/90 hover:border-blue-400/80 rounded-2xl flex flex-col justify-between text-left space-y-4 shadow-2xs hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[180px]"
    >
      {/* Background Watermark/Shadow Logo Effect */}
      {cat.logo && (
        <div className="absolute -right-4 -bottom-4 w-32 h-32 sm:w-36 sm:h-36 opacity-[0.10] group-hover:opacity-[0.20] group-hover:scale-110 transition-all duration-300 pointer-events-none select-none overflow-hidden">
          <Image
            src={cat.logo || "/images/logo.webp"}
            alt=""
            aria-hidden="true"
            width={144}
            height={144}
            unoptimized
            className="w-full h-full object-contain filter blur-[0.5px]"
          />
        </div>
      )}

      {/* Hover Ambient Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 space-y-3">
        {/* Category Logo Box */}
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 shadow-2xs group-hover:border-blue-200 flex items-center justify-center overflow-hidden p-1.5 shrink-0 group-hover:scale-105 transition-transform duration-200 z-20 relative">
          {cat.logo ? (
            <Image
              src={cat.logo || "/images/logo.webp"}
              alt={`${cat.name} portal logo`}
              width={40}
              height={40}
              unoptimized
              className="w-full h-full object-contain relative z-20"
            />
          ) : (
            <div className="w-full h-full rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm relative z-20">
              {cat.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Category Name */}
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1 relative z-20">
          {cat.name}
        </h3>

        {/* Category Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-3">
          {cat.description}
        </p>
      </div>

      {/* Card Action Link Indicator */}
      <div className="relative z-10 pt-2 border-t border-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600">
        <span>Browse Category</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function ResourceCategories() {
  if (!CATEGORIES || CATEGORIES.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What You&apos;ll Find
          </h2>
          <p className="text-xs sm:text-base text-slate-500 max-w-2xl mx-auto font-medium">
            A comprehensive, structured index across all core educational domains.
          </p>
        </div>

        {/* Categories Cards Grid with Background Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCardItem key={cat.id} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}


