import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['Mediapartners-Google', 'Google-Display-Ads-Bot', 'Googlebot'],
        allow: ['/', '/ads.txt', '/privacy', '/terms', '/about', '/contact', '/disclaimer'],
      },
      {
        userAgent: '*',
        allow: ['/', '/ads.txt'],
        disallow: ['/private/', '/go/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'Amazonbot', 'cohere-ai'],
        allow: '/',
      }
    ],
    sitemap: 'https://studywithgaurav.cc.cd/sitemap.xml',
  };
}
