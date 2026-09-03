"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { CategoryCard } from "@/components/CategoryCard";
import { CATEGORIES } from "@/data/categories";
import { WEBSITES } from "@/data/websites";
import { Layers } from "lucide-react";
import { AdBanner } from "@/components/AdBanner";

export function CategoriesClient() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((c) => {
      counts[c.id] = WEBSITES.filter((w) => w.category === c.id).length;
    });
    return counts;
  }, []);

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
      }
    ]
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Educational Categories",
    "numberOfItems": CATEGORIES.length,
    "itemListElement": CATEGORIES.map((cat, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": cat.name,
      "url": `https://studywithgaurav.cc.cd/categories/${cat.id}`
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
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
          {/* Page Banner Header */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs space-y-2 sm:space-y-4">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Domain Classification</span>
            </div>
            <h1 className="text-xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Educational Resource Categories
            </h1>
            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Explore resources by specific domains including Physics Wallah, Next Toppers, Vibrant, RWA, Unacademy, Padhle Akshay, competitive exam prep, and study materials.
            </p>
          </div>

          {/* Categories Grid (2 cols on mobile) */}
          <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                count={categoryCounts[category.id] || 0}
              />
            ))}
          </div>

          {/* AdSense Unit */}
          <AdBanner format="auto" minHeight="min-h-[100px]" label="ADVERTISEMENT" />
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
