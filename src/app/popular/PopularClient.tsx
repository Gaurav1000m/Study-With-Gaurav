"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ResourceCard } from "@/components/ResourceCard";
import { SearchBar } from "@/components/SearchBar";
import { POPULAR_WEBSITES, RECENT_WEBSITES } from "@/data/websites";
import { Flame, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdBanner } from "@/components/AdBanner";

export function PopularClient() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"popular" | "recent">("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const baseList = activeTab === "popular" ? POPULAR_WEBSITES : RECENT_WEBSITES;

  const filteredWebsites = useMemo(() => {
    if (!searchQuery.trim()) return baseList;
    const q = searchQuery.toLowerCase().trim();
    return baseList.filter(
      (w) =>
        w.name.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [baseList, searchQuery]);

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
        "name": "Popular",
        "item": "https://studywithgaurav.cc.cd/popular"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-10 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
          {/* Header Banner */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Student Highlights</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  Popular & Recent Resources
                </h1>
              </div>

              {/* Mobile Native Segmented Control */}
              <div className="grid grid-cols-2 w-full sm:w-auto bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
                <button
                  onClick={() => setActiveTab("popular")}
                  className={cn(
                    "flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 text-xs font-bold rounded-lg transition-all min-h-[40px] cursor-pointer",
                    activeTab === "popular"
                      ? "bg-white text-navy-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">Popular ({POPULAR_WEBSITES.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab("recent")}
                  className={cn(
                    "flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 text-xs font-bold rounded-lg transition-all min-h-[40px] cursor-pointer",
                    activeTab === "recent"
                      ? "bg-white text-navy-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">Recent ({RECENT_WEBSITES.length})</span>
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Explore the websites most frequently visited by students alongside newly added study utilities and official portals.
            </p>

            <div className="pt-2">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onTagClick={(tag) => setSearchQuery(tag)}
                totalResultsCount={filteredWebsites.length}
              />
            </div>
          </div>

          {/* Top Leaderboard AdBanner */}
          <AdBanner className="my-3 sm:my-4" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {filteredWebsites.map((website) => (
              <ResourceCard
                key={`popular-page-${activeTab}-${website.id}`}
                website={website}
                onTagClick={(tag) => setSearchQuery(tag)}
              />
            ))}
          </div>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 space-y-3">
              <p className="text-base font-semibold text-slate-700">No resources match &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 text-xs font-semibold text-white bg-navy-900 rounded-lg"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* AdSense Unit */}
          <AdBanner format="auto" minHeight="min-h-[100px]" label="ADVERTISEMENT" />
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
