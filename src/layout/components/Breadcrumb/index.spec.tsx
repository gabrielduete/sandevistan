/* eslint-disable @typescript-eslint/no-var-requires */
import { fireEvent, render, screen } from '@testing-library/react'

import Breadcrumb from '.'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '/about/test/param',
      push: jest.fn(),
    }
  },
}))

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

beforeEach(() => {
  render(<Breadcrumb />)
})

describe('<Breadcrumb />', () => {
  it('should render params correctly', () => {
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('Param')).toBeInTheDocument()
  })

  it('should redirect to link when param is clicked', () => {
    fireEvent.click(screen.getByText('About'))

    expect(useRouter).toHaveBeenCalled()
  })
})
