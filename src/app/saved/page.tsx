import type { Metadata } from "next";
import { SavedClient } from "./SavedClient";

export const metadata: Metadata = {
  title: "Saved Resources & Bookmarks | StudyWithGaurav",
  description: "Access your bookmarked educational resources, saved lecture links, and study materials on StudyWithGaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/saved",
  },
  openGraph: {
    title: "Saved Resources & Bookmarks | StudyWithGaurav",
    description: "Access your bookmarked educational resources, saved lecture links, and study materials on StudyWithGaurav.",
    url: "https://studywithgaurav.cc.cd/saved",
    type: "website",
  },
};

export default function SavedPage() {
  return <SavedClient />;
}
