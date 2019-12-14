import React from 'react'

import * as S from './styles'

type Props = {
  movie: any
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