"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { CategoryCard } from "@/components/CategoryCard";
import { CATEGORIES } from "@/data/categories";
import { WEBSITES } from "@/data/websites";
import { Layers, Search, X, Sparkles } from "lucide-react";
import { AdBanner } from "@/components/AdBanner";
import { cn } from "@/lib/utils";

const INSTITUTE_KEYWORDS = ["physics", "pw", "topper", "rwa", "kgs", "vibrant", "kaksha", "padhle", "unacademy", "allen", "vedantu", "adda"];
const EXAM_KEYWORDS = ["exam", "prep", "jee", "neet", "gate", "ssc", "defence", "civil", "upsc", "board"];
const TECH_KEYWORDS = ["coding", "tech", "computer", "web", "python", "ai", "data", "software", "development"];
const MATERIAL_KEYWORDS = ["note", "material", "pyq", "book", "formula", "cheat", "study", "free"];

export function CategoriesClient() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<"all" | "institutes" | "exams" | "tech" | "materials">("all");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((c) => {
      counts[c.id] = WEBSITES.filter((w) => w.category === c.id).length;
    });
    return counts;
  }, []);

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter((category) => {
      // 1. Filter by domain tab
      if (selectedDomain === "institutes") {
        const idLower = category.id.toLowerCase();
        const nameLower = category.name.toLowerCase();
        const matches = INSTITUTE_KEYWORDS.some((k) => idLower.includes(k) || nameLower.includes(k));
        if (!matches) return false;
      } else if (selectedDomain === "exams") {
        const idLower = category.id.toLowerCase();
        const nameLower = category.name.toLowerCase();
        const matches = EXAM_KEYWORDS.some((k) => idLower.includes(k) || nameLower.includes(k));
        if (!matches) return false;
      } else if (selectedDomain === "tech") {
        const idLower = category.id.toLowerCase();
        const nameLower = category.name.toLowerCase();
        const matches = TECH_KEYWORDS.some((k) => idLower.includes(k) || nameLower.includes(k));
        if (!matches) return false;
      } else if (selectedDomain === "materials") {
        const idLower = category.id.toLowerCase();
        const nameLower = category.name.toLowerCase();
        const matches = MATERIAL_KEYWORDS.some((k) => idLower.includes(k) || nameLower.includes(k));
        if (!matches) return false;
      }

      // 2. Filter by search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        category.name.toLowerCase().includes(q) ||
        category.description.toLowerCase().includes(q) ||
        category.id.toLowerCase().includes(q)
      );
    });
  }, [selectedDomain, searchQuery]);

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

      <main id="main-content" className="flex-1 py-4 sm:py-10 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-6">
          
          {/* App Header Card */}
          <div className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>Educational Subjects & Portals</span>
                </div>
                <h1 className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Browse by Category
                </h1>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold border border-blue-200/60 self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{CATEGORIES.length} Curated Domains</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              Quickly find institute batches, exam portals, lecture playlists, and free notes by category.
            </p>

            {/* Mobile App Instant Category Search Bar */}
            <div className="relative pt-1">
              <div className="relative flex items-center w-full">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search categories (e.g. Physics Wallah, Next Toppers, RWA, Coding)..."
                  className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Native App Horizontal Domain Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar -mx-1 px-1">
              <button
                onClick={() => setSelectedDomain("all")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[34px]",
                  selectedDomain === "all"
                    ? "bg-slate-950 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                All Domains ({CATEGORIES.length})
              </button>
              <button
                onClick={() => setSelectedDomain("institutes")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[34px]",
                  selectedDomain === "institutes"
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                Institutes & Batches
              </button>
              <button
                onClick={() => setSelectedDomain("exams")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[34px]",
                  selectedDomain === "exams"
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                Competitive Exams
              </button>
              <button
                onClick={() => setSelectedDomain("tech")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[34px]",
                  selectedDomain === "tech"
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                Coding & Tech
              </button>
              <button
                onClick={() => setSelectedDomain("materials")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[34px]",
                  selectedDomain === "materials"
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                Notes & Materials
              </button>
            </div>
          </div>

          {/* Top Leaderboard AdBanner */}
          <AdBanner className="my-2 sm:my-4" />

          {/* Results Count Bar */}
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredCategories.length}</strong> categories
            </span>
            {(searchQuery || selectedDomain !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDomain("all");
                }}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Categories Grid (2 cols on mobile) */}
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {filteredCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  count={categoryCounts[category.id] || 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <p className="text-sm font-semibold text-slate-700">
                No categories match &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDomain("all");
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-xl"
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
