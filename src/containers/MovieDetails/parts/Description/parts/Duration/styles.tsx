import styled from 'styled-components'

import { customGrey } from 'containers/styles'

export const Container = styled.span`
  height: fit-content;
  align-items: center;
  display: flex;
  color: ${customGrey};
  font-size: 18px;
`

export const MiddleDot = styled.p`
  margin: 0px 8px;
`

export const Rated = styled.span`
  color: black;
  background: ${customGrey};
  padding: 5px;
  border-radius: 4px;
`