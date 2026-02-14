import { render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import memoryRouter from 'next-router-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import React from 'react'

import Layout from '.'
import { PagesStoregedProvider } from '../contexts/ContextPages'

function customRender(ui: React.ReactElement) {
  return render(
    <RouterContext.Provider value={memoryRouter}>{ui}</RouterContext.Provider>
  )
}

describe('<Layout />', () => {
  const id = 'layout'

  it('should render children and components correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ results: [] }))

    customRender(
      <PagesStoregedProvider>
        <Layout>Layout</Layout>
      </PagesStoregedProvider>
    )

    await waitFor(() => {
      expect(screen.queryByTestId(`${id}__loader`)).not.toBeInTheDocument()
    })

    const children = screen.getByText('Layout')

    expect(children).toBeInTheDocument()
    expect(screen.getByTestId(`${id}__header`)).toBeInTheDocument()
    expect(screen.getByTestId(`${id}__navbar`)).toBeInTheDocument()
    expect(screen.getByTestId(`${id}__footer`)).toBeInTheDocument()
  })

  it('should render loading case correctly', async () => {
    fetchMock.mockResponse(
      () =>
        new Promise(() => {
          // @NOTE: this is a promise that never resolves, to mock loading case
        })
    )

    customRender(
      <PagesStoregedProvider>
        <Layout>Layout</Layout>
      </PagesStoregedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(`${id}__loader`)).toBeInTheDocument()
    })
  })

  it('should render error case correctly', async () => {
    fetchMock.mockReject(new Error('error bip bop'))

    customRender(
      <PagesStoregedProvider>
        <Layout>Layout</Layout>
      </PagesStoregedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('error-case__id')).toBeInTheDocument()
    })
  })
})
