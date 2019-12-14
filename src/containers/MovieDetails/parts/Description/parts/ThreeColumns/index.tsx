import React from 'react'

import Paragraph from 'components/Paragraph'
import TextColumn from 'components/TextColumn'

import * as S from './styles'

type Props = {
  movie: any
}

const ThreeColumns: React.FC<Props> = ({ movie }) => {
  const parseColumn = (content: string) => {
    const data = content.split(',').map(content => <Paragraph>{content.trim()}</Paragraph>)
    return <>{data}</>
  }

  return <S.Container>
    <TextColumn title='Cast' content={parseColumn(movie.Actors)} />
    <TextColumn title='Genre' content={parseColumn(movie.Genre)} />
    <TextColumn title='Director' content={parseColumn(movie.Director)} />
  </S.Container>
}

export default ThreeColumns