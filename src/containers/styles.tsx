import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 65%);
  grid-template-rows: 70px auto 1fr;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const WhatsIn = styled.img`
  height: 35px;
  margin-bottom: 10px 0;
`

export const CircularProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
`