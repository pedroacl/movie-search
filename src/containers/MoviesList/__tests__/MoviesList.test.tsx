import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import MoviesList from '..'

import { movies } from 'utils/testUtils'

describe('<MoviesList />', () => {
  it('renders a list of movies', () => {
    const { getByAltText } = render(<MoviesList movies={movies} />, { wrapper: MemoryRouter })
    expect(getByAltText("In Time")).toBeDefined()
    expect(getByAltText("Once Upon a Time in America")).toBeDefined()
  })
})