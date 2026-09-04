"use client";

import { useEffect, useRef } from "react";
import { AdsterraBanner, AdsterraFormat } from "./AdsterraBanner";

export interface AdBannerProps {
  slot?: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical" | "fluid";
  responsive?: boolean;
  className?: string;
  minHeight?: string;
  label?: string;
  directLink?: string;
  showSponsoredOffer?: boolean;
  adsterraFormat?: AdsterraFormat;
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
    <div
      className={`w-full flex items-center justify-center my-3 sm:my-4 overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      {/* Simple, Pure Adsterra Display Banner (No boxes, no borders, no labels) */}
      <AdsterraBanner
        format={adsterraFormat}
        className="my-0"
      />

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
  );
}
