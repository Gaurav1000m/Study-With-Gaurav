"use client";

export type AdsterraFormat =
  | "728x90"
  | "300x250"
  | "320x50"
  | "468x60"
  | "160x600"
  | "160x300"
  | "native"
  | "responsive";

export interface AdsterraBannerProps {
  format?: AdsterraFormat;
  className?: string;
}

export const ADSTERRA_SMART_LINK = "";

/**
 * AdsterraBanner has been decommissioned to maintain 100% compliance
 * with Google AdSense Publisher Policies.
 */
export function AdsterraBanner() {
  return null;
}

export default AdsterraBanner;

