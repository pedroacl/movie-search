import React from 'react'
import { useHistory } from "react-router-dom";

import * as S from './styles'

type Props = {
  movie: any
}

const MovieCard: React.FC<Props> = ({movie}) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push(`/movies/${movie.imdbID}`)
  }

  return <S.Img src={movie.Poster} alt={movie.Title} onClick={handleOnClick}/>
}

export default MovieCard