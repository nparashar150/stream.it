import React from "react"
import MovieListMapper from "../../components/MovieList/MovieListMapper"
import Seo from "../../components/seo"

interface Prismic {
  prismic: Array<{}>
}

export default function Browse({ prismic }: Prismic) {
  return (
    <>
      <Seo title="Browse Movies" />
      <MovieListMapper prismic={prismic} />
    </>
  )
}
