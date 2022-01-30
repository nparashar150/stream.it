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
    <Layout>
      <Seo title="Home" />
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
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
