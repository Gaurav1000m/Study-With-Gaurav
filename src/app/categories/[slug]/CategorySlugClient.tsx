"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ResourceGrid } from "@/components/ResourceGrid";
import { AdBanner } from "@/components/AdBanner";
import { Category, Website } from "@/types/website";
import { getCategoryGuide } from "@/data/categoryGuides";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Compass,
  ArrowRight,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySlugClientProps {
  category: Category;
  categoryWebsites: Website[];
}

export function CategorySlugClient({ category, categoryWebsites }: CategorySlugClientProps) {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileTab, setMobileTab] = useState<"portals" | "curriculum" | "protocol" | "faqs">("portals");
  const [searchQuery, setSearchQuery] = useState("");

  const guide = getCategoryGuide(category.name, category.id);

  const filteredWebsites = useMemo(() => {
    if (!searchQuery.trim()) return categoryWebsites;
    const q = searchQuery.toLowerCase().trim();
    return categoryWebsites.filter(
      (w) =>
        w.name.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.subcategory?.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [categoryWebsites, searchQuery]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://studywithgaurav.cc.cd",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: "https://studywithgaurav.cc.cd/categories",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `https://studywithgaurav.cc.cd/categories/${category.id}`,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} Educational Resources`,
    description: category.description,
    numberOfItems: categoryWebsites.length,
    itemListElement: categoryWebsites.map((w, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: w.name,
      url: `https://studywithgaurav.cc.cd/resources/${w.id}`,
    })),
  };

  const faqJsonLd = guide.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-8 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-6">
          
          {/* Back Navigation Link */}
          <div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors min-h-[44px] px-1"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Back to All Categories</span>
            </Link>
          </div>

          {/* Category App Header Card */}
          <div className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="flex items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                {/* Category Logo Squircle */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border border-slate-200/90 bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-2xs p-1.5">
                  {category.logo ? (
                    <Image
                      src={category.logo}
                      alt={`${category.name} portal logo`}
                      width={64}
                      height={64}
                      unoptimized
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-blue-600 text-white font-black text-lg sm:text-2xl flex items-center justify-center">
                      {category.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      Academic Subject Hub
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-100 rounded-full border border-slate-200 text-[10px] sm:text-xs font-bold text-slate-700">
                      {categoryWebsites.length} Portals
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight truncate">
                    {category.name}
                  </h1>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {category.description}
            </p>

            {/* In-category instant search for mobile & desktop if >2 portals */}
            {categoryWebsites.length > 2 && (
              <div className="relative pt-1">
                <div className="relative flex items-center w-full">
                  <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search within ${category.name}...`}
                    className="w-full pl-10 pr-10 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-2xs"
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
            )}
          </div>

          {/* Mobile App Segmented Navigation Tabs */}
          <div className="flex md:hidden items-center bg-slate-200/70 p-1 rounded-2xl border border-slate-200 gap-1 text-xs font-bold shadow-2xs">
            <button
              type="button"
              onClick={() => setMobileTab("portals")}
              className={cn(
                "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer min-h-[36px]",
                mobileTab === "portals"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Batches ({filteredWebsites.length})
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("curriculum")}
              className={cn(
                "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer min-h-[36px]",
                mobileTab === "curriculum"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Curriculum
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("protocol")}
              className={cn(
                "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer min-h-[36px]",
                mobileTab === "protocol"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Protocol
            </button>
            {guide.faqs && guide.faqs.length > 0 && (
              <button
                type="button"
                onClick={() => setMobileTab("faqs")}
                className={cn(
                  "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer min-h-[36px]",
                  mobileTab === "faqs"
                    ? "bg-white text-blue-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                FAQs
              </button>
            )}
          </div>

          {/* AdSense Unit in Category Free Space */}
          <AdBanner format="auto" minHeight="min-h-[100px]" label="ADVERTISEMENT" />

          {/* Section 1: Resource Directory (Batches & Portals) */}
          <div className={cn(mobileTab === "portals" ? "block" : "hidden md:block", "space-y-3 sm:space-y-4")}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-200 pb-2.5 sm:pb-3">
              <div>
                <h2 className="text-base sm:text-2xl font-bold text-slate-900">
                  Curated Platforms & Materials ({filteredWebsites.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Select a platform below to view detailed editorial analysis, pros and cons, and direct study access.
                </p>
              </div>
            </div>

            {/* Resource Cards Grid */}
            <ResourceGrid
              websites={filteredWebsites}
              searchQuery={searchQuery}
              onResetFilters={() => setSearchQuery("")}
            />
          </div>

          {/* Section 2: Curriculum Overview Box */}
          <div className={cn(mobileTab === "curriculum" ? "block" : "hidden md:block", "bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/90 shadow-2xs space-y-2.5 sm:space-y-3")}>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Curriculum & Scope Overview</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {guide.curriculumOverview}
            </p>
          </div>

          {/* Section 3: Educational Study Protocol & Pitfalls */}
          <div className={cn(mobileTab === "protocol" ? "grid" : "hidden md:grid", "grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6")}>
            {/* Study Protocol */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span>Recommended Study Protocol</span>
              </div>
              <p className="text-xs text-slate-500">
                Follow this systematic preparation workflow when studying {category.name}:
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {guide.recommendedStudyProtocol.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pitfalls & Evaluation */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-lg">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
                <span>Common Mistakes to Avoid</span>
              </div>
              <p className="text-xs text-slate-500">
                Avoid these frequent learning traps identified by our academic review team:
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {guide.commonPitfalls.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="leading-relaxed">{pitfall}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/editorial-policy"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline min-h-[36px]"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Read our 5-point curation & evaluation rubric</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Section 4: Category FAQs */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div className={cn(mobileTab === "faqs" ? "block" : "hidden md:block", "bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6")}>
              <h2 className="text-base sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Frequently Asked Questions about {category.name}</span>
              </h2>
              <div className="space-y-2.5 sm:space-y-3">
                {guide.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 transition-colors font-semibold text-xs sm:text-base text-slate-800 cursor-pointer min-h-[44px]"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Cross-Link Hub */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                <span>Looking for a structured step-by-step track?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Explore our full-length study roadmaps and comprehensive guides to plan your preparation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                href="/roadmaps"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-2xs min-h-[40px]"
              >
                <span>View Roadmaps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/articles"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-100 border border-slate-200 transition-colors min-h-[40px]"
              >
                <span>Read Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
