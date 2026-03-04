export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string; summary?: string }
  statsItems?: string
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string; summary?: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string

}

export interface DrupalTour {
  id: string
  title: string
  path?: string
  tourType?: string
  duration?: string
  price?: string
  groupSize?: string
  difficulty?: string
  highlights?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  featured?: string
}

export interface DrupalGuide {
  id: string
  title: string
  path?: string
  specialty?: string
  languages?: string
  yearsExperience?: string
  certification?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalDestination {
  id: string
  title: string
  path?: string
  region?: string
  country?: string
  bestSeason?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalReview {
  id: string
  title: string
  path?: string
  reviewerName?: string
  tourName?: string
  rating?: string
  travelDate?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface ToursData {
  nodeTours: {
    nodes: DrupalTour[]
  }
}

export interface GuidesData {
  nodeGuides: {
    nodes: DrupalGuide[]
  }
}

export interface DestinationsData {
  nodeDestinations: {
    nodes: DrupalDestination[]
  }
}

export interface ReviewsData {
  nodeReviews: {
    nodes: DrupalReview[]
  }
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}
