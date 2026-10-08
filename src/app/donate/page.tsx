import type { Metadata } from "next";
import { DonateClient } from "./DonateClient";

export const metadata: Metadata = {
  title: "Support Our Mission & Donate",
  description: "Support Study with Gaurav to keep 100+ competitive exam portals, batch archives, and lecture notes 100% free, fast, and accessible for all students.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/donate",
  },
  openGraph: {
    title: "Support Our Mission & Donate | Study with Gaurav",
    description: "Support Study with Gaurav to keep 100+ competitive exam portals, batch archives, and lecture notes 100% free, fast, and accessible for all students.",
    url: "https://studywithgaurav.cc.cd/donate",
    type: "website",
  },
};

export default function DonatePage() {
  return <DonateClient />;
}
