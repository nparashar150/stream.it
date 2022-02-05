import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Browse from "./auth/browse"
import { graphql } from "gatsby"
import SignIn from "./auth/signin"
import SignUp from "./auth/signup"
import Reset from "./auth/reset"
import NotFound from "./404"
import { DataProps } from "../interface/MovieList"

const App = ({ data }: DataProps) => {
  return (
    <Layout isLanding={false}>
      <Router>
        <Reset path="/auth/reset" />
        <SignIn path="/auth/signin" />
        <SignUp path="/auth/signup" />
        <PrivateRoute
          location={"/auth/browse"}
          path="/auth/browse"
          prismic={data.allPrismicPrefixNamanparashar.edges}
          component={Browse}
        />
        <NotFound default={true} />
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
          id
        }
      }
    }
  }
`
