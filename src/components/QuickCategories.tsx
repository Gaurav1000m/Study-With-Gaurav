"use client";

import { CATEGORIES } from "@/data/categories";
import { CategoryId } from "@/types/website";

interface QuickCategoriesProps {
  onCategorySelect: (catId: CategoryId | "all") => void;
  activeCategory: CategoryId | "all";
}

export function QuickCategories({ onCategorySelect, activeCategory }: QuickCategoriesProps) {
  const categories = [
    { id: "all", label: "All" },
    ...CATEGORIES.map((cat) => ({
      id: cat.id,
      label: cat.shortName || cat.name,
    })),
  ];

  return (
    <div className="flex items-center gap-2 pt-2 overflow-x-auto scrollbar-none carousel-snap max-w-full px-1 sm:px-0 sm:flex-wrap sm:justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategorySelect(cat.id)}
          className={`px-4 py-2 sm:px-3.5 sm:py-1.5 min-h-[40px] rounded-full text-xs font-semibold border transition-all shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
            activeCategory === cat.id
              ? "bg-navy-900 border-navy-900 text-white shadow-2xs"
              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
