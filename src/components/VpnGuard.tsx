"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, RefreshCw, HelpCircle, EyeOff, Globe, Wifi } from "lucide-react";

interface VpnGuardProps {
  children: React.ReactNode;
}

type BlockType = "adblock" | "vpn" | "dns" | null;

export function VpnGuard({ children }: VpnGuardProps) {
  const [blockReason, setBlockReason] = useState<BlockType>(null);

  useEffect(() => {
    let isMounted = true;

    async function runSecurityChecks() {
      try {
        // --- 1. Ad Blocker & Private DNS Detection ---
        let adblockDetected = false;
        let dnsDetected = false;

        // 1a. DOM Bait Test (detects browser extensions like uBlock, AdBlock, Brave)
        try {
          const bait = document.createElement("div");
          bait.className = "adsbygoogle ad-placement ad-banner textads banner-ads banner_ads ad-unit";
          bait.style.position = "absolute";
          bait.style.left = "-9999px";
          bait.style.top = "-9999px";
          bait.style.width = "1px";
          bait.style.height = "1px";
          document.body.appendChild(bait);

          const computed = window.getComputedStyle(bait);
          if (
            computed.display === "none" ||
            computed.visibility === "hidden" ||
            bait.clientHeight === 0 ||
            bait.offsetParent === null
          ) {
            adblockDetected = true;
          }
          if (document.body.contains(bait)) {
            document.body.removeChild(bait);
          }
        } catch {
          // Ignore DOM test failures
        }

        // 1b. Network Request Probe (detects Private DNS, AdGuard, NextDNS, Pi-hole, Brave Shields)
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3500);

          await fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
            method: "HEAD",
            mode: "no-cors",
            cache: "no-store",
            signal: controller.signal,
          });
          clearTimeout(timeoutId);
        } catch (fetchErr: unknown) {
          // If network fetch fails to Google AdSense, it's blocked by DNS / client filter
          if (fetchErr instanceof Error && fetchErr.name !== "AbortError") {
            dnsDetected = true;
          }
        }

        if (adblockDetected || dnsDetected) {
          if (isMounted) {
            setBlockReason(dnsDetected && !adblockDetected ? "dns" : "adblock");
          }
          return;
        }

        // --- 2. VPN & Proxy Detection (ipwhois with timeout) ---
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);

          const res = await fetch("https://ipwhois.app/json/", {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            const security = data?.security;
            const isVpnOrProxy =
              security?.vpn === true ||
              security?.proxy === true ||
              security?.tor === true ||
              security?.anonymous === true ||
              security?.hosting === true;

            const org = (data?.org || "").toLowerCase();
            const isp = (data?.isp || "").toLowerCase();
            const asn = (data?.asn || "").toLowerCase();

            const blockedKeywords = [
              "vpn", "proxy", "tor-exit", "mullvad", "nordvpn", "expressvpn",
              "cloudflare", "digitalocean", "amazon", "google cloud", "ovh",
              "linode", "vultr", "datacenter", "hosting", "leaseweb", "hetzner"
            ];

            const hasBlockedKeyword = blockedKeywords.some(
              (kw) => org.includes(kw) || isp.includes(kw) || asn.includes(kw)
            );

            if (isVpnOrProxy || hasBlockedKeyword) {
              if (isMounted) {
                setBlockReason("vpn");
              }
              return;
            }
          }
        } catch {
          // Allow on network or timeout issues
        }

        if (isMounted) {
          setBlockReason(null);
        }
      } catch {
        if (isMounted) {
          setBlockReason(null);
        }
      }
    }

    runSecurityChecks();

    return () => {
      isMounted = false;
    };
  }, []);

  // Always render children so SSR, Google AdSense crawlers, and bots have full access to HTML & ad units.
  // The anti-adblock/VPN modal overlays on top once client-side security checks detect blocking.
  return (
    <>
      {children}

      {blockReason && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md text-white flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="max-w-lg w-full bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 text-center space-y-6 shadow-2xl animate-fade-in my-auto">
            {/* Warning Icon Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
              {blockReason === "adblock" || blockReason === "dns" ? (
                <EyeOff className="w-8 h-8 sm:w-10 sm:h-10" />
              ) : (
                <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10" />
              )}
            </div>

            {/* Heading */}
            <div className="space-y-2.5">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                {blockReason === "adblock" || blockReason === "dns"
                  ? "Ad Blocker / Private DNS Detected"
                  : "VPN / Proxy Detected"}
              </span>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {blockReason === "adblock" || blockReason === "dns"
                  ? "Please Disable Your Ad Blocker"
                  : "VPN Connection Restricted"}
              </h1>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
                {blockReason === "adblock" || blockReason === "dns"
                  ? "Study with Gaurav is 100% free and non-profit. We rely on clean, unobtrusive advertisements to cover server & hosting expenses. Please whitelist this site, disable your Ad Blocker, or turn off Private DNS."
                  : "To protect our educational database and ensure equitable access, browsing via VPN, Proxy, Tor, or Datacenter networks is disabled."}
              </p>
            </div>

            {/* Resolution Instructions */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 sm:p-5 rounded-2xl text-left space-y-3">
              <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400" />
                <span>How to unlock access in 3 steps:</span>
              </h2>

              {blockReason === "adblock" || blockReason === "dns" ? (
                <ol className="text-xs text-slate-300 space-y-2 list-decimal pl-4 leading-relaxed">
                  <li>
                    <strong className="text-white">AdBlocker / Brave Shields:</strong> Click your adblocker extension (uBlock, AdBlock Plus, or Brave icon) and choose <span className="text-amber-300 font-semibold">&quot;Pause on this site&quot;</span> or toggle Shields OFF.
                  </li>
                  <li>
                    <strong className="text-white">Private DNS (AdGuard / NextDNS):</strong> On Android/iOS/PC settings, change Private DNS to <span className="text-amber-300 font-semibold">&quot;Off&quot;</span> or <span className="text-amber-300 font-semibold">&quot;Automatic&quot;</span>.
                  </li>
                  <li>
                    <strong className="text-white">VPN with Ad Shield:</strong> If using a VPN with built-in ad protection (e.g. Proton NetShield, Mullvad), turn it off.
                  </li>
                </ol>
              ) : (
                <ol className="text-xs text-slate-300 space-y-2 list-decimal pl-4 leading-relaxed">
                  <li>
                    <strong className="text-white">Open VPN App:</strong> Open your VPN app, proxy extension, or device network profile.
                  </li>
                  <li>
                    <strong className="text-white">Disconnect:</strong> Tap Disconnect / Turn Off VPN.
                  </li>
                  <li>
                    <strong className="text-white">Reconnect:</strong> Click the button below to resume free access.
                  </li>
                </ol>
              )}
            </div>

            {/* Refresh / Reconnect Button */}
            <button
              onClick={() => window.location.reload()}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-98 rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>I Have Disabled It — Refresh Page</span>
            </button>

            {/* Footer Note */}
            <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Study with Gaurav • Empowering Every Student in India</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
