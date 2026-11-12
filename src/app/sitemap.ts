import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nova-store.example';
=======
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nova-store.example';
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  const now = new Date();
  return ['fa', 'en'].map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages: { fa: `${baseUrl}/fa`, en: `${baseUrl}/en` } },
  }));
}
