"use client";

import { useEffect, useRef, useState } from "react";
import { AD_CONFIG } from "@/config/ads";

export type AdFormat =
  | "auto"
  | "horizontal"
  | "rectangle"
  | "vertical"
  | "fluid"
  | "300x250"
  | "728x90"
  | "320x50"
  | "468x60"
  | "160x600"
  | "160x300";

export interface AdBannerProps {
  slot?: string;
  format?: AdFormat;
  responsive?: boolean;
  className?: string;
  minHeight?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

/**
 * Isolated iframe banner component.
 * Loads from /ad-banner.html with query parameters.
 * Guarantees:
 * - Real origin & referrer passed to the ad network.
 * - Zero collision of window.atOptions between multiple banners on one page.
 * - No layout shifts (CLS).
 */
function IsolatedBanner({
  adKey,
  width,
  height,
  title,
}: {
  adKey: string;
  width: number;
  height: number;
  title: string;
}) {
  return (
    <iframe
      title={title}
      src={`/ad-banner.html?key=${encodeURIComponent(adKey)}&w=${width}&h=${height}`}
      width={width}
      height={height}
      className="border-0 overflow-hidden mx-auto rounded-lg"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: "100%",
        border: "none",
      }}
      scrolling="no"
    />
  );
}

/**
 * AdBanner - High-CPM Monetization Container
 * Compliant with Google AdSense and Better Ads Standards:
 * - Content > Navigation > Ads
 * - Clear distinction via "ADVERTISEMENT" badge
 * - Non-blocking isolated iframes to avoid layout shifts (CLS) and script collisions
 * - Dynamically renders high-revenue responsive banners
 */
export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "min-h-[60px]",
  label = "ADVERTISEMENT",
}: AdBannerProps) {
  const [mounted, setMounted] = useState(false);
  const pushedRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    // If a Google AdSense slot is provided, execute adsbygoogle
    if (typeof window !== "undefined" && slot) {
      if (!pushedRef.current && window.adsbygoogle) {
        try {
          window.adsbygoogle.push({});
          pushedRef.current = true;
        } catch {
          // Ignore hydration push errors
        }
      }
    }
  }, [slot]);

  // If banners are globally disabled in config, don't display
  if (!AD_CONFIG.switches.enableBanners) {
    return null;
  }

  // 1. If explicit Google AdSense slot is passed and enabled
  if (slot) {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden ${minHeight} ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <ins
          className="adsbygoogle block w-full max-w-5xl text-center"
          style={{ display: "block" }}
          data-ad-client={AD_CONFIG.googleAdSenseClient}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    );
  }

  if (!mounted) {
    return (
      <div
        className={`w-full flex items-center justify-center my-3 ${minHeight} ${className}`}
      />
    );
  }

  // 2. Explicit Rectangle (300x250) - Highest CPM unit
  if (format === "rectangle" || format === "300x250") {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden min-h-[270px] ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner300x250}
          width={300}
          height={250}
          title="Sponsored Rectangle Ad"
        />
      </div>
    );
  }

  // 3. Vertical Skyscraper (160x600)
  if (format === "vertical" || format === "160x600") {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden min-h-[620px] ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner160x600}
          width={160}
          height={600}
          title="Sponsored Skyscraper Ad"
        />
      </div>
    );
  }

  // 4. Half Skyscraper (160x300)
  if (format === "160x300") {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden min-h-[320px] ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner160x300}
          width={160}
          height={300}
          title="Sponsored Half Skyscraper Ad"
        />
      </div>
    );
  }

  // 5. Tablet Banner (468x60)
  if (format === "468x60") {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-3 overflow-hidden min-h-[80px] ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner468x60}
          width={468}
          height={60}
          title="Sponsored Tablet Banner"
        />
      </div>
    );
  }

  // 6. Mobile Banner (320x50)
  if (format === "320x50") {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-3 overflow-hidden min-h-[70px] ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner320x50}
          width={320}
          height={50}
          title="Sponsored Mobile Banner"
        />
      </div>
    );
  }

  // 7. Desktop Leaderboard (728x90)
  if (format === "728x90") {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden min-h-[110px] ${className}`}
        aria-label={label}
      >
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
          {label}
        </span>
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner728x90}
          width={728}
          height={90}
          title="Sponsored Leaderboard"
        />
      </div>
    );
  }

  // 8. Default Responsive Banner: 728x90 on Desktop (>=768px), 320x50 on Mobile (<768px)
  return (
    <div
      className={`w-full flex flex-col items-center justify-center my-3 sm:my-4 overflow-hidden min-h-[70px] sm:min-h-[110px] ${className}`}
      aria-label={label}
    >
      <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
        {label}
      </span>

      {/* Desktop View (>= 768px) -> 728x90 Leaderboard */}
      <div className="hidden md:flex justify-center w-full">
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner728x90}
          width={728}
          height={90}
          title="Sponsored Leaderboard"
        />
      </div>

      {/* Mobile View (< 768px) -> 320x50 Mobile Leaderboard */}
      <div className="flex md:hidden justify-center w-full">
        <IsolatedBanner
          adKey={AD_CONFIG.keys.banner320x50}
          width={320}
          height={50}
          title="Sponsored Mobile Banner"
        />
      </div>
    </div>
  );
}

export default AdBanner;
