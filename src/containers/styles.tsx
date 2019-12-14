import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 65%);
  grid-template-rows: 110px auto 1fr;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const WhatsIn = styled.img`
  height: 35px;
`

export const CircularProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const customGrey = '#7A8C99'