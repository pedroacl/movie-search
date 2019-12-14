import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const Paragraph: React.FC<Props> = ({ children }) => <S.Paragraph>{children}</S.Paragraph>

export default Paragraph