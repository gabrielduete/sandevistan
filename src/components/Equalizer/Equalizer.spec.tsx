import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Equalizer from '.'

describe('<Equalizer />', () => {
  const lineId = 'equalizer_line'

  it('should render line when isOpen is true', () => {
    render(<Equalizer />)

    expect(screen.getByTestId(lineId)).toBeInTheDocument()
  })

  it('should render closedLine when isOpen is false', () => {
    render(<Equalizer />)

    fireEvent.click(screen.getByTestId(lineId))

    expect(screen.getByTestId('equalizer_closedLine')).toBeInTheDocument()
  })
})
