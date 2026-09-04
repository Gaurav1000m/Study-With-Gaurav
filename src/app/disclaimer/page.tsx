import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle, ShieldCheck, Scale, FileText, ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer & Copyright Notice | Study with Gaurav",
  description: "Read the official Disclaimer, DMCA Copyright Notice, and Non-Affiliation statements for Study with Gaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/disclaimer",
  },
  openGraph: {
    title: "Disclaimer & Copyright Notice | Study with Gaurav",
    description: "Read the official Disclaimer, DMCA Copyright Notice, and Non-Affiliation statements for Study with Gaurav.",
    url: "https://studywithgaurav.cc.cd/disclaimer",
    type: "website",
  },
};

export default function DisclaimerPage() {
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
        name: "Disclaimer",
        item: "https://studywithgaurav.cc.cd/disclaimer",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Legal Disclaimers & Trademark Notices</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Disclaimer & DMCA Notice
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Last Updated: {lastUpdated} • Applicable to all indexed materials on https://studywithgaurav.cc.cd
            </p>
          </div>

          {/* Disclaimer Content */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xs space-y-8 leading-relaxed text-slate-700 text-sm sm:text-base">
            
            {/* 1. Educational Aggregator Notice */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>1. Educational Directory Disclaimer</span>
              </h2>
              <p>
                The information provided by <strong>Study with Gaurav</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on <a href="https://studywithgaurav.cc.cd" className="text-blue-600 underline font-medium">https://studywithgaurav.cc.cd</a> is for general educational and navigational purposes only.
              </p>
              <p>
                Study with Gaurav operates strictly as an open-access web directory indexing publicly accessible study tools, links, and competitive exam portals. We do not host, store, or stream proprietary videos, copyright-protected course material, or paid databases on our servers.
              </p>
            </section>

            {/* 2. Non-Affiliation */}
            <section className="space-y-3 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>2. Non-Affiliation & Trademark Notice</span>
              </h2>
              <p>
                All company, institute, product, brand, and service names used in this directory are for identification purposes only. All trademarks, registered trademarks, logos, and service marks (including but not limited to <em>Physics Wallah, Rojgar With Ankit, Next Toppers, IIT School, Unacademy, Khan Global Studies, Study IQ, CDS Journey</em>, and others) are the intellectual property of their respective owners.
              </p>
              <p>
                Use of these names, logos, and brands does not imply endorsement, affiliation, sponsorship, or certification by any of the respective trademark owners.
              </p>
            </section>

            {/* 3. External Links */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                3. External Links Disclaimer
              </h2>
              <p>
                Our directory contains links to external websites that are not provided or maintained by or in any way affiliated with Study with Gaurav. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>

            {/* 4. DMCA Notice & Takedown Policy */}
            <section className="space-y-3 bg-amber-50/50 p-5 sm:p-6 rounded-xl border border-amber-200">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-600" />
                <span>4. DMCA & Copyright Removal Procedure</span>
              </h2>
              <p>
                Study with Gaurav respects the intellectual property rights of educators, publishers, and institutes. If you are a copyright or trademark owner (or an authorized agent) and believe that any link listed on our directory infringes upon your rights, please submit a formal notification containing:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>The exact URL or listing ID on Study with Gaurav where the material appears.</li>
                <li>Your contact information, including name, organization, and official email address.</li>
                <li>A statement that you have a good-faith belief that the use is not authorized by the copyright owner.</li>
                <li>A statement made under penalty of perjury that the information is accurate and that you are authorized to act on behalf of the owner.</li>
              </ul>
              <p className="pt-2">
                Send takedown notices to:{" "}
                <a href="mailto:contact@studywithgaurav.cc.cd" className="text-blue-700 font-bold underline">
                  contact@studywithgaurav.cc.cd
                </a>
              </p>
              <p className="text-xs text-slate-500">
                We review all legitimate copyright communications and take action within 24 to 48 business hours.
              </p>
            </section>

            {/* 5. Advertising Disclaimer */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                5. Advertising Disclosure
              </h2>
              <p>
                To support server costs and domain infrastructure while keeping our educational catalog 100% free for all students, this website displays third-party advertisements via Google AdSense. These advertisements are clearly labeled as &quot;ADVERTISEMENT&quot; per Google Publisher Policies. We do not endorse any product or service advertised within third-party ad units.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>6. Legal Questions</span>
              </h2>
              <p>
                For questions regarding this disclaimer, please email us at{" "}
                <a href="mailto:contact@studywithgaurav.cc.cd" className="text-blue-600 font-medium underline">
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
