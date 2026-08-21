import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WEBSITES, getWebsiteById } from "@/data/websites";
import GoClient from "./GoClient";

interface GoPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return WEBSITES.map((website) => ({
    id: website.id,
  }));
}

export async function generateMetadata({ params }: GoPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const website = getWebsiteById(resolvedParams.id);

  if (!website) {
    return {
      title: "Portal Not Found | Study with Gaurav",
    };
  }

  return {
    title: `${website.name} — Study with Gaurav Secure Portal`,
    description: `Accessing ${website.name} via Study with Gaurav protected student gateway.`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function GoPage({ params }: GoPageProps) {
  const resolvedParams = await params;
  const website = getWebsiteById(resolvedParams.id);

  if (!website) {
    notFound();
  }

  return <GoClient website={website} />;
}
