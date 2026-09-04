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

      <main className="flex-1 py-8 sm:py-12 pb-20 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Back */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Back to Directory</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              <Mail className="w-3.5 h-3.5" />
              <span>Student Support & Editorial Inquiries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact Study with Gaurav
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Have questions, found a broken educational link, or want to suggest a new study resource? Reach out to us directly through any of the channels below.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary Email */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Email Editorial Team</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For official inquiries, broken link notifications, partnership requests, or DMCA communications:
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:contact@studywithgaurav.cc.cd"
                    className="inline-block text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/70 px-4 py-2.5 rounded-xl border border-blue-200 transition-colors break-all"
                  >
                    contact@studywithgaurav.cc.cd
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Alternative: <a href="mailto:gaurav1000m@gmail.com" className="text-slate-600 underline">gaurav1000m@gmail.com</a>
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Typical response time: Within 24-48 hours</span>
              </div>
            </div>

            {/* Telegram Community */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Telegram Community</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Join our active student discussion group for real-time exam updates, newly verified batch portals, and peer study groups:
                </p>
                <div className="pt-2">
                  <a
                    href="https://t.me/studywithgaurav0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white bg-sky-600 hover:bg-sky-500 px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Join @studywithgaurav0</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-sky-500" />
                <span>Verified community channel for Indian students</span>
              </div>
            </div>

          </div>

          {/* FAQ / Inquiries Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span>Common Reasons Students Contact Us</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">1. Report Broken Links</strong>
                <p className="text-slate-600">Found an institute link that has expired or moved? Let us know and we will audit and replace it promptly.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">2. Suggest Educational Resources</strong>
                <p className="text-slate-600">Know a great open-access study portal, formula guide, or test series? Send it over for review.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">3. Copyright & Trademark Inquiries</strong>
                <p className="text-slate-600">For institute owners seeking trademark updates or listing removals, see our <Link href="/disclaimer" className="text-blue-600 underline">Disclaimer & DMCA policy</Link>.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">4. Technical & Accessibility Feedback</strong>
                <p className="text-slate-600">Notice layout issues on mobile or screen reader bugs? We are committed to an inclusive user experience.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
