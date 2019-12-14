import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router'

import { getMovie } from 'services/movies'

import Description from './parts/Description'

import * as S from './styles'

const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return

    const loadMovie = async () => {
      try {
        setLoading(true)
        const { data } = await getMovie(movieId)
        setMovie(data)
      } catch (err) {
        console.error(err)
      }
    }

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