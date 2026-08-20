"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { QuickCategories } from "@/components/QuickCategories";
import { CategorySection } from "@/components/CategorySection";
import { DiscoverySection } from "@/components/DiscoverySection";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ResourceCard } from "@/components/ResourceCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { FlipText } from "@/components/FlipText";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ModernLearningSection } from "@/components/ModernLearningSection";

import { SuggestResourceCTA } from "@/components/SuggestResourceCTA";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";
import { CategoryId } from "@/types/website";
import { Sparkles, Compass } from "lucide-react";

export default function Home() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");

  // Calculate real-time categories resources count
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {} as Record<CategoryId, number>;
    CATEGORIES.forEach((c) => {
      counts[c.id] = WEBSITES.filter((w) => w.category === c.id).length;
    });
    return counts;
  }, []);

  // Filter websites in real-time
  const filteredWebsites = useMemo(() => {
    return WEBSITES.filter((w) => {
      const matchesSearch =
        !searchQuery.trim() ||
        w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (w.tags && w.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesCategory =
        activeCategory === "all" || w.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setActiveCategory("all");
    // Scroll to search input if helpful
    const heroSec = document.getElementById("hero");
    if (heroSec) {
      heroSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (catId: CategoryId | "all") => {
    setActiveCategory(catId);
    setSearchQuery("");
  };

  const handleDiscoverySelect = (catId: CategoryId) => {
    setActiveCategory(catId);
    setSearchQuery("");
    // Smooth scroll to results
    const resultsSec = document.getElementById("explore-grid");
    if (resultsSec) {
      resultsSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
  };

  const isSearchActive = searchQuery.trim().length > 0 || activeCategory !== "all";

  const handleFocusSearch = () => {
    const inputEl = document.querySelector<HTMLInputElement>("input[type='text']");
    if (inputEl) {
      inputEl.focus();
      inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Study with Gaurav?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study with Gaurav (studywithgaurav.cc.cd) is a centralized educational resource directory designed to help students quickly discover verified learning portals, competitive exam preparation batches, PDF notes, and study tools in one organized hub."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms and exam categories are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hub features over 100+ platforms across 30 categories, including Physics Wallah (PW OTT), Next Toppers, Vibrant, Rojgar With Ankit (RWA), Science & Fun, Padhle Akshay, Unacademy, Khan Global Studies (KGS), GS Vision, Futurekul, and specialized portals for JEE, NEET, SSC, Police, and Board exams."
        }
      },
      {
        "@type": "Question",
        "name": "Is Study with Gaurav free for students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Study with Gaurav is completely free for all students without paywalls or hidden subscriptions."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Header */}
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} onFocusSearch={handleFocusSearch} />
      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />

      <main className="flex-1">
        
        {/* Hero Section */}
        <section id="hero" className="w-full bg-white pt-6 pb-2 sm:pt-12 sm:pb-4 text-center relative overflow-hidden">
          {/* Majestic Lion Background */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 opacity-30 pointer-events-none select-none z-0">
            <img
              src="/lionbg.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain object-right filter drop-shadow-lg"
            />
          </div>

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-100 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>STUDENT RESOURCE DIRECTORY</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Everything Students Need, <br className="hidden sm:block" />
              <span className="text-blue-700">
                <FlipText words={["In One Place.", "Organized Perfectly.", "For Top Students.", "Completely Free."]} />
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Discover useful educational websites, coding platforms, exam resources, AI tools, career opportunities, scholarships and productivity tools — all organized in one place.
            </p>

            {/* Search Bar Container */}
            <div className="pt-2 max-w-2xl mx-auto">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onTagClick={handleTagClick}
                totalResultsCount={filteredWebsites.length}
              />
            </div>

            {/* Quick Category Pills */}
            <QuickCategories
              onCategorySelect={handleCategorySelect}
              activeCategory={activeCategory}
            />
          </div>
        </section>

        {/* Logo Marquee */}
        <LogoMarquee />

        {/* Real-time search results or default layout */}
        {isSearchActive ? (
          <section id="explore-grid" className="w-full py-16 bg-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex items-center justify-between pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Search Results
                </h2>
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Clear all filters
                </button>
              </div>

              {filteredWebsites.length > 0 ? (
                <div className="space-y-6">
                  <p className="text-sm font-semibold text-slate-500">
                    {filteredWebsites.length} {filteredWebsites.length === 1 ? "resource" : "resources"} found
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
                    {filteredWebsites.map((website) => (
                      <ResourceCard key={website.id} website={website} onTagClick={handleTagClick} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 space-y-4 max-w-md mx-auto shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">No resources found</h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                      Try another keyword or browse our categories.
                    </p>
                  </div>
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <span>Browse Categories</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <>
            {/* Explore Categories Section */}
            <CategorySection
              categoryCounts={categoryCounts}
            />

            {/* What Are You Looking For? Discovery Section */}
            <DiscoverySection onOptionSelect={handleDiscoverySelect} />

            {/* Modern Learning Section (Image + Copy) */}
            <ModernLearningSection />



            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* GEO / AEO Answer & FAQ Section for Search Engines & Students */}
            <section className="w-full py-12 sm:py-16 bg-white border-y border-slate-200/80">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                    About Study with Gaurav
                  </h2>
                  <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
                    Quick answers to common questions about our free educational directory and learning resources.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200/90 rounded-xl space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      What is Study with Gaurav?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Study with Gaurav (studywithgaurav.cc.cd) is a centralized educational resource directory designed to help students quickly discover verified learning portals, competitive exam preparation batches, PDF notes, and study tools in one organized hub.
                    </p>
                  </div>

                  <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200/90 rounded-xl space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Which platforms and exam categories are included?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Our hub features over 100+ platforms across 30 categories, including Physics Wallah (PW OTT), Next Toppers, Vibrant, Rojgar With Ankit (RWA), Science & Fun, Padhle Akshay, Unacademy, Khan Global Studies (KGS), GS Vision, Futurekul, and specialized portals for JEE, NEET, SSC, Police, and Board exams.
                    </p>
                  </div>

                  <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200/90 rounded-xl space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Is Study with Gaurav free for students?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Yes, Study with Gaurav is completely free for all students without paywalls or hidden subscriptions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Suggestion Section */}
            <SuggestResourceCTA onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
          </>
        )}

      </main>

      {/* Footer */}
      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />

      {/* Suggest Modal */}
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />

    </div>
  );
}
