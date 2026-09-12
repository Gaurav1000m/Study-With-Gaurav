import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ROADMAPS } from "@/data/roadmaps";
import { Clock, CheckCircle2, ArrowRight, Compass, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Structured Learning Roadmaps | Study with Gaurav",
  description: "Follow curated, step-by-step educational roadmaps in Full-Stack Web Development, Python, Data Structures & Algorithms, and Competitive Exam Preparation.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/roadmaps",
  },
  openGraph: {
    title: "Structured Learning Roadmaps | Study with Gaurav",
    description: "Follow curated, step-by-step educational roadmaps in Full-Stack Web Development, Python, Data Structures & Algorithms, and Competitive Exam Preparation.",
    url: "https://studywithgaurav.cc.cd/roadmaps",
    type: "website",
  },
};

export default function RoadmapsIndexPage() {
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
        name: "Roadmaps",
        item: "https://studywithgaurav.cc.cd/roadmaps",
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Curated Learning Roadmaps",
    description: "Step-by-step academic and software engineering learning pathways with milestones, practical projects, and vetted resources.",
    url: "https://studywithgaurav.cc.cd/roadmaps",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ROADMAPS.length,
      itemListElement: ROADMAPS.map((roadmap, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: roadmap.title,
        url: `https://studywithgaurav.cc.cd/roadmaps/${roadmap.slug}`,
      })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <Header />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-12 pb-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-10">
          
          {/* Hero Banner */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              <Compass className="w-3.5 h-3.5" />
              <span>Step-by-Step Educational Roadmaps</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Structured Study Roadmaps
            </h1>

            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Stop feeling overwhelmed by tutorial hell and disjointed videos. Our learning roadmaps provide structured, milestone-driven progressions complete with syllabus breakdown, hands-on project checkpoints, and vetted learning references.
            </p>
          </div>

          {/* Roadmaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            {ROADMAPS.map((roadmap) => (
              <div
                key={roadmap.slug}
                className="group flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="space-y-3 sm:space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      <Layers className="w-3.5 h-3.5" />
                      {roadmap.stages.length} Stages
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {roadmap.estimatedTime}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      <Link href={`/roadmaps/${roadmap.slug}`}>
                        {roadmap.title}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 sm:mt-1">
                      {roadmap.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {roadmap.description}
                  </p>

                  {/* Stages Quick Overview */}
                  <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100 space-y-1.5 sm:space-y-2">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                      Curriculum Highlights
                    </p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {roadmap.stages.slice(0, 3).map((stage) => (
                        <li key={stage.stageNumber} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">Stage {stage.stageNumber}: {stage.title}</span>
                        </li>
                      ))}
                      {roadmap.stages.length > 3 && (
                        <li className="text-[11px] sm:text-xs text-blue-600 font-semibold pl-5">
                          + {roadmap.stages.length - 3} more progressive stages...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Difficulty: <span className="font-bold text-slate-700">{roadmap.difficulty}</span>
                  </span>
                  <Link
                    href={`/roadmaps/${roadmap.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-2xs active:scale-[0.98] min-h-[40px]"
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Guidance Box */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-blue-100 space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
              How to Use These Roadmaps
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our roadmaps are designed to be followed sequentially. Before advancing to the next stage, verify your comprehension using the provided <strong>Milestone Verification Checklist</strong> and complete the suggested practice exercises. For supplementary textbooks, documentation, and practice platforms, consult the vetted platforms listed in our <Link href="/resources" className="text-blue-600 underline font-semibold">Resources Directory</Link>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
