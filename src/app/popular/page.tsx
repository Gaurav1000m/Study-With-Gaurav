import type { Metadata } from "next";
import { PopularClient } from "./PopularClient";

export const metadata: Metadata = {
  title: "Popular Educational Portals & Batches",
  description: "Explore the most visited student platforms, trending exam batches, and top-rated study resources for JEE, NEET, and SSC on Study with Gaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/popular",
  },
  openGraph: {
    title: "Popular Educational Portals & Batches | Study with Gaurav",
    description: "Explore the most visited student platforms, trending exam batches, and top-rated study resources for JEE, NEET, and SSC on Study with Gaurav.",
    url: "https://studywithgaurav.cc.cd/popular",
    type: "website",
  },
};

export default function PopularPage() {
  return <PopularClient />;
}
