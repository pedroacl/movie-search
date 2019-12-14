import React from 'react'
import { useHistory } from 'react-router-dom'

import Paragraph from 'components/Paragraph'
import BackButton from 'assets/icon-arrow-grey.svg'
import Duration from './parts/Duration'
import TextColumn from 'components/TextColumn'
import ThreeColumns from './parts/ThreeColumns'
import RatingCard from './parts/Rating'
import { ReactComponent as IMDbIcon } from 'assets/logo-imdb.svg'
import { ReactComponent as RottenTomatoesIcon } from 'assets/logo-rotten-tomatoes.svg'

import * as S from './styles'
import { Rating } from 'types/movie'
import RatingEnum from 'enums/Rating'

type Props = {
  movie: any
}

const getRating = (source: string, ratings: Rating[]) => {
  const rating = ratings.find(rating => rating.Source === source)?.Value
  return rating || 'N/A'
}

const Description: React.FC<Props> = ({ movie }) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/')
  }

  return <S.Container>
    <S.BackButton src={BackButton} alt="back-btn" onClick={handleOnClick} />
    <Duration movie={movie} />
    <S.Title>{movie.Title}</S.Title>

    <S.RatingsContainer>
      <RatingCard color={'#FBA14B'} rating={getRating(RatingEnum.IMDB, movie.Ratings)}>
        <IMDbIcon stroke="#FBA14B" />
      </RatingCard>

      <RatingCard color={'red'} rating={getRating(RatingEnum.ROTTEN_TOMATOES, movie.Ratings)}>
        <RottenTomatoesIcon stroke="red" />
      </RatingCard>
    </S.RatingsContainer>

    <TextColumn title='Plot' content={<Paragraph>{movie.Plot}</Paragraph>} />
    <ThreeColumns movie={movie} />
  </S.Container>
}

export default Description