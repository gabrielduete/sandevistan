import { render, screen } from '@testing-library/react'

import Text from '.'

describe('<Text />', () => {
  const title = [
    {
      annotations: {
        bold: false,
        code: false,
        color: '',
        italic: false,
        strikethrough: false,
        underline: false,
      },
      text: {
        content: 'Hello, World!',
        link: {
          url: 'https://eoqjest.com',
        },
      },
    },
  ]

  it('should render text content', () => {
    render(<Text title={title} />)

    const linkElement = screen.getByText('Hello, World!')

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
  })
})
