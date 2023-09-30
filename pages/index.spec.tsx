import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '.'

describe('<Home />', () => {
  it('should render Home correctly', () => {
    render(<Home />)

    expect(screen.getByText('sandevistan')).toBeInTheDocument()
  })
})
