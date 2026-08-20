import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Study with Gaurav — Student Resource Directory',
    short_name: 'StudyWithGaurav',
    description: 'Discover and access top educational platforms, competitive exam portals, free batches, PDF notes, and study tools in one place.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
