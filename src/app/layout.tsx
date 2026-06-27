import type { Metadata } from 'next'
import { DM_Serif_Display, Space_Mono } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Huda Sarkawt Nasih — Frontend Developer',
  description:
    'Senior Frontend Developer and Scrum Master specializing in Vue.js, Nuxt.js, and TypeScript. Based in Kurdistan.',
  openGraph: {
    title: 'Huda Sarkawt Nasih — Frontend Developer',
    description: 'Building precise, scalable frontend systems.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${dmSerif.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
