import { fireEvent, render, screen } from '@testing-library/react'

import Home from './index.page'

describe('<Home />', () => {
  beforeAll(() => {
    window.Element.prototype.animate = jest.fn()
  })

  it('should render the title and explore link', () => {
    render(<Home />)

    expect(screen.getAllByText('sandevistan')[0]).toBeInTheDocument()
    expect(screen.getByText('explore')).toBeInTheDocument()
  })

  it('should navigate to the about page when explore link is clicked', () => {
    render(<Home />)
    window.open = jest.fn()

    const exploreLink = screen.getByText('explore')

    fireEvent.click(exploreLink)

    expect(window.open).toHaveBeenCalledTimes(1)
    expect(window.open).toHaveBeenCalledWith('/about', '_self', 'noreferrer')
  })
})
