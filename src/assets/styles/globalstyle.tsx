import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
--primary-color: #00995D;
--secondary-color: #6F6F6E;
--white-color: #FFFFFF;
--bg-color: #bdbdbd;
}

body{
  margin: 0;
    padding: 0;
    background-color: #E5E5E5; 
    font-family: 'Montserrat', sans-serif; 
}
`

export default GlobalStyle
