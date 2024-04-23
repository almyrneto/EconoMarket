import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './assets/style/global'
import { AppRouter } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>,
)
