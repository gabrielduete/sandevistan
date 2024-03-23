import { render, screen } from '@testing-library/react'

import Footer from '.'
import { items } from './Footer.data'

describe('<Footer />', () => {
  const texts = items.map(item => item.name)

  it.each(texts)('should render %s text correctly', text => {
    render(<Footer />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
