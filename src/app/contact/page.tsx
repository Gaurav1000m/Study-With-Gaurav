import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MessageCircle, Send, HelpCircle, ArrowLeft, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Support | Study with Gaurav",
  description: "Get in touch with the Study with Gaurav editorial team for resource submissions, broken link reports, feedback, and student support.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/contact",
  },
  openGraph: {
    title: "Contact Us & Support | Study with Gaurav",
    description: "Get in touch with the Study with Gaurav editorial team for resource submissions, broken link reports, feedback, and student support.",
    url: "https://studywithgaurav.cc.cd/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://studywithgaurav.cc.cd",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://studywithgaurav.cc.cd/contact",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-10 pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
          
          {/* Breadcrumb Back */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors min-h-[44px] px-1"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Back to Directory</span>
            </Link>
          </div>

          {/* Page Header Card */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
              <Mail className="w-3.5 h-3.5" />
              <span>Student Support & Editorial Inquiries</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact Study with Gaurav
            </h1>
            <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Have questions, found a broken educational link, or want to suggest a new study resource? Reach out to us directly through any channel below.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            
            {/* Primary Email Card */}
            <div className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">Email Editorial Team</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    For official inquiries, broken link notifications, partnership requests, or DMCA communications:
                  </p>
                </div>
                <div className="pt-1">
                  <a
                    href="mailto:contact@studywithgaurav.cc.cd"
                    className="inline-flex items-center justify-center w-full sm:w-auto text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 active:bg-blue-200/70 px-4 py-3 rounded-xl border border-blue-200 transition-colors break-all min-h-[44px]"
                  >
                    contact@studywithgaurav.cc.cd
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-100">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Typical response time: Within 24-48 hours</span>
              </div>
            </div>

            {/* Telegram Community Card */}
            <div className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">Telegram Community</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    Join our active student discussion group for real-time exam updates, newly verified batch portals, and peer study groups:
                  </p>
                </div>
                <div className="pt-1">
                  <a
                    href="https://t.me/studywithgaurav0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 px-5 py-3 rounded-xl shadow-xs transition-all active:scale-[0.98] min-h-[44px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Join @studywithgaurav0</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Verified community channel for Indian students</span>
              </div>
            </div>

          </div>

          {/* Common Inquiries List */}
          <div className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Common Reasons Students Contact Us</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">1. Report Broken Links</strong>
                <p className="text-slate-600 text-xs sm:text-sm">Found an institute link that has expired or moved? Let us know and we will audit and replace it promptly.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">2. Suggest Educational Resources</strong>
                <p className="text-slate-600 text-xs sm:text-sm">Know a great open-access study portal, formula guide, or test series? Send it over for review.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">3. Copyright & Trademark Inquiries</strong>
                <p className="text-slate-600 text-xs sm:text-sm">For institute owners seeking trademark updates or listing removals, see our <Link href="/disclaimer" className="text-blue-600 underline font-semibold">Disclaimer & DMCA policy</Link>.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">4. Technical & Accessibility Feedback</strong>
                <p className="text-slate-600 text-xs sm:text-sm">Notice layout issues on mobile or screen reader bugs? We are committed to an inclusive user experience.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
