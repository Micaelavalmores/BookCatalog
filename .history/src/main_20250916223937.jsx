import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import book from "./assets/book.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BookComponent
      image="https://covers.openlibrary.org/b/id/987654321-L.jpg"
      title="Example Book Title"
      authors="Alice Author, Bob Writer"
      link="https://example.com/book-info"
    />
  </React.StrictMode>
);