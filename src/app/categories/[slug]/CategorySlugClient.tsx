"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ResourceGrid } from "@/components/ResourceGrid";
import { Category, SortOption, Website } from "@/types/website";
import { ArrowLeft, ArrowUpDown, SlidersHorizontal } from "lucide-react";

interface CategorySlugClientProps {
  category: Category;
  categoryWebsites: Website[];
}

export function CategorySlugClient({ category, categoryWebsites }: CategorySlugClientProps) {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>("recommended");

  // Sort
  const filteredWebsites = useMemo(() => {
    return [...categoryWebsites].sort((a, b) => {
      if (selectedSort === "popular") {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return (b.rating || 0) - (a.rating || 0);
      }
      if (selectedSort === "recent") {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
      if (selectedSort === "a-z") {
        return a.name.localeCompare(b.name);
      }
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.rating || 0) - (a.rating || 0);
    });
  }, [categoryWebsites, selectedSort]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://studywithgaurav.cc.cd"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Categories",
        "item": "https://studywithgaurav.cc.cd/categories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.name,
        "item": `https://studywithgaurav.cc.cd/categories/${category.id}`
      }
    ]
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${category.name} Educational Resources`,
    "description": category.description,
    "numberOfItems": categoryWebsites.length,
    "itemListElement": categoryWebsites.map((w, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": w.name,
      "url": w.url
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main className="flex-1 py-4 sm:py-10 pb-20 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
          {/* Back Navigation Link */}
          <div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors min-h-[44px] px-1"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Home / Categories / <span className="text-slate-900">{category.name}</span></span>
            </Link>
          </div>

          {/* Category Header Banner */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 mb-2">
                  Category Directory
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  {category.name}
                </h1>
              </div>
              <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 shrink-0 self-start sm:self-auto">
                {categoryWebsites.length} Verified Platforms
              </div>
            </div>

            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Controls & Sorting Bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Showing {filteredWebsites.length} {category.name} resources
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <label htmlFor="cat-sort" className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                <span>Sort by:</span>
              </label>
              <select
                id="cat-sort"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value as SortOption)}
                className="text-xs font-bold text-slate-800 bg-slate-50 border border-slate-300 rounded-xl sm:rounded-lg px-3 py-2 sm:py-1.5 min-h-[44px] sm:min-h-[auto] hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="popular">Most Popular</option>
                <option value="recent">Recently Added</option>
                <option value="a-z">Alphabetical (A–Z)</option>
              </select>
            </div>
          </div>

          {/* Resource Cards Grid */}
          <ResourceGrid
            websites={filteredWebsites}
            searchQuery=""
            onResetFilters={() => {
              setSelectedSort("recommended");
            }}
          />
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
