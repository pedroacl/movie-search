import React, { useState, useContext } from 'react'

import MovieContext from 'contexts/MovieContext'

import HeartIconOut from 'assets/icon-heart-white.png'
import HeartIconOver from 'assets/icon-heart-grey.png'
import HeartIconFavorite from 'assets/icon-heart-full.png'

import * as S from './styles'
import { MovieDetails } from 'types/movie'

type Props = {
  movie: MovieDetails
}

const AddToFavorites: React.FC<Props> = ({ movie }) => {
  const { addMovieToFavorites, favoriteMovies } = useContext(MovieContext)
  const [isFavorite, setIsFavorite] = useState(!!favoriteMovies.find(item => item === movie.imdbID))
  const [imgSrc, setImgSrc] = useState(isFavorite ? HeartIconFavorite : HeartIconOut)

  const toggleIcon = (src: string) => !isFavorite && setImgSrc(src)

  const handleAddMovieToFavorites = () => {
    setImgSrc(HeartIconFavorite)
    setIsFavorite(true)
    addMovieToFavorites(movie)
  }

  return (
    <S.Container
      isFavorite={isFavorite}
      onClick={handleAddMovieToFavorites}
      onMouseOver={() =>
        toggleIcon(HeartIconOver)}
      onMouseOut={() => toggleIcon(HeartIconOut)}
    >
      <S.StyledIcon src={imgSrc} alt="heart-icon" />
      <S.Text isFavorite={isFavorite}>{isFavorite ? 'Added' : 'Add to Favorites'}
      </S.Text>
    </S.Container >
  )
}

export default AddToFavorites