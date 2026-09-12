import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ARTICLES } from "@/data/articles";
import { BookOpen, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational Articles & Study Guides | Study with Gaurav",
  description: "Browse in-depth educational guides, programming roadmaps, competitive exam study strategies, and academic survival tips written for students.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/articles",
  },
  openGraph: {
    title: "Educational Articles & Study Guides | Study with Gaurav",
    description: "Browse in-depth educational guides, programming roadmaps, competitive exam study strategies, and academic survival tips written for students.",
    url: "https://studywithgaurav.cc.cd/articles",
    type: "website",
  },
};

export default function ArticlesIndexPage() {
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
        name: "Articles",
        item: "https://studywithgaurav.cc.cd/articles",
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Educational Articles & Study Guides",
    description: "In-depth guides and study strategies for competitive examinations and software development.",
    url: "https://studywithgaurav.cc.cd/articles",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ARTICLES.length,
      itemListElement: ARTICLES.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `https://studywithgaurav.cc.cd/articles/${article.slug}`,
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
          
          {/* Header Banner */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Original Educational Guides & Analysis</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Educational Guides & Academic Insights
            </h1>

            <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              In-depth, human-crafted guides designed to help students master coding, optimize exam revision, navigate engineering academics, and evaluate online learning resources effectively.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="space-y-2.5 sm:space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 text-[10px]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 font-medium text-[11px] sm:text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readingTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-base sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Metadata & CTA */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-semibold text-[11px] sm:text-xs">{article.author.name}</span>
                  </div>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 transition-colors min-h-[36px]"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
