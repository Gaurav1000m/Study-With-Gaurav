"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Website } from "@/types/website";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Check,
  Copy,
  BookOpen,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { CATEGORY_MAP } from "@/data/categories";

interface GoClientProps {
  website: Website;
}

export function GoClient({ website }: GoClientProps) {
  const [isCopied, setIsCopied] = useState(false);

  const categoryObj = CATEGORY_MAP.get(website.category);
  const categoryName = categoryObj ? categoryObj.name : website.category;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(website.url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header Bar */}
      <header className="h-14 sm:h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-3 sm:px-6 flex items-center justify-between shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Directory</span>
          </Link>

          <div className="h-5 w-px bg-slate-800 shrink-0" />

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
              <span className="text-[10px] text-slate-400 truncate">
                {categoryName} • Verified Departure Gateway
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors shrink-0"
          title="Copy official URL"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Link</span>
            </>
          )}
        </button>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Status Badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Educational Destination
            </span>
            <span className="text-xs text-slate-500">External Gateway</span>
          </div>

          {/* Target Identity */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center p-2 shrink-0">
              <Image
                src={website.logo || "/images/logo.webp"}
                alt={`${website.name} logo`}
                width={64}
                height={64}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1 min-w-0">
              <h2 className="text-2xl font-black text-white tracking-tight">
                {website.name}
              </h2>
              <p className="text-xs text-blue-400 font-semibold truncate">
                {website.url}
              </p>
              <p className="text-xs text-slate-400 line-clamp-2">
                {website.description}
              </p>
            </div>
          </div>

          {/* Safety & Academic Verification Checklist */}
          <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 space-y-2.5 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-200 font-bold">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Safety & Verification Notice:</span>
            </div>
            <ul className="space-y-1.5 pl-6 list-disc text-slate-400">
              <li>This link directs to the official, verified destination of {website.name}.</li>
              <li>Opens in a safe, isolated browser tab with <code className="text-slate-300">rel=&quot;noopener noreferrer&quot;</code> protection.</li>
              <li>No credentials or student account details are shared by StudyWithGaurav.</li>
            </ul>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Visit Official {website.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href={`/resources/${website.id}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors text-center"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Read Full Review</span>
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors text-center"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                <span>Browse Directory</span>
              </Link>
            </div>
          </div>

          {/* Student Advisory */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-800/80">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>StudyWithGaurav is an independent directory. Always verify domain authenticity before entering payment details.</span>
          </div>

        </div>
      </main>
    </div>
  );
}

export default GoClient;
