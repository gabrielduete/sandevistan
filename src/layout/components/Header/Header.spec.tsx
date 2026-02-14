import { render, screen } from '@testing-library/react'
import { pagesMock } from '~/src/mocks/pagesMock'

import Header from '.'
import { items } from './Header.data'

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

describe('<Header />', () => {
  const texts = items.map(item => item.name)

  it.each(texts)('should render %s text correctly', text => {
    render(<Header pages={pagesMock} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
