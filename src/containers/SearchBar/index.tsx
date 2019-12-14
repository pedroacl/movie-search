import React, { useState } from 'react'
import Icon from 'assets/icon-magnifier-grey.svg'

import * as S from './styles'

type Params = {
  loadMovies: (search: string) => void
}

const SearchBar: React.FC<Params> = ({ loadMovies }) => {
  const [search, setSearch] = useState('')

  const handleSubmitForm = (e: any) => {
    e.preventDefault()
    loadMovies(search)
  }

  return <S.Container>
    <img src={Icon} alt="search-icon" />
    <form onSubmit={handleSubmitForm}>
      <S.StyledInput type="text" name="search-field" placeholder='Search movies...' onChange={e => setSearch(e.target.value)}/>
    </form>
  </S.Container>
}

export default SearchBar


