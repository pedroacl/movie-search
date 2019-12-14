import React from 'react'
import { useHistory } from "react-router-dom"

import { MovieListDetails } from 'types/movie'
import AddToFavoritesIcon from 'assets/icon-heart-full.png'

import * as S from './styles'

type Props = {
  movie: MovieListDetails
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const history = useHistory()

  const handleOnClick = () => history.push(`/movies/${movie.imdbID}`)

  return <S.Container onClick={handleOnClick}>
    <S.Img className="poster" src={movie.Poster} alt={movie.Title} />
    <S.Overlay>
      <S.OverlayContent className="overlay">
        <S.AddToFavoritesIcon src={AddToFavoritesIcon} alt="add-to-favorites" />
        <S.MovieDescription>
          <S.Title>{movie.Title}</S.Title>
          <S.Year>{movie.Year}</S.Year>
        </S.MovieDescription>
      </S.OverlayContent>
    </S.Overlay>
  </S.Container>
}

export default MovieCard