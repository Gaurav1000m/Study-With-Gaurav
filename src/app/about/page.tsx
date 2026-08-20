import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us & Mission | Study with Gaurav",
  description: "Learn about Study with Gaurav — our mission to organize educational resources, batches, notes, and competitive exam portals for students.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/about",
  },
  openGraph: {
    title: "About Us & Mission | Study with Gaurav",
    description: "Learn about Study with Gaurav — our mission to organize educational resources, batches, notes, and competitive exam portals for students.",
    url: "https://studywithgaurav.cc.cd/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
