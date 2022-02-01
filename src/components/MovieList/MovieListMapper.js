import React, { useState, useEffect } from "react"
import {
  MovieListWrapper,
  MovieItemWrapper,
  MovieItemHeading,
  MovieItemInfo,
  MovieImageWrapper,
} from "./MovieListStyles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function MovieListMapper({ prismic }) {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([...prismic])
  }, [prismic])

  const bannerStyles = {
    overflow: "hidden",
    objectFit: "cover",
  }

  return (
    <div className="container">
      <MovieListWrapper className="container px-2">
        {data.map((prismic, key) => {
          let e = prismic.node.data
          const image = getImage(e.movie_banner.gatsbyImageData)
          return (
            <Link key={key} to={`/details/${e.movie_title.text}`}>
              <MovieItemWrapper>
                <MovieImageWrapper>
                  <GatsbyImage
                    image={image}
                    formats={["auto", "webp", "avif"]}
                    alt={"image"}
                    style={bannerStyles}
                  />
                </MovieImageWrapper>
                <MovieItemHeading>{e.movie_title.text}</MovieItemHeading>
                <div>
                  <MovieItemInfo releaseDate>
                    {e.movie_release_date1.slice(0, 4)}
                  </MovieItemInfo>
                  <MovieItemInfo genre>{e.movie_genre.text}</MovieItemInfo>
                  <MovieItemInfo rating>
                    {"Rating: " + e.movie_rating}
                  </MovieItemInfo>
                </div>
                <MovieItemInfo description>
                  {e.movie_description.text}
                </MovieItemInfo>
              </MovieItemWrapper>
            </Link>
          )
        })}
      </MovieListWrapper>
    </div>
  )
}
