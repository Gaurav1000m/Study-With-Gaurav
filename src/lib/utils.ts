import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extract clean domain name for fallback or favicon fetching
 */
export function getDomainFromUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Get Google Favicon service URL as high-quality fallback
 */
export function getFaviconUrl(url: string, size = 128): string {
  const domain = getDomainFromUrl(url);
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

/**
 * Generate monogram initials for broken image fallback
 */
export function getMonogram(name: string): string {
  if (!name) return "ED";
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}
