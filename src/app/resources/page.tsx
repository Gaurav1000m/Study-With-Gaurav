import type { Metadata } from "next";
import { ResourcesClient } from "./ResourcesClient";

export const metadata: Metadata = {
  title: "All Educational Resources, Study Tools & Batches | Study with Gaurav",
  description: "Explore 100+ verified educational platforms, free courses, competitive exam prep tools, and study portals on Study with Gaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/resources",
  },
  openGraph: {
    title: "All Educational Resources, Study Tools & Batches | Study with Gaurav",
    description: "Explore 100+ verified educational platforms, free courses, competitive exam prep tools, and study portals on Study with Gaurav.",
    url: "https://studywithgaurav.cc.cd/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
