/**
 * Clean APK Download utility.
 * Triggers direct browser download of StudyWithGaurav.apk without redirects or popups.
 */
export function downloadStudyWithGauravApk(e?: React.MouseEvent | React.TouchEvent) {
  if (e) {
    e.preventDefault?.();
  }

  const primaryUrl = "/downloads/StudyWithGaurav.apk";

  try {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = primaryUrl;
    a.setAttribute("download", "StudyWithGaurav.apk");
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
    }, 1000);
  } catch (err) {
    console.warn("Direct link trigger error:", err);
  }
}

