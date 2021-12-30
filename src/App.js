import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import MainLayout from '../src/layout/PublicRoutes'
import theme from './theme'

// import SignUp from './Component/Signup/SignUp'

function App() {
  useEffect(() => {
    document.title = 'Sorting Visualizer'
  })
  return (
    <>
      {/* <SignUp /> */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
