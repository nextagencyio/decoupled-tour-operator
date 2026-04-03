export interface TermRef {
  name: string
}

export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  statsItems?: { id: string; number: string; label: string }[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string
  body?: { processed: string }
}

export interface DrupalTour {
  id: string
  title: string
  path?: string
  body?: { processed: string }
  tourType?: TermRef[]
  duration?: string
  price?: string
  groupSize?: string
  difficulty?: string
  highlights?: string[]
  image?: DrupalImage
  featured?: boolean
}

export interface DrupalGuide {
  id: string
  title: string
  path?: string
  body?: { processed: string }
  specialty?: TermRef[]
  languages?: string[]
  yearsExperience?: string
  certification?: string[]
  image?: DrupalImage
}

export interface DrupalDestination {
  id: string
  title: string
  path?: string
  body?: { processed: string }
  region?: TermRef[]
  country?: string
  bestSeason?: string
  image?: DrupalImage
}

export interface DrupalReview {
  id: string
  title: string
  path?: string
  body?: { processed: string }
  reviewerName?: string
  tourName?: string
  rating?: string
  travelDate?: string
  image?: DrupalImage
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
