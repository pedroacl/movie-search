import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"

import MovieContext from 'contexts/MovieContext'

import { MovieListDetails } from 'types/movie'
import HeartIconFavorite from 'assets/icon-heart-full.png'
import HeartIconNotFavorite from 'assets/icon-heart-white.png'

import * as S from './styles'

type Props = {
  movie: MovieListDetails
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const history = useHistory()
  const { addMovieToFavorites, favoriteMovies } = useContext(MovieContext)
  const [isFavorite, setIsFavorite] = useState(!!favoriteMovies.find(item => item === movie.imdbID))

  const handleOnClick = () => history.push(`/movies/${movie.imdbID}`)

  return <S.Container>
    <S.Img className="poster" src={movie.Poster} alt={movie.Title} />
    <S.Overlay>
      <S.AddToFavoritesIcon
        className="add-to-favorites"
        src={isFavorite ? HeartIconFavorite : HeartIconNotFavorite}
        alt="add-to-favorites"
        onClick={() => {
          setIsFavorite(true)
          addMovieToFavorites(movie.imdbID)}
        }
      />

      <S.OverlayContent className="overlay" onClick={handleOnClick}>
        <S.MovieDescription>
          <S.Title>{movie.Title}</S.Title>
          <S.Year>{movie.Year}</S.Year>
        </S.MovieDescription>
      </S.OverlayContent>
    </S.Overlay>
  </S.Container>
}

export default MovieCard