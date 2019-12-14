import React, { useState } from 'react'
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
    <S.WhatsIn src={Logo} alt='logo' />
    <SearchBar loadMovies={loadMovies} />

    <Router>
      <Switch>
        <Route path="/">
          {loading && <div>Loading</div>}
          {!loading && movies && movies.length === 0 && <MoviesNotFound />}
          {movies && movies.length > 0 && <MoviesList movies={movies} />}
        </Route>
      </Switch>
    </Router>
  </S.Container>
}

export default Home