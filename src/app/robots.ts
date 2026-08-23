import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
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
