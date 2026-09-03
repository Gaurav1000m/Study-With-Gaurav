import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Google AdSense and Googlebot: full access to all public pages
        userAgent: ['Mediapartners-Google', 'Google-Display-Ads-Bot', 'Googlebot'],
        allow: [
          '/',
          '/ads.txt',
          '/categories/',
          '/resources',
          '/explore',
          '/popular',
          '/about',
          '/contact',
          '/privacy',
          '/terms',
          '/disclaimer',
          '/donate',
          '/advertising',
        ],
        disallow: ['/go/', '/private/'],
      },
      {
        // General crawlers: allow all public content pages
        userAgent: '*',
        allow: [
          '/',
          '/ads.txt',
          '/categories/',
          '/resources',
          '/explore',
          '/popular',
          '/about',
          '/contact',
          '/privacy',
          '/terms',
          '/disclaimer',
          '/donate',
          '/advertising',
        ],
        disallow: ['/go/', '/private/', '/saved', '/profile'],
      },
      {
        // AI training bots: full access (helps with AI discoverability)
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Amazonbot',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://studywithgaurav.cc.cd/sitemap.xml',
  };
}
