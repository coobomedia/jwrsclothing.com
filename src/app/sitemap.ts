import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jwrsclothing.com',
      lastModified: new Date(),
    },
    {
      url: 'https://jwrsclothing.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://jwrsclothing.com/clothing',
      lastModified: new Date(),
    },
    {
      url: 'https://jwrsclothing.com/accessories',
      lastModified: new Date(),
    },
    {
      url: 'https://jwrsclothing.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://jwrsclothing.com/brands',
      lastModified: new Date(),
    },
    {
      url: 'https://jwrsclothing.com/testimonials',
      lastModified: new Date(),
    },
  ]
}
