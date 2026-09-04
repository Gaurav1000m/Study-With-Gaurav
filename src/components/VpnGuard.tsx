"use client";

import React, { useEffect, useState } from "react";
import { ShieldAlert, AlertTriangle, RefreshCw, Smartphone, WifiOff } from "lucide-react";

interface VpnGuardProps {
  children: React.ReactNode;
}

export function VpnGuard({ children }: VpnGuardProps) {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [vpnDetected, setVpnDetected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // 1. Anti-Leak Client Protections: Disable right-click & developer inspect shortcuts
    const handleContextMenu = (e: MouseEvent) => {
      // Allow context menu only on input/textarea fields
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 or Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C / Ctrl+U
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u" || e.key === "S" || e.key === "s"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // 2. Check Native Android Bridge if in APK
    if (typeof window !== "undefined" && (window as any).AndroidSecurityBridge) {
      try {
        if ((window as any).AndroidSecurityBridge.isVpnActive()) {
          setVpnDetected(true);
        }
      } catch (err) {
        console.error("Bridge check error:", err);
      }
    }

    // 3. Robust Ad-Blocker & Private DNS Detection Routine
    const checkSecurity = () => {
      // Skip check during SSR or if user is offline
      if (typeof window === "undefined" || !navigator.onLine) {
        setIsChecking(false);
        return;
      }

      // Check A: DOM Element Bait check (detects Adblock Plus, uBlock, Brave Shields)
      const bait = document.createElement("div");
      bait.className = "adsbygoogle pub_300x250 ad-banner banner-ad";
      bait.setAttribute("aria-hidden", "true");
      bait.style.setProperty("width", "300px", "important");
      bait.style.setProperty("height", "250px", "important");
      bait.style.setProperty("position", "absolute", "important");
      bait.style.setProperty("left", "-9999px", "important");
      bait.style.setProperty("top", "-9999px", "important");
      bait.innerHTML = "&nbsp;";
      document.body.appendChild(bait);

      // Check if ad blocker extension injected display:none on ad classes
      setTimeout(() => {
        try {
          const computed = window.getComputedStyle(bait);
          const isCssBlocked =
            computed.getPropertyValue("display") === "none" ||
            computed.getPropertyValue("visibility") === "hidden";

          if (isCssBlocked) {
            setAdBlockDetected(true);
          }
        } catch (e) {
          // ignore
        } finally {
          bait.remove();
        }
      }, 300);

      // Check B: Private DNS & Script-Level Ad Blocker Check (NextDNS, AdGuard DNS)
      const testScript = document.createElement("script");
      testScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-test";
      testScript.async = true;
      testScript.crossOrigin = "anonymous";

      testScript.onerror = () => {
        // Only flag if online
        if (typeof navigator !== "undefined" && navigator.onLine) {
          setAdBlockDetected(true);
        }
        testScript.remove();
      };

      testScript.onload = () => {
        // Script loaded successfully -> No AdBlock or DNS sinkhole!
        setAdBlockDetected(false);
        testScript.remove();
      };

      document.head.appendChild(testScript);

      // Check C: WebRTC VPN / Proxy Tunnel Check
      try {
        const RTCPC = (window as any).RTCPeerConnection || (window as any).webkitRTCPeerConnection;
        if (RTCPC) {
          const pc = new RTCPC({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
          pc.createDataChannel("");
          pc.createOffer().then((offer: any) => pc.setLocalDescription(offer));
          pc.onicecandidate = (ice: any) => {
            if (ice && ice.candidate && ice.candidate.candidate) {
              const candidate = ice.candidate.candidate.toLowerCase();
              if (
                candidate.includes("tun0") ||
                candidate.includes("tun1") ||
                candidate.includes("tap0") ||
                candidate.includes("ppp0") ||
                candidate.includes("wg0")
              ) {
                setVpnDetected(true);
              }
            }
          };
          setTimeout(() => pc.close(), 3000);
        }
      } catch (err) {
        // Ignore RTCPC errors
      }

      setIsChecking(false);
    };

    // Run security check after page elements mount
    const timer = setTimeout(checkSecurity, 1500);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  const handleRefresh = () => {
    setAdBlockDetected(false);
    setVpnDetected(false);
    window.location.reload();
  };

  // 1. VPN BLOCK SCREEN
  if (vpnDetected) {
    return (
      <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 text-white select-none">
        <div className="max-w-md w-full bg-slate-900 border border-red-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl shadow-red-950/50">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <WifiOff className="w-8 h-8 animate-pulse" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            VPN Detected!
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Access to <span className="font-semibold text-white">Study With Gaurav</span> is strictly restricted while connected to a VPN, proxy, or tunnel.
          </p>

          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 text-left text-xs text-slate-300 space-y-2 mb-6">
            <div className="flex items-center gap-2 font-medium text-red-300">
              <ShieldAlert className="w-4 h-4 shrink-0 text-red-400" />
              <span>How to fix:</span>
            </div>
            <p className="pl-6 text-slate-400">
              1. Open your VPN app and tap <strong>Disconnect / Turn Off</strong>.
            </p>
            <p className="pl-6 text-slate-400">
              2. Tap the button below to reload and continue your studies.
            </p>
          </div>

          <button
            onClick={handleRefresh}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 font-semibold text-white transition-all duration-200 shadow-lg shadow-red-600/30"
          >
            <RefreshCw className="w-4 h-4" />
            I Have Disconnected VPN
          </button>
        </div>
      </div>
    );
  }

  // 2. AD BLOCKER & PRIVATE DNS BLOCK SCREEN
  if (adBlockDetected) {
    return (
      <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 text-white select-none">
        <div className="max-w-md w-full bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl shadow-amber-950/50">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <AlertTriangle className="w-8 h-8 animate-bounce" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            Ad Blocker or Private DNS Detected
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Please disable your <strong className="text-amber-300">Ad Blocker</strong> and <strong className="text-amber-300">Private DNS</strong> to continue using Study With Gaurav.
          </p>

          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 text-left text-xs text-slate-300 space-y-3 mb-6">
            <div className="flex items-center gap-2 font-medium text-amber-300">
              <Smartphone className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Instructions to fix:</span>
            </div>
            <div className="pl-6 space-y-1.5 text-slate-400">
              <p>
                • <strong>Turn Off Ad Blocker:</strong> Disable AdBlock / uBlock extension or turn off Brave Shields.
              </p>
              <p>
                • <strong>Disable Private DNS:</strong> In Android Settings → <em>Connections</em> → <em>More connection settings</em> → <em>Private DNS</em> → Select <strong>Off</strong> or <strong>Automatic</strong>.
              </p>
            </div>
          </div>

          <button
            onClick={handleRefresh}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 font-semibold text-slate-950 transition-all duration-200 shadow-lg shadow-amber-500/30"
          >
            <RefreshCw className="w-4 h-4" />
            I have Disabled Ad Blocker & DNS
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

