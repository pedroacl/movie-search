import React from 'react'


import * as S from './styles'

type Props = {
  rating: string | null
  children: React.ReactNode
  color: string
}

const Rating: React.FC<Props> = ({ children, color, rating }) => {

  return <S.Container>
    <S.Label color={color}>{children}</S.Label>
    <S.Value>{rating}</S.Value>
  </S.Container>
}

export default Rating