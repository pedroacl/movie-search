import React from 'react'
import {useHistory} from 'react-router-dom'

import Paragraph from 'components/Paragraph'
import BackButton from 'assets/icon-arrow-grey.svg'
import Duration from './parts/Duration'
import TextColumn from 'components/TextColumn'
import ThreeColumns from './parts/ThreeColumns'

import * as S from './styles'

type Props = {
  movie: any
}

const Description: React.FC<Props> = ({movie}) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/')
  }

  return <S.Container>
    <S.BackButton src={BackButton} alt="back-btn" onClick={handleOnClick}/>
    <Duration movie={movie} />
    <S.Title>{movie.Title}</S.Title>
    <TextColumn title='Plot' content={<Paragraph>movie.Plot</Paragraph>} />
    <ThreeColumns movie={movie}/>
  </S.Container>
}

export default Description