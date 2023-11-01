import { render, screen } from '@testing-library/react'

import About from './index.page'

describe('About page', () => {
  it('should render the title, subtitle, and content', () => {
    render(<About />)

    expect(screen.getByText('Sandevistan')).toBeInTheDocument()
    expect(
      screen.getByText(/My Virtual Library of Software Engineering Studies./i)
    ).toBeInTheDocument()
  })

  it('should render the GitHub repository link', () => {
    render(<About />)

    const linkElement = screen.getByText('GitHub repository')

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/gabrielduete/sandevistan'
    )
  })
})
