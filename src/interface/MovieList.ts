export interface DataProps {
  data: {
    allPrismicPrefixNamanparashar?: {
      edges: [
        {
          node: {
            data: {
              movie_banner: {}
              movie_description: {
                text: string
              }
              movie_genre: {
                text: string
              }
              movie_rating: number
              movie_release_date1: string
              movie_title: {
                text: string
              }
            }
          }
        }
      ]
    }
    allPrismicPrefixFeaturelist?: {
      edges: [
        {
          node: {
            data: {
              feature_info: {
                text: string
              }
              feature_title: {
                text: string
              }
            }
          }
        }
      ]
    }
    allPrismicPrefixLandingpage?: {
      edges: [
        {
          node: {
            data: {
              landingaboutheading: {
                text: string
              }
              landingaboutimage: {}
              landingaboutinfo: {
                text: string
              }
              landingfeaturesheading: {
                text: string
              }
              landingfeaturesimage: {}
              landingfeaturesinfo: {}
              landingheading: {}
            }
          }
        }
      ]
    }
  }
}
