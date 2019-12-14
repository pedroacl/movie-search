import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;

    .poster {
      opacity: 0.3;
      transition: 0.5s;
    }

    .overlay {
      display: grid;
    }
  }
`

export const Img = styled.img`
  height: 250px;
  border-radius: 6px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const OverlayContent = styled.div`
  display: none;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: flex-end;
  padding: 10px;
  height: 100%;
`

export const AddToFavoritesIcon = styled.img`
  height: 25px;
  justify-self: end;
`

export const MovieDescription = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 10px;
  justify-self: center;
  align-self: end;
  color: white;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`

export const Year = styled.p`
  margin: 0;
`