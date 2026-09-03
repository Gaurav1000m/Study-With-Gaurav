"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ShieldCheck, Heart, Globe, Key, Coffee, Copy, Check, QrCode, Smartphone, ExternalLink } from "lucide-react";

export function DonateClient() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);

  const upiId = "gauraveducation@fam"; // Primary UPI ID

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const getUpiPayUrl = () => {
    const amountParam = selectedAmount ? `&am=${selectedAmount}` : "";
    return `upi://pay?pa=${upiId}&pn=Study%20with%20Gaurav&cu=INR${amountParam}`;
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://studywithgaurav.cc.cd"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Donate",
        "item": "https://studywithgaurav.cc.cd/donate"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main className="flex-1 py-6 sm:py-16 pb-20 md:pb-12 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left Column: Mission & Info (Col 7) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold shadow-2xs">
                <Heart className="w-3.5 h-3.5 fill-rose-600 shrink-0" />
                <span>Support Our Student Mission</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Keep Education <br className="hidden sm:block" />
                  <span className="text-blue-700">Free & Accessible For Everyone.</span>
                </h1>

                <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">
                  Study with Gaurav is built by students, for students. We curate verified educational platforms, batch access links, and study materials without paywalls or subscriptions.
                </p>
              </div>

              {/* Where your donation goes card */}
              <div className="space-y-4 bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs">
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Where your donation goes:</span>
                </h2>

                <ul className="space-y-4 sm:space-y-5">
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs mt-0.5">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">Domain & Fast Hosting</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                        Keeping the portal online 24/7 with fast response times for thousands of daily student visitors.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100 shadow-2xs mt-0.5">
                      <Key className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">APIs & Content Updates</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                        Maintaining automated site checks, search indexing, and real-time updates for active courses.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs mt-0.5">
                      <Coffee className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">Student Developer Support</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                        Fueling continuous development and expanding resource listings across new subjects and exams.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Donation Card (Col 5) */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-slate-900 text-base sm:text-lg">UPI & QR Donation</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Instant & Secure
                  </span>
                </div>

                {/* QR Code Image Display */}
                <div className="relative flex justify-center bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200/80">
                  <Image
                    src="/Qrcode.jpg"
                    alt="Scan QR Code to Donate via PhonePe, GPay, Paytm, BHIM"
                    width={260}
                    height={260}
                    className="max-w-[220px] sm:max-w-[260px] w-full h-auto rounded-lg shadow-sm border border-slate-200 object-contain"
                  />
                </div>

                {/* Preset Amount Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                    Choose Amount (INR):
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 100, 250, 500].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${
                          selectedAmount === amt
                            ? "bg-rose-600 text-white border-rose-600 shadow-2xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Mobile UPI App Button */}
                <a
                  href={getUpiPayUrl()}
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-xl transition-colors shadow-xs"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Pay via UPI App (GPay / PhonePe / Paytm)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* Copy UPI ID Box */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Or Copy UPI ID:
                  </label>
                  <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl border border-slate-200">
                    <span className="text-xs font-mono font-bold text-slate-800 truncate flex-1 px-1">
                      {upiId}
                    </span>
                    <button
                      onClick={handleCopyUpi}
                      className="px-3 py-1.5 text-xs font-bold bg-white text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      {copiedUpi ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
