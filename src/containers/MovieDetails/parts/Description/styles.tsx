import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 26px;
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

export const RatingsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: max-content max-content max-content;
  grid-column-gap: 15px;

`