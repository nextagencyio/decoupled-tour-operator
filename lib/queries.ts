// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
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
        tourType {
          ... on TermTourType { name }
        }
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
            body { processed }
            tourType {
              ... on TermTourType { name }
            }
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
        specialty {
          ... on TermSpecialty { name }
        }
        languages
        yearsExperience
        certification
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
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
            body { processed }
            specialty {
              ... on TermSpecialty { name }
            }
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
        region {
          ... on TermRegion { name }
        }
        country
        bestSeason
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
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
            body { processed }
            region {
              ... on TermRegion { name }
            }
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
        reviewerName
        tourName
        rating
        travelDate
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
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
            body { processed }
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
