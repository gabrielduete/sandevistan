import { createGlobalStyle } from 'styled-components'

const TextsStyle = createGlobalStyle`
  h1, h2, h3, h4 {
    margin-top: var(--spacing-medium);
    margin-bottom: var(--spacing-basic-small);
  }

  h1 {
    font-size: var(--font-large);
    letter-spacing: 10px;
    font-weight: 700;
  }

  h2{
    font-size: var(--font-xxxmedium);
  }  
  
  h3{
    font-size: var(--font-xxmedium);
  }

  p{
    font-size: var(--font-small);
    font-weight: 500;
    margin: var(--spacing-basic-small) 0;
  }

  a{
    color: var(--green-white);
    text-decoration: none;
    transition:  0.3s;
  }

  a:hover{
    color: var(--white);
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }
`

export default TextsStyle
