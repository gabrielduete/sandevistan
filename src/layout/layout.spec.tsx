import { render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'

import Layout from '.'
import { PagesStoregedProvider } from '../contexts/ContextPages'

describe('<Layout />', () => {
  const id = 'layout'

  it('should render children and components correctly', () => {
    render(<Layout>Layout</Layout>)

    const children = screen.getByText('Layout')

    expect(children).toBeInTheDocument()
    expect(screen.getByTestId(`${id}__header`)).toBeInTheDocument()
    expect(screen.queryByTestId(`${id}__navbar`)).not.toBeInTheDocument()
    expect(screen.getByTestId(`${id}__footer`)).toBeInTheDocument()
  })

  it('should render loading case correctly', async () => {
    fetchMock.mockResponse(
      () =>
        new Promise(() => {
          // @NOTE: this is a promise that never resolves, to mock loading case
        })
    )

    render(
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

    render(
      <PagesStoregedProvider>
        <Layout>Layout</Layout>
      </PagesStoregedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('error-case__id')).toBeInTheDocument()
    })
  })
})
