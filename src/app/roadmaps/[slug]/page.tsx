import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ROADMAPS } from "@/data/roadmaps";
import { RoadmapDetailClient } from "./RoadmapDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROADMAPS.map((roadmap) => ({
    slug: roadmap.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = ROADMAPS.find((r) => r.slug === slug);

  if (!roadmap) {
    return {
      title: "Roadmap Not Found | Study with Gaurav",
      description: "The requested educational roadmap could not be found.",
    };
  }

  const title = `${roadmap.title} | Study with Gaurav`;
  const description = roadmap.subtitle || roadmap.description.slice(0, 160);
  const url = `https://studywithgaurav.cc.cd/roadmaps/${roadmap.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
  };
}

export default async function RoadmapDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const roadmap = ROADMAPS.find((r) => r.slug === slug);

  if (!roadmap) {
    notFound();
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: roadmap.shortTitle,
        item: `https://studywithgaurav.cc.cd/roadmaps/${roadmap.slug}`,
      },
    ],
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: roadmap.title,
    description: roadmap.description,
    provider: {
      "@type": "Organization",
      name: "StudyWithGaurav",
      url: "https://studywithgaurav.cc.cd",
    },
    educationalLevel: roadmap.difficulty,
    timeRequired: roadmap.estimatedTime,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
    },
  };

  const faqJsonLd = roadmap.faqs && roadmap.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: roadmap.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-8 sm:py-12 pb-20 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoadmapDetailClient roadmap={roadmap} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
