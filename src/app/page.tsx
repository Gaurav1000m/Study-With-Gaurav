"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
import { AppxHeroText } from "@/components/AppxHeroText";
import { AppxFAQ } from "@/components/AppxFAQ";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ModernLearningSection } from "@/components/ModernLearningSection";

import { SuggestResourceCTA } from "@/components/SuggestResourceCTA";
import { AdBanner } from "@/components/AdBanner";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";
import { CategoryId } from "@/types/website";
import { Sparkles, Compass, BookOpen, CheckCircle2, ShieldCheck, GraduationCap, ChevronDown } from "lucide-react";

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
        "name": "What is Study with Gaurav (Study-With-gaurav)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study with Gaurav (accessible via official domains https://studywithgaurav.cc.cd and https://studywithgaurav-ten.vercel.app/) is a premier open-access education directory. It systematically indexes verified batch portals, lecture repositories, and study notes for Physics Wallah, Rojgar With Ankit, IIT School, Next Toppers, and 25+ top academic networks with zero paywalls."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the most reliable portal for PW, RWA, and IIT School batch access?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study with Gaurav provides verified, audit-tested links to Physics Wallah (PW), Rojgar With Ankit (RWA), and IIT School student portals without deceptive URL shorteners, intrusive ads, or broken redirects."
        }
      },
      {
        "@type": "Question",
        "name": "How to access IIT School, Physics Wallah, RWA, and Next Toppers lectures and notes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aspirants can utilize the real-time search bar or browse curated category hubs for IIT School, PW, RWA, Next Toppers, and CDS Journey to instantly access lecture archives, formula sheets, and PDF materials."
        }
      },
      {
        "@type": "Question",
        "name": "What official domains and mirrors belong to Study with Gaurav?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The primary official domain is https://studywithgaurav.cc.cd (www.studywithgaurav.cc.cd), accompanied by the official high-speed Vercel Edge mirror at https://studywithgaurav-ten.vercel.app/."
        }
      },
      {
        "@type": "Question",
        "name": "Is Study with Gaurav 100% free and open for all students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Study with Gaurav is completely free with zero subscription fees, hidden registration requirements, or telemetry tracking."
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
        <section id="hero" className="w-full bg-white pt-6 pb-2 sm:pt-12 sm:pb-4 text-center relative overflow-hidden border-b border-slate-100">
          {/* Background Split: Left Side - CDS Soldier Silhouette (Legs fully visible & slightly increased size) */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[42%] lg:w-[38%] opacity-30 sm:opacity-35 lg:opacity-40 pointer-events-none select-none z-0 flex items-end justify-center sm:justify-start px-2 sm:px-6 pb-1 sm:pb-2 overflow-hidden">
            <Image
              src="/images/cds-soldier.png"
              alt="CDS defence soldier background watermark"
              width={577}
              height={500}
              priority
              unoptimized
              className="w-auto h-full max-h-[250px] sm:max-h-[390px] lg:max-h-[430px] object-contain object-bottom sm:object-left-bottom filter drop-shadow-md"
            />
          </div>

          {/* Background Split: Right Side - Lion Watermark (Grand scale & anchored at bottom) */}
          <div className="hidden sm:flex absolute inset-y-0 right-0 w-1/2 lg:w-[50%] opacity-35 sm:opacity-40 lg:opacity-45 pointer-events-none select-none z-0 items-end justify-end px-0 sm:px-2 overflow-hidden">
            <Image
              src="/images/lionbg.webp"
              alt="Decorative lion background watermark"
              width={750}
              height={750}
              priority
              unoptimized
              className="w-auto h-full max-h-[340px] sm:max-h-[520px] lg:max-h-[600px] object-contain object-right-bottom filter drop-shadow-lg scale-105"
            />
          </div>

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            {/* AppX-Inspired Hero Text & Split Reveal Animation */}
            <AppxHeroText />

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

        {/* AdSense Top Leaderboard (Reserved Free Space) */}
        <AdBanner format="horizontal" minHeight="min-h-[100px]" label="SPONSORED EDUCATION PARTNER" />

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

            {/* AdSense Mid-Feed Banner (Reserved Free Space) */}
            <AdBanner format="auto" minHeight="min-h-[120px]" label="RECOMMENDED STUDENT RESOURCES" />

            {/* What Are You Looking For? Discovery Section */}
            <DiscoverySection onOptionSelect={handleDiscoverySelect} />

            {/* Modern Learning Section (Image + Copy) */}
            <ModernLearningSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* GEO / AEO Answer & FAQ Section for Search Engines & AI Engines */}
            <section className="w-full py-20 sm:py-32 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
              {/* Soft abstract background elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-blue-700 bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
                    <BookOpen className="w-4 h-4" />
                    Student Guide & Knowledge Base
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Comprehensive Exam Resources & Verification Guide
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Everything you need to know about navigating free competitive exam materials, batch links, and PDF notes for JEE, NEET, SSC, and State Board prep.
                  </p>
                </div>

                {/* Structured Content Grid (Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-blue-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                      <GraduationCap className="w-32 h-32 text-blue-900" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-inner">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug relative z-10">
                      What exam preparation categories are covered?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                      We consolidate materials across four major streams: Engineering (JEE Main & Advanced), Medical (NEET UG), Staff Selection & Government Jobs (SSC, Police), and School Academics (Boards). Each category aggregates verified batch links, revision sheets, formula handbooks, and test series portals.
                    </p>
                  </div>

                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                      <ShieldCheck className="w-32 h-32 text-emerald-900" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 flex items-center justify-center font-bold shadow-inner">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug relative z-10">
                      How are educational links and PDF notes vetted?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                      Every portal listed in our directory undergoes strict periodic security and usability audits. We test link integrity, verify domain ownership, and ensure resources are accessible without intrusive malware, aggressive paywalls, or misleading clickbait.
                    </p>
                  </div>

                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-purple-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                      <BookOpen className="w-32 h-32 text-purple-900" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 flex items-center justify-center font-bold shadow-inner">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug relative z-10">
                      Where can students access PW and RWA resources?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                      Students can access official Physics Wallah, Next Toppers, Rojgar With Ankit, and KGS portals directly through our category hubs. We index both recent lecture archives and specialized problem-solving tools so aspirants spend zero time searching.
                    </p>
                  </div>

                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-amber-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                      <CheckCircle2 className="w-32 h-32 text-amber-900" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 flex items-center justify-center font-bold shadow-inner">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug relative z-10">
                      Who is Study with Gaurav designed for?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                      Study with Gaurav is tailored for self-studying aspirants, competitive exam repeaters, and high school students across India who need clean, organized, fast access to high-yield study materials without paying recurring directory fees.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* AppX-Style Interactive Animated FAQ Section */}
            <AppxFAQ />

            {/* Suggestion Section */}
            <SuggestResourceCTA onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />

            {/* AdSense Bottom Banner (Reserved Free Space) */}
            <AdBanner format="auto" minHeight="min-h-[110px]" label="EDUCATIONAL SPONSORS" />
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
