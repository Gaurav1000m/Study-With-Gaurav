import type { Metadata } from "next";
import { ResourcesClient } from "./ResourcesClient";

export const metadata: Metadata = {
  title: "All Exam Portals & Study Resources",
  description: "Browse our complete directory of 100+ verified educational platforms, batch archives, lecture notes, and study tools for JEE, NEET, SSC, and tech exams.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/resources",
  },
  openGraph: {
    title: "All Exam Portals & Study Resources | Study with Gaurav",
    description: "Browse our complete directory of 100+ verified educational platforms, batch archives, lecture notes, and study tools for JEE, NEET, SSC, and tech exams.",
    url: "https://studywithgaurav.cc.cd/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
