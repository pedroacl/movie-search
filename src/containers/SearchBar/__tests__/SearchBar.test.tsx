import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import SearchBar from '..'

describe('<SearchBar />', () => {
  it('renders a movie card', () => {
    const { getByPlaceholderText } = render(<SearchBar loadMovies={() => {}} />, { wrapper: MemoryRouter })
    expect(getByPlaceholderText('Search movies...')).toBeDefined()
  })
})