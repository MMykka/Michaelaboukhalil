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

export const metadata = {
  title: 'Michael Abou Khalil — Automation & AI Specialist',
  description: 'Automation and AI specialist building systems that eliminate manual work, accelerate growth, and run 24/7 without supervision.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans bg-page text-body antialiased`}>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
