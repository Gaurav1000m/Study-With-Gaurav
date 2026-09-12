import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import { WEBSITES } from "@/data/websites";
import { ResourceCard } from "@/components/ResourceCard";
import {
  Clock,
  Calendar,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found | Study with Gaurav",
    };
  }

  return {
    title: `${article.title} | Study with Gaurav`,
    description: article.excerpt,
    alternates: {
      canonical: `https://studywithgaurav.cc.cd/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://studywithgaurav.cc.cd/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [
        {
          url: "https://studywithgaurav.cc.cd/lionbg.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["https://studywithgaurav.cc.cd/lionbg.png"],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.slug !== article.slug && (article.relatedArticleSlugs?.includes(a.slug) || a.category === article.category)
  ).slice(0, 2);

  const relatedResources = article.relatedResourceCategory
    ? WEBSITES.filter((w) => w.category === article.relatedResourceCategory).slice(0, 3)
    : [];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://studywithgaurav.cc.cd/articles/${article.slug}`,
    },
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Study with Gaurav",
      logo: {
        "@type": "ImageObject",
        url: "https://studywithgaurav.cc.cd/images/lionbg.webp",
      },
    },
  };

  const jsonLdBreadcrumb = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://studywithgaurav.cc.cd/articles/${article.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <Header />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-4 sm:py-12 pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-10">
          
          {/* Breadcrumb Back */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-500 min-h-[36px]">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-blue-600 transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-[180px] sm:max-w-sm">{article.title}</span>
          </nav>

          {/* Article Header Container */}
          <header className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 text-[10px]">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-slate-500 font-medium text-[11px] sm:text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {article.title}
              </h1>

              <p className="text-xs sm:text-lg text-slate-600 leading-relaxed font-medium">
                {article.excerpt}
              </p>
            </div>

            {/* Author & Timestamp Bar */}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs sm:text-sm shadow-2xs">
                  SG
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm">{article.author.name}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500">{article.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-4 text-slate-500 font-medium text-[11px] sm:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.publishedAt}</span>
                </span>
                <span>•</span>
                <span>Updated: {article.updatedAt}</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-2 sm:space-y-3">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Table of Contents</span>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {article.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors hover:underline block py-0.5"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article Main Body Content */}
          <article className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-6 sm:space-y-10">
            
            {/* Introduction */}
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-blue-600 pl-4 sm:pl-6 bg-blue-50/40 py-3 rounded-r-2xl">
              {article.content.introduction}
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-10">
              {article.content.sections.map((section) => (
                <section key={section.id} id={section.id} className="space-y-3 sm:space-y-4 scroll-mt-24">
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
                    {section.title}
                  </h2>

                  <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                    {section.body.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Key Takeaways Box if present */}
                  {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-800">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Key Takeaways</span>
                      </div>
                      <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {section.keyTakeaways.map((point, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Tips Box if present */}
                  {section.actionTips && section.actionTips.length > 0 && (
                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800">
                        Practical Implementation Tips
                      </span>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                        {section.actionTips.map((tip, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Conclusion */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-900 text-white space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-bold">Conclusion & Final Thoughts</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>
          </article>

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <section id="faq" className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6 scroll-mt-24">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5 sm:space-y-2">
                    <h3 className="font-extrabold text-xs sm:text-base text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* References & Citations */}
          {article.references && article.references.length > 0 && (
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] sm:text-xs">References & Academic Sources</span>
              <ul className="space-y-1">
                {article.references.map((ref, idx) => (
                  <li key={idx}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{ref.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Resources Spotlight */}
          {relatedResources.length > 0 && (
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                Recommended Study Resources Mentioned in This Guide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {relatedResources.map((res) => (
                  <ResourceCard key={res.id} website={res} />
                ))}
              </div>
            </section>
          )}

          {/* Related Articles Navigation */}
          {relatedArticles.length > 0 && (
            <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-slate-200">
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
                Related Educational Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/articles/${rel.slug}`}
                    className="p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all space-y-1.5 sm:space-y-2 group block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {rel.category}
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
