import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://zynexlabs.tech/sitemap.xml',
    host: 'https://zynexlabs.tech',
  }
}
