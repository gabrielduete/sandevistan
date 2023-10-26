import { render, screen } from '@testing-library/react'

import Layout from '.'

describe('<Layout />', () => {
  it('should render children Layout correctly', () => {
    render(<Layout>Layout</Layout>)

    const children = screen.getByText('Layout')

    expect(children).toBeInTheDocument()
  })

  it.todo('should render Header, Footer and NavBar components correctly')
})
