"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Website } from "@/types/website";
import { ArrowLeft, ExternalLink, ShieldCheck, Check, RefreshCw, Lock } from "lucide-react";
import { CATEGORY_MAP } from "@/data/categories";

interface GoClientProps {
  website: Website;
}

export function GoClient({ website }: GoClientProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const categoryObj = CATEGORY_MAP.get(website.category);
  const categoryName = categoryObj ? categoryObj.name : website.category;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDirectLaunch = () => {
    // Open target website with hidden referrer header
    const win = window.open("", "_blank");
    if (win) {
      win.opener = null;
      win.location.href = website.url;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-white font-sans overflow-hidden">
      {/* Top Header Bar */}
      <header className="h-14 sm:h-16 bg-slate-900 border-b border-slate-800 px-3 sm:px-6 flex items-center justify-between shrink-0 shadow-md">
        {/* Left: Back button & Portal Info */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden xs:inline">Directory</span>
          </Link>

          <div className="h-5 w-px bg-slate-800 shrink-0" />

          {/* Logo & Portal Name */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center p-0.5 shrink-0 relative">
              <Image
                src={website.logo || "/images/logo.webp"}
                alt={`${website.name} logo`}
                width={32}
                height={32}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-xs sm:text-sm font-extrabold text-white truncate leading-tight flex items-center gap-1">
                <span>{website.name}</span>
                {website.isOfficial && (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline shrink-0" />
                )}
              </h1>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 truncate">
                {categoryName} • Protected Gateway
              </span>
            </div>
          </div>
        </div>

      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative bg-slate-900 w-full h-full overflow-hidden">
        {/* Loading Overlay Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin"></div>
            <div className="space-y-1">
              <h2 className="text-base sm:text-lg font-bold text-white">Loading Protected Gateway...</h2>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Connecting to {website.name} with encrypted headers.
              </p>
            </div>
          </div>
        )}

        {/* Fallback Display if target blocks iframe */}
        {iframeFailed ? (
          <div className="absolute inset-0 z-30 bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-900/30 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Lock className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2 max-w-md">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {website.name} Protected Launch
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                This study portal is configured for protected external execution. Click below to enter the portal seamlessly with referrer protection.
              </p>
            </div>

            <button
              onClick={handleDirectLaunch}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Enter {website.name}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Iframe Embedded Display */
          <iframe
            src={website.url}
            title={`${website.name} Portal View`}
            className="w-full h-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setIframeFailed(true);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default GoClient;
