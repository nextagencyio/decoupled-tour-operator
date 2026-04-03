// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeDestination {
  id: string;
  bestSeason: string;
  body: { value: string; summary?: string };
  country: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  region: any[];
  title: string;
}

export interface NodeGuide {
  id: string;
  body: { value: string; summary?: string };
  certification: string[];
  image: { url: string; alt: string; width: number; height: number };
  languages: string[];
  path: string;
  specialty: any[];
  title: string;
  yearsExperience: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeReview {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  rating: string;
  reviewerName: string;
  title: string;
  tourName: string;
  travelDate: string;
}

export interface NodeTour {
  id: string;
  body: { value: string; summary?: string };
  difficulty: string;
  duration: string;
  featured: boolean;
  groupSize: string;
  highlights: string[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  price: string;
  title: string;
  tourType: any[];
}
