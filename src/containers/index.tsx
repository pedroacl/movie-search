import React, { useState } from 'react'
import MovieContext from 'contexts/MovieContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { getMovies } from 'services/movies'

import CircularProgress from 'components/CircularProgress'
import SearchBar from './SearchBar'
import Logo from 'assets/logo.png'
import * as S from './styles'
import MoviesNotFound from './MoviesNotFound'
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'
import { MovieListDetails, MovieDetails as MovieDetailsType } from 'types/movie';

const Home = () => {
  const [movies, setMovies] = useState<MovieListDetails[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [favoriteMovies, setFavoriteMovies] = useState<string[]>([])

  const handleAddMovieToFavorites = (movie: MovieDetailsType) =>
    setFavoriteMovies([...favoriteMovies, movie.imdbID])

  const contextState = {
    favoriteMovies,
    addMovieToFavorites: (movie: MovieDetailsType) => handleAddMovieToFavorites(movie)
  }

  const loadMovies = async (search: string) => {
    try {
      setLoading(true)
      const { data } = await getMovies(search)
      setMovies(data.Search)
    }
    catch (e) {
      setError(e)
    }

    setLoading(false)
  }

  return <S.Container>
    <Router>
      <S.WhatsIn src={Logo} alt='logo' />

      <MovieContext.Provider value={contextState}>
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <SearchBar loadMovies={loadMovies} />
            {error && <div>Error loading movies</div>}
            {loading && <CircularProgress />}
            {!loading && !movies && <MoviesNotFound />}
            {!loading && movies && movies.length > 0 && <MoviesList movies={movies} />}
          </Route>
        </Switch>
      </MovieContext.Provider>
    </Router>
  </S.Container>
}

export default Home