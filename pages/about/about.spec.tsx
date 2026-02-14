import { render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import memoryRouter from 'next-router-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import React from 'react'
import { PagesStoregedProvider } from '~/src/contexts/ContextPages'

import About from './index.page'

function customRender(ui: React.ReactElement) {
  return render(
    <RouterContext.Provider value={memoryRouter}>{ui}</RouterContext.Provider>
  )
}

describe('About page', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should render the title, subtitle, and content', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ results: [] }))

    customRender(
      <PagesStoregedProvider>
        <About />
      </PagesStoregedProvider>
    )

    await waitFor(() => {
      expect(screen.queryByTestId('layout__loader')).not.toBeInTheDocument()
    })

    expect(screen.getByText('Sandevistan')).toBeInTheDocument()
    expect(
      screen.getByText(/My Virtual Library of Software Engineering Studies./i)
    ).toBeInTheDocument()
  })

  it('should render the GitHub repository link', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ results: [] }))

    customRender(
      <PagesStoregedProvider>
        <About />
      </PagesStoregedProvider>
    )

    await waitFor(() => {
      expect(screen.queryByTestId('layout__loader')).not.toBeInTheDocument()
    })

    const linkElement = screen.getByText('GitHub repository')

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/gabrielduete/sandevistan'
    )
  })
})
