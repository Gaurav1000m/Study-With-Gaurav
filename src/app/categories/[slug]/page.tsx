import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORY_MAP, CATEGORIES } from "@/data/categories";
import { WEBSITES } from "@/data/websites";
import { CategoryId } from "@/types/website";
import { CategorySlugClient } from "./CategorySlugClient";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as CategoryId;
  const category = CATEGORY_MAP.get(slug);

  if (!category) {
    return {
      title: "Category Not Found | Study with Gaurav",
    };
  }

  const categoryWebsites = WEBSITES.filter((w) => w.category === slug);

  return {
    title: `${category.name} Resources & Batches (${categoryWebsites.length}+ Platforms) | Study with Gaurav`,
    description: `${category.description} Discover ${categoryWebsites.length}+ verified ${category.name} educational portals, notes, courses, and study links.`,
    alternates: {
      canonical: `https://studywithgaurav.cc.cd/categories/${slug}`,
    },
    openGraph: {
      title: `${category.name} Educational Resources | Study with Gaurav`,
      description: category.description,
      url: `https://studywithgaurav.cc.cd/categories/${slug}`,
      type: "website",
      images: category.logo ? [{ url: category.logo }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Resources | Study with Gaurav`,
      description: category.description,
    },
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as CategoryId;
  const category = CATEGORY_MAP.get(slug);

  if (!category) {
    notFound();
  }

  const categoryWebsites = WEBSITES.filter((w) => w.category === slug);

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} Educational Resources`,
    "description": category.description,
    "url": `https://studywithgaurav.cc.cd/categories/${slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": categoryWebsites.length,
      "itemListElement": categoryWebsites.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "url": item.url,
        "description": item.description,
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <CategorySlugClient category={category} categoryWebsites={categoryWebsites} />
    </>
  );
}
