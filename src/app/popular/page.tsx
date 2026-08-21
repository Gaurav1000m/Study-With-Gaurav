import type { Metadata } from "next";
import { PopularClient } from "./PopularClient";

export const metadata: Metadata = {
  title: "Most Popular Educational Portals & Recent Resources | Study with Gaurav",
  description: "Discover the most frequently visited student platforms, newly added study tools, and top-rated competitive exam resources.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/popular",
  },
  openGraph: {
    title: "Most Popular Educational Portals & Recent Resources | Study with Gaurav",
    description: "Discover the most frequently visited student platforms, newly added study tools, and top-rated competitive exam resources.",
    url: "https://studywithgaurav.cc.cd/popular",
    type: "website",
  },
};

export default function PopularPage() {
  return <PopularClient />;
}
