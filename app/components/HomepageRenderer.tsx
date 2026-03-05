'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import Image from 'next/image'
import { Compass, Mountain, Plane } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-semibold text-gray-900">Featured Adventures</h2>
            <p className="text-gray-600 mt-2">Handpicked journeys with small groups and expert local guides.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Patagonia Trek', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', icon: Mountain },
              { title: 'Morocco Cultural Route', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80', icon: Compass },
              { title: 'Japan City & Coast', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', icon: Plane },
            ].map((tour) => (
              <article key={tour.title} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-5 flex items-center gap-3">
                  <tour.icon className="w-5 h-5 text-accent-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{tour.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-accent-400 mb-4">Frontier Office</h3>
              <p className="text-gray-400">Reliable support and modern service for your community and customers.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tours" className="hover:text-accent-400 transition-colors">Services</Link></li>
                <li><Link href="/tours" className="hover:text-accent-400 transition-colors">Events</Link></li>
                <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>info@example.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Frontier Office. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
