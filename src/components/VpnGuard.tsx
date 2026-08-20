"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, RefreshCw, HelpCircle } from "lucide-react";

interface VpnGuardProps {
  children: React.ReactNode;
}

export function VpnGuard({ children }: VpnGuardProps) {
  const [isBlocked, setIsBlocked] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkConnection() {
      try {
        // Query ipwhois API (supports HTTPS, free tier provides security flags)
        const res = await fetch("https://ipwhois.app/json/");
        if (!res.ok) {
          setChecking(false);
          return;
        }
        const data = await res.json();

        const security = data?.security;
        const isVpnOrProxy =
          security?.vpn === true ||
          security?.proxy === true ||
          security?.tor === true ||
          security?.anonymous === true ||
          security?.hosting === true;

        // Fallback keyword check on ISP/Org for maximum reliability
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
          setIsBlocked(true);
        } else {
          setIsBlocked(false);
        }
      } catch (err) {
        // In case of rate limits or network issues, default to allow access
        setIsBlocked(false);
      } finally {
        setChecking(false);
      }
    }

    checkConnection();
  }, []);

  if (checking) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-500">Securing your connection...</p>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900 text-white flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-md w-full bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 text-center space-y-6 shadow-2xl animate-fade-in">
          {/* Alert Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/5">
            <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              Connection Blocked
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              VPN/Proxy Detected
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To secure our educational platform, accessing Study with Gaurav via a VPN, Proxy, Tor, or Hosting network is not permitted.
            </p>
          </div>

          {/* Action Box */}
          <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl text-left space-y-2.5">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-blue-500" />
              <span>How to restore access?</span>
            </h2>
            <ol className="text-xs text-slate-400 space-y-1.5 list-decimal pl-4 leading-relaxed">
              <li>Open your VPN, proxy, or browser extension settings.</li>
              <li>Disable/turn off the VPN or proxy connection.</li>
              <li>Tap the reconnect button below to verify your connection.</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <button
            onClick={() => window.location.reload()}
            className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 rounded-xl transition-all shadow-md shadow-blue-600/15"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reconnect & Verify</span>
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
