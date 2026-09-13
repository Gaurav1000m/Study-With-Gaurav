"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  FileText,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Globe,
  GraduationCap,
  Lock,
  Zap,
  ThumbsUp,
  Flame,
} from "lucide-react";
import { getFaviconUrl, getMonogram } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

function RelatedResourceCard({
  website,
  categoryName,
}: {
  website: Website;
  categoryName: string;
}) {
  const router = useRouter();
  const { isBookmarked, toggleBookmark, addRecentlyViewed } = useApp();
  const [imgSrc, setImgSrc] = useState<string>(
    website.logo || getFaviconUrl(website.url)
  );
  const [hasImageError, setHasImageError] = useState(false);

  const bookmarked = isBookmarked(website.id);
  const monogram = getMonogram(website.name);
  const internalDetailUrl = `/resources/${website.id}`;

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleBookmark(website.id);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }
    addRecentlyViewed(website.id);
    router.push(internalDetailUrl);
  };

  return (
    <article
      onClick={handleCardClick}
      className="flex flex-col justify-between p-4 sm:p-5 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl shadow-xs transition-colors w-full h-full cursor-pointer select-none"
    >
      <div className="w-full flex-1 flex flex-col">
        {/* Top: Icon + Status + Bookmark */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="relative w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 p-1.5 shrink-0 flex items-center justify-center">
            <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
              {!hasImageError && imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={`${website.name} logo`}
                  width={44}
                  height={44}
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
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
                <div className="w-full h-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
                  {monogram}
                </div>
              )}
            </div>

            {website.isOfficial && (
              <span
                className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-0.5 rounded-full border border-white shadow-xs"
                title="Verified Official"
              >
                <ShieldCheck className="w-3 h-3 text-white" />
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {website.isOfficial ? (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                Official
              </span>
            ) : website.popular ? (
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                Popular
              </span>
            ) : null}

            <button
              type="button"
              onClick={handleBookmarkToggle}
              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              title={bookmarked ? "Saved" : "Save for later"}
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              <Bookmark
                className={cn(
                  "w-4 h-4",
                  bookmarked ? "fill-blue-600 text-blue-600" : "text-slate-400"
                )}
              />
            </button>
          </div>
        </div>

        {/* Category Label */}
        <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide">
          {categoryName}
        </p>

        {/* Resource Name */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1 mt-0.5">
          {website.name}
        </h3>

        {/* Subcategory */}
        {website.subcategory && (
          <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
            {website.subcategory}
          </p>
        )}

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mt-1.5 flex-1">
          {website.description}
        </p>

        {/* Quality Rating */}
        <div className="flex items-center gap-2 pt-2.5 pb-1 text-xs font-semibold text-slate-500 border-t border-slate-100 mt-2.5">
          <span className="flex items-center gap-1 text-slate-800 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{website.rating ? website.rating.toFixed(1) : "4.8"}</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700 font-medium">Free Access</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center gap-2 mt-2">
        <Link
          href={internalDetailUrl}
          onClick={() => addRecentlyViewed(website.id)}
          className="flex-1 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs text-center transition-colors"
        >
          Details
        </Link>

        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            addRecentlyViewed(website.id);
          }}
          className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 text-center transition-colors"
          title={`Open ${website.name}`}
        >
          <span>Visit</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}

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
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "guide" | "reviews" | "faqs">("overview");

  const handleTabClick = (tab: "overview" | "features" | "guide" | "reviews" | "faqs", e?: React.MouseEvent) => {
    setActiveTab(tab);
    if (e?.currentTarget) {
      (e.currentTarget as HTMLElement).scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
    if (typeof window !== "undefined") {
      const el = document.getElementById("tab-content-container");
      if (el) {
        const yOffset = -130;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${website.name} — StudyWithGaurav`,
          text: `Explore verified educational resource ${website.name} on StudyWithGaurav`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to copy link
      }
    }
    handleCopyLink();
  };

  const handleBookmarkToggle = () => {
    toggleBookmark(website.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-3 sm:py-6 pb-24 md:pb-16">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          
          {/* Native App Top Navigation Bar */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <Link
              href={category ? `/categories/${website.category}` : "/resources"}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors py-1.5 px-2 -ml-2 rounded-xl hover:bg-slate-200/60 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">
                {category ? categoryName : "All Resources"}
              </span>
            </Link>

            {/* Desktop / Tablet Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
              <Link href="/resources" className="hover:text-slate-700 transition-colors">Resources</Link>
              <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
              <span className="text-slate-700 font-semibold truncate max-w-[160px]">{website.name}</span>
            </nav>
          </div>

          {/* ============================================================ */}
          {/* ULTRA APP STORE STYLE HERO CARD (Native Mobile & Web Design) */}
          {/* ============================================================ */}
          <section aria-label={`${website.name} Resource Header`} className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/80 shadow-xs space-y-5 relative overflow-hidden">
            {/* Subtle ambient gradient highlight */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-50/60 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Top Identity Block: App Icon + Titles + Quick Tags */}
            <div className="relative z-10 flex items-start gap-3.5 sm:gap-6">
              
              {/* Native Squircle App Icon with Verified Badge */}
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-md shadow-slate-200/60 flex items-center justify-center overflow-hidden ring-4 ring-slate-50">
                  {!hasImageError && imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={`${website.name} educational logo`}
                      width={96}
                      height={96}
                      unoptimized
                      style={{ width: "auto", height: "auto" }}
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
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 text-white font-black text-xl sm:text-2xl flex items-center justify-center rounded-xl sm:rounded-2xl">
                      {monogram}
                    </div>
                  )}
                </div>

                {/* Verified Shield Badge on Icon Corner */}
                {website.isOfficial && (
                  <div
                    className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 sm:p-1.5 rounded-full border-2 border-white shadow-xs"
                    title="Verified Official Educational Portal"
                    aria-label="Verified Official Educational Portal"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Title & App Metadata Info */}
              <div className="space-y-1 sm:space-y-1.5 min-w-0 flex-1 pt-0.5">
                {/* Category & Verified Tag Line */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href={`/categories/${website.category}`}
                    className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wide bg-blue-50 text-blue-700 hover:bg-blue-100/80 border border-blue-200/70 transition-colors"
                  >
                    {categoryName}
                  </Link>
                  {website.isOfficial && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Official</span>
                    </span>
                  )}
                </div>

                {/* Resource Primary Name */}
                <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  {website.name}
                </h1>

                {/* Verified Audit & Security Metadata (URL hidden) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium flex-wrap pt-0.5">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official Portal</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>Audited {editorial.lastReviewed}</span>
                  <span className="text-slate-300">•</span>
                  <span>StudyWithGaurav Verified</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics & App Store Stats Strip */}
            <div className="relative z-10 grid grid-cols-4 divide-x divide-slate-100 bg-slate-50/90 rounded-2xl border border-slate-200/70 p-2 sm:p-3 text-center">
              {/* Stat 1: Rating */}
              <div className="flex flex-col items-center justify-center px-1 sm:px-2">
                <div className="flex items-center gap-1 text-slate-900 font-black text-xs sm:text-base">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  <span>{website.rating ? website.rating.toFixed(1) : "4.8"}</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">Rating</span>
              </div>

              {/* Stat 2: Pricing / Access */}
              <div className="flex flex-col items-center justify-center px-1 sm:px-2">
                <div className="flex items-center gap-1 text-emerald-700 font-black text-xs sm:text-base">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  <span>Free</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">Access</span>
              </div>

              {/* Stat 3: Security / Verification */}
              <div className="flex flex-col items-center justify-center px-1 sm:px-2">
                <div className="flex items-center gap-1 text-blue-700 font-black text-xs sm:text-base">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Verified</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">Direct Link</span>
              </div>

              {/* Stat 4: Academic Level */}
              <div className="flex flex-col items-center justify-center px-1 sm:px-2">
                <div className="flex items-center gap-1 text-purple-700 font-black text-xs sm:text-base truncate max-w-full">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
                  <span className="truncate">All Levels</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5 truncate">Academic</span>
              </div>
            </div>

            {/* Primary Action Station: Launch Button + Save & Share */}
            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              {/* High-Impact Launch Button */}
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => addRecentlyViewed(website.id)}
                className="group flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-98 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Visit {website.name}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary Actions Row */}
              <div className="flex items-center gap-2">
                {/* Bookmark Toggle */}
                <button
                  onClick={handleBookmarkToggle}
                  aria-label={bookmarked ? "Remove from bookmarks" : "Save resource"}
                  title={bookmarked ? "Saved" : "Save for later"}
                  className={cn(
                    "flex-1 sm:flex-none px-4 py-3.5 rounded-2xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all min-h-[44px] cursor-pointer active:scale-95",
                    bookmarked
                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-2xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  )}
                >
                  <Bookmark className={cn("w-4 h-4", bookmarked && "fill-blue-700")} />
                  <span>{bookmarked ? "Saved" : "Save"}</span>
                </button>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  aria-label="Share resource"
                  title="Share page"
                  className="flex-1 sm:flex-none px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all min-h-[44px] cursor-pointer active:scale-95"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-extrabold">Copied!</span>
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

            {/* Direct Official Link Trust Strip (Replaces the clunky blue disclaimer card) */}
            <div className="relative z-10 flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-slate-600 text-[11px] sm:text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Direct Official Portal Redirect</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Check className="w-3 h-3 text-emerald-600" /> Zero Middleman Ads
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Check className="w-3 h-3 text-emerald-600" /> Official SSL Encrypted
                </span>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SEGMENTED APP NAVIGATION TABS (Mobile & Web View)            */}
          {/* ============================================================ */}
          <div className="sticky top-14 sm:top-16 z-20 py-2.5 bg-slate-50/95 backdrop-blur-md -mx-3 px-3 sm:-mx-0 sm:px-0">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0 touch-pan-x">
              <button
                type="button"
                onClick={(e) => handleTabClick("overview", e)}
                className={cn(
                  "shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer select-none active:scale-95 min-h-[40px]",
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-black border border-blue-600"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90 shadow-2xs"
                )}
              >
                <BookOpen className={cn("w-4 h-4 shrink-0", activeTab === "overview" ? "text-white" : "text-slate-500")} />
                <span className="whitespace-nowrap">Overview</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleTabClick("features", e)}
                className={cn(
                  "shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer select-none active:scale-95 min-h-[40px]",
                  activeTab === "features"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-black border border-blue-600"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90 shadow-2xs"
                )}
              >
                <Sparkles className={cn("w-4 h-4 shrink-0", activeTab === "features" ? "text-white" : "text-slate-500")} />
                <span className="whitespace-nowrap">Features</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleTabClick("guide", e)}
                className={cn(
                  "shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer select-none active:scale-95 min-h-[40px]",
                  activeTab === "guide"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-black border border-blue-600"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90 shadow-2xs"
                )}
              >
                <Compass className={cn("w-4 h-4 shrink-0", activeTab === "guide" ? "text-white" : "text-slate-500")} />
                <span className="whitespace-nowrap">Study Guide</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleTabClick("reviews", e)}
                className={cn(
                  "shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer select-none active:scale-95 min-h-[40px]",
                  activeTab === "reviews"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-black border border-blue-600"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90 shadow-2xs"
                )}
              >
                <ThumbsUp className={cn("w-4 h-4 shrink-0", activeTab === "reviews" ? "text-white" : "text-slate-500")} />
                <span className="whitespace-nowrap">Review</span>
              </button>

              {editorial.faqs && editorial.faqs.length > 0 && (
                <button
                  type="button"
                  onClick={(e) => handleTabClick("faqs", e)}
                  className={cn(
                    "shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer select-none active:scale-95 min-h-[40px]",
                    activeTab === "faqs"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 font-black border border-blue-600"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90 shadow-2xs"
                  )}
                >
                  <HelpCircle className={cn("w-4 h-4 shrink-0", activeTab === "faqs" ? "text-white" : "text-slate-500")} />
                  <span className="whitespace-nowrap">FAQs</span>
                </button>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* TAB CONTENT AREA (Smoothly switches on web and mobile)       */}
          {/* ============================================================ */}
          <div id="tab-content-container" className="space-y-6 scroll-mt-28">
            {/* Detailed Editorial Overview */}
            {activeTab === "overview" && (
              <section className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Editorial Review & Platform Overview</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
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
            )}

            {/* Key Features & Benefits */}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {/* Features Card */}
                <section className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-lg sm:text-xl">
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
                  <div className="flex items-center gap-2 text-slate-900 font-black text-lg sm:text-xl">
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
            )}

            {/* How to Study with This Resource (Actionable Advice) */}
            {activeTab === "guide" && (
              <section className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    <Compass className="w-3.5 h-3.5 text-amber-600" />
                    <span>Actionable Study Protocol</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
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
            )}

            {/* Advantages & Limitations (Honest Objective Review) */}
            {activeTab === "reviews" && (
              <section className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
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
            )}

            {/* Resource Specific FAQs */}
            {activeTab === "faqs" && editorial.faqs && editorial.faqs.length > 0 && (
              <section className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Student Queries</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
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
          </div>

          {/* Attribution & Legal Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 text-slate-500 text-xs leading-relaxed space-y-1">
            <p className="font-semibold text-slate-700">Official Source Attribution & Disclaimer</p>
            <p>{editorial.officialAttribution}</p>
          </div>

          {/* Related Resources in Category */}
          {relatedWebsites.length > 0 && (
            <section
              aria-labelledby="related-resources-heading"
              className="mt-8 pt-8 border-t border-slate-200"
            >
              {/* Native Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h2
                      id="related-resources-heading"
                      className="text-lg sm:text-xl font-bold text-slate-900"
                    >
                      Related Resources in {categoryName}
                    </h2>
                    <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-600">
                      {relatedWebsites.length}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Explore other verified portals and learning materials in {categoryName}.
                  </p>
                </div>

                <Link
                  href={`/categories/${website.category}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
                >
                  <span>View all</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Native Grid — strictly 3 boxes on website view */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {relatedWebsites.slice(0, 3).map((rel) => (
                  <RelatedResourceCard key={rel.id} website={rel} categoryName={categoryName} />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}

export default ResourceDetailClient;
