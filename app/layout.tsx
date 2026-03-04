import './globals.css'
import { Outfit, Nunito } from 'next/font/google'
import ApolloProvider from './components/providers/ApolloProvider'
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-outfit', display: 'swap' })
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-nunito', display: 'swap' })

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 }

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  const port = process.env.PORT || '3000'
  const host = process.env.HOST || 'localhost'
  return `http://${host}:${port}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: 'Wanderlux Adventures', template: `%s | Wanderlux Adventures` },
  description: 'Join our passionate local guides for immersive small-group adventures across 32 countries. From East African safaris to Patagonian treks, every journey is crafted for wonder.',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/icon', sizes: '32x32', type: 'image/png' }, { url: '/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${nunito.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <DemoModeBanner />
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  )
}
