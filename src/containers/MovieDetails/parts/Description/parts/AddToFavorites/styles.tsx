import styled from 'styled-components'

import { customGrey } from 'containers/styles'

export const Container = styled.div`
  display: flex;
  color: white;
  width: fit-content;
  padding: 10px;
  border: 1px solid ${customGrey};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`

export const Value = styled.div`
  padding: 10px;
`

export const StyledIcon = styled.img`
  height: 20px;
  margin-right: 10px;
`

export const Text = styled.p`
  margin: 0;
  color: ${customGrey};
`