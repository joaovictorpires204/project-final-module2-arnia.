import { Normalize } from 'styled-normalize'
import GlobalStyle from '../../assets/styles/globalstyle'
import { Router } from '../../routes'

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
