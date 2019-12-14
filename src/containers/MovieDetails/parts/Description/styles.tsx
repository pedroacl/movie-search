import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 40px;
`

export const Title = styled.h1`
  font-size: 60px;
  color: white;
  margin: 0;
`

export const BackButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`