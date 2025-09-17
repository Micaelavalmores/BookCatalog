import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Book from './bookComponent/book.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      B
      </App> 
  </StrictMode>,
)
