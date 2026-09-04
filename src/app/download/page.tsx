import type { Metadata } from "next";
import { DownloadClient } from "./DownloadClient";

export const metadata: Metadata = {
  title: "Download Official Android App (APK v1.0.0) | Study With Gaurav",
  description:
    "Download official Study With Gaurav Android APK v1.0.0 (4.6 MB). Free JEE, NEET, SSC batch portals, verified lecture archives, and notes with zero ads.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd/download",
  },
  openGraph: {
    title: "Download Official Android App (APK v1.0.0) | Study With Gaurav",
    description:
      "Official Android App for Study With Gaurav. Fast, zero-distraction access to 100+ verified batches, notes, and study portals. 100% Free & Clean.",
    url: "https://studywithgaurav.cc.cd/download",
    siteName: "Study with Gaurav",
    images: [
      {
        url: "https://studywithgaurav.cc.cd/black-and-white-portrait-of-a-lion.webp",
        width: 1200,
        height: 630,
        alt: "Study With Gaurav Android App Download",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Official Android App (APK v1.0.0) | Study With Gaurav",
    description:
      "Free JEE, NEET, SSC batch portals & lecture notes directly on your Android phone. Fast, safe, 4.6 MB download.",
    images: ["https://studywithgaurav.cc.cd/black-and-white-portrait-of-a-lion.webp"],
  },
};

export default function DownloadPage() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Study With Gaurav",
    "operatingSystem": "ANDROID 7.0 and up",
    "applicationCategory": "EducationalApplication",
    "fileSize": "4.6 MB",
    "softwareVersion": "1.0.0",
    "downloadUrl": "https://studywithgaurav.cc.cd/downloads/StudyWithGaurav.apk",
    "author": {
      "@type": "EducationalOrganization",
      "name": "Study With Gaurav",
      "url": "https://studywithgaurav.cc.cd",
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "description":
      "Official Android application for Study With Gaurav providing instant access to 100+ educational portals, batches, and notes for JEE, NEET, and SSC exams.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://studywithgaurav.cc.cd",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Download Android App",
        "item": "https://studywithgaurav.cc.cd/download",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DownloadClient />
    </>
  );
}
