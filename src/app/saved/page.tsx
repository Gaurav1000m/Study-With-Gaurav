import type { Metadata } from "next";
import { SavedClient } from "./SavedClient";

export const metadata: Metadata = {
  title: "Saved Resources & Bookmarks | StudyWithGaurav",
  description: "Access your bookmarked educational resources, saved lecture links, and study materials on StudyWithGaurav.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/saved",
  },
};

export default function SavedPage() {
  return <SavedClient />;
}
