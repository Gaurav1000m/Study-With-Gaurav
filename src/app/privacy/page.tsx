import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Cookie, FileText, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Study with Gaurav",
  description: "Learn how Study with Gaurav handles information, cookies, Google AdSense advertising, Google Analytics, and student privacy rights.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Study with Gaurav",
    description: "Learn how Study with Gaurav handles information, cookies, Google AdSense advertising, Google Analytics, and student privacy rights.",
    url: "https://studywithgaurav.cc.cd/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
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
        name: "Privacy Policy",
        item: "https://studywithgaurav.cc.cd/privacy",
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

      <main id="main-content" className="flex-1 py-4 sm:py-12 pb-24 md:pb-16">
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

          {/* Page Header */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparency & Data Protection</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Last Updated: {lastUpdated} • Effective for all visitors on https://studywithgaurav.cc.cd
            </p>
          </div>

          {/* Privacy Content */}
          <div className="bg-white p-4 sm:p-10 rounded-2xl border border-slate-200/90 shadow-2xs space-y-6 sm:space-y-8 leading-relaxed text-slate-700 text-xs sm:text-base">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>1. Overview & Commitment to Student Privacy</span>
              </h2>
              <p>
                At <strong>Study with Gaurav</strong> (accessible from <a href="https://studywithgaurav.cc.cd" className="text-blue-600 underline font-medium">https://studywithgaurav.cc.cd</a>), the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information that is collected and recorded by Study with Gaurav and how we use it.
              </p>
              <p>
                Study with Gaurav is an open-access educational directory. We do not mandate user registration, student logins, or payment processing to access our catalog of educational links and study portals.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>2. Log Files</span>
              </h2>
              <p>
                Study with Gaurav follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
              </p>
              <p>
                These logs are not linked to any personally identifiable information. The purpose of this information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information to ensure high platform uptime and reliability.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-blue-600" />
                <span>3. Cookies & Web Beacons</span>
              </h2>
              <p>
                Like any other website, Study with Gaurav uses cookies. These cookies are used to store information including visitors&apos; preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and other information.
              </p>
            </section>

            {/* Section 4 - Google AdSense & Advertising */}
            <section className="space-y-3 bg-blue-50/50 p-5 sm:p-6 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <span>4. Google AdSense & DoubleClick DART Cookies</span>
              </h2>
              <p>
                Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <a href="https://studywithgaurav.cc.cd" className="text-blue-600 underline font-medium">studywithgaurav.cc.cd</a> and other sites on the internet.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
                </li>
                <li>
                  Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
                </li>
                <li>
                  Users may opt out of personalized advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold underline"
                  >
                    Google Ads Settings
                  </a>.
                </li>
                <li>
                  Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold underline"
                  >
                    aboutads.info
                  </a>.
                </li>
              </ul>
              <p className="text-xs text-slate-600 pt-1">
                For comprehensive details on how Google uses data from partner sites, please visit:{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  How Google uses information from sites or apps that use our services
                </a>.
              </p>
            </section>

            {/* Section 5 - Google Analytics */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                5. Google Analytics 4 (GA4)
              </h2>
              <p>
                We use Google Analytics (measurement ID: G-LVHR2NZ8LE) to understand how students find and interact with our directory. GA4 collects aggregated, non-personally identifiable telemetry such as page views, device categories, and general geographical country. You can prevent Google Analytics from using your data by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                6. Third-Party Links & External Educational Portals
              </h2>
              <p>
                Study with Gaurav contains links to external educational websites, institute portals, and study resources. Note that Study with Gaurav has no control over the content, privacy policies, or practices of any third-party sites. We strongly advise you to consult the respective Privacy Policies of these third-party servers for more detailed information.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                7. Children&apos;s Privacy (COPPA Compliance)
              </h2>
              <p>
                Protecting the privacy of young students using the internet is especially important to us. Study with Gaurav does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will promptly remove such information from our records.
              </p>
            </section>

            {/* Section 8 - Contact */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>8. Contact Us Regarding Your Privacy</span>
              </h2>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our team:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-semibold text-slate-900">Study with Gaurav Editorial Team</p>
                <p className="text-sm text-slate-600">Email: <a href="mailto:contact@studywithgaurav.cc.cd" className="text-blue-600 underline font-medium">contact@studywithgaurav.cc.cd</a></p>
                <p className="text-sm text-slate-600">Official Portal: <a href="https://studywithgaurav.cc.cd" className="text-blue-600 underline">https://studywithgaurav.cc.cd</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
