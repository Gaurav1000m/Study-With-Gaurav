import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Google AdSense and Googlebot: full access to all educational content pages
        userAgent: ['Mediapartners-Google', 'Google-Display-Ads-Bot', 'Googlebot'],
        allow: [
          '/',
          '/ads.txt',
          '/categories/',
          '/resources',
          '/resources/',
          '/articles',
          '/articles/',
          '/roadmaps',
          '/roadmaps/',
          '/editorial-policy',
          '/popular',
          '/about',
          '/contact',
          '/privacy',
          '/terms',
          '/disclaimer',
          '/advertising',
        ],
        disallow: ['/go/', '/private/', '/saved', '/profile'],
      },
      {
        // General search engine crawlers
        userAgent: '*',
        allow: [
          '/',
          '/ads.txt',
          '/categories/',
          '/resources',
          '/resources/',
          '/articles',
          '/articles/',
          '/roadmaps',
          '/roadmaps/',
          '/editorial-policy',
          '/popular',
          '/about',
          '/contact',
          '/privacy',
          '/terms',
          '/disclaimer',
          '/advertising',
        ],
        disallow: ['/go/', '/private/', '/saved', '/profile', '/donate'],
      },
      {
        // AI discoverability
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
        disallow: ['/go/', '/saved', '/profile'],
      },
    ],
    sitemap: 'https://studywithgaurav.cc.cd/sitemap.xml',
  };
}
