import type { Metadata } from "next";
import { DonateClient } from "./DonateClient";

export const metadata: Metadata = {
  title: "Support Our Mission & Donate | Study with Gaurav",
  description: "Help us keep educational resources, notes, and batch directories 100% free and accessible for thousands of students.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/donate",
  },
  openGraph: {
    title: "Support Our Mission & Donate | Study with Gaurav",
    description: "Help us keep educational resources, notes, and batch directories 100% free and accessible for thousands of students.",
    url: "https://studywithgaurav.cc.cd/donate",
    type: "website",
  },
};

export default function DonatePage() {
  return <DonateClient />;
}
