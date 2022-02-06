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
import Route from "../components/Routes"
const App = ({ data }: DataProps) => {
  return (
    <Layout isLanding={false}>
      <Router>
        <Route path="/auth/reset" component={Reset} />
        <Route path="/auth/signin" component={SignIn} />
        <Route path="/auth/signup" component={SignUp} />
        <PrivateRoute
          location={"/auth/browse"}
          path="/auth/browse"
          prismic={data.allPrismicPrefixNamanparashar.edges}
          component={Browse}
        />
        <Route default={true} component={NotFound} />
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
