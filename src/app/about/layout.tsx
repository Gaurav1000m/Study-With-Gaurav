import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Study with Gaurav — Student Educational Resources",
  description: "Learn about Study with Gaurav, a centralized directory helping students discover useful educational websites, tools and resources.",
  openGraph: {
    title: "About Study with Gaurav — Student Educational Resources",
    description: "Learn about Study with Gaurav, a centralized directory helping students discover useful educational websites, tools and resources.",
    type: "website",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
