import type { Metadata } from "next";
import { CategoriesClient } from "./CategoriesClient";

export const metadata: Metadata = {
  title: "Educational Categories & Exam Hubs",
  description: "Browse 30+ categorized educational hubs including Physics Wallah, Allen, Next Exam, and engineering domains with direct, verified batch access.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/categories",
  },
  openGraph: {
    title: "Educational Categories & Exam Hubs | Study with Gaurav",
    description: "Browse 30+ categorized educational hubs including Physics Wallah, Allen, Next Exam, and engineering domains with direct, verified batch access.",
    url: "https://studywithgaurav.cc.cd/categories",
    type: "website",
  },
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
