import React from 'react'

import MovieCard from './parts/MovieCard'

import * as S from './styles'

type Props = {
  movies: any
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  return <S.Container>
    {movies.map((movie: any) => <MovieCard key={movie.imdbID} movie={movie} />)}
  </S.Container>
}

export default MoviesList