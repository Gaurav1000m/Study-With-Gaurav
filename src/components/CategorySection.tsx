"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";
import { CategoryId } from "@/types/website";
import { ArrowRight, ChevronDown } from "lucide-react";

interface CategorySectionProps {
  categoryCounts: Record<CategoryId, number>;
}

export function CategorySection({ categoryCounts }: CategorySectionProps) {
  const [showAllMobile, setShowAllMobile] = useState(false);

  if (!CATEGORIES || CATEGORIES.length === 0) {
    return null;
  }

  const mobileDisplayCategories = showAllMobile ? CATEGORIES : CATEGORIES.slice(0, 8);

  return (
    <section className="w-full py-6 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
        
        {/* Title Header with Mobile Quick Link */}
        <div className="flex items-end justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Categories
            </h2>
            <p className="text-xs sm:text-base text-slate-600">
              Find organized resources across exam prep, batches, notes, and coding tools.
            </p>
          </div>
          <Link
            href="/categories"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 shrink-0 pb-1"
          >
            <span>All ({CATEGORIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile View: Top 8 Curated Categories Grid + Expand Toggle */}
        <div className="block md:hidden space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            {mobileDisplayCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                count={categoryCounts[category.id] || 0}
              />
            ))}
          </div>

          {!showAllMobile && (
            <button
              onClick={() => setShowAllMobile(true)}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Show All {CATEGORIES.length} Categories</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          )}
        </div>

        {/* Desktop View: Full Responsive Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              count={categoryCounts[category.id] || 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
