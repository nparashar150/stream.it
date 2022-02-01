import React from "react"
import MovieListMapper from "../../components/MovieList/MovieListMapper"
import Seo from "../../components/seo"

export default function Browse({ prismic }) {
  return (
    <>
      <Seo title="Browse Movies" />
      <MovieListMapper prismic={prismic} />
    </>
  )
}
