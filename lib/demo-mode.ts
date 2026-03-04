/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import toursData from '@/data/mock/tours.json'
import guidesData from '@/data/mock/guides.json'
import destinationsData from '@/data/mock/destinations.json'
import reviewsData from '@/data/mock/reviews.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'tours.json': toursData,
  'guides.json': guidesData,
  'destinations.json': destinationsData,
  'reviews.json': reviewsData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetTours') || query.includes('nodeTours')) {
      return loadMockData('tours.json')
    }

    if (query.includes('GetGuides') || query.includes('nodeGuides')) {
      return loadMockData('guides.json')
    }

    if (query.includes('GetDestinations') || query.includes('nodeDestinations')) {
      return loadMockData('destinations.json')
    }

    if (query.includes('GetReviews') || query.includes('nodeReviews')) {
      return loadMockData('reviews.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
