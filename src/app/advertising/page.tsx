import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Megaphone, Info, ShieldCheck, ExternalLink, ArrowLeft, DollarSign, Eye, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Advertising Disclosure | Study with Gaurav",
  description: "Full transparency on how Study with Gaurav uses advertising (Google AdSense, Monetag) and sponsored content. We are committed to honest disclosure.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/advertising",
  },
  openGraph: {
    title: "Advertising Disclosure | Study with Gaurav",
    description: "Full transparency on how Study with Gaurav uses advertising (Google AdSense, Monetag) and sponsored content.",
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
      icon: <Info className="w-6 h-6" />,
      color: "blue",
      title: "Overview",
      content: [
        "Study with Gaurav (studywithgaurav.cc.cd) is a free, open-access educational directory. To keep this service free and sustainable, we display advertisements and sponsored content on our website.",
        "We are committed to full transparency with our visitors. This page explains what types of advertising appear on this site, how they work, and how you can manage your preferences.",
      ],
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      color: "emerald",
      title: "Google AdSense",
      content: [
        "We participate in Google AdSense, a third-party advertising program operated by Google LLC. Google may use cookies and similar technologies to serve ads based on your prior visits to this and other websites.",
        "AdSense ads are clearly labeled as 'ADVERTISEMENT' on our site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.",
        "You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info.",
      ],
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      color: "purple",
      title: "Monetag",
      content: [
        "We also use Monetag, a third-party ad network, for additional advertising revenue. Monetag may serve display ads, interstitial ads, and push notification ads to support the site's operational costs.",
        "Monetag sponsored banners and links are labeled as 'SPONSORED LINKS' on our site. These may include links to external educational resources, tools, and services.",
        "Monetag uses cookies and tracking technologies. You can review Monetag's privacy practices at their official website.",
      ],
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      color: "amber",
      title: "Sponsored & Partner Links",
      content: [
        "Some links on this website are marked as 'Sponsored' or appear in clearly labeled sponsored sections. These may earn Study with Gaurav a referral fee or commission if you click on them or make a purchase.",
        "Sponsored links are always clearly disclosed and never disguised as editorial content or organic directory listings.",
        "Our directory listings are curated based on educational value to students — we do NOT accept payment to add, rank, or feature resources in our main directory. Sponsored content is always separate and clearly labeled.",
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      color: "rose",
      title: "Editorial Independence",
      content: [
        "Study with Gaurav maintains strict editorial independence. Our directory listings and rankings are determined by their educational value, student demand, and quality — not by advertising revenue.",
        "Advertisers have no influence over which educational resources are included, excluded, or ranked in our directory. Paid advertising and directory listings are always kept separate.",
        "Resources in our directory are labeled as either 'Official' (directly from the institution's domain) or 'Community' (third-party aggregated content). This distinction is editorial and is not influenced by advertisers.",
      ],
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      color: "slate",
      title: "Analytics",
      content: [
        "We use Google Analytics 4 (GA4) to understand how visitors use our website. This helps us improve content, navigation, and the overall student experience.",
        "GA4 collects anonymized usage data such as page views, session duration, and device type. We do not collect personally identifiable information through analytics.",
        "You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.",
      ],
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "teal",
      title: "Our Commitment to You",
      content: [
        "We will always clearly label advertisements and sponsored content so you can distinguish them from editorial content.",
        "We will never misrepresent the source of any content — all advertising relationships are disclosed on this page.",
        "We comply with Google AdSense policies, Monetag terms, and applicable FTC (Federal Trade Commission) disclosure guidelines for online advertising.",
        "If you have questions about our advertising practices, please contact us at our Contact page.",
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; accent: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-700 bg-blue-100", accent: "from-blue-50" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-700 bg-emerald-100", accent: "from-emerald-50" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-700 bg-purple-100", accent: "from-purple-50" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", icon: "text-amber-700 bg-amber-100", accent: "from-amber-50" },
    rose: { bg: "bg-rose-50", border: "border-rose-200", icon: "text-rose-700 bg-rose-100", accent: "from-rose-50" },
    slate: { bg: "bg-slate-50", border: "border-slate-200", icon: "text-slate-700 bg-slate-100", accent: "from-slate-50" },
    teal: { bg: "bg-teal-50", border: "border-teal-200", icon: "text-teal-700 bg-teal-100", accent: "from-teal-50" },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-8 sm:py-12 pb-20 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Breadcrumb */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors min-h-[44px] px-1"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Home / <span className="text-slate-900">Advertising Disclosure</span></span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
              <Megaphone className="w-3.5 h-3.5" />
              Advertising & Sponsorship Disclosure
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Use Advertising
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Study with Gaurav is free for all students. To keep it free and sustainable, we use advertising. We are fully transparent about our advertising relationships and committed to editorial independence.
            </p>
            <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
          </div>

          {/* Quick Summary Box */}
          <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl space-y-2">
            <h2 className="text-sm font-extrabold text-blue-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Quick Summary
            </h2>
            <ul className="space-y-1.5 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                <span>We display ads from <strong>Google AdSense</strong> and <strong>Monetag</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                <span>All ads are clearly labeled as <strong>ADVERTISEMENT</strong> or <strong>SPONSORED LINKS</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                <span>Directory listings are <strong>never paid</strong> — selected solely for educational value</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                <span>We use <strong>Google Analytics</strong> for anonymous usage insights</span>
              </li>
            </ul>
          </div>

          {/* Section Cards */}
          <div className="space-y-5">
            {sections.map((section, i) => {
              const colors = colorMap[section.color];
              return (
                <div
                  key={i}
                  className={`p-5 sm:p-6 border ${colors.border} rounded-2xl bg-gradient-to-br ${colors.accent} to-white space-y-4`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.icon} shrink-0`}>
                      {section.icon}
                    </div>
                    <h2 className="text-lg font-extrabold text-slate-900">{section.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-sm text-slate-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Footer */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-2">
            <p className="text-sm text-slate-600">
              Have questions about our advertising practices?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
            >
              Contact Us
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
