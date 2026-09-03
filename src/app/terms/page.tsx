import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookCheck, ShieldAlert, Scale, CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Study with Gaurav",
  description: "Read the Terms and Conditions governing use of the Study with Gaurav open-access educational directory and study catalog.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Study with Gaurav",
    description: "Read the Terms and Conditions governing use of the Study with Gaurav open-access educational directory and study catalog.",
    url: "https://studywithgaurav.cc.cd/terms",
    type: "website",
  },
};

export default function TermsPage() {
  const lastUpdated = "September 2026";

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
        name: "Terms & Conditions",
        item: "https://studywithgaurav.cc.cd/terms",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Scale className="w-3.5 h-3.5" />
              <span>User Agreement & Directory Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Last Updated: {lastUpdated} • Binding on all users of https://studywithgaurav.cc.cd
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xs space-y-8 leading-relaxed text-slate-700 text-sm sm:text-base">
            
            {/* 1. Introduction */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <BookCheck className="w-5 h-5 text-blue-600" />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p>
                Welcome to <strong>Study with Gaurav</strong>. By accessing or using our website located at <a href="https://studywithgaurav.cc.cd" className="text-blue-600 underline font-medium">https://studywithgaurav.cc.cd</a>, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use the directory.
              </p>
            </section>

            {/* 2. Educational Purpose */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>2. Nature of the Service</span>
              </h2>
              <p>
                Study with Gaurav serves exclusively as an informational aggregation catalog and educational indexing directory. We catalog publicly available learning tools, institute links, lecture gateways, and open study resources across competitive examinations in India (e.g. JEE, NEET, SSC, UPSC, and State Boards).
              </p>
              <p>
                Study with Gaurav does not host copyrighted video files or proprietary institute servers on its infrastructure. All registered trademarks, logos, and institute brand names remain the exclusive property of their respective owners.
              </p>
            </section>

            {/* 3. Permitted Use */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                3. Permitted and Prohibited Conduct
              </h2>
              <p>
                You agree to use Study with Gaurav solely for legitimate non-commercial study, educational discovery, and research purposes. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Use automated scrapers, bots, or spiders in a manner that degrades service performance for other students.</li>
                <li>Engage in any denial-of-service (DoS) attacks or tamper with the website headers or security infrastructure.</li>
                <li>Use our platform name or branding for unauthorized commercial promotions or deceptive campaigns.</li>
                <li>Attempt to bypass security features or interfere with authorized third-party services including Google AdSense.</li>
              </ul>
            </section>

            {/* 4. Third-Party Links */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                4. Third-Party Websites & Content Disclaimer
              </h2>
              <p>
                Our directory provides hyperlinks to third-party academic portals, institutes, and external websites. These external links are provided solely as a navigational convenience for learners. Study with Gaurav does not endorse, control, or assume liability for the accuracy, legality, or availability of third-party content.
              </p>
            </section>

            {/* 5. Disclaimer of Warranties */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                <span>5. Disclaimer of Warranties & Limitation of Liability</span>
              </h2>
              <p>
                Study with Gaurav is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive to maintain accurate listings, we do not warrant that all links will be uninterrupted, error-free, or continuously accessible.
              </p>
              <p>
                In no event shall Study with Gaurav or its operators be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this platform.
              </p>
            </section>

            {/* 6. Modifications */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                6. Changes to Terms
              </h2>
              <p>
                We reserve the right to revise or update these Terms and Conditions at any time. Significant changes will be reflected on this page with an updated &quot;Last Updated&quot; date. Your continued use of the website following changes constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* 7. Contact Information */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">
                7. Contact Information
              </h2>
              <p>
                For questions regarding these Terms & Conditions, please contact us at:{" "}
                <a href="mailto:contact@studywithgaurav.cc.cd" className="text-blue-600 font-semibold underline">
                  contact@studywithgaurav.cc.cd
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
