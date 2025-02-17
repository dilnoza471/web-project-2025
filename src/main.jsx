import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fonts from './Fonts.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Fonts />
      <App />
  </StrictMode>,
)
