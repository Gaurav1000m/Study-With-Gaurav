"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { ADSTERRA_SMART_LINK } from "@/components/AdsterraBanner";
import { downloadStudyWithGauravApk } from "@/lib/downloadApk";
import { AdBanner } from "@/components/AdBanner";

interface FooterProps {
  onOpenSuggestModal?: () => void;
}

export function Footer({ onOpenSuggestModal }: FooterProps) {
  const handleSuggest = () => {
    if (onOpenSuggestModal) {
      onOpenSuggestModal();
    } else {
      window.location.href = "/about#suggest";
    }
  };

  return (
    <footer className="w-full bg-slate-50 text-slate-900 border-t border-slate-200/80">
      {/* 1. CTA Section */}
      <div className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-slate-800 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-800 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Know a Great Resource?
          </h2>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex flex-wrap justify-center items-center gap-x-3 mb-8">
            <span>Help</span>
            <span className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-1 rounded-full shadow-lg transform -rotate-2">
              Thousands
            </span>
            <span>of Students!</span>
          </div>

          <button
            onClick={handleSuggest}
            className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <span>Suggest a Website</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-800"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center shadow-md relative shrink-0">
                <Image
                  src="/images/lionbg.webp"
                  alt="Study with Gaurav logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-xl text-slate-900 tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                  Open Student Resource Directory
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Study with Gaurav is a non-profit, open-access educational directory indexing verified study portals, foundation lectures, notes, formula sheets, and competitive exam preparation resources across India.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="mailto:contact@studywithgaurav.cc.cd"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200"
                aria-label="Email Study with Gaurav"
              >
                <Image src="/images/social/gmail.svg" alt="Gmail" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
              </a>
              <a
                href="https://t.me/studywithgaurav0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200"
                aria-label="Join Telegram"
              >
                <Image src="/images/social/telegram.svg" alt="Telegram" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
              </a>
              <a
                href="https://instagram.com/studywithgaurav0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200"
                aria-label="Follow on Instagram"
              >
                <Image src="/images/social/instagram.svg" alt="Instagram" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
              </a>
              <a
                href="https://github.com/Gaurav1000m"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200"
                aria-label="GitHub Repository"
              >
                <Image src="/images/social/github.svg" alt="GitHub" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
              </a>
            </div>
          </div>

          {/* Col 2: Educational Discovery */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Educational Hubs
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/categories" className="hover:text-blue-700 transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-700 transition-colors">
                  Directory Catalog
                </Link>
              </li>
              <li>
                <Link href="/popular" className="hover:text-blue-700 transition-colors">
                  Trending Resources
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-blue-700 transition-colors">
                  Support Our Mission
                </Link>
              </li>
              <li>
                <button onClick={handleSuggest} className="hover:text-blue-700 transition-colors cursor-pointer text-left">
                  Suggest Resource
                </button>
              </li>
              <li>
                <button
                  onClick={downloadStudyWithGauravApk}
                  className="hover:text-blue-700 transition-colors font-semibold text-blue-600 cursor-pointer flex items-center gap-1.5 text-left"
                >
                  <span>Download Android APK</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-md font-bold">4.6MB</span>
                </button>
              </li>
              <li>
                <a
                  href={ADSTERRA_SMART_LINK}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors font-semibold text-emerald-600 flex items-center gap-1.5"
                >
                  <span>Sponsored Study Deals & Offers</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md font-bold">HOT</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Legal Information */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-700 transition-colors">
                  About Us & Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-700 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-700 transition-colors">
                  Disclaimer &amp; DMCA
                </Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-blue-700 transition-colors">
                  Advertising Disclosure
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Responsive Ad Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex items-center justify-center overflow-hidden">
        <AdBanner format="auto" className="my-0" />
      </div>

      {/* 3. Bottom Copyright */}
      <div className="bg-slate-100 py-4 sm:py-6 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}. An independent educational directory for Indian students.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
            <span>•</span>
            <Link href="/advertising" className="hover:underline">Advertising</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
