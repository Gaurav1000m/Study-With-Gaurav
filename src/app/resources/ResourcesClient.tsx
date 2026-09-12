"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { SearchBar } from "@/components/SearchBar";
import { ResourceGrid } from "@/components/ResourceGrid";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";
import { BookOpenCheck } from "lucide-react";
import { AdBanner } from "@/components/AdBanner";
import { cn } from "@/lib/utils";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const paramQuery = searchParams.get("q") || "";
  const paramCategory = searchParams.get("category") || "all";
  const shouldFocus = searchParams.get("focus") === "true";

  const [searchQuery, setSearchQuery] = useState(paramQuery);
  const [activeCategory, setActiveCategory] = useState<string>(paramCategory);
  const [prevParamQuery, setPrevParamQuery] = useState(paramQuery);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  if (prevParamQuery !== paramQuery) {
    setPrevParamQuery(paramQuery);
    setSearchQuery(paramQuery);
  }

  const filteredWebsites = useMemo(() => {
    return WEBSITES.filter((website) => {
      const matchesCategory =
        activeCategory === "all" || website.category === activeCategory;

      if (!matchesCategory) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          website.name.toLowerCase().includes(q) ||
          website.description.toLowerCase().includes(q) ||
          website.category.toLowerCase().includes(q) ||
          website.subcategory?.toLowerCase().includes(q) ||
          website.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    }).sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.rating || 0) - (a.rating || 0);
    });
  }, [searchQuery, activeCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
  };

  const handleFocusSearch = () => {
    const inputEl = document.querySelector<HTMLInputElement>("input[type='text']");
    if (inputEl) {
      inputEl.focus();
      inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
        "name": "Resources",
        "item": "https://studywithgaurav.cc.cd/resources"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} onFocusSearch={handleFocusSearch} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-10 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-6">
          {/* Header Banner */}
          <div className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
                  <BookOpenCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Full Resource Directory</span>
                </div>
                <h1 className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  All Educational Resources & Batches
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Search, filter, and discover {WEBSITES.length}+ verified educational platforms, study tools, competitive exam portals, and coding sites. Click any card to open.
            </p>

            <div className="pt-1 space-y-3">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onTagClick={(tag) => setSearchQuery(tag)}
                totalResultsCount={filteredWebsites.length}
                autoFocus={shouldFocus}
              />

              {/* Horizontal Scrolling Category Chips (Mobile App Style) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar -mx-1 px-1">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer min-h-[34px]",
                    activeCategory === "all"
                      ? "bg-slate-900 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  All ({WEBSITES.length})
                </button>
                {CATEGORIES.map((cat) => {
                  const count = WEBSITES.filter((w) => w.category === cat.id).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 min-h-[34px]",
                        activeCategory === cat.id
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      <span>{cat.shortName || cat.name}</span>
                      <span
                        className={cn(
                          "text-[10px] px-1.5 py-0.2 rounded-full font-extrabold",
                          activeCategory === cat.id
                            ? "bg-white/25 text-white"
                            : "bg-slate-200 text-slate-500"
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Count Bar */}
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredWebsites.length}</strong> resources
            </span>
            {(searchQuery || activeCategory !== "all") && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Top Leaderboard AdBanner */}
          <AdBanner className="my-2 sm:my-4" />

          {/* Grid */}
          <ResourceGrid
            websites={filteredWebsites}
            searchQuery={searchQuery}
            onResetFilters={handleResetFilters}
            onTagClick={(tag) => setSearchQuery(tag)}
          />

          {/* AdSense Unit */}
          <AdBanner format="auto" minHeight="min-h-[100px]" label="ADVERTISEMENT" />
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}

export function ResourcesClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center p-8 text-sm text-slate-500">Loading resources directory...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}
