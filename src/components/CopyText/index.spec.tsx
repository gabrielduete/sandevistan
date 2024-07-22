import { fireEvent, render, screen } from '@testing-library/react'

import CopyText from './index'

describe('<CopyText />', () => {
  const value = 'go é brabo!'

  const writeTextMock = jest.fn()

  Object.assign(navigator, {
    clipboard: {
      writeText: writeTextMock,
    },
  })

  it('should copy the value to clipboard and show text "Copiado!" whe clicked', () => {
    render(<CopyText value={value} />)

    fireEvent.click(screen.getByTestId('copy-icon'))

    expect(writeTextMock).toHaveBeenCalledWith(value)
    expect(screen.getByText('Copiado!')).toBeInTheDocument()
  })
})
