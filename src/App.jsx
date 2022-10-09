import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import { ToastContainer } from "react-toastify"
import StickyFooter from "./components/StickyFooter"
import LandingPage from "./pages/LandingPage"
import "react-toastify/ReactToastify.min.css"
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <StickyFooter />
      </ThemeProvider>
    </>
  )
}

export default App
