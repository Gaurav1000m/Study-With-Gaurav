"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { Website, Category } from "@/types/website";
import { ResourceEditorialData } from "@/data/resourceDetails";
import {
  ExternalLink,
  ShieldCheck,
  Star,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Users,
  Compass,
  Bookmark,
  Share2,
  Check,
  Sparkles,
  HelpCircle,
  FileText
} from "lucide-react";
import { getFaviconUrl, getMonogram, cn } from "@/lib/utils";
import { useApp } from "@/context/AppContext";
import { ResourceCard } from "@/components/ResourceCard";

interface ResourceDetailClientProps {
  website: Website;
  editorial: ResourceEditorialData;
  category?: Category;
  relatedWebsites: Website[];
}

export function ResourceDetailClient({
  website,
  editorial,
  category,
  relatedWebsites,
}: ResourceDetailClientProps) {
  const { isBookmarked, toggleBookmark, addRecentlyViewed } = useApp();
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(
    website.logo || getFaviconUrl(website.url)
  );
  const [hasImageError, setHasImageError] = useState(false);

  const bookmarked = isBookmarked(website.id);
  const categoryName = category ? category.name : website.category;
  const monogram = getMonogram(website.name);
  const [mobileTab, setMobileTab] = useState<"overview" | "features" | "guide" | "faqs">("overview");

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleBookmarkToggle = () => {
    toggleBookmark(website.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-6 sm:py-10 pb-20 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <span>/</span>
            <Link href={`/categories/${website.category}`} className="hover:text-blue-600 transition-colors">
              {categoryName}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-xs">{website.name}</span>
          </nav>

          {/* Top Hero Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {/* Logo & Identity */}
              <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 shadow-xs p-2">
                  {!hasImageError && imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={`${website.name} educational logo`}
                      width={80}
                      height={80}
                      unoptimized
                      className="w-full h-full object-contain"
                      onError={() => {
                        if (imgSrc !== getFaviconUrl(website.url)) {
                          setImgSrc(getFaviconUrl(website.url));
                        } else {
                          setHasImageError(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 text-white font-extrabold text-xl flex items-center justify-center">
                      {monogram}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {categoryName}
                    </span>
                    {website.isOfficial && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified Portal</span>
                      </span>
                    )}
                    {website.rating && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{website.rating.toFixed(1)} / 5.0</span>
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {website.name}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Last editorial audit: {editorial.lastReviewed} • Cataloged by StudyWithGaurav
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 self-stretch sm:self-auto shrink-0">
                <button
                  onClick={handleBookmarkToggle}
                  aria-label={bookmarked ? "Remove from bookmarks" : "Save for later"}
                  title={bookmarked ? "Saved" : "Save resource"}
                  className={cn(
                    "flex-1 sm:flex-none px-4 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all min-h-[44px]",
                    bookmarked
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  )}
                >
                  <Bookmark className={cn("w-4 h-4", bookmarked && "fill-blue-700")} />
                  <span>{bookmarked ? "Saved" : "Save"}</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  aria-label="Copy page link"
                  title="Share page"
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all min-h-[44px]"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Launch Banner (External Link with Transparency) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span>Official External Resource Portal</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clicking the button opens the destination directly in a new tab. StudyWithGaurav does not frame or modify third-party educational content.
                </p>
              </div>

              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => addRecentlyViewed(website.id)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow transition-all shrink-0 w-full sm:w-auto"
              >
                <span>Visit {website.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile App Segmented Navigation Tabs */}
          <div className="flex md:hidden items-center bg-slate-200/70 p-1 rounded-2xl border border-slate-200 gap-1 text-xs font-bold shadow-2xs">
            <button
              onClick={() => setMobileTab("overview")}
              className={cn(
                "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer",
                mobileTab === "overview"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Overview
            </button>
            <button
              onClick={() => setMobileTab("features")}
              className={cn(
                "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer",
                mobileTab === "features"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Features
            </button>
            <button
              onClick={() => setMobileTab("guide")}
              className={cn(
                "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer",
                mobileTab === "guide"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Study Guide
            </button>
            {editorial.faqs && editorial.faqs.length > 0 && (
              <button
                onClick={() => setMobileTab("faqs")}
                className={cn(
                  "flex-1 py-2 rounded-xl transition-all text-center cursor-pointer",
                  mobileTab === "faqs"
                    ? "bg-white text-blue-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                FAQs
              </button>
            )}
          </div>

          {/* Detailed Editorial Overview */}
          <section className={cn(mobileTab === "overview" ? "block" : "hidden md:block", "bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6")}>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Editorial Review & Platform Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                About {website.name}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium whitespace-pre-line">
              {editorial.longDescription}
            </p>

            {/* Quick Metadata Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>Target Audience</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-snug">
                  {editorial.targetAudience}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Academic Level</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-snug">
                  {editorial.academicLevel}
                </p>
              </div>
            </div>
          </section>

          {/* Key Features & Benefits */}
          <div className={cn(mobileTab === "features" ? "grid" : "hidden md:grid", "grid-cols-1 md:grid-cols-2 gap-6")}>
            
            {/* Features Card */}
            <section className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                <h2>Key Educational Features</h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {editorial.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Learning Benefits Card */}
            <section className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <h2>Student Learning Benefits</h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {editorial.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* How to Study with This Resource (Actionable Advice) */}
          <section className={cn(mobileTab === "guide" ? "block" : "hidden md:block", "bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6")}>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Actionable Study Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                How to Study with {website.name} Effectively
              </h2>
            </div>

            <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
              {editorial.howToUse.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{step}</span>
                </li>
              ))}
            </ol>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Recommended Starting Point
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {editorial.recommendedStartingPoint}
              </p>
            </div>
          </section>

          {/* Advantages & Limitations (Honest Objective Review) */}
          <section className={cn(mobileTab === "overview" || mobileTab === "features" ? "block" : "hidden md:block", "bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6")}>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Objective Editorial Analysis: Advantages & Limitations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Advantages */}
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Advantages</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {editorial.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Limitations to Consider</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {editorial.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Resource Specific FAQs */}
          {editorial.faqs && editorial.faqs.length > 0 && (
            <section className={cn(mobileTab === "faqs" ? "block" : "hidden md:block", "bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6")}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Student Queries</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions about {website.name}
                </h2>
              </div>

              <div className="space-y-4">
                {editorial.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Attribution & Legal Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 text-slate-500 text-xs leading-relaxed space-y-1">
            <p className="font-semibold text-slate-700">Official Source Attribution & Disclaimer</p>
            <p>{editorial.officialAttribution}</p>
          </div>

          {/* Related Resources in Category */}
          {relatedWebsites.length > 0 && (
            <section className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Related Resources in {categoryName}
                </h2>
                <Link
                  href={`/categories/${website.category}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  View all {categoryName} →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {relatedWebsites.map((rel) => (
                  <ResourceCard key={rel.id} website={rel} />
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Sticky Mobile Action Bar (Always within thumb reach) */}
        <div className="md:hidden fixed bottom-14 left-0 right-0 z-30 bg-white/95 backdrop-blur-md px-3 py-2.5 border-t border-slate-200/90 shadow-lg flex items-center gap-2 pl-safe pr-safe">
          <button
            onClick={handleBookmarkToggle}
            className={cn(
              "w-11 h-11 rounded-xl border flex items-center justify-center transition-all shrink-0 active:scale-95 cursor-pointer",
              bookmarked
                ? "bg-blue-50 text-blue-600 border-blue-200 shadow-2xs"
                : "bg-slate-50 text-slate-600 border-slate-200"
            )}
            title={bookmarked ? "Saved" : "Save for later"}
            aria-label={bookmarked ? "Remove from bookmarks" : "Save resource"}
          >
            <Bookmark className={cn("w-5 h-5", bookmarked && "fill-blue-600")} />
          </button>

          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => addRecentlyViewed(website.id)}
            className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-98 min-h-[44px]"
          >
            <span>Open {website.name}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}

export default ResourceDetailClient;
