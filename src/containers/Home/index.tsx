import React, { useEffect, useState } from 'react'

import { getMovies } from 'services/movies'

import SearchBar from './parts/SearchBar'
import Logo from 'assets/logo.png'
import * as S from './styles'
import MoviesNotFound from './parts/MoviesNotFound'

const Home = () => {
  const [movies, setMovies] = useState([])
  console.log(movies)

  useEffect(() => {
    setMovies(getMovies())
  }, [movies])

  return <S.Container>
    <S.WhatsIn src={Logo} alt='logo' />
    <SearchBar />
    {!!movies.length && <MoviesNotFound />}
  </S.Container>
}

export default Home