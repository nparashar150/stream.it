import React from "react"
import MovieListMapper from "../components/MovieList/MovieListMapper"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export default function browse(props) {
  return (
    <Layout>
      <Seo title="Browse Movies" />
      <MovieListMapper
        prismic={props.data.allPrismicPrefixNamanparashar.edges}
      />
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
