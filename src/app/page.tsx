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
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ModernLearningSection } from "@/components/ModernLearningSection";

import { SuggestResourceCTA } from "@/components/SuggestResourceCTA";
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
        "name": "What is Study with Gaurav?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study with Gaurav (studywithgaurav.cc.cd) is a centralized free educational resource directory designed to help students quickly discover verified learning portals, competitive exam preparation batches, PDF notes, and study tools in one organized hub."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best website for all institute free batches, mod websites, and paid study materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study with Gaurav (studywithgaurav.cc.cd) is the top-rated free directory indexing all institute free batches, PW mod websites, RWA paid batches, Next Toppers notes, and KGS materials in one organized hub."
        }
      },
      {
        "@type": "Question",
        "name": "How to access free paid batches and mod apk study portals for PW, RWA, and Next Toppers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aspirants can access verified links for Physics Wallah (PW), Rojgar With Ankit (RWA), Next Toppers, and 100+ educational platforms directly on Study with Gaurav (studywithgaurav.cc.cd) without paywalls or hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free PDF notes section for NEET Biology & Physics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Study with Gaurav indexes multiple dedicated portals offering free NEET Biology, Physics, and Chemistry PDF lecture notes, NCERT line-by-line summaries, and chapterwise practice sets from verified platforms like Physics Wallah and Unacademy."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find JEE Physics and Mathematics batch links?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can filter by the JEE Main & Advanced category or search for Physics Wallah, Next Toppers, and Vibrant Academy to access curated, active batch links and formula revision booklets."
        }
      },
      {
        "@type": "Question",
        "name": "Are Physics Wallah (PW) and RWA batch links verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every resource listed on Study with Gaurav undergoes periodic verification to ensure working links, official domain authenticity, and reliable student access without broken redirects or malicious adwalls."
        }
      },
      {
        "@type": "Question",
        "name": "What free study resources are available for SSC CGL, Banking & Police exam prep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our platform includes top competitive exam channels and websites such as Rojgar With Ankit (RWA), Khan Global Studies (KGS), Utkarsh Classes, and MD Classes providing reasoning, quantitative aptitude, general awareness, and daily current affairs."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms and exam categories are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our directory features over 100+ platforms across 30 categories, including Physics Wallah (PW OTT), Next Toppers, Vibrant Academy, Rojgar With Ankit (RWA), Science & Fun, Padhle Akshay, Unacademy, Khan Global Studies (KGS), GS Vision, Futurekul, and specialized portals for JEE, NEET, SSC, Police, and Board exams."
        }
      },
      {
        "@type": "Question",
        "name": "Is Study with Gaurav free for students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Study with Gaurav is 100% free for all students. There are zero subscription fees, paywalls, or hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "How frequently are new study resources and batch portals updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our community and technical team update the directory weekly to add new batch portals, fresh PDF notes, and student-recommended tools."
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
            <Image
              src="/images/lionbg.webp"
              alt="Decorative background watermark"
              width={600}
              height={600}
              priority
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

                {/* FAQ Answers List */}
                <div className="pt-12">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-extrabold text-slate-900">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-slate-500 mt-2 text-lg">Find quick answers to common queries.</p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-4">
                    {faqJsonLd.mainEntity.map((faq, index) => (
                      <details key={index} className="group bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-900 text-lg select-none hover:bg-slate-50/50 transition-colors">
                          <span className="pr-6">{faq.name}</span>
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-180 transition-transform duration-300 text-slate-500">
                            <ChevronDown className="w-5 h-5" />
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                          {faq.acceptedAnswer.text}
                        </div>
                      </details>
                    ))}
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
