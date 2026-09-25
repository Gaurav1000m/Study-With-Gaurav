import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

describe("Content Quality & AdSense Readiness Tests", () => {
  const rootDir = process.cwd();

  test("Root layout does not inject global FAQPage schema on non-FAQ pages", () => {
    const layoutPath = path.join(rootDir, "src", "app", "layout.tsx");
    assert.ok(fs.existsSync(layoutPath), "layout.tsx must exist");
    const content = fs.readFileSync(layoutPath, "utf8");

    assert.ok(!content.includes("jsonld-faq"), "Global jsonld-faq script must not be in RootLayout");
    assert.ok(!content.includes('"@type": "FAQPage"'), "Global FAQPage schema must not be in RootLayout");
  });

  test("ResourceCard does not display arbitrary fake star ratings or unverified claims", () => {
    const cardPath = path.join(rootDir, "src", "components", "ResourceCard.tsx");
    assert.ok(fs.existsSync(cardPath), "ResourceCard.tsx must exist");
    const content = fs.readFileSync(cardPath, "utf8");

    assert.ok(!content.includes("4.8"), "ResourceCard must not display hardcoded 4.8 star rating");
    assert.ok(!content.includes("Free Access"), "ResourceCard must not display unverified blanket Free Access badge");
  });

  test("AppxHeroText does not display unsupported 100% verified or no-paywall claims", () => {
    const heroPath = path.join(rootDir, "src", "components", "AppxHeroText.tsx");
    assert.ok(fs.existsSync(heroPath), "AppxHeroText.tsx must exist");
    const content = fs.readFileSync(heroPath, "utf8");

    assert.ok(!content.includes("100% verified"), "AppxHeroText must not claim 100% verified");
    assert.ok(!content.includes("Zero Paywalls"), "AppxHeroText must not claim Zero Paywalls");
  });

  test("CategorySlugClient renders all educational sections in DOM on both mobile and desktop", () => {
    const categoryClientPath = path.join(rootDir, "src", "app", "categories", "[slug]", "CategorySlugClient.tsx");
    assert.ok(fs.existsSync(categoryClientPath), "CategorySlugClient.tsx must exist");
    const content = fs.readFileSync(categoryClientPath, "utf8");

    assert.ok(content.includes('id="section-curriculum"'), "Must have permanent curriculum section");
    assert.ok(content.includes('id="section-protocol"'), "Must have permanent study protocol section");
    assert.ok(content.includes('id="section-roadmaps"'), "Must link related roadmaps on category page");
    assert.ok(!content.includes('mobileTab === "curriculum" ? "block" : "hidden md:block"'), "Must not hide curriculum on mobile");
  });

  test("ResourceDetailClient renders all editorial sections and related roadmaps/guides in DOM", () => {
    const resourceClientPath = path.join(rootDir, "src", "app", "resources", "[slug]", "ResourceDetailClient.tsx");
    assert.ok(fs.existsSync(resourceClientPath), "ResourceDetailClient.tsx must exist");
    const content = fs.readFileSync(resourceClientPath, "utf8");

    assert.ok(content.includes('id="section-overview"'), "Must have permanent overview section");
    assert.ok(content.includes('id="section-features"'), "Must have permanent features section");
    assert.ok(content.includes('id="section-guide"'), "Must have permanent study protocol section");
    assert.ok(content.includes('id="section-reviews"'), "Must have permanent review section");
    assert.ok(content.includes('id="section-guides"'), "Must have related roadmaps and guides section");
    assert.ok(!content.includes('{activeTab === "overview" && ('), "Must not conditionally unrender overview in React state");
  });

  test("sitemap.ts filters resources using isPrimaryResource to prevent duplicate mirror indexing", () => {
    const sitemapPath = path.join(rootDir, "src", "app", "sitemap.ts");
    assert.ok(fs.existsSync(sitemapPath), "sitemap.ts must exist");
    const content = fs.readFileSync(sitemapPath, "utf8");

    assert.ok(content.includes("isPrimaryResource"), "sitemap.ts must use isPrimaryResource filter");
  });

  test("Mobile view does not display Get APK button in Header", () => {
    const headerPath = path.join(rootDir, "src", "components", "Header.tsx");
    assert.ok(fs.existsSync(headerPath), "Header.tsx must exist");
    const content = fs.readFileSync(headerPath, "utf8");

    assert.ok(!content.includes("md:hidden items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold text-white bg-blue-600"), "Mobile Get APK button must be removed from Header");
  });

  test("Website launch links open in the same tab (target=_self)", () => {
    const cardPath = path.join(rootDir, "src", "components", "ResourceCard.tsx");
    const cardContent = fs.readFileSync(cardPath, "utf8");
    assert.ok(cardContent.includes('target="_self"'), "ResourceCard must open in same tab");
    assert.ok(!cardContent.includes('target="_blank"'), "ResourceCard must not open in new tab");

    const detailPath = path.join(rootDir, "src", "app", "resources", "[slug]", "ResourceDetailClient.tsx");
    const detailContent = fs.readFileSync(detailPath, "utf8");
    assert.ok(detailContent.includes('target="_self"'), "ResourceDetailClient must open in same tab");
  });
});
