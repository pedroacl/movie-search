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
      display: flex;
    }

    .add-to-favorites {
      display: flex;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`

export const Img = styled.img`
  height: 250px;
  border-radius: 6px;
  max-width: 200px;
`

export const OverlayContent = styled.div`
  display: none;
  justify-content: flex-end;
  padding: 10px;
  height: 100%;
`

export const AddToFavoritesIcon = styled.img`
  display: none;
  height: 25px;
  justify-self: end;
  padding: 10px;
`

export const MovieDescription = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 10px;
  justify-self: center;
  align-self: end;
  color: white;
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`

export const Year = styled.p`
  margin: 0;
`