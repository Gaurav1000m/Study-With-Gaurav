"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { SearchBar } from "@/components/SearchBar";
import { ResourceCard } from "@/components/ResourceCard";
import { AdBanner } from "@/components/AdBanner";
import { LottieAnimation } from "@/components/LottieAnimation";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";
import { useApp } from "@/context/AppContext";
import { Bookmark, Trash2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SavedClient() {
  const { bookmarks, clearBookmarks } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  // Get all bookmarked website objects
  const savedWebsites = useMemo(() => {
    return WEBSITES.filter((w) => bookmarks.includes(w.id)).sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.rating || 0) - (a.rating || 0);
    });
  }, [bookmarks]);

  // Filter within saved resources
  const filteredSaved = useMemo(() => {
    return savedWebsites.filter((w) => {
      if (selectedCategory !== "all" && w.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          w.name.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q) ||
          w.category.toLowerCase().includes(q) ||
          w.subcategory?.toLowerCase().includes(q) ||
          w.tags?.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [savedWebsites, selectedCategory, searchQuery]);

  // Categories present in saved items
  const savedCategories = useMemo(() => {
    const catIds = Array.from(new Set(savedWebsites.map((w) => w.category)));
    return CATEGORIES.filter((c) => catIds.includes(c.id));
  }, [savedWebsites]);

  const handleFocusSearch = () => {
    const inputEl = document.querySelector<HTMLInputElement>("input[type='text']");
    if (inputEl) {
      inputEl.focus();
      inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header
        onOpenSuggestModal={() => setIsSuggestModalOpen(true)}
        onFocusSearch={handleFocusSearch}
      />
      <div className="h-14 sm:h-16" />

      <main className="flex-1 py-4 sm:py-10 pb-20 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
          
          {/* Header Banner - Matching Resource Directory Header */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
                  <Bookmark className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                  <span>Personal Saved Directory</span>
                </div>
                <h1 className="text-xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  Saved Educational Resources & Batches
                </h1>
              </div>

              {/* Action Stats & Clear */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold border border-blue-200/60">
                  {savedWebsites.length} {savedWebsites.length === 1 ? "Bookmark" : "Bookmarks"}
                </span>
                {savedWebsites.length > 0 && (
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to remove all saved bookmarks?")) {
                        clearBookmarks();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200/70 transition-colors cursor-pointer"
                    title="Clear all bookmarks"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Quick access to your bookmarked educational platforms, lecture batches, test series, and notes portals. Click any card to launch directly.
            </p>

            {/* Shared SearchBar with StarBorder */}
            <div className="pt-1 sm:pt-2">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onTagClick={(tag) => setSearchQuery(tag)}
                totalResultsCount={filteredSaved.length}
              />
            </div>

            {/* Category Filter Pills when multiple categories exist */}
            {savedCategories.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer",
                    selectedCategory === "all"
                      ? "bg-slate-900 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  All ({savedWebsites.length})
                </button>
                {savedCategories.map((c) => {
                  const count = savedWebsites.filter((w) => w.category === c.id).length;
                  const isSelected = selectedCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(isSelected ? "all" : c.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer",
                        isSelected
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      {c.shortName || c.name} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Results Grid or Empty State */}
          {savedWebsites.length === 0 ? (
            /* Empty State: Only animation showing without white box and text */
            <div className="flex items-center justify-center py-6 sm:py-12 w-full">
              <LottieAnimation
                url="https://lottie.host/embed/9b9953e1-b7a9-426b-bc2d-8b47a3967132/dmWu1FgEtL.json"
                width={260}
                height={260}
                className="w-56 h-56 sm:w-72 sm:h-72"
              />
            </div>
          ) : filteredSaved.length > 0 ? (
            /* Resource Grid */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-500">
                <span>
                  Showing <strong className="text-slate-900 font-semibold">{filteredSaved.length}</strong> {filteredSaved.length === 1 ? "saved resource" : "saved resources"}
                </span>
                {(searchQuery || selectedCategory !== "all") && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    Reset filters
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-6">
                {filteredSaved.map((website) => (
                  <ResourceCard
                    key={website.id}
                    website={website}
                    onTagClick={(tag) => setSearchQuery(tag)}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* No Search Match State */
            <div className="text-center py-16 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 max-w-md mx-auto shadow-2xs">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">No matching bookmarks</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                  No saved items match &ldquo;{searchQuery}&rdquo;.
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Reset search</span>
              </button>
            </div>
          )}

          {/* AdSense Unit in Saved page */}
          <AdBanner format="horizontal" minHeight="min-h-[100px]" label="ADVERTISEMENT" />

        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
