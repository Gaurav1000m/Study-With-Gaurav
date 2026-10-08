import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Our Educational Mission",
  description: "Learn about Study with Gaurav — our mission to organize verified educational portals, free competitive exam resources, and structured academic roadmaps.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/about",
  },
  openGraph: {
    title: "About Our Educational Mission | Study with Gaurav",
    description: "Learn about Study with Gaurav — our mission to organize verified educational portals, free competitive exam resources, and structured academic roadmaps.",
    url: "https://studywithgaurav.cc.cd/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
