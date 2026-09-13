"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { QuickCategories } from "@/components/QuickCategories";
import { CategorySection } from "@/components/CategorySection";
import { DiscoverySection } from "@/components/DiscoverySection";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ResourceCard } from "@/components/ResourceCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { AppxHeroText } from "@/components/AppxHeroText";
import { AppxFAQ } from "@/components/AppxFAQ";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ModernLearningSection } from "@/components/ModernLearningSection";
import { HeroSlider } from "@/components/HeroSlider";
import { AdBanner } from "@/components/AdBanner";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";
import { ROADMAPS } from "@/data/roadmaps";
import { ARTICLES } from "@/data/articles";
import { CategoryId } from "@/types/website";
import {
  Compass,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  Layers,
  Clock,
  ArrowRight,
  Calendar,
  Cpu,
  Sparkles,
} from "lucide-react";

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
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Study with Gaurav (Study-With-gaurav)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Study with Gaurav is an open-access educational curation platform and learning hub. It provides structured learning roadmaps, editorial guides, and verified directories of study portals, lectures, and resources for engineering, medical, government, and computer science students.",
        },
      },
      {
        "@type": "Question",
        name: "Are the resources and roadmaps on Study with Gaurav free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all roadmaps, educational articles, and resource reviews on Study with Gaurav are 100% free with zero registration barriers, subscriptions, or paywalls.",
        },
      },
      {
        "@type": "Question",
        name: "How are educational websites vetted on Study with Gaurav?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each educational platform is independently evaluated by our team against a 5-point rubric checking pedagogical quality, student safety (no malware or intrusive pop-ups), accessibility, and syllabus alignment.",
        },
      },
    ],
  };

  return (
    <AppShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} onFocusSearch={handleFocusSearch} />
      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1">
        
        {/* Hero Section */}
        <section id="hero" className="w-full bg-white pt-6 pb-2 sm:pt-10 sm:pb-4 text-center relative overflow-hidden border-b border-slate-100">
          {/* Background Split: Left Side */}
          <div className="hidden sm:flex absolute inset-y-0 left-0 w-full sm:w-[42%] lg:w-[38%] opacity-30 sm:opacity-35 lg:opacity-40 pointer-events-none select-none z-0 items-end justify-start px-2 sm:px-6 pb-1 sm:pb-2 overflow-hidden">
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

          {/* Background Split: Right Side */}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5 relative z-10">
            {/* Desktop Hero: Greeting */}
            <div className="hidden md:flex flex-col items-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs mx-auto">
                <span>Good day 👋</span>
                <span className="text-slate-300">•</span>
                <span>What are you studying today?</span>
              </div>
              <AppxHeroText />
            </div>

            {/* Search Bar Container */}
            <div className="pt-1 sm:pt-2 max-w-2xl mx-auto w-full">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onTagClick={handleTagClick}
                totalResultsCount={filteredWebsites.length}
              />
            </div>

            {/* Mobile Hero Slider */}
            <div className="block md:hidden w-full pt-2 pb-2 px-0">
              <HeroSlider />
            </div>
          </div>
        </section>

        {/* Logo Marquee Moving Slider (Active on both Mobile & Desktop) */}
        <LogoMarquee />

        {/* Top Leaderboard Ad */}
        <AdBanner className="my-2 sm:my-3" />

        {/* Quick Category Filter Pills */}
        <section aria-label="Category Filters" className="w-full bg-white pt-2 pb-2 sm:pt-3 sm:pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuickCategories
              onCategorySelect={handleCategorySelect}
              activeCategory={activeCategory}
            />
          </div>
        </section>

        {/* Real-time search results or default layout */}
        {isSearchActive ? (
          <section id="explore-grid" className="w-full py-16 bg-white scroll-mt-20">
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
            <CategorySection categoryCounts={categoryCounts} />

            {/* Mid-Feed Banner */}
            <AdBanner className="my-2 sm:my-3" />

            {/* SECTION 1: Featured Learning Roadmaps (Desktop Web Only - Hidden in Mobile App View) */}
            <section className="hidden md:block w-full py-16 bg-white border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                {/* Header with View All Action */}
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black bg-blue-50 text-blue-700 border border-blue-200/80">
                      <Compass className="w-3.5 h-3.5 text-blue-600" />
                      <span>Structured Curricula</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      Learning Roadmaps
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-xl hidden xs:block font-medium">
                      Sequential master paths designed by educators to guide your learning journey.
                    </p>
                  </div>
                  <Link
                    href="/roadmaps"
                    className="text-xs font-extrabold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/70 shadow-2xs transition-all duration-300 active:scale-95 shrink-0"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Mobile Snap Carousel / Desktop 4-Column Grid */}
                <div className="flex overflow-x-auto pb-4 pt-1 gap-4 sm:gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:pb-0">
                  {ROADMAPS.map((roadmap, idx) => {
                    const themeConfig = [
                      {
                        bg: "bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 hover:from-blue-100/60 hover:to-indigo-50/70",
                        iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25",
                        border: "border-blue-200/80 hover:border-blue-400",
                        tagBg: "bg-blue-50 text-blue-700 border-blue-200/80",
                        bar: "bg-blue-600",
                      },
                      {
                        bg: "bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 hover:from-emerald-100/60 hover:to-teal-50/70",
                        iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25",
                        border: "border-emerald-200/80 hover:border-emerald-400",
                        tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
                        bar: "bg-emerald-600",
                      },
                      {
                        bg: "bg-gradient-to-br from-purple-50/80 via-white to-violet-50/40 hover:from-purple-100/60 hover:to-violet-50/70",
                        iconBg: "bg-gradient-to-br from-purple-600 to-violet-600 text-white shadow-md shadow-purple-500/25",
                        border: "border-purple-200/80 hover:border-purple-400",
                        tagBg: "bg-purple-50 text-purple-700 border-purple-200/80",
                        bar: "bg-purple-600",
                      },
                      {
                        bg: "bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 hover:from-amber-100/60 hover:to-orange-50/70",
                        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25",
                        border: "border-amber-200/80 hover:border-amber-400",
                        tagBg: "bg-amber-50 text-amber-700 border-amber-200/80",
                        bar: "bg-amber-600",
                      },
                    ][idx % 4];

                    return (
                      <Link
                        key={roadmap.slug}
                        href={`/roadmaps/${roadmap.slug}`}
                        className={`group relative rounded-3xl p-5 sm:p-6 border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-[84vw] max-w-[310px] md:w-full md:max-w-none snap-start shrink-0 md:shrink active:scale-[0.98] ${themeConfig.bg} ${themeConfig.border}`}
                      >
                        <div className="space-y-3.5">
                          {/* Top Row: App Icon + Difficulty Tag */}
                          <div className="flex items-center justify-between gap-2">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black shrink-0 ${themeConfig.iconBg}`}>
                              {idx === 0 && <Layers className="w-6 h-6" />}
                              {idx === 1 && <Sparkles className="w-6 h-6" />}
                              {idx === 2 && <Cpu className="w-6 h-6" />}
                              {idx === 3 && <GraduationCap className="w-6 h-6" />}
                            </div>

                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide border ${themeConfig.tagBg}`}>
                              {roadmap.difficulty}
                            </span>
                          </div>

                          {/* Roadmap Title & Subtitle */}
                          <div className="space-y-1.5">
                            <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
                              {roadmap.shortTitle}
                            </h3>
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium min-h-[34px]">
                              {roadmap.subtitle}
                            </p>
                          </div>

                          {/* Milestone Track Mini-Bar */}
                          <div className="space-y-2 pt-1">
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                              <span className="flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-slate-400" />
                                {roadmap.stages.length} Milestones
                              </span>
                              <span className="text-[10px] text-slate-400 font-semibold">{roadmap.estimatedTime.split("(")[0].trim()}</span>
                            </div>
                            <div className="flex items-center gap-1.5 w-full">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                    i < 3 ? themeConfig.bar : "bg-slate-200/80 group-hover:bg-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Footer */}
                        <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Free Curriculum
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white font-black text-xs border border-slate-200 shadow-2xs group-hover:border-blue-600 transition-all duration-300">
                            <span>Start Path</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* What Are You Looking For? Discovery Section */}
            <DiscoverySection onOptionSelect={handleDiscoverySelect} />

            {/* SECTION 2: Educational Articles & Deep Guides (Desktop Web Only - Hidden in Mobile App View) */}
            <section className="hidden md:block w-full py-16 bg-slate-50/60 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                {/* Header with View All Action */}
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Original Educational Guides</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      Guides & Insights
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-xl hidden xs:block font-medium">
                      Exam revision methodologies, problem-solving habits, and resource evaluation masterclasses.
                    </p>
                  </div>
                  <Link
                    href="/articles"
                    className="text-xs font-extrabold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all duration-300 active:scale-95 shrink-0"
                  >
                    <span>Read All Guides</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Mobile Snap Carousel / Desktop 3-Column Grid */}
                <div className="flex overflow-x-auto pb-4 pt-1 gap-4 sm:gap-6 md:grid md:grid-cols-3 md:gap-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:pb-0">
                  {ARTICLES.slice(0, 3).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group relative bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300/80 transition-all duration-300 flex flex-col justify-between w-[84vw] max-w-[325px] md:w-full md:max-w-none snap-start shrink-0 md:shrink active:scale-[0.98]"
                    >
                      <div className="space-y-3.5">
                        {/* Top Row: Category Badge + Reading Time */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {article.readingTime}
                          </span>
                        </div>

                        {/* Article Title */}
                        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2 min-h-[46px]">
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium min-h-[34px]">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Action & Date Footer */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {article.publishedAt}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 group-hover:bg-indigo-600 text-slate-700 group-hover:text-white font-extrabold text-xs border border-slate-200/80 group-hover:border-indigo-600 shadow-2xs transition-all duration-300">
                          <span>Read Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Modern Learning Section (Desktop only) */}
            <div className="hidden md:block">
              <ModernLearningSection />
            </div>

            {/* Testimonials Section (Desktop only) */}
            <div className="hidden md:block">
              <TestimonialsSection />
            </div>

            {/* Knowledge Base & FAQ Section (Desktop full guide) */}
            <section className="hidden md:block w-full py-16 sm:py-24 bg-white relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-blue-700 bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
                    <BookOpen className="w-4 h-4" />
                    Student Guide & Knowledge Base
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Comprehensive Exam Resources & Verification Guide
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Everything you need to know about navigating free competitive exam materials, batch links, and PDF notes for JEE, NEET, SSC, and State Board prep.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-blue-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-inner">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      What exam preparation categories are covered?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      We consolidate materials across four major streams: Engineering (JEE Main & Advanced), Medical (NEET UG), Staff Selection & Government Jobs (SSC, Police), and School Academics (Boards). Each category aggregates verified batch links, revision sheets, formula handbooks, and test series portals.
                    </p>
                  </div>

                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 flex items-center justify-center font-bold shadow-inner">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      How are educational links and PDF notes vetted?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      Every portal listed in our directory undergoes strict periodic security and usability audits. We test link integrity, verify domain ownership, and ensure resources are accessible without intrusive malware, aggressive paywalls, or misleading clickbait.
                    </p>
                  </div>

                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-purple-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 flex items-center justify-center font-bold shadow-inner">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      Where can students access PW and RWA resources?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      Students can access official Physics Wallah, Next Toppers, Rojgar With Ankit, and KGS portals directly through our category hubs. We index both recent lecture archives and specialized problem-solving tools so aspirants spend zero time searching.
                    </p>
                  </div>

                  <div className="group p-8 bg-white border border-slate-200/60 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:border-amber-200/80 transition-all duration-300 relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 flex items-center justify-center font-bold shadow-inner">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      Who is Study with Gaurav designed for?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      Study with Gaurav is tailored for self-studying aspirants, competitive exam repeaters, and high school students across India who need clean, organized, fast access to high-yield study materials without paying recurring directory fees.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* AppX-Style Interactive Animated FAQ Section (Active for both mobile & desktop) */}
            <AppxFAQ />

            {/* Bottom Banner */}
            <AdBanner className="my-2 sm:my-3" />
          </>
        )}

      </main>

      {/* Footer */}
      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />

      {/* Suggest Modal */}
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />

    </AppShell>
  );
}
