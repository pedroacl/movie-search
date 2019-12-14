import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getMovie } from 'services/movies'

import CircularProgress from 'components/CircularProgress';
import Description from './parts/Description'

import * as S from './styles'
import { MovieDetails as MovieDetailsType } from 'types/movie';

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetailsType>()
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return

    const loadMovie = async () => {
      try {
        const { data } = await getMovie(movieId)
        setMovie(data)
      } catch (err) {
        console.error(err)
      }
    }

    setLoading(true)
    loadMovie()
    setLoading(false)
  }, [movieId])

  if (loading) return <CircularProgress />

  if (!movie) return <div>Not found</div>

  return <S.Container>
    <Description movie={movie} />
    <S.Poster src={movie.Poster} alt="image-poster" />
  </S.Container>
}

export default MovieDetails