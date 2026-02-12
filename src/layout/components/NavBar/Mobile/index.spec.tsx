import { render, screen } from '@testing-library/react'
import memoryRouter from 'next-router-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import React from 'react'
import { pagesMock } from '~/src/mocks/pagesMock'

import MobileNavBar from '.'

function customRender(ui: React.ReactElement) {
  return render(
    <RouterContext.Provider value={memoryRouter}>{ui}</RouterContext.Provider>
  )
}

describe('<MobileNavBar />', () => {
  beforeEach(() => {
    customRender(<MobileNavBar pages={pagesMock} />)
  })

  it('render texts correctly', () => {
    expect(screen.getByText('Git e Versionamento')).toBeInTheDocument()
    expect(screen.getByText('My list git commands')).toBeInTheDocument()
  })
})
