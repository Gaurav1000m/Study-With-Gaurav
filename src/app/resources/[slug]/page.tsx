import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WEBSITES, getWebsiteById } from "@/data/websites";
import { CATEGORY_MAP } from "@/data/categories";
import { getResourceEditorialData, isPrimaryResource } from "@/data/resourceDetails";
import ResourceDetailClient from "./ResourceDetailClient";

interface ResourceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WEBSITES.map((website) => ({
    slug: website.id,
  }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const website = getWebsiteById(resolvedParams.slug);

  if (!website) {
    return {
      title: "Resource Not Found",
    };
  }

  const categoryObj = CATEGORY_MAP.get(website.category);
  const categoryName = categoryObj ? categoryObj.name : website.category;
  const editorial = getResourceEditorialData(website);
  const isPrimary = isPrimaryResource(website);

  const cleanName = website.name.replace(/[^\w\s-]/g, '').trim();
  const title = `${cleanName} Portal & Batches`;
  const baseDesc = `${website.name} for ${categoryName}: ${editorial.targetAudience} Verified links, batch details, and study guides on Study with Gaurav.`;
  const description = baseDesc.length > 158 ? `${baseDesc.slice(0, 155).trim()}...` : baseDesc;

  return {
    title,
    description,
    robots: isPrimary
      ? { index: true, follow: true }
      : { index: false, follow: true },
    alternates: {
      canonical: `https://studywithgaurav.cc.cd/resources/${website.id}`,
    },
    openGraph: {
      title: `${cleanName} — Study Guide & Educational Resource`,
      description,
      url: `https://studywithgaurav.cc.cd/resources/${website.id}`,
      type: "article",
      images: website.logo ? [{ url: website.logo }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${cleanName} | Study with Gaurav`,
      description,
      images: website.logo ? [website.logo] : undefined,
    },
  };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const resolvedParams = await params;
  const website = getWebsiteById(resolvedParams.slug);

  if (!website) {
    notFound();
  }

  const editorial = getResourceEditorialData(website);
  const categoryObj = CATEGORY_MAP.get(website.category);
  const relatedWebsites = WEBSITES.filter(
    (w) => w.category === website.category && w.id !== website.id
  ).slice(0, 4);

  const jsonLdBreadcrumbs = {
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
        name: "Resources",
        item: "https://studywithgaurav.cc.cd/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryObj ? categoryObj.name : "Category",
        item: `https://studywithgaurav.cc.cd/categories/${website.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: website.name,
        item: `https://studywithgaurav.cc.cd/resources/${website.id}`,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: `${website.name} — Educational Resource Guide`,
    description: editorial.longDescription,
    url: `https://studywithgaurav.cc.cd/resources/${website.id}`,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Study with Gaurav",
      url: "https://studywithgaurav.cc.cd",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <ResourceDetailClient
        website={website}
        editorial={editorial}
        category={categoryObj}
        relatedWebsites={relatedWebsites}
      />
    </>
  );
}
