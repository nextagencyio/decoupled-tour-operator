import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_GUIDES } from '@/lib/queries'
import { GuidesData } from '@/lib/types'
import Header from '../components/Header'
import GuideCard from '../components/GuideCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Guides | Tour Operator',
  description: 'Browse our guides.',
}

async function getGuides() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<GuidesData>({
      query: GET_GUIDES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeGuides?.nodes || []
  } catch (error) {
    console.error('Error fetching guides:', error)
    return []
  }
}

export default async function GuidesPage() {
  const items = await getGuides()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Guides
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Explore our guides.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Guides Yet</h2>
              <p className="text-gray-500">
                Guides will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <GuideCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
