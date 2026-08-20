"use client";

import Link from "next/link";
import { Category } from "@/types/website";
import { CategoryCard } from "./CategoryCard";
import { Layers, ArrowRight } from "lucide-react";

interface CategoryGridProps {
  categories: Category[];
  categoryCounts: Record<string, number>;
  showViewAll?: boolean;
}

export function CategoryGrid({
  categories,
  categoryCounts,
  showViewAll = true,
}: CategoryGridProps) {
  return (
    <section id="categories" className="w-full py-6 sm:py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pb-2 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Browse Domains</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Educational Categories
            </h2>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <p className="text-sm text-slate-500 max-w-md hidden sm:block">
              Click any category to explore official portals, prep materials, and tools.
            </p>
            {showViewAll && (
              <Link
                href="/categories"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors shrink-0"
              >
                <span>All Categories ({categories.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {categories.map((category) => (
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
