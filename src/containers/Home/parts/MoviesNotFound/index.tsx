import React from 'react'
import Icon from 'assets/illustration-empty-state.png'

import * as S from './styles'

const MoviesNotFound = () => {
  return <S.Container>
    <S.Image src={Icon}/>
    <S.H1>Don't know what to search</S.H1>
    <S.P>Here's an offer you can't refuse</S.P>
  </S.Container>
}

export default MoviesNotFound