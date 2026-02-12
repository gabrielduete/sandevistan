import { render, screen } from '@testing-library/react'
import memoryRouter from 'next-router-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import React from 'react'

import About from './index.page'

function customRender(ui: React.ReactElement) {
  return render(
    <RouterContext.Provider value={memoryRouter}>{ui}</RouterContext.Provider>
  )
}

describe('About page', () => {
  it('should render the title, subtitle, and content', () => {
    customRender(<About />)

    expect(screen.getByText('Sandevistan')).toBeInTheDocument()
    expect(
      screen.getByText(/My Virtual Library of Software Engineering Studies./i)
    ).toBeInTheDocument()
  })

  it('should render the GitHub repository link', () => {
    customRender(<About />)

    const linkElement = screen.getByText('GitHub repository')

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/gabrielduete/sandevistan'
    )
  })
})
