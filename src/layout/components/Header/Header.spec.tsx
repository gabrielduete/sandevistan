import { render, screen } from '@testing-library/react'

import Header from '.'
import { items } from './Header.data'

describe('<Header />', () => {
  const texts = items.map(item => item.name)

  it.each(texts)('should render %s text correctly', text => {
    render(<Header />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
