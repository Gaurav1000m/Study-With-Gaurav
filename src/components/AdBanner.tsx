"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/config";
import { AdsterraBanner, ADSTERRA_SMART_LINK } from "./AdsterraBanner";

export interface AdBannerProps {
  slot?: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical" | "fluid";
  responsive?: boolean;
  className?: string;
  minHeight?: string;
  label?: "ADVERTISEMENT" | "SPONSORED LINKS";
  directLink?: string;
  showSponsoredOffer?: boolean;
  adsterraFormat?: "728x90" | "300x250" | "320x50" | "468x60" | "160x600" | "160x300" | "native" | "responsive";
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "min-h-[100px]",
  label = "ADVERTISEMENT",
  directLink = siteConfig.monetagDirectLink || ADSTERRA_SMART_LINK,
  showSponsoredOffer = true,
  adsterraFormat = "responsive",
}: AdBannerProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!pushedRef.current && window.adsbygoogle) {
        try {
          window.adsbygoogle.push({});
          pushedRef.current = true;
        } catch {
          // Ignore push errors
        }
      }
    }
  }, []);

  return (
    <aside
      className={`w-full max-w-6xl mx-auto my-4 sm:my-6 px-2 sm:px-4 ${className}`}
      aria-label="Advertisement container"
    >
      <div
        className={`w-full bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-2.5 sm:p-4 text-center flex flex-col items-center justify-center transition-all ${minHeight} overflow-hidden shadow-2xs`}
      >
        {/* Ad Label Header matching website UI */}
        <div className="w-full flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {label}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">Study with Gaurav Partner Network</span>
        </div>

        {/* High-Earning Adsterra & Monetag Sponsored Offer Banner */}
        {showSponsoredOffer && (
          <a
            href={directLink || ADSTERRA_SMART_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group relative w-full bg-gradient-to-r from-blue-50/80 via-indigo-50/30 to-amber-50/40 hover:from-blue-100/70 hover:to-indigo-50/60 text-slate-900 rounded-xl p-2.5 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 border border-blue-100/90 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer overflow-hidden text-left mb-2.5"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 z-10 w-full sm:w-auto">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 shadow-xs transition-transform">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Featured Educational Resources &amp; Student Offers
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-blue-100 text-blue-700 border border-blue-200 uppercase tracking-wider">
                    <ShieldCheck className="w-2.5 h-2.5 text-blue-600" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 truncate max-w-xl mt-0.5 font-medium">
                  Exclusive student tools, study packages, mock tests, and premium exam preparation resources.
                </p>
              </div>
            </div>
          </a>
        )}

        {/* Adsterra Display Banner (Always active, perfectly sized for mobile & desktop) */}
        <div className="w-full flex justify-center items-center overflow-hidden">
          <AdsterraBanner
            format={adsterraFormat}
            label="SPONSORED AD"
            className="my-0 px-0 max-w-full"
            showSmartLink={false}
          />
        </div>

        {/* Optional Google AdSense Unit (if approved and configured) */}
        {slot && (
          <ins
            className="adsbygoogle hidden"
            style={{ display: "none" }}
            data-ad-client="ca-pub-3576643094354429"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        )}
      </div>
    </aside>
  );
}
