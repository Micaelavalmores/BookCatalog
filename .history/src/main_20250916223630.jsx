import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import book from "./"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      </App> 
  </StrictMode>,
)
