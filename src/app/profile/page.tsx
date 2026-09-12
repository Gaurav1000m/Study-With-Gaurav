import type { Metadata } from "next";
import { ProfileClient } from "./ProfileClient";

export const metadata: Metadata = {
  title: "Student Profile & Study Preferences | StudyWithGaurav",
  description: "Manage your study preferences, target competitive exams, saved resources, and viewing history on StudyWithGaurav.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/profile",
  },
};

export default function ProfilePage() {
  return <ProfileClient />;
}
