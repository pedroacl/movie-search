import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import MovieCard from '..'

import { movies } from 'utils/testUtils'

describe('<MovieCard />', () => {
  const movie = movies[0]

  it('renders a movie card', () => {
    const { getByAltText } = render(<MovieCard movie={movie} />, { wrapper: MemoryRouter })
    expect(getByAltText(movie.Title)).toBeDefined()
  })
})