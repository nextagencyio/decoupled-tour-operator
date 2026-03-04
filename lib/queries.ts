import { gql } from '@apollo/client'

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
      heroTitle
      heroSubtitle
      heroDescription { processed summary }
      statsItems
      featuredItemsTitle
      ctaTitle
      ctaDescription { processed summary }
      ctaPrimary
      ctaSecondary
      }
    }
  }
`

export const GET_TOURS = gql`
  query GetTours($first: Int = 10) {
    nodeTours(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeTour {
          tourType
          duration
          price
          groupSize
          difficulty
          highlights
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          featured
        }
      }
    }
  }
`

export const GET_TOUR_BY_PATH = gql`
  query GetTourByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTour {
            id
            title
            path
          tourType
          duration
          price
          groupSize
          difficulty
          highlights
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          featured
          }
        }
      }
    }
  }
`

export const GET_GUIDES = gql`
  query GetGuides($first: Int = 10) {
    nodeGuides(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeGuide {
          specialty
          languages
          yearsExperience
          certification
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_GUIDE_BY_PATH = gql`
  query GetGuideByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeGuide {
            id
            title
            path
          specialty
          languages
          yearsExperience
          certification
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_DESTINATIONS = gql`
  query GetDestinations($first: Int = 10) {
    nodeDestinations(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeDestination {
          region
          country
          bestSeason
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_DESTINATION_BY_PATH = gql`
  query GetDestinationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeDestination {
            id
            title
            path
          region
          country
          bestSeason
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_REVIEWS = gql`
  query GetReviews($first: Int = 10) {
    nodeReviews(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeReview {
          reviewerName
          tourName
          rating
          travelDate
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_REVIEW_BY_PATH = gql`
  query GetReviewByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeReview {
            id
            title
            path
          reviewerName
          tourName
          rating
          travelDate
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          __typename
          ... on NodeHomepage {
            id
            title
          }
          ... on NodePage {
            id
            title
            body { processed }
          }
        }
      }
    }
  }
`
