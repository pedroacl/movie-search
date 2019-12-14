import React from 'react'

import Paragraph from 'components/Paragraph'
import TextColumn from 'components/TextColumn'

import * as S from './styles'
import { MovieDetails } from 'types/movie'

type Props = {
  movie: MovieDetails
}

const ThreeColumns: React.FC<Props> = ({ movie }) => {
  const parseColumn = (content: string | undefined) => {
    if (!content) return <Paragraph>'N/A'</Paragraph>
    const data = content.split(',').map(content => <Paragraph key={content}>{content.trim()}</Paragraph>)
    return <>{data}</>
  }

  return <S.Container>
    <TextColumn title='Cast' content={parseColumn(movie.Actors)} />
    <TextColumn title='Genre' content={parseColumn(movie.Genre)} />
    <TextColumn title='Director' content={parseColumn(movie.Director)} />
  </S.Container>
}

export default ThreeColumns