/**
 * Ad Configuration for Study with Gaurav
 * Clean, 100% Google AdSense Compliant Configuration.
 * All intrusive third-party ad networks (Adsterra, popunders, social bars) have been removed.
 */

export const AD_CONFIG = {
  // Google AdSense Publisher Client ID
  googleAdSenseClient: "ca-pub-3576643094354429",

  // Master switches for monetization
  switches: {
    // Only set to true once Google AdSense has fully approved the site
    adsenseApproved: false,
    enableAdSense: true,

    // Intrusive third-party ads permanently disabled for compliance
    enableBanners: false,
    enableNative: false,
    enableSocialBar: false,
    enablePopunder: false,
  },

  // Third-party network configurations removed/neutralized
  keys: {
    banner728x90: "",
    banner468x60: "",
    banner320x50: "",
    banner300x250: "",
    banner160x600: "",
    banner160x300: "",
    nativeBanner: "",
  },

  scripts: {
    popunder: "",
    socialBar: "",
    nativeInvoke: "",
  },

  smartlink: "",
};

