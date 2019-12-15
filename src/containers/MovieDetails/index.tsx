import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getMovie } from 'services/movies'

import CircularProgress from 'components/CircularProgress';
import Description from './parts/Description'

import * as S from './styles'
import { MovieDetails as MovieDetailsType } from 'types/movie';

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetailsType>()
  const [loading, setLoading] = useState(false)
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return

    const loadMovie = async () => {
      try {
        setLoading(true)
        const { data } = await getMovie(movieId)
        setMovie(data)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }

    loadMovie()
  }, [movieId])

  if (loading) return <CircularProgress />

  if (!movie) return <div>Not found</div>

  return (
    <S.Container>
      <Description movie={movie} />
      <S.Poster src={movie.Poster} alt="image-poster" />
    </S.Container>
  )
}

export default MovieDetails