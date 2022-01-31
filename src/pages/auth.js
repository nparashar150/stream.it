import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import { graphql } from "gatsby"
import MovieListMapper from "../components/MovieList/MovieListMapper"
import SignIn from "./auth/signin"
import SignUp from "./auth/signup"
import Reset from "./auth/reset"

const App = ({ data }) => {
  return (
    <Layout>
      <Router>
        <Reset path="/auth/reset" />
        <SignIn path="/auth/signin" />
        <SignUp path="/auth/signup" />
        <PrivateRoute
          path="/auth/browse"
          prismic={data.allPrismicPrefixNamanparashar.edges}
          component={MovieListMapper}
        />
      </Router>
    </Layout>
  )
}

export default App

export const prismicQuery = graphql`
  query getPrismicData2 {
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
