"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Zap,
  RefreshCw,
  Sparkles,
  ChevronDown,
  Info,
  ExternalLink,
  Lock,
  Cpu,
  ArrowRight,
  HelpCircle,
  FileCheck,
  Globe,
  Share2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is the Study With Gaurav APK completely free?",
    answer:
      "Yes, 100% free forever. There are zero subscription charges, no hidden paywalls, and no in-app purchases required to access any batch, lecture, or study note.",
  },
  {
    question: "Why is the app not listed on the Google Play Store?",
    answer:
      "Study With Gaurav is an independent open-access student directory indexing community educational resources. We distribute directly as an APK to ensure zero restrictions, instant updates, and completely open access for every student without corporate gatekeeping.",
  },
  {
    question: "Is it completely safe to install this APK on my Android phone?",
    answer:
      "Yes. The APK is scanned clean with zero malware, viruses, or trackers. It requests only basic network access permissions required to load portals. No camera, location, storage, or contact permissions are ever requested.",
  },
  {
    question: "Why should I keep VPN turned off while using the app?",
    answer:
      "Some external educational video servers and batch portals enforce rate-limiting or block commercial VPN IP addresses. Keeping your VPN turned off ensures all batch video streams and lecture players load smoothly without interruption.",
  },
  {
    question: "How do I update the app when a new version is released?",
    answer:
      "You can bookmark this page (https://studywithgaurav.cc.cd/download) or join our official Telegram channel (@studywithgaurav0) where update notifications and direct download links are announced first.",
  },
];

export function DownloadClient() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleShare = async () => {
    const shareData = {
      title: "Study With Gaurav Android App",
      text: "Download official Study With Gaurav APK (4.6 MB) — Free JEE, NEET, SSC batches & notes!",
      url: "https://studywithgaurav.cc.cd/download",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Ignored if user dismissed share sheet
      }
    } else {
      navigator.clipboard.writeText("https://studywithgaurav.cc.cd/download");
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Website Header */}
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      {/* Main Content: ample bottom padding for mobile bottom nav */}
      <main className="flex-1 pb-24 md:pb-12">
        {/* Breadcrumb Bar */}
        <section className="bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-[11px] sm:text-xs">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="font-semibold text-slate-800">Download APK</span>
              </nav>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-[11px] font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  v1.0.0 Stable
                </span>
                <button
                  onClick={handleShare}
                  aria-label="Share download link"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium transition-colors"
                >
                  <Share2 className="w-3 h-3" />
                  <span>{copiedLink ? "Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Showcase Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-50 pt-5 pb-8 sm:pt-12 sm:pb-16 border-b border-slate-200/70">
          {/* Subtle geometric dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* Left Column: App Branding, Description & Direct Downloads */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
                
                {/* Pill Badges */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] sm:text-xs font-bold border border-blue-200 shadow-2xs">
                    <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                    OFFICIAL ANDROID APP
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-[10px] sm:text-xs font-semibold border border-purple-200">
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600 shrink-0" />
                    4.6 MB
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-semibold border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    100% Clean
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Study With Gaurav <br />
                    <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                      Official Android Release
                    </span>
                  </h1>
                  <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl pt-0.5">
                    Fast, distraction-free access to 100+ verified batches, video lecture archives, and notes across Physics Wallah, RWA, IIT School, and Next Toppers directly on your phone.
                  </p>
                </div>

                {/* Specs Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-0.5">
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs text-left">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">Version</span>
                    <span className="block text-xs font-bold text-slate-800">v1.0.0 Stable</span>
                  </div>
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs text-left">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">Size</span>
                    <span className="block text-xs font-bold text-slate-800">4.6 MB (Light)</span>
                  </div>
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs text-left">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">Requirement</span>
                    <span className="block text-xs font-bold text-slate-800">Android 7.0+</span>
                  </div>
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs text-left">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">License</span>
                    <span className="block text-xs font-bold text-emerald-600">Free Forever</span>
                  </div>
                </div>

                {/* Primary Download Buttons */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {/* Primary Direct APK Button */}
                    <a
                      href="/downloads/StudyWithGaurav.apk"
                      download="StudyWithGaurav.apk"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.98] transition-all group min-h-[48px]"
                    >
                      <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      <span>Download APK Directly</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-500/40 text-white ml-0.5">
                        4.6 MB
                      </span>
                    </a>

                    {/* Secondary Mirror Button */}
                    <a
                      href="https://github.com/Gaurav1000m/Study-With-Gaurav/raw/main/release/StudyWithGaurav.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-300/90 shadow-2xs hover:border-slate-400 active:scale-[0.98] transition-all min-h-[44px]"
                    >
                      <Globe className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>GitHub Mirror</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs text-slate-500 pt-0.5">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Instant download
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      SHA-256 Verified
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      Zero telemetry
                    </span>
                  </div>
                </div>

                {/* Important Advisory Alert */}
                <div className="bg-amber-50/95 border border-amber-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-amber-950 text-xs sm:text-sm space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Important Streaming Guidelines</span>
                  </div>
                  <ul className="space-y-1 text-amber-900/90 text-[11px] sm:text-xs pl-5 list-disc">
                    <li>
                      <strong>Turn VPN OFF:</strong> The app restricts VPN tunnels to protect batch CDN access.
                    </li>
                    <li>
                      <strong>Set Private DNS to Automatic:</strong> Custom DNS ad-blockers can cause lecture video players to time out.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Right Column: App Card & Feature Checklist */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-200/50 relative overflow-hidden text-center">
                  
                  {/* Decorative corner glows */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* App Icon Container */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3.5 sm:mb-5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-blue-900/15 border-2 border-slate-100 ring-4 ring-blue-50">
                    <Image
                      src="/black-and-white-portrait-of-a-lion.webp"
                      alt="Study With Gaurav Official App Logo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    Study With Gaurav App
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 mb-4 sm:mb-5">
                    Package: <code className="text-blue-600 font-mono text-[10px] sm:text-[11px] bg-blue-50 px-1.5 py-0.5 rounded break-all">com.studywithgaurav.app</code>
                  </p>

                  {/* Quick Feature Checklist */}
                  <div className="space-y-2 sm:space-y-2.5 text-left text-xs mb-5 sm:mb-6 border-y border-slate-100 py-3.5 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-[11px] sm:text-xs">Direct Access to 100+ Batches</span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-[11px] sm:text-xs">Pull-to-Refresh & Offline Cache</span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-[11px] sm:text-xs">Featherweight 4.6 MB Install</span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-[11px] sm:text-xs">Secure Sandboxed Architecture</span>
                    </div>
                  </div>

                  {/* Download Trigger inside Card */}
                  <a
                    href="/downloads/StudyWithGaurav.apk"
                    download="StudyWithGaurav.apk"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] min-h-[44px]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download APK (4.6 MB)</span>
                  </a>

                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2 sm:mt-2.5">
                    Compatible with Samsung, Xiaomi, OnePlus, Realme & Pixel devices.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* App Screenshots Showcase Section */}
        <section className="w-full py-10 sm:py-16 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] sm:text-xs font-bold border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>NATIVE INTERFACE SHOWCASE</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Designed for Fast & Focused Learning
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
                Clean mobile layout with instant batch discovery, crisp lecture players, and zero clutter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center max-w-5xl mx-auto">
              {/* Screenshot 1 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-inner">
                  <Image
                    src="/images/app_preview.png"
                    alt="Study With Gaurav Android App Interface Mockup"
                    fill
                    className="object-contain p-1.5 sm:p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 sm:mt-4 px-1 sm:px-2 text-left">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Streamlined Mobile Interface
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                    Instant categorized directory with search filters for PW, RWA, IIT School, and CDS Journey.
                  </p>
                </div>
              </div>

              {/* Screenshot 2 */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-inner">
                  <Image
                    src="/images/security_banner.png"
                    alt="Study With Gaurav App Security and Protection"
                    fill
                    className="object-contain p-1.5 sm:p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 sm:mt-4 px-1 sm:px-2 text-left">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Protected & Secure Architecture
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                    Hardware VPN guard, private DNS alerts, and encrypted URL endpoints ensure batches remain accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose App / Core Features Grid */}
        <section className="w-full py-10 sm:py-16 bg-slate-50 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] sm:text-xs font-bold border border-blue-200">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>KEY CAPABILITIES</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Use the Android App Over a Browser?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
                Specially built to eliminate browser tab clutter, memory slowdowns, and distracting popups.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
              {/* Feature 1 */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Lightning Fast Loading
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aggressive asset caching ensures subject directories render instantly, even on 3G or spotty mobile connections.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 sm:mb-4">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Zero Intrusive Ads
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pure academic focus with zero popup ads, malicious redirects, or URL shortener traps. Study without interruptions.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 sm:mb-4">
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Swipe & Pull-To-Refresh
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Integrated with native Android gestures. Pull down anytime to immediately synchronize freshly updated lecture playlists.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 sm:mb-4">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  4.6 MB Featherweight
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Takes less storage than a single photo. Minimal RAM and battery drain keeps your phone cool during long study sessions.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 sm:mb-4">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Privacy-First Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No account registration, no phone number verification, and no personal telemetry. Install and access notes freely.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 sm:mb-4">
                  <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  100+ Exam Batches
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Comprehensive coverage for JEE, NEET, UPSC CDS, SSC CGL, Banking, NDA, and State Board exams in one app.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Installation Guide */}
        <section className="w-full py-10 sm:py-16 bg-white border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] sm:text-xs font-bold border border-blue-200">
                <Info className="w-3.5 h-3.5 text-blue-600" />
                <span>QUICK SETUP</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How to Install in 3 Easy Steps
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Follow these simple steps on your Android device to install the APK in under a minute.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
              {/* Step 1 */}
              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 text-left relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs sm:text-sm mb-3 sm:mb-4 shadow-sm">
                  1
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Download the APK
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tap the blue <strong>Download APK Directly</strong> button above to save <code className="text-blue-600 font-mono text-[11px] sm:text-xs">StudyWithGaurav.apk</code> (4.6 MB).
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 text-left relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs sm:text-sm mb-3 sm:mb-4 shadow-sm">
                  2
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Allow Unknown Sources
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If prompted by Android, tap <strong>Settings</strong> and toggle on <em>"Allow from this source"</em> for Chrome or your browser.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 text-left relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs sm:text-sm mb-3 sm:mb-4 shadow-sm">
                  3
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Install & Launch
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tap the downloaded file in your notification bar, press <strong>Install</strong>, open the app, and start studying immediately!
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="/downloads/StudyWithGaurav.apk"
                download="StudyWithGaurav.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Start Download (v1.0.0 APK)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="w-full py-10 sm:py-16 bg-slate-50 border-b border-slate-200/70">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] sm:text-xs font-bold border border-blue-200">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>PACKAGE DETAILS</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Technical Specifications
              </h2>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs text-left text-xs sm:text-sm">
              <div className="divide-y divide-slate-100">
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">App Name</span>
                  <span className="sm:col-span-2 font-bold text-slate-900 text-xs sm:text-sm">Study With Gaurav</span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">Package Name</span>
                  <span className="sm:col-span-2 font-mono text-blue-700 text-xs break-all">com.studywithgaurav.app</span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">Latest Release</span>
                  <span className="sm:col-span-2 font-semibold text-slate-800 text-xs sm:text-sm">Version 1.0.0 (Build 1)</span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">File Size</span>
                  <span className="sm:col-span-2 font-semibold text-slate-800 text-xs sm:text-sm">4.6 MB (4,749,573 bytes)</span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">Android Requirement</span>
                  <span className="sm:col-span-2 text-slate-700 text-xs sm:text-sm">Android 7.0 Nougat (API 24) or higher (Android 15 Compatible)</span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">CPU Architecture</span>
                  <span className="sm:col-span-2 text-slate-700 text-xs sm:text-sm">Universal (ARM64-v8a, armeabi-v7a, x86, x86_64)</span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">Required Permissions</span>
                  <span className="sm:col-span-2 text-emerald-700 font-medium text-xs sm:text-sm">
                    Internet & Network State only (Zero sensitive device permissions)
                  </span>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 p-3 sm:p-4 gap-0.5 sm:gap-4 hover:bg-slate-50/60 transition-colors">
                  <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">License & Cost</span>
                  <span className="sm:col-span-2 text-slate-700 text-xs sm:text-sm">100% Free Educational Software</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full py-10 sm:py-16 bg-white border-b border-slate-200/70">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] sm:text-xs font-bold border border-blue-200">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>QUESTIONS & ANSWERS</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Common questions about the Android APK and installation.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200/90 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-2xs transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between text-left gap-3 hover:bg-slate-50/80 transition-colors min-h-[48px]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-xs sm:text-base text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-3.5 sm:pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5 sm:pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="w-full py-10 sm:py-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white relative overflow-hidden">
          {/* Subtle background lion watermark */}
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none select-none max-w-sm">
            <Image
              src="/black-and-white-portrait-of-a-lion.webp"
              alt="Background lion watermark"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>

          <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-10 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-cyan-200 text-[10px] sm:text-xs font-bold border border-white/15">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>SUPERCHARGE YOUR PREPARATION TODAY</span>
            </div>

            <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Get the Free Study With Gaurav App on Android
            </h2>

            <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
              Join thousands of aspirants preparing for JEE, NEET, SSC, and Defense exams with direct batch portals and lecture notes.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="/downloads/StudyWithGaurav.apk"
                download="StudyWithGaurav.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-xl shadow-slate-950/20 active:scale-95 transition-all min-h-[48px]"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 shrink-0" />
                <span>Download APK (4.6 MB)</span>
              </a>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all min-h-[44px]"
              >
                <span>Continue on Web</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Website Footer */}
      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />

      {/* Suggest Modal */}
      <SuggestModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
      />
    </div>
  );
}
