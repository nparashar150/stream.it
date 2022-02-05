import * as React from "react"
import MovieListMapper from "../components/MovieList/MovieListMapper"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { DataProps } from "../interface/MovieList"

export default function Browse({ data }: DataProps) {
  return (
    <Layout isLanding={false}>
      <Seo title="Browse Movies" />
      <MovieListMapper prismic={data.allPrismicPrefixNamanparashar.edges} />
    </Layout>
  )
}

export const prismicQuery = graphql`
  query getPrismicData {
    allPrismicPrefixNamanparashar {
      edges {
        node {
          data {
            movie_release_date1
            movie_rating
            movie_title {
              text
            }
            movie_genre {
              text
            }
            movie_banner {
              gatsbyImageData(width: 300, height: 460, placeholder: BLURRED)
            }
            movie_description {
              text
            }
          }
        }
      }
    }
  }
`
