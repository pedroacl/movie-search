import React from 'react'

import * as S from './styles'

type Props = {
  movie: any
}

const MovieCard: React.FC<Props> = ({movie}) => {
  return <S.Img src={movie.Poster} alt={movie.Title}/>
}

export default MovieCard