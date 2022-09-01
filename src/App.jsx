import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import StickyFooter from "./components/StickyFooter"
import LandingPage from "./pages/LandingPage"
//import styles from './styles/App.module.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e6bbf",
    },
  },
})

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingPage />
        <StickyFooter />
      </ThemeProvider>
    </>
  )
}

export default App
