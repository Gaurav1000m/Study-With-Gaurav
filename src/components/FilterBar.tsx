"use client";

import { useState, useEffect } from "react";
import { Category, CategoryId, SortOption } from "@/types/website";
import { SlidersHorizontal, ArrowUpDown, X, Check, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: Category[];
  selectedCategory: CategoryId | "all";
  onSelectCategory: (category: CategoryId | "all") => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  searchQuery: string;
  onClearSearch: () => void;
  totalResultsCount: number;
}

export function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  searchQuery,
  onClearSearch,
  totalResultsCount,
}: FilterBarProps) {
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [tempCategory, setTempCategory] = useState<CategoryId | "all">(selectedCategory);

  const hasActiveFilters = selectedCategory !== "all" || searchQuery !== "";
  const selectedCategoryObj = categories.find((c) => c.id === selectedCategory);

  const [prevCategory, setPrevCategory] = useState<CategoryId | "all">(selectedCategory);
  if (prevCategory !== selectedCategory) {
    setPrevCategory(selectedCategory);
    setTempCategory(selectedCategory);
  }

  // Lock body scroll when mobile filter sheet is open
  useEffect(() => {
    if (isFilterSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterSheetOpen]);

  // Handle ESC key to close filter sheet
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFilterSheetOpen) {
        setIsFilterSheetOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFilterSheetOpen]);

  const handleApplySheetFilters = () => {
    onSelectCategory(tempCategory);
    setIsFilterSheetOpen(false);
  };

  const handleResetSheetFilters = () => {
    setTempCategory("all");
    onSelectCategory("all");
    onClearSearch();
    setIsFilterSheetOpen(false);
  };

  return (
    <>
      <div className="w-full bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-xs space-y-3 sm:space-y-4">
        {/* Upper Row: Filter Controls + Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          {/* Mobile Filter Sheet Trigger & Desktop Filter Header */}
          <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
            {/* Mobile Filter Sheet Button */}
            <button
              onClick={() => setIsFilterSheetOpen(true)}
              className="sm:hidden flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 active:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
            >
              <Filter className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Filters</span>
              {selectedCategory !== "all" && (
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              )}
            </button>

            {/* Mobile Result Count Pill */}
            <span className="sm:hidden text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-2 rounded-xl border border-slate-200 whitespace-nowrap min-h-[44px] flex items-center">
              {totalResultsCount} {totalResultsCount === 1 ? "res" : "results"}
            </span>

            {/* Desktop Counter & Filter Info */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide">
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                <span>Filter Resources</span>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                {totalResultsCount} {totalResultsCount === 1 ? "result" : "results"}
              </span>
            </div>

            {/* Clear All Reset Button */}
            {hasActiveFilters && (
              <button
                onClick={() => {
                  onSelectCategory("all");
                  onClearSearch();
                }}
                className="min-h-[44px] sm:min-h-[auto] inline-flex items-center justify-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 sm:px-2.5 sm:py-1 rounded-xl sm:rounded-md transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Chips Bar (If filters applied) */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-1">
              Active Filters:
            </span>

            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                <span>Category: {selectedCategoryObj?.shortName || selectedCategoryObj?.name || selectedCategory}</span>
                <button
                  onClick={() => onSelectCategory("all")}
                  className="p-0.5 hover:bg-blue-200 rounded transition-colors"
                  aria-label="Remove category filter"
                >
                  <X className="w-3 h-3 text-blue-700" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                <span>Search: &quot;{searchQuery}&quot;</span>
                <button
                  onClick={onClearSearch}
                  className="p-0.5 hover:bg-slate-200 rounded transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="w-3 h-3 text-slate-600" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Category Pills Bar (Horizontally scrollable on desktop/mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-2.5">
          <button
            onClick={() => onSelectCategory("all")}
            className={cn(
              "px-3.5 py-2 sm:py-1.5 min-h-[38px] sm:min-h-[auto] rounded-xl sm:rounded-lg text-xs font-bold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
              selectedCategory === "all"
                ? "bg-navy-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            )}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "px-3.5 py-2 sm:py-1.5 min-h-[38px] sm:min-h-[auto] rounded-xl sm:rounded-lg text-xs font-bold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                selectedCategory === cat.id
                  ? "bg-navy-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              )}
            >
              {cat.shortName || cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Filter Bottom Sheet Drawer Modal */}
      {isFilterSheetOpen && (
        <div className="fixed inset-0 z-50 sm:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setIsFilterSheetOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet Content */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filter Options"
            className="relative z-10 w-full bg-white rounded-t-2xl border-t border-slate-200 shadow-2xl animate-slide-up flex flex-col max-h-[85vh] overflow-hidden pb-safe"
          >
            {/* Sheet Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-navy-900 text-base">Filter Resources</h3>
              </div>

              <button
                onClick={() => setIsFilterSheetOpen(false)}
                aria-label="Close filter drawer"
                className="min-w-[44px] min-h-[44px] rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Options List */}
            <div className="p-5 space-y-4 overflow-y-auto max-h-[60vh]">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Select Category
                </label>

                <div className="space-y-2">
                  <button
                    onClick={() => setTempCategory("all")}
                    className={cn(
                      "w-full min-h-[48px] px-4 py-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between border transition-all",
                      tempCategory === "all"
                        ? "bg-blue-50/80 text-blue-900 border-blue-300 font-bold"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    )}
                  >
                    <span>All Categories</span>
                    {tempCategory === "all" && <Check className="w-4 h-4 text-blue-600" />}
                  </button>

                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setTempCategory(cat.id)}
                      className={cn(
                        "w-full min-h-[48px] px-4 py-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between border transition-all",
                        tempCategory === cat.id
                          ? "bg-blue-50/80 text-blue-900 border-blue-300 font-bold"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      )}
                    >
                      <span>{cat.name}</span>
                      {tempCategory === cat.id && <Check className="w-4 h-4 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Sheet Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center gap-3">
              <button
                onClick={handleResetSheetFilters}
                className="flex-1 min-h-[48px] px-4 py-3 text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
              >
                Reset All
              </button>
              <button
                onClick={handleApplySheetFilters}
                className="flex-1 min-h-[48px] px-4 py-3 text-xs font-bold text-white bg-navy-900 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

