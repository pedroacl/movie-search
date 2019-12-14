import React from 'react'
import Icon from 'assets/icon-magnifier-grey.svg'

import * as S from './styles'

const SearchBar = () => {
  return <S.Container>
    <S.SearchIcon src={Icon} alt="search-icon" />
    <S.StyledInput name="search-field" placeholder="Search movies..."/>
  </S.Container>
}

export default SearchBar


