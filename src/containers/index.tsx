import React, { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import { getMovies } from 'services/movies'

import SearchBar from './SearchBar'
import Logo from 'assets/logo.png'
import * as S from './styles'
import MoviesNotFound from './MoviesNotFound'
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'

const Home = () => {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const loadMovies = async (search: string) => {
    try {
      setLoading(true)
      const { data } = await getMovies(search)
      console.log('movies', data.Search)
      console.log('keys', Object.keys(data.Search))
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

      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
        <Route path="/">
          <SearchBar loadMovies={loadMovies} />
          {loading && <S.CircularProgressWrapper><CircularProgress /></S.CircularProgressWrapper>}
          {!loading && movies && movies.length === 0 && <MoviesNotFound />}
          {!loading && movies && movies.length > 0 && <MoviesList movies={movies} />}
        </Route>
      </Switch>
    </Router>
  </S.Container>
}

export default Home