import { render, screen } from '@testing-library/react'
import { pagesMock } from '~/src/mocks/pagesMock'

import MobileNavBar from '.'

describe('<MobileNavBar />', () => {
  beforeEach(() => {
    render(<MobileNavBar pages={pagesMock} />)
  })

  it('render texts correctly', () => {
    expect(screen.getByText('Git e Versionamento')).toBeInTheDocument()
    expect(screen.getByText('My list git commands')).toBeInTheDocument()
  })
})
