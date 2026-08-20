"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { SearchBar } from "@/components/SearchBar";
import { ResourceGrid } from "@/components/ResourceGrid";
import { WEBSITES } from "@/data/websites";
import { BookOpenCheck } from "lucide-react";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const paramQuery = searchParams.get("q") || "";
  const shouldFocus = searchParams.get("focus") === "true";

  const [searchQuery, setSearchQuery] = useState(paramQuery);
  const [prevParamQuery, setPrevParamQuery] = useState(paramQuery);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  if (prevParamQuery !== paramQuery) {
    setPrevParamQuery(paramQuery);
    setSearchQuery(paramQuery);
  }

  const filteredWebsites = useMemo(() => {
    return WEBSITES.filter((website) => {
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
  }, [searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} onFocusSearch={handleFocusSearch} />
      <div className="h-14 sm:h-16" />

      <main className="flex-1 py-4 sm:py-10 pb-20 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
          {/* Header Banner */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
                  <BookOpenCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Full Resource Directory</span>
                </div>
                <h1 className="text-xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  All Educational Resources & Batches
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Search, filter, and discover {WEBSITES.length}+ verified educational platforms, study tools, competitive exam portals, and coding sites. Click any card to open.
            </p>

            <div className="pt-1 sm:pt-2">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onTagClick={(tag) => setSearchQuery(tag)}
                totalResultsCount={filteredWebsites.length}
                autoFocus={shouldFocus}
              />
            </div>
          </div>

          {/* Grid */}
          <ResourceGrid
            websites={filteredWebsites}
            searchQuery={searchQuery}
            onResetFilters={handleResetFilters}
            onTagClick={(tag) => setSearchQuery(tag)}
          />
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}

export function ResourcesClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 text-sm text-slate-500">Loading resources directory...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}
