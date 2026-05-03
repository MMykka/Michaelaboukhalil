/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent browsers from MIME-sniffing the content-type
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Clickjacking protection — disallow embedding in iframes from other origins
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Stop sending referrer to cross-origin destinations
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable browser features not needed on a portfolio site
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  // Force HTTPS for 1 year once the browser has visited once
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // Enable browser XSS filter (legacy browsers)
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Content Security Policy — locked down to self-hosted assets only
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline and unsafe-eval for hydration scripts
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Tailwind and Next.js inject inline styles
      "style-src 'self' 'unsafe-inline'",
      // Local images + placehold.co (configured in remotePatterns) + data URIs
      "img-src 'self' data: https://placehold.co",
      // Fonts are self-hosted by next/font
      "font-src 'self'",
      // No external connections needed
      "connect-src 'self'",
      // No plugins, no objects
      "object-src 'none'",
      // Restrict <base> tag to same origin
      "base-uri 'self'",
      // Only allow form submissions to same origin (mailto: links are unaffected)
      "form-action 'self'",
      // Prevent this site from being embedded anywhere
      "frame-ancestors 'none'",
    ].join('; '),
  },
]

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
