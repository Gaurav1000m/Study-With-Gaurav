import type { Metadata } from "next";
import { ProfileClient } from "./ProfileClient";

export const metadata: Metadata = {
  title: "Student Profile & Study Preferences | StudyWithGaurav",
  description: "Manage your study preferences, target competitive exams, saved resources, and viewing history on StudyWithGaurav.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/profile",
  },
  openGraph: {
    title: "Student Profile & Study Preferences | StudyWithGaurav",
    description: "Manage your study preferences, target competitive exams, saved resources, and viewing history on StudyWithGaurav.",
    url: "https://studywithgaurav.cc.cd/profile",
    type: "website",
  },
};

export default function ProfilePage() {
  return <ProfileClient />;
}
