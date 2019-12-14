import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr) );
  justify-items: center;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  align-self: flex-start;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`