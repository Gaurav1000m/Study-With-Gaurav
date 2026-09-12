"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, X } from "lucide-react";
import { downloadStudyWithGauravApk } from "@/lib/downloadApk";

export function GetAppBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. If already inside the native Android APK wrapper, never show this banner
    if (
      typeof window !== "undefined" &&
      (window as unknown as { AndroidSecurityBridge?: unknown }).AndroidSecurityBridge
    ) {
      return;
    }

    // 2. Check if user dismissed it in this session
    const isDismissed = sessionStorage.getItem("swg_apk_banner_dismissed");
    if (!isDismissed) {
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("swg_apk_banner_dismissed", "true");
  };

  if (pathname === "/download" || !isVisible) return null;

  return (
    <aside
      aria-label="Download Android App Banner"
      className="hidden md:block fixed bottom-6 left-6 max-w-sm lg:max-w-md z-40 animate-slide-up"
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/40 rounded-2xl p-3 sm:p-3.5 shadow-2xl shadow-indigo-950/70 flex items-center justify-between gap-2.5 sm:gap-3 text-white">
        {/* App Icon & Details */}
        <Link
          href="/download"
          className="flex items-center gap-2.5 sm:gap-3 min-w-0 group flex-1"
          title="Learn more about the Study With Gaurav Android App"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-indigo-400/40 shadow-sm bg-slate-950">
            <Image
              src="/images/lionbg.webp"
              alt="Study With Gaurav App Logo"
              fill
              sizes="40px"
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="min-w-0 flex-1 text-left">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-xs sm:text-sm text-white truncate leading-tight group-hover:text-cyan-300 transition-colors">
                Study With Gaurav
              </span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black tracking-wider uppercase border border-emerald-500/30 shrink-0">
                v1.0.4
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-300 truncate mt-0.5">
              Fast APK • 100+ Free Batches
            </p>
          </div>
        </Link>

        {/* Action Button & Dismiss */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={downloadStudyWithGauravApk}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-extrabold text-xs text-white shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
            title="Download Android APK (4.6 MB)"
            aria-label="Download Android APK"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Download APK</span>
          </button>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss app banner"
            title="Dismiss"
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
