import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

describe("Production Data Integrity Tests", () => {
  const rootDir = process.cwd();

  test("ads.txt exists and conforms to Google AdSense specification", () => {
    const adsTxtPath = path.join(rootDir, "public", "ads.txt");
    assert.ok(fs.existsSync(adsTxtPath), "public/ads.txt must exist");
    const content = fs.readFileSync(adsTxtPath, "utf8").trim();
    assert.match(content, /^google\.com,\s*pub-\d+,\s*DIRECT,\s*[a-f0-9]+$/i);
    assert.match(content, /pub-3576643094354429/);
  });

  test("APK file exists in public downloads directory", () => {
    const apkPath = path.join(rootDir, "public", "downloads", "StudyWithGaurav.apk");
    assert.ok(fs.existsSync(apkPath), "StudyWithGaurav.apk must exist in public/downloads");
    const stats = fs.statSync(apkPath);
    assert.ok(stats.size > 1000000, "APK file size should be > 1MB");
  });

  test("version.json exists and contains semver versioning", () => {
    const versionPath = path.join(rootDir, "public", "version.json");
    assert.ok(fs.existsSync(versionPath), "version.json must exist");
    const versionData = JSON.parse(fs.readFileSync(versionPath, "utf8"));
    const versionStr = versionData.versionName || versionData.version;
    assert.ok(versionStr, "versionName or version key must exist");
    assert.match(versionStr, /^\d+\.\d+\.\d+$/);
  });

  test("Static branding and essential public images exist", () => {
    const essentialImages = [
      "public/images/lionbg.webp",
      "public/lionbg.png",
      "public/black-and-white-portrait-of-a-lion.webp",
      "public/lottie/verified.json",
      "public/lottie/empty-saved.json",
    ];

    for (const img of essentialImages) {
      const fullPath = path.join(rootDir, img);
      assert.ok(fs.existsSync(fullPath), `${img} must exist on disk`);
    }
  });
});
