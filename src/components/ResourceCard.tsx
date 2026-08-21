"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Sparkles, Flame, Check } from "lucide-react";
import { Website } from "@/types/website";
import { CATEGORY_MAP } from "@/data/categories";
import { getFaviconUrl, getMonogram } from "@/lib/utils";

interface ResourceCardProps {
  website: Website;
  onTagClick?: (tag: string) => void;
}

export function ResourceCard({ website, onTagClick }: ResourceCardProps) {
  const [imgSrc, setImgSrc] = useState<string>(
    website.logo || getFaviconUrl(website.url)
  );
  const [hasImageError, setHasImageError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const categoryObj = CATEGORY_MAP.get(website.category);
  const categoryName = categoryObj ? categoryObj.shortName || categoryObj.name : website.category;
  const monogram = getMonogram(website.name);

  const targetUrl = website.url;

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(targetUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <article
      className="group relative flex flex-col justify-between p-3 sm:p-5 bg-white border border-slate-200/90 hover:border-blue-300 rounded-xl sm:rounded-2xl shadow-2xs hover:shadow-xs transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 overflow-hidden w-full h-full"
    >
      <div className="w-full">
        {/* Top Row: Logo + Badges */}
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          {/* Logo Container */}
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl border border-slate-200/80 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
            {!hasImageError && imgSrc ? (
              <Image
                src={imgSrc}
                alt={`${website.name} educational logo`}
                width={44}
                height={44}
                unoptimized
                className="w-full h-full object-contain p-1"
                onError={() => {
                  if (imgSrc !== getFaviconUrl(website.url)) {
                    setImgSrc(getFaviconUrl(website.url));
                  } else {
                    setHasImageError(true);
                  }
                }}
              />
            ) : (
              <div className="w-full h-full bg-navy-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center">
                {monogram}
              </div>
            )}
          </div>

          {/* Category & Status Badges Column */}
          <div className="flex flex-wrap items-center justify-end gap-1 min-w-0">
            {website.isOfficial && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 whitespace-nowrap">
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                <span>Official</span>
              </span>
            )}

            {website.popular && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 whitespace-nowrap">
                <Flame className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                <span>Popular</span>
              </span>
            )}

            {website.isNew && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200/80 whitespace-nowrap">
                <Sparkles className="w-2.5 h-2.5 text-blue-600 shrink-0" />
                <span>New</span>
              </span>
            )}

            <span className="px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/70 truncate max-w-[95px] sm:max-w-[120px]">
              {categoryName}
            </span>
          </div>
        </div>

        {/* Title & Subcategory */}
        <div className="space-y-0.5 mb-1 w-full">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug break-words">
            <Link
              href={targetUrl}
              className="focus:outline-none after:absolute after:inset-0"
            >
              {website.name}
            </Link>
          </h3>
          {website.subcategory && (
            <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider truncate">
              {website.subcategory}
            </p>
          )}
        </div>

        {/* 2-Line Description Maximum */}
        <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2 sm:mb-3 break-words">
          {website.description}
        </p>

        {/* Tag Badges */}
        {website.tags && website.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2 sm:mb-3 relative z-10">
            {website.tags.slice(0, 3).map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.stopPropagation();
                  onTagClick?.(tag);
                }}
                className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded transition-colors flex items-center min-h-[22px]"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Footer Bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between relative z-10 text-[11px] sm:text-xs">
        <button
          onClick={handleCopyLink}
          className="text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors min-h-[32px] px-0.5"
          title="Copy link to clipboard"
          aria-label="Copy link to clipboard"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Copied!</span>
            </>
          ) : (
            <span>Copy Link</span>
          )}
        </button>

        <Link
          href={targetUrl}
          className="inline-flex items-center gap-1 font-bold text-blue-700 group-hover:text-blue-800 hover:underline transition-colors min-h-[32px] px-0.5"
        >
          <span>Visit Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
