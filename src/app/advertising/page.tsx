import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Megaphone, Info, ShieldCheck, ExternalLink, ArrowLeft, DollarSign, Eye, BarChart2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Advertising Disclosure | Study with Gaurav",
  description: "Full transparency on how Study with Gaurav uses advertising (Google AdSense) and sponsored content. We are committed to honest disclosure.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/advertising",
  },
  openGraph: {
    title: "Advertising Disclosure | Study with Gaurav",
    description: "Full transparency on how Study with Gaurav uses advertising (Google AdSense) and sponsored content.",
    url: "https://studywithgaurav.cc.cd/advertising",
    type: "website",
  },
};

export default function AdvertisingPage() {
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
        name: "Advertising Disclosure",
        item: "https://studywithgaurav.cc.cd/advertising",
      },
    ],
  };

  const sections = [
    {
      icon: <Info className="w-7 h-7" />,
      color: "blue",
      title: "Overview",
      content: [
        "Study with Gaurav (studywithgaurav.cc.cd) is a free, open-access educational directory. To keep this service free and sustainable, we display advertisements and sponsored content on our website.",
        "We are committed to full transparency with our visitors. This page explains what types of advertising appear on this site, how they work, and how you can manage your preferences.",
      ],
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      color: "emerald",
      title: "Google AdSense",
      content: [
        "We participate in Google AdSense, a third-party advertising program operated by Google LLC. Google may use cookies and similar technologies to serve ads based on your prior visits to this and other websites.",
        "AdSense ads are clearly labeled as 'ADVERTISEMENT' on our site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.",
        "You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info.",
      ],
    },
    {
      icon: <ExternalLink className="w-7 h-7" />,
      color: "amber",
      title: "Sponsored & Partner Links",
      content: [
        "Some links on this website are marked as 'Sponsored' or appear in clearly labeled sponsored sections. These may earn Study with Gaurav a referral fee or commission if you click on them or make a purchase.",
        "Sponsored links are always clearly disclosed and never disguised as editorial content or organic directory listings.",
        "Our directory listings are curated based on educational value to students — we do NOT accept payment to add, rank, or feature resources in our main directory. Sponsored content is always separate and clearly labeled.",
      ],
    },
    {
      icon: <Eye className="w-7 h-7" />,
      color: "rose",
      title: "Editorial Independence",
      content: [
        "Study with Gaurav maintains strict editorial independence. Our directory listings and rankings are determined by their educational value, student demand, and quality — not by advertising revenue.",
        "Advertisers have no influence over which educational resources are included, excluded, or ranked in our directory. Paid advertising and directory listings are always kept separate.",
        "Resources in our directory are labeled as either 'Official' (directly from the institution's domain) or 'Community' (third-party aggregated content). This distinction is editorial and is not influenced by advertisers.",
      ],
    },
    {
      icon: <BarChart2 className="w-7 h-7" />,
      color: "indigo",
      title: "Analytics",
      content: [
        "We use Google Analytics 4 (GA4) to understand how visitors use our website. This helps us improve content, navigation, and the overall student experience.",
        "GA4 collects anonymized usage data such as page views, session duration, and device type. We do not collect personally identifiable information through analytics.",
        "You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.",
      ],
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      color: "teal",
      title: "Our Commitment to You",
      content: [
        "We will always clearly label advertisements and sponsored content so you can distinguish them from editorial content.",
        "We will never misrepresent the source of any content — all advertising relationships are disclosed on this page.",
        "We comply with Google AdSense policies and applicable FTC (Federal Trade Commission) disclosure guidelines for online advertising.",
        "If you have questions about our advertising practices, please contact us at our Contact page.",
      ],
    },
  ];

  const colorMap: Record<string, { ring: string; gradient: string; iconBg: string; iconColor: string; shadow: string }> = {
    blue: { ring: "ring-blue-100", gradient: "from-blue-50/50 to-white", iconBg: "bg-blue-500", iconColor: "text-white", shadow: "hover:shadow-blue-500/10" },
    emerald: { ring: "ring-emerald-100", gradient: "from-emerald-50/50 to-white", iconBg: "bg-emerald-500", iconColor: "text-white", shadow: "hover:shadow-emerald-500/10" },
    purple: { ring: "ring-purple-100", gradient: "from-purple-50/50 to-white", iconBg: "bg-purple-500", iconColor: "text-white", shadow: "hover:shadow-purple-500/10" },
    amber: { ring: "ring-amber-100", gradient: "from-amber-50/50 to-white", iconBg: "bg-amber-500", iconColor: "text-white", shadow: "hover:shadow-amber-500/10" },
    rose: { ring: "ring-rose-100", gradient: "from-rose-50/50 to-white", iconBg: "bg-rose-500", iconColor: "text-white", shadow: "hover:shadow-rose-500/10" },
    indigo: { ring: "ring-indigo-100", gradient: "from-indigo-50/50 to-white", iconBg: "bg-indigo-500", iconColor: "text-white", shadow: "hover:shadow-indigo-500/10" },
    teal: { ring: "ring-teal-100", gradient: "from-teal-50/50 to-white", iconBg: "bg-teal-500", iconColor: "text-white", shadow: "hover:shadow-teal-500/10" },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <div className="h-14 sm:h-16" />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <main id="main-content" className="flex-1 py-10 sm:py-16 pb-24 md:pb-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Breadcrumb & Header Section */}
          <div className="space-y-6 text-center md:text-left md:flex md:items-end md:justify-between">
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors group px-1"
              >
                <ArrowLeft className="w-4 h-4 text-indigo-500 group-hover:-translate-x-1 transition-transform" />
                <span>Home <span className="mx-1 text-slate-300">/</span> <span className="text-slate-800">Advertising Disclosure</span></span>
              </Link>
              
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full ring-1 ring-indigo-200/50 shadow-sm">
                  <Megaphone className="w-3.5 h-3.5" />
                  Transparency First
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 tracking-tight pb-2">
                  Advertising Disclosure
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Study with Gaurav is completely free for all students. We use advertising to sustain our servers, but our editorial integrity remains fully independent.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl ring-1 ring-slate-900/5 inline-block">
              Last updated: <span className="text-slate-700">{lastUpdated}</span>
            </div>
          </div>

          {/* Premium Quick Summary Glassmorphic Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="w-32 h-32 text-indigo-900" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Quick Summary
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                {[
                  "We display ads from Google AdSense",
                  "All ads are clearly labeled as ADVERTISEMENT or SPONSORED",
                  "Directory listings are never paid or influenced by advertisers",
                  "We use Google Analytics for anonymous usage insights"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50/80 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid of Section Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, i) => {
              const colors = colorMap[section.color];
              return (
                <div
                  key={i}
                  className={`group relative p-6 sm:p-8 bg-gradient-to-br ${colors.gradient} rounded-3xl border border-white ring-1 ${colors.ring} shadow-lg shadow-slate-200/30 hover:-translate-y-1 ${colors.shadow} transition-all duration-300 overflow-hidden flex flex-col`}
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white rounded-full blur-2xl opacity-60 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.iconBg} ${colors.iconColor} shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4 relative z-10 flex-1">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-sm text-slate-600 leading-relaxed font-medium">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modern Contact Footer */}
          <div className="mt-8 relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center group shadow-2xl">
            <div className="absolute inset-0 bg-[url('/images/pattern-noise.png')] opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center ring-1 ring-white/20">
                <Info className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Have questions about our advertising practices?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg">
                We believe in 100% transparency. If anything on this page is unclear, our team is always ready to assist you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-indigo-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Contact Us
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
