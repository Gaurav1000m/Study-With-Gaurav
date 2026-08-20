import type { Metadata } from "next";
import { CategoriesClient } from "./CategoriesClient";

export const metadata: Metadata = {
  title: "Educational Categories & Learning Domains | Study with Gaurav",
  description: "Browse 30+ educational categories including Physics Wallah, RWA, Next Toppers, KGS, Vibrant, Padhle Akshay, and competitive exam portals.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/categories",
  },
  openGraph: {
    title: "Educational Categories & Learning Domains | Study with Gaurav",
    description: "Browse 30+ educational categories including Physics Wallah, RWA, Next Toppers, KGS, Padhle Akshay, and competitive exam portals.",
    url: "https://studywithgaurav.cc.cd/categories",
    type: "website",
  },
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
