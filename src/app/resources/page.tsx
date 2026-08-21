import type { Metadata } from "next";
import { ResourcesClient } from "./ResourcesClient";

export const metadata: Metadata = {
  title: "All Educational Resources, Batches & Study Tools | Study with Gaurav",
  description: "Browse 100+ verified educational portals, JEE/NEET/SSC batch links, PDF study notes, and learning tools on Study with Gaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/resources",
  },
  openGraph: {
    title: "All Educational Resources, Batches & Study Tools | Study with Gaurav",
    description: "Browse 100+ verified educational portals, JEE/NEET/SSC batch links, PDF study notes, and learning tools on Study with Gaurav.",
    url: "https://studywithgaurav.cc.cd/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
