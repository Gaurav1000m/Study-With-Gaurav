"use client";

import { CATEGORIES } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";
import { CategoryId } from "@/types/website";

interface CategorySectionProps {
  categoryCounts: Record<CategoryId, number>;
}

export function CategorySection({ categoryCounts }: CategorySectionProps) {
  if (!CATEGORIES || CATEGORIES.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Title */}
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Categories
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Find useful resources organized around what you need.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
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
