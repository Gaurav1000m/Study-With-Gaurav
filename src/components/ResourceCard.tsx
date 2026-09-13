"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLink, ShieldCheck, Flame, Bookmark, Star, ChevronRight, Check } from "lucide-react";
import { Website } from "@/types/website";
import { CATEGORY_MAP } from "@/data/categories";
import { getFaviconUrl, getMonogram } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

interface ResourceCardProps {
  website: Website;
  onTagClick?: (tag: string) => void;
}

export function ResourceCard({ website, onTagClick }: ResourceCardProps) {
  const router = useRouter();
  const { isBookmarked, toggleBookmark, addRecentlyViewed } = useApp();
  const [imgSrc, setImgSrc] = useState<string>(
    website.logo || getFaviconUrl(website.url)
  );
  const [hasImageError, setHasImageError] = useState(false);

  const bookmarked = isBookmarked(website.id);
  const categoryObj = CATEGORY_MAP.get(website.category);
  const categoryName = categoryObj ? categoryObj.shortName || categoryObj.name : website.category;
  const monogram = getMonogram(website.name);

  const internalDetailUrl = `/resources/${website.id}`;

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleBookmark(website.id);
  };

  const handleResourceClick = () => {
    addRecentlyViewed(website.id);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }
    handleResourceClick();
    router.push(internalDetailUrl);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col justify-between p-4 sm:p-5 bg-white border border-slate-200/90 hover:border-blue-400/80 rounded-2xl sm:rounded-3xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden w-full h-full cursor-pointer select-none"
    >
      <div className="w-full flex-1 flex flex-col">
        {/* Top Row: App Icon with Verified Badge + Quick Status & Bookmark */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          {/* App Squircle Logo */}
          <Link
            href={internalDetailUrl}
            onClick={handleResourceClick}
            className="relative w-12 h-12 rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-2xs group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center overflow-visible"
          >
            <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-slate-50">
              {!hasImageError && imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={`${website.name} educational logo`}
                  width={48}
                  height={48}
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
                  className="w-full h-full object-contain p-0.5"
                  onError={() => {
                    if (imgSrc !== getFaviconUrl(website.url)) {
                      setImgSrc(getFaviconUrl(website.url));
                    } else {
                      setHasImageError(true);
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 text-white font-black text-xs sm:text-sm flex items-center justify-center">
                  {monogram}
                </div>
              )}
            </div>

            {/* Anchored Verified Badge on Icon Corner (never overflows or clips) */}
            {website.isOfficial && (
              <span
                className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-0.5 rounded-full border-2 border-white shadow-xs"
                title="Verified Official Portal"
              >
                <ShieldCheck className="w-3 h-3 text-white" />
              </span>
            )}
          </Link>

          {/* Top Right Action & Badges */}
          <div className="flex items-center gap-1.5 shrink-0">
            {website.popular && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-700 border border-amber-200/80">
                <Flame className="w-2.5 h-2.5 text-amber-500 fill-amber-400" />
                <span>Popular</span>
              </span>
            )}

            {/* Bookmark Icon Button */}
            <button
              onClick={handleBookmarkToggle}
              aria-label={bookmarked ? "Remove from saved resources" : "Save resource"}
              title={bookmarked ? "Saved" : "Save for later"}
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
                bookmarked
                  ? "bg-blue-50 text-blue-600 border border-blue-200/90 shadow-2xs"
                  : "bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200/60"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-blue-600" : ""}`} />
            </button>
          </div>
        </div>

        {/* Category Pill Link */}
        <div className="mb-1.5">
          <Link
            href={`/categories/${website.category}`}
            onClick={(e) => e.stopPropagation()}
            title={`Explore all ${categoryName} portals & batches`}
            className="inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/60 transition-colors"
          >
            {categoryName}
          </Link>
        </div>

        {/* Resource Name */}
        <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
          <Link
            href={internalDetailUrl}
            onClick={handleResourceClick}
            className="focus:outline-none"
          >
            {website.name}
          </Link>
        </h3>

        {/* Subcategory */}
        {website.subcategory && (
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider truncate mt-0.5">
            {website.subcategory}
          </p>
        )}

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium mt-1.5 flex-1">
          {website.description}
        </p>

        {/* Quality Strip: Rating & Free Access */}
        <div className="flex items-center gap-2 pt-3 pb-1 text-[11px] font-semibold text-slate-500">
          <span className="flex items-center gap-1 text-slate-800 font-black">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{website.rating ? website.rating.toFixed(1) : "4.8"}</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <Check className="w-3 h-3 text-emerald-600" />
            <span>Free Access</span>
          </span>
        </div>
      </div>

      {/* Card Action Footer: Equal 50/50 Balanced Buttons */}
      <div className="pt-3 border-t border-slate-100 flex items-center gap-2 relative z-10">
        <Link
          href={internalDetailUrl}
          onClick={handleResourceClick}
          className="flex-1 py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-all active:scale-95 text-center truncate min-h-[36px]"
        >
          <span>Details</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        </Link>

        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            addRecentlyViewed(website.id);
          }}
          className="flex-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-2xs hover:shadow-xs transition-all active:scale-95 text-center truncate min-h-[36px]"
          title={`Open official ${website.name} in new tab`}
        >
          <span>Visit</span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </article>
  );
}
