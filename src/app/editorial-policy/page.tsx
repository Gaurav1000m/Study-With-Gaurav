import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  Scale,
  RefreshCw,
  Award,
  BookOpen,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy & Review Standards | Study with Gaurav",
  description: "Read the editorial guidelines, curation standards, verification methodology, and academic integrity policies governing StudyWithGaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy & Review Standards | Study with Gaurav",
    description: "Read the editorial guidelines, curation standards, verification methodology, and academic integrity policies governing StudyWithGaurav.",
    url: "https://studywithgaurav.cc.cd/editorial-policy",
    type: "website",
  },
};

export default function EditorialPolicyPage() {
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
        name: "Editorial Policy",
        item: "https://studywithgaurav.cc.cd/editorial-policy",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Editorial Policy & Curation Standards",
    description: "Our comprehensive standards for evaluating, curating, and recommending educational resources and study tools.",
    publisher: {
      "@type": "Organization",
      name: "StudyWithGaurav",
      url: "https://studywithgaurav.cc.cd",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <Header />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-12 pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-10">
          
          {/* Hero Header */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Editorial Integrity & Quality Standards</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Editorial Policy & Curation Standards
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At StudyWithGaurav, our mission is to cut through online noise and provide students with legitimate, verified, and safe educational resources. We follow strict editorial guidelines to ensure every review, roadmap, and resource recommendation meets high academic standards.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-medium flex items-center gap-2">
              <span>Last updated: March 2026</span>
              <span>•</span>
              <span>Maintained by the StudyWithGaurav Editorial Team</span>
            </div>
          </div>

          {/* Section 1: Our Mission and Values */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-blue-50 text-blue-600">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Core Mission & Educational Philosophy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The modern web is inundated with low-quality content, aggressive paywalls, ad-traps, and misleading tutorials. StudyWithGaurav serves as an independent clearinghouse designed to evaluate tools objectively, explain when and how to use them, and help learners navigate self-directed education without falling victim to predatory services.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We do not accept payments to give positive reviews. Our evaluations prioritize learner outcomes: clarity of explanations, pedagogy, affordability, accessibility, and community reputation.
            </p>
          </div>

          {/* Section 2: Resource Vetting Criteria */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
                <Award className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Five-Point Resource Evaluation Rubric
              </h2>
            </div>
            <p className="text-sm text-slate-600">
              Before any external educational resource or platform is listed in our directory or referenced in our study roadmaps, it is screened against five criteria:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pedagogical Quality</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Content must be logically structured, factual, and taught by credible educators or industry practitioners.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Student Safety & Privacy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We reject any site with deceptive download buttons, malware distributions, aggressive pop-under networks, or predatory tracking scripts.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accessibility & Fair Pricing</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We give strong preference to platforms offering generous free tiers, open-source documentation, or transparent educational discounts.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Maintenance & Currency</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Resources must be actively maintained. Obsolete libraries, deprecated curriculum versions, or abandoned projects are flagged or removed.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Academic Integrity and Prohibited Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
                <AlertOctagon className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Zero Tolerance: Piracy & Academic Dishonesty
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              StudyWithGaurav operates in strict adherence to copyright laws and ethical educational standards. We have a zero-tolerance policy regarding:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>No Piracy or Unauthorized Distribution:</strong> We do not host, link to, or endorse cracked software, bypassed paywalls, or illegally scraped course repositories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>No Cheating or Contract Cheating Services:</strong> We strictly forbid exam cheating portals, paid assignment mills, and ghostwriting services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>No Deceptive Ads or Pop-Unders:</strong> We do not deploy disruptive ad networks or forced redirect links on our platform.</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Independent Review & Advertising Disclosure */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
                <Scale className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Advertising & Financial Transparency
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              To keep our learning roadmaps, articles, and directory free for all students worldwide, StudyWithGaurav may display non-intrusive, family-friendly display advertisements (such as Google AdSense).
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Advertisers have zero influence over our editorial ratings, article topics, or roadmap recommendations. Whenever an advertisement is shown, it is clearly designated with standard advertising markings. We strictly prohibit invasive pop-ups, disguised download buttons, or full-screen overlays.
            </p>
          </div>

          {/* Section 5: Corrections and Feedback */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
                <RefreshCw className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Continuous Auditing & Correction Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Websites change URLs, introduce paywalls, or sunset free tiers. We regularly audit existing directory entries and articles. If you discover an inaccurate review, a broken link, or a platform that has changed its terms, we encourage immediate reporting.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Corrections are reviewed by our team within 48 to 72 hours. Please contact us at{" "}
              <Link href="/contact" className="text-blue-600 font-semibold underline">
                our contact page
              </Link>{" "}
              or message us directly on our official support channels.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-200" />
              <h3 className="text-xl font-bold">Have a Suggestion or Correction?</h3>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Whether you are an educator wanting your open-source curriculum featured or a student reporting a link discrepancy, our editorial desk welcomes your feedback.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Contact Editorial Desk
              </Link>
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-blue-500/30 text-white font-bold text-sm hover:bg-blue-500/40 border border-white/20 transition-colors"
              >
                About Our Team
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
