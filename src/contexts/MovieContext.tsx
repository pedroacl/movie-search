import React from 'react'
import { MovieDetails } from 'types/movie'

interface ContextProps {
  addMovieToFavorites: (movie: MovieDetails) => void
  favoriteMovies: string[]
}

const MovieContext = React.createContext<ContextProps>({
  addMovieToFavorites: (movie: MovieDetails) => {},
  favoriteMovies: []
})

export default MovieContext
