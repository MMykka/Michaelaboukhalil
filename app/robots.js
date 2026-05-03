const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://michaelaboukhalil.com'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
