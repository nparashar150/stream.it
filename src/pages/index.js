import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Index from "../components/Index/LandingPage"
import { graphql } from "gatsby"

const IndexPage = ({
  data: {
    allPrismicPrefixLandingpage: { edges },
    allPrismicPrefixFeaturelist,
  },
}) => {
  return (
    <Layout isLanding>
      <Seo title="Home" />
      <Index data={edges[0].node.data} features={allPrismicPrefixFeaturelist} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query getLandingPageData {
    allPrismicPrefixLandingpage {
      edges {
        node {
          data {
            landingaboutheading {
              text
            }
            landingaboutimage {
              gatsbyImageData(width: 500, placeholder: BLURRED)
            }
            landingaboutinfo {
              text
            }
            landingfeaturesheading {
              text
            }
            landingfeaturesimage {
              gatsbyImageData(width: 500, placeholder: BLURRED)
            }
            landingfeaturesinfo {
              html
            }
            landingheading {
              html
            }
          }
        }
      }
    }
    allPrismicPrefixFeaturelist {
      edges {
        node {
          data {
            feature_info {
              text
            }
            feature_title {
              text
            }
          }
        }
      }
    }
  }
`
