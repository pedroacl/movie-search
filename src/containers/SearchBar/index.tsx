import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import SearchIcon from 'assets/icon-magnifier-grey.svg'

import * as S from './styles'

type Params = {
  loadMovies: (search: string) => void
}

const SearchBar: React.FC<Params> = ({ loadMovies }) => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleSubmitForm = (e: React.MouseEvent<HTMLImageElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push('/')
    loadMovies(search)
  }

  return <S.Container>
    <S.SearchIcon src={SearchIcon} alt="search-icon" onClick={handleSubmitForm} />

    <form onSubmit={handleSubmitForm}>
      <S.StyledInput
        type="text"
        name="search-field"
        placeholder='Search movies...'
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  </S.Container>
}

export default SearchBar


