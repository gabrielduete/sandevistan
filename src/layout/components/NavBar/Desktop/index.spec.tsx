import { render, screen } from '@testing-library/react'
import { pagesMock } from '~/src/mocks/pagesMock'

import DesktopNavBar from '.'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
    }
  },
}))

describe('<DesktopNavBar />', () => {
  beforeEach(() => {
    render(<DesktopNavBar pages={pagesMock} />)
  })

  it('render texts correctly', () => {
    expect(screen.getByText('Git e Versionamento')).toBeInTheDocument()
    expect(screen.getByText('My list git commands')).toBeInTheDocument()
  })
})
