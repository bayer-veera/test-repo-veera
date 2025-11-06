import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CloudFrontThemeProvider defaultTheme="stewart">
      <App />
    </CloudFrontThemeProvider>
  </React.StrictMode>,
)
