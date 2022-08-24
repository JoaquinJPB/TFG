import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "./libraries/api/apiSlice"

import "./index.css"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
