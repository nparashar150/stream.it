import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import {
  MovieInfoWrapper,
  MovieStory,
  MovieHeading,
  MovieInsightsWrapper,
  MovieInsights,
  MovieImage,
  GoBack,
} from "./MovieInfoElements"
import Seo from "../../components/seo"
import { graphql, navigate } from "gatsby"
import { getImage } from "gatsby-plugin-image"

export default function MovieInfo({ data }) {
  const [movieInfo, setMovieInfo] = useState({})
  const imageStyles = {
    overflow: "hidden",
    objectFit: "cover",
    marginLeft: "1rem",
  }

  useEffect(() => {
    setMovieInfo(data.allPrismicPrefixNamanparashar.edges[0].node.data)
  }, [data.allPrismicPrefixNamanparashar.edges])

  const image = getImage(movieInfo?.movie_banner?.gatsbyImageData)

  return (
    <Layout>
      <Seo title={movieInfo?.movie_title?.text} />
      <MovieInfoWrapper className="container">
        <GoBack onClick={() => navigate(-1)}>Go Back</GoBack>
        <MovieImage
          image={image}
          formats={["auto", "webp", "avif"]}
          alt={"image"}
          style={imageStyles}
        />
        <MovieInsightsWrapper>
          <MovieHeading>{movieInfo?.movie_title?.text}</MovieHeading>
          <MovieInsights genre>{movieInfo?.movie_genre?.text}</MovieInsights>
          <MovieInsights rating>
            {"Rating: " + movieInfo?.movie_rating}
          </MovieInsights>
          <MovieInsights releaseDate>
            {movieInfo?.movie_release_date1?.slice(0, 4)}
          </MovieInsights>
          <MovieInsights description>
            {movieInfo?.movie_description?.text}
          </MovieInsights>
        </MovieInsightsWrapper>
        <MovieStory>
          <b>
            Plot
            <br />
          </b>
          {movieInfo?.movie_story?.text}
        </MovieStory>
      </MovieInfoWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSpecificMovie($name: String) {
    allPrismicPrefixNamanparashar(
      filter: { data: { movie_title: { text: { eq: $name } } } }
    ) {
      edges {
        node {
          data {
            movie_banner {
              gatsbyImageData(width: 220, height: 350, placeholder: BLURRED)
            }
            movie_description {
              text
            }
            movie_genre {
              text
            }
            movie_rating
            movie_release_date1
            movie_story {
              text
            }
            movie_title {
              text
            }
          }
        }
      }
    }
  }
`
