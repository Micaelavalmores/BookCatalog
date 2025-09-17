import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import book from "./assets/book"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
    <BookComponent
      image="https://covers.openlibrary.org/b/id/987654321-L.jpg"
      title="Book Title"
      authors="Jane Doe, John Smith"
      link="https://somebookpage.com"
    />
  </StrictMode>,
)
