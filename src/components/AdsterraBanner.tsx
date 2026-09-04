"use client";

import { useEffect, useRef, useState } from "react";

export type AdsterraFormat =
  | "728x90"
  | "300x250"
  | "320x50"
  | "468x60"
  | "160x600"
  | "160x300"
  | "native"
  | "responsive";

interface AdsterraConfig {
  key: string;
  width: number;
  height: number;
}

const ADSTERRA_CONFIGS: Record<Exclude<AdsterraFormat, "native" | "responsive">, AdsterraConfig> = {
  "728x90": { key: "81dee46bfffc21d377b1fd7ad6bf6cba", width: 728, height: 90 },
  "468x60": { key: "6af505d39c089561c28eadca44d943dc", width: 468, height: 60 },
  "300x250": { key: "05add28c7c2e76505b6868c15b0d39a4", width: 300, height: 250 },
  "320x50": { key: "affcadeca5de7da1d8db499b0436121e", width: 320, height: 50 },
  "160x600": { key: "3881815ff75c8029119aee54587f6b43", width: 160, height: 600 },
  "160x300": { key: "8d4edf6c1ce1f52d4b2c8629ec7a5223", width: 160, height: 300 },
};

export const ADSTERRA_SMART_LINK =
  "https://www.profitableratecpmnetwork.com/wbaq56gdt?key=e7b6dd096a0f9a28dd21c51252679e4f";

export interface AdsterraBannerProps {
  format?: AdsterraFormat;
  className?: string;
}

export function AdsterraBanner({
  format = "responsive",
  className = "",
}: AdsterraBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [resolvedFormat, setResolvedFormat] = useState<Exclude<AdsterraFormat, "responsive">>("300x250");
  const nativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    if (format === "responsive") {
      const updateFormat = () => {
        const w = window.innerWidth;
        if (w >= 768) {
          setResolvedFormat("728x90");
        } else if (w >= 480) {
          setResolvedFormat("468x60");
        } else if (w >= 360) {
          setResolvedFormat("300x250");
        } else {
          setResolvedFormat("320x50");
        }
      };

      updateFormat();
      window.addEventListener("resize", updateFormat);
      return () => window.removeEventListener("resize", updateFormat);
    } else {
      setResolvedFormat(format as Exclude<AdsterraFormat, "responsive">);
    }
  }, [format]);

  // Load native banner invoke.js if native format requested
  useEffect(() => {
    if (!mounted || resolvedFormat !== "native") return;

    const scriptId = "adsterra-native-banner-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.dataset.cfasync = "false";
      script.src =
        "https://pl31181519.profitableratecpmnetwork.com/a6bac149b9b5065d9c39dd39421f6de6/invoke.js";
      document.body.appendChild(script);
    }
  }, [mounted, resolvedFormat]);

  if (!mounted) {
    return null;
  }

  // Native banner format: clean container, no boxes or labels
  if (resolvedFormat === "native") {
    return (
      <div className={`w-full flex justify-center items-center my-3 overflow-hidden ${className}`} ref={nativeRef}>
        <div id="container-a6bac149b9b5065d9c39dd39421f6de6" className="w-full max-w-4xl" />
      </div>
    );
  }

  // Display banner format: clean centered iframe, zero borders, zero boxes, zero text labels
  const config = ADSTERRA_CONFIGS[resolvedFormat];
  if (!config) return null;

  const iframeHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${config.key}',
      'format' : 'iframe',
      'height' : ${config.height},
      'width' : ${config.width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/${config.key}/invoke.js"></script>
</body>
</html>`;

  return (
    <div
      className={`w-full flex items-center justify-center my-3 overflow-hidden ${className}`}
      style={{ minHeight: `${config.height}px` }}
    >
      <iframe
        key={`${resolvedFormat}-${config.key}`}
        title={`Ad ${resolvedFormat}`}
        srcDoc={iframeHtml}
        width={config.width}
        height={config.height}
        className="border-0 overflow-hidden max-w-full"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      />
    </div>
  );
}
