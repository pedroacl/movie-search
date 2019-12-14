import styled from 'styled-components'

import { customGrey } from 'containers/styles'

export const Container = styled.div`
  display: flex;
  color: white;
  width: fit-content;
`

export const Label = styled.div`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 10px;
  background: ${({color}) => color};
  `

export const Value = styled.div`
  padding: 10px;
  border-width: 1px 1px 1px 0;
  border-color: ${customGrey};
  border-style: solid;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`