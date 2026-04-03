import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return [
    {
      url: `${baseUrl}/homepage`,
      lastModified: new Date('2026-03-31'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vua-ca-lang-landing`,
      lastModified: new Date('2026-03-31'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/green-travel-landing`,
      lastModified: new Date('2026-03-31'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}