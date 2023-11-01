import { createGlobalStyle } from 'styled-components'

const TextsStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-size: 64px;
    letter-spacing: 10px;
    font-weight: 700;
  }

  p{
    font-size: 20px;
    font-weight: 500;
    margin: var(--spacing-basic) 0;
  }

  a{
    color: var(--green-white);
    text-decoration: none;
    transition:  0.3s;
  }

  a:hover{
    color: var(--white);
  }
`

export default TextsStyle
