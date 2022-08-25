import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "./libraries/api/apiSlice"
import { Provider } from "react-redux"

import "./index.css"
import App from "./App"
import store from "./libraries/store/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
