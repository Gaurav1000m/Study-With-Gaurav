import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://studywithgaurav.cc.cd';

  return {
    rules: [
      {
        // General search engine crawlers: full access to all educational content pages
        userAgent: '*',
        allow: '/',
        disallow: ['/go/', '/private/', '/saved', '/profile', '/api/'],
      },
      {
        // Google AdSense and Googlebot: full access
        userAgent: ['Mediapartners-Google', 'Google-Display-Ads-Bot', 'Googlebot'],
        allow: '/',
        disallow: ['/go/', '/private/', '/saved', '/profile', '/api/'],
      },
      {
        // AI / Answer Engine discovery
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
        disallow: ['/go/', '/private/', '/saved', '/profile', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
