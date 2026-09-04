"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, ExternalLink, ShieldCheck } from "lucide-react";

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
  label?: string;
  showSmartLink?: boolean;
  smartLinkText?: string;
}

export function AdsterraBanner({
  format = "responsive",
  className = "",
  label = "SPONSORED PARTNER",
  showSmartLink = false,
  smartLinkText = "Recommended Student Tools & Exam Offers",
}: AdsterraBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [resolvedFormat, setResolvedFormat] = useState<Exclude<AdsterraFormat, "responsive">>("300x250");
  const nativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    if (format === "responsive") {
      const updateFormat = () => {
        const w = window.innerWidth;
        if (w >= 1024) {
          setResolvedFormat("728x90");
        } else if (w >= 640) {
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

  return (
    <aside
      className={`w-full max-w-5xl mx-auto my-4 px-2 sm:px-4 ${className}`}
      aria-label="Advertisement container"
    >
      <div className="w-full bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-2.5 sm:p-4 text-center flex flex-col items-center justify-center transition-all shadow-2xs overflow-hidden">
        {/* Header Label */}
        <div className="w-full flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {label}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">Verified Partner</span>
        </div>

        {/* Optional Smart Link Offer Bar */}
        {showSmartLink && (
          <a
            href={ADSTERRA_SMART_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group w-full mb-3 bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-indigo-500/10 hover:from-amber-500/20 hover:to-indigo-500/20 text-slate-900 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2.5 border border-amber-200/70 hover:border-amber-400 shadow-2xs transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2 min-w-0 text-left">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                    {smartLinkText}
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    <ShieldCheck className="w-2.5 h-2.5 text-amber-700" />
                    Hot
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 truncate">
                  Click to explore exclusive batch resources, mock tests & bonus offers
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-all" />
          </a>
        )}

        {/* Adsterra Native Banner */}
        {resolvedFormat === "native" ? (
          <div className="w-full flex justify-center items-center min-h-[90px]" ref={nativeRef}>
            <div id="container-a6bac149b9b5065d9c39dd39421f6de6" className="w-full max-w-3xl" />
          </div>
        ) : (
          /* Adsterra Iframe Display Banner with Isolated Context */
          (() => {
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
                className="w-full flex items-center justify-center overflow-hidden py-1"
                style={{ minHeight: `${config.height}px` }}
              >
                <iframe
                  key={`${resolvedFormat}-${config.key}`}
                  title={`Adsterra Ad ${resolvedFormat}`}
                  srcDoc={iframeHtml}
                  width={config.width}
                  height={config.height}
                  className="border-0 overflow-hidden max-w-full"
                  scrolling="no"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                />
              </div>
            );
          })()
        )}
      </div>
    </aside>
  );
}

/**
 * High-Converting Adsterra Smart Link Call-To-Action Button / Banner
 */
export function AdsterraSmartLinkButton({
  className = "",
  title = "Unlock Student Bonus Materials & Batch Passes",
  subtitle = "High-speed verified educational resources provided by our partner network.",
  buttonText = "Access Bonus Offers",
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  return (
    <div
      className={`w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 p-4 sm:p-5 text-white shadow-md shadow-blue-500/15 ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 text-left w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-white">{title}</h4>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-900 uppercase">
                Free
              </span>
            </div>
            <p className="text-xs text-blue-100 mt-0.5">{subtitle}</p>
          </div>
        </div>

        <a
          href={ADSTERRA_SMART_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-98 shrink-0"
        >
          <span>{buttonText}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
