import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import book from './assets/book';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <book
      image="https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_incoming&w=740&q=80"
      authors="Alice Author, Bob Writer"
      link="https://example.com/book-info"
    />
  </React.StrictMode>
);