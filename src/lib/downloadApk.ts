import { ADSTERRA_SMART_LINK } from "@/components/AdsterraBanner";

/**
 * Bulletproof APK Download utility
 * 1. Triggers direct browser download of StudyWithGaurav.apk
 * 2. Opens high-paying Adsterra Smart Link in a new tab
 * 3. Works seamlessly on Chrome, Samsung Internet, Mi Browser, Firefox, and WebViews
 */
export function downloadStudyWithGauravApk(e?: React.MouseEvent | React.TouchEvent) {
  if (e) {
    // Prevent default anchor navigation if an event was passed
    e.preventDefault?.();
  }

  // Fallback direct URL endpoints
  const downloadEndpoints = [
    "/downloads/StudyWithGaurav.apk",
    "/StudyWithGaurav.apk",
    "/api/download",
  ];

  const primaryUrl = downloadEndpoints[0];

  try {
    // Hidden anchor element trigger
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = primaryUrl;
    a.setAttribute("download", "StudyWithGaurav.apk");
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    document.body.appendChild(a);
    a.click();

    // Clean up
    setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
    }, 1000);
  } catch (err) {
    console.warn("Direct link trigger error, using location fallback:", err);
    window.location.href = primaryUrl;
  }

  // Open Adsterra Smart Link in a separate tab for maximum CPM earnings
  // Smart links convert at $10-$30+ CPM on student app install intent
  try {
    if (typeof window !== "undefined") {
      const adTab = window.open(ADSTERRA_SMART_LINK, "_blank", "noopener,noreferrer");
      if (adTab) {
        // Keep focus on download tab if allowed by browser
        try {
          window.focus();
        } catch {}
      }
    }
  } catch (err) {
    console.warn("Adsterra smart link trigger error:", err);
  }
}
