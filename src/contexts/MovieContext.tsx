import React from 'react'

interface ContextProps {
  addMovieToFavorites: (imdbID: string) => void
  favoriteMovies: string[]
}

const MovieContext = React.createContext<ContextProps>({
  addMovieToFavorites: (imdbID: string) => {},
  favoriteMovies: []
})

export default MovieContext
