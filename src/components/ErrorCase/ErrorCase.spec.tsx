import { render, screen } from '@testing-library/react'

import ErrorCase from '.'

describe('<ErrorCase />', () => {
  it('should render the ErrorCase component', () => {
    render(<ErrorCase onClick={jest.fn()} />)

    expect(
      screen.getByText('Something went wrong. Please try again.')
    ).toBeInTheDocument()
  })
})
