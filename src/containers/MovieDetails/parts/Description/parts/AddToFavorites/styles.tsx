import styled from 'styled-components'

import { customGrey } from 'containers/styles'

export const Container = styled.div<{isFavorite: boolean}>`
  display: flex;
  width: fit-content;
  padding: 10px;
  border: 1px solid ${({isFavorite}) => isFavorite ? 'red' : customGrey};
  border-radius: 4px;
  background-color: ${({isFavorite}) => isFavorite ? 'red' : ''};

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

export const Text = styled.p<{isFavorite: boolean}>`
  margin: 0;
  color: ${({isFavorite}) => isFavorite ? 'white' : customGrey};

`