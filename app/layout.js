import { DM_Sans } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://michaelaboukhalil.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Michael Abou Khalil — Automation & AI Specialist',
  description: 'Michael Abou Khalil is an automation and AI specialist building GoHighLevel, n8n, and Zapier systems that eliminate manual work, accelerate growth, and run 24/7 — now available for hire.',
  keywords: [
    'Michael Abou Khalil',
    'automation specialist',
    'AI specialist',
    'GoHighLevel expert',
    'n8n developer',
    'Zapier automation',
    'workflow automation',
    'CRM automation',
    'business automation',
    'AI-powered workflows',
    'Python automation',
    'lead capture automation',
    'client onboarding automation',
    'freelance automation developer',
    'Claude Code',
    'AI agents',
  ],
  authors: [{ name: 'Michael Abou Khalil', url: siteUrl }],
  creator: 'Michael Abou Khalil',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Michael Abou Khalil',
    title: 'Michael Abou Khalil — Automation & AI Specialist',
    description: 'Building GoHighLevel, n8n, and Zapier systems that eliminate manual work and run 24/7. Available for hire.',
    images: [
      {
        url: '/michael.png',
        width: 1200,
        height: 630,
        alt: 'Michael Abou Khalil — Automation & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Abou Khalil — Automation & AI Specialist',
    description: 'Building GoHighLevel, n8n, and Zapier systems that eliminate manual work and run 24/7.',
    images: ['/michael.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Michael Abou Khalil',
      url: siteUrl,
      email: 'michaelaboukhal@gmail.com',
      jobTitle: 'Automation & AI Specialist',
      description: 'Automation and AI specialist building GoHighLevel, n8n, and Zapier systems that eliminate manual work and run 24/7.',
      knowsAbout: [
        'GoHighLevel', 'n8n', 'Zapier', 'Python', 'Claude Code',
        'Workflow Automation', 'CRM Automation', 'AI Agents',
        'Lead Generation', 'Business Process Automation',
      ],
      image: `${siteUrl}/michael.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Michael Abou Khalil',
      description: 'Portfolio of Michael Abou Khalil — Automation & AI Specialist',
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans bg-page text-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
