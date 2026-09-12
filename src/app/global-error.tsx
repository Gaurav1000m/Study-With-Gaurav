"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Critical root layout error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#0f172a", color: "#ffffff" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>
          <div style={{ maxWidth: "480px", backgroundColor: "#1e293b", padding: "32px", borderRadius: "16px", border: "1px solid #334155" }}>
            <h1 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "12px" }}>Application Encountered an Error</h1>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
              We experienced an unexpected issue loading the educational platform layout.
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Reload Platform
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
