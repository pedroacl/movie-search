import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  content: JSX.Element
}

const TextColumn: React.FC<Props> = ({ title, content }) => {
  return <S.Container>
    <S.Title>{title}</S.Title>
    {content}
  </S.Container>
}

export default TextColumn