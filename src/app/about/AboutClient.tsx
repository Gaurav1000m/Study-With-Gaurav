"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { WhySection } from "@/components/WhySection";
import { MissionSection } from "@/components/MissionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ResourceCategories } from "@/components/ResourceCategories";
import { StudentFirst } from "@/components/StudentFirst";
import { CuratedResourceDirectory } from "@/components/CuratedResourceDirectory";
import { SuggestResourceCTA } from "@/components/SuggestResourceCTA";
import { ExternalDisclaimer } from "@/components/ExternalDisclaimer";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";

export function AboutClient() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Study with Gaurav",
    "url": "https://studywithgaurav.cc.cd",
    "logo": "https://studywithgaurav.cc.cd/black-and-white-portrait-of-a-lion.webp",
    "description": "Study with Gaurav is a student resource hub providing categorized access to verified educational platforms, notes, batches, and competitive exam portals.",
    "sameAs": [
      "https://t.me/studywithgaurav0"
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://studywithgaurav.cc.cd"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://studywithgaurav.cc.cd/about"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      {/* Main Page Layout */}
      <main className="flex-1 pb-20 md:pb-0">
        <AboutHero />
        <WhySection />
        <MissionSection />
        <HowItWorks />
        <ResourceCategories />
        <StudentFirst />
        <CuratedResourceDirectory />
        <SuggestResourceCTA onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
        <ExternalDisclaimer />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />

      {/* Suggest Modal */}
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
