import styled from 'styled-components'

import Input from 'components/Input'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 10px;
  padding: 10px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
`

export const StyledInput = styled(Input)`
  input {
    border-width: 0px;
    border: none;
  }
`

export const SearchIcon = styled.img`
  height: 30px;
`