import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 10px;
  padding: 5px 10px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  height: 30px;
  margin-bottom: 15px;
`

export const StyledInput = styled.input`
    border: 0;
    width: 100%;
    font-size: 16px;
`
