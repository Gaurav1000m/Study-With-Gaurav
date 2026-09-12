"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/data/config";
import { downloadStudyWithGauravApk } from "@/lib/downloadApk";

interface FooterProps {
  onOpenSuggestModal?: () => void;
}

export function Footer({ onOpenSuggestModal }: FooterProps) {
  const router = useRouter();

  const handleSuggest = () => {
    if (onOpenSuggestModal) {
      onOpenSuggestModal();
    } else {
      router.push("/about#suggest");
    }
  };

  return (
    <footer className="w-full bg-slate-50 text-slate-900 border-t border-slate-200/80">
      {/* ========================================================================= */}
      {/* MOBILE APP-STYLE FOOTER (Hidden on desktop, sleek & compact on mobile)    */}
      {/* ========================================================================= */}
      <div className="block md:hidden px-4 py-8 space-y-6">
        {/* Suggest Resource Compact Action Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-2xl p-5 text-white shadow-md text-center space-y-3">
          <h3 className="text-lg font-black tracking-tight">Know a Useful Resource?</h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
            Help thousands of students discover verified learning platforms and study notes.
          </p>
          <button
            onClick={handleSuggest}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-sm hover:bg-slate-100 active:scale-98 transition-all cursor-pointer min-h-[44px]"
          >
            <span>Suggest a Website</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Quick App Trust & Legal Pills */}
        <div className="space-y-3 pt-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
            Transparency & Policies
          </span>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold text-slate-600">
            <Link href="/editorial-policy" className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-50">
              Editorial Policy
            </Link>
            <Link href="/privacy" className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-50">
              Privacy
            </Link>
            <Link href="/terms" className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-50">
              Terms
            </Link>
            <Link href="/disclaimer" className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-50">
              Disclaimer
            </Link>
            <Link href="/advertising" className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-50">
              Advertising
            </Link>
            <Link href="/contact" className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-50">
              Contact
            </Link>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <a
            href="mailto:contact@studywithgaurav.cc.cd"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95"
            aria-label="Email Study with Gaurav"
          >
            <Image src="/images/social/gmail.svg" alt="Gmail" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
          </a>
          <a
            href="https://t.me/studywithgaurav0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95"
            aria-label="Join Telegram"
          >
            <Image src="/images/social/telegram.svg" alt="Telegram" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
          </a>
          <a
            href="https://instagram.com/studywithgaurav0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95"
            aria-label="Follow on Instagram"
          >
            <Image src="/images/social/instagram.svg" alt="Instagram" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
          </a>
          <a
            href="https://github.com/Gaurav1000m"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95"
            aria-label="GitHub Repository"
          >
            <Image src="/images/social/github.svg" alt="GitHub" width={18} height={18} style={{ width: "auto", height: "auto" }} unoptimized />
          </a>
        </div>

        {/* Mobile Copyright */}
        <div className="text-center text-[10px] text-slate-400 pt-2 pb-4">
          <p>© {new Date().getFullYear()} {siteConfig.name} • Version 1.0.4</p>
          <p className="mt-0.5">An open educational resource platform for students</p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP FOOTER (Hidden on mobile, rich 4-column layout on desktop)        */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        {/* 1. CTA Section */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
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
                    Resource Directory
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-blue-700 transition-colors">
                    Educational Articles & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/roadmaps" className="hover:text-blue-700 transition-colors">
                    Study Roadmaps
                  </Link>
                </li>
                <li>
                  <Link href="/popular" className="hover:text-blue-700 transition-colors">
                    Trending Resources
                  </Link>
                </li>
                <li>
                  <button onClick={handleSuggest} className="hover:text-blue-700 transition-colors cursor-pointer text-left">
                    Suggest a Resource
                  </button>
                </li>
                <li>
                  <button
                    onClick={downloadStudyWithGauravApk}
                    className="hover:text-blue-700 transition-colors font-semibold text-blue-600 cursor-pointer flex items-center gap-1.5 text-left"
                  >
                    <span>Download Android APK</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-md font-bold">v1.0.4</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Trust & Legal Information */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Trust & Editorial
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link href="/about" className="hover:text-blue-700 transition-colors">
                    About Us & Mission
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-policy" className="hover:text-blue-700 transition-colors">
                    Editorial & Review Policy
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
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-blue-700 transition-colors">
                    Disclaimer & DMCA Notice
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

        {/* 3. Bottom Copyright */}
        <div className="bg-slate-100 py-4 sm:py-6 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.name}. An independent educational platform for Indian students.</p>
            <div className="flex items-center gap-4 text-slate-500 flex-wrap justify-center">
              <Link href="/editorial-policy" className="hover:underline">Editorial Policy</Link>
              <span>•</span>
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
      </div>
    </footer>
  );
}
