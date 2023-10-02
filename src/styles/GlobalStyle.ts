import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }

  :root{
    // Colors
    --black: #21272E;
    --green-dark: #122226;
    --green: #1A3038;
    --green-white-regular: #1D333D; 
    --green-white-bold: #223943;
    --green-white: #3C5768; 
    --white: #FFFFFF;

    // Spacings
    --spacing-basic: 16px;
    --spacing-medium: 24px;
    --spacing-xmedium: 36px;

    // Fonts
    --font-medium: 24px;
    --font-large: 96px;
  }
`

export default GlobalStyle
