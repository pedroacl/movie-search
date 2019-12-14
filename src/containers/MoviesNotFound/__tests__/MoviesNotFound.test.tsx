import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import MoviesNotFound from '..'

describe('<MovieCard />', () => {
  it('renders a movie card', () => {
    const { getByText } = render(<MoviesNotFound />, { wrapper: MemoryRouter })
    expect(getByText("Don't know what to search")).toBeDefined()
  })
})
