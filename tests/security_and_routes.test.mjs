import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

describe("Production Security & Route Policy Tests", () => {
  const rootDir = process.cwd();

  test("next.config.ts contains hardened security headers and no unencrypted HTTP remote patterns", () => {
    const nextConfigPath = path.join(rootDir, "next.config.ts");
    assert.ok(fs.existsSync(nextConfigPath), "next.config.ts must exist");
    const content = fs.readFileSync(nextConfigPath, "utf8");

    // Security headers checks
    assert.ok(content.includes("X-Frame-Options"), "Must set X-Frame-Options");
    assert.ok(content.includes("X-Content-Type-Options"), "Must set X-Content-Type-Options");
    assert.ok(content.includes("Strict-Transport-Security"), "Must set HSTS header");
    assert.ok(content.includes("Content-Security-Policy"), "Must set Content-Security-Policy");
    assert.ok(content.includes("Permissions-Policy"), "Must set Permissions-Policy");

    // Remote patterns must not allow unencrypted http wildcard
    assert.ok(!content.includes('protocol: "http"'), "Must not allow unencrypted http image remote patterns");
  });

  test("robots.ts protects private and departure utility routes", () => {
    const robotsPath = path.join(rootDir, "src", "app", "robots.ts");
    assert.ok(fs.existsSync(robotsPath), "robots.ts must exist");
    const content = fs.readFileSync(robotsPath, "utf8");

    assert.ok(content.includes("'/go/'"), "Must disallow /go/ departure gateway from indexing");
    assert.ok(content.includes("'/saved'"), "Must disallow /saved from indexing");
    assert.ok(content.includes("'/profile'"), "Must disallow /profile from indexing");
    assert.ok(content.includes("sitemap.xml"), "Must declare sitemap.xml");
  });

  test("Departure gateway GoClient does not contain insecure iframe tags", () => {
    const goClientPath = path.join(rootDir, "src", "app", "go", "[id]", "GoClient.tsx");
    assert.ok(fs.existsSync(goClientPath), "GoClient.tsx must exist");
    const content = fs.readFileSync(goClientPath, "utf8");

    assert.ok(!content.includes("<iframe"), "GoClient must not embed third-party websites in an iframe");
    assert.ok(content.includes('rel="noopener noreferrer"'), "External launch link must include noopener noreferrer");
  });

  test("Error boundaries exist for production reliability", () => {
    const errorPath = path.join(rootDir, "src", "app", "error.tsx");
    const globalErrorPath = path.join(rootDir, "src", "app", "global-error.tsx");

    assert.ok(fs.existsSync(errorPath), "src/app/error.tsx must exist");
    assert.ok(fs.existsSync(globalErrorPath), "src/app/global-error.tsx must exist");
  });

  test("Header includes mobile Donate button with pulsing Heart icon", () => {
    const headerPath = path.join(rootDir, "src", "components", "Header.tsx");
    assert.ok(fs.existsSync(headerPath), "Header.tsx must exist");
    const content = fs.readFileSync(headerPath, "utf8");

    assert.ok(content.includes('href="/donate"'), "Header must have /donate link");
    assert.ok(content.includes("md:hidden"), "Mobile donate button must have mobile visibility class");
    assert.ok(content.includes("Heart"), "Header must import and use Heart icon");
  });

  test("BottomNav includes 5 mobile application navigation tabs", () => {
    const bottomNavPath = path.join(rootDir, "src", "components", "BottomNav.tsx");
    assert.ok(fs.existsSync(bottomNavPath), "BottomNav.tsx must exist");
    const content = fs.readFileSync(bottomNavPath, "utf8");

    assert.ok(content.includes('href: "/"'), "BottomNav must have / link");
    assert.ok(content.includes('href: "/resources"'), "BottomNav must have /resources link");
    assert.ok(content.includes('href: "/categories"'), "BottomNav must have /categories link");
    assert.ok(content.includes('href: "/saved"'), "BottomNav must have /saved link");
    assert.ok(content.includes('href: "/profile"'), "BottomNav must have /profile link");
  });

  test("DonationReminder component exists with polite snooze and UPI support", () => {
    const reminderPath = path.join(rootDir, "src", "components", "DonationReminder.tsx");
    assert.ok(fs.existsSync(reminderPath), "DonationReminder.tsx must exist");
    const content = fs.readFileSync(reminderPath, "utf8");

    assert.ok(content.includes("swg_donation_reminder_next"), "Must use localStorage snooze timer");
    assert.ok(content.includes("gauraveducation@fam"), "Must include valid UPI ID");
    assert.ok(content.includes('href="/donate"'), "Must link to /donate page");
  });

  test("DonateClient includes working mobile UPI protocol and QR code", () => {
    const donateClientPath = path.join(rootDir, "src", "app", "donate", "DonateClient.tsx");
    assert.ok(fs.existsSync(donateClientPath), "DonateClient.tsx must exist");
    const content = fs.readFileSync(donateClientPath, "utf8");

    assert.ok(content.includes("upi://pay?pa="), "Must support upi:// URI scheme for instant app launch");
    assert.ok(content.includes("/Qrcode.jpg"), "Must display QR code");
    assert.ok(content.includes("gauraveducation@fam"), "Must declare verified UPI ID");
  });
});
