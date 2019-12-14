import React from 'react'

import * as S from './styles'
import { MovieDetails } from 'types/movie'

type Props = {
  movie: MovieDetails
}

const Duration: React.FC<Props> = ({ movie }) => {
  return <S.Container>
    <p>{movie.Runtime}</p>
    <S.MiddleDot>&#183;</S.MiddleDot>
    <p>{movie.Year}</p>
    <S.MiddleDot>&#183;</S.MiddleDot>
    <S.Rated>{movie.Rated}</S.Rated>
  </S.Container>
}

export default Duration