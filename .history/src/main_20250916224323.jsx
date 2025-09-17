import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import book from './assets/book';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <book
      image="https://covers.openlibrary.org/b/id/987654321-L.jpg"
      authors="Alice Author, Bob Writer"
      link="https://example.com/book-info"
    />
  </React.StrictMode>
);