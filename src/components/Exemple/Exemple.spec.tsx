import React from 'react'
import { render, screen } from '@testing-library/react'
import Exemple from '.'

describe('<Exemple />', () => {
  it('should render the component', () => {
    render(<Exemple pascalCase='Test' />)

    expect(screen.getByTestId('exemple')).toBeInTheDocument()
  })
})
