/**
 * Ad Configuration for Study with Gaurav
 * Centralized settings for high-CPM ad formats (Adsterra / HighRevenueFormat)
 * and Google AdSense co-existence.
 */

export const AD_CONFIG = {
  // Google AdSense Publisher Client ID
  googleAdSenseClient: "ca-pub-3576643094354429",

  // Adsterra / HighRevenueFormat Ad Keys
  keys: {
    banner728x90: "81dee46bfffc21d377b1fd7ad6bf6cba", // Desktop Leaderboard
    banner468x60: "6af505d39c089561c28eadca44d943dc", // Tablet Banner
    banner320x50: "affcadeca5de7da1d8db499b0436121e", // Mobile Leaderboard
    banner300x250: "05add28c7c2e76505b6868c15b0d39a4", // High-CPM Medium Rectangle
    banner160x600: "3881815ff75c8029119aee54587f6b43", // Wide Skyscraper
    banner160x300: "8d4edf6c1ce1f52d4b2c8629ec7a5223", // Half Skyscraper
    nativeBanner: "a6bac149b9b5065d9c39dd39421f6de6", // Native Ad Container
  },

  // Direct Scripts
  scripts: {
    popunder: "https://pl31181516.profitableratecpmnetwork.com/72/94/d4/7294d4d00ad04dbcdeb821323928580d.js",
    socialBar: "https://pl31181517.profitableratecpmnetwork.com/4e/61/5f/4e615fed220697e7243807ef41b2a5c1.js",
    nativeInvoke: "https://pl31181519.profitableratecpmnetwork.com/a6bac149b9b5065d9c39dd39421f6de6/invoke.js",
  },

  // Smartlink (Direct Monetization URL)
  smartlink: "https://www.profitableratecpmnetwork.com/wbaq56gdt?key=e7b6dd096a0f9a28dd21c51252679e4f",

  // Master switches for monetization
  switches: {
    enableBanners: true,
    enableNative: true,
    enableSocialBar: true,
    // Note: Popunder is enabled. If undergoing an immediate Google AdSense review,
    // you can toggle this to false during the 24-48h review window if needed.
    enablePopunder: true,
  },
};
