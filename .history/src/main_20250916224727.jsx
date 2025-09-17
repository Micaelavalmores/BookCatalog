import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Book from './assets/book.jsx';  // Make sure filename and extension are correct

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Book
      image="https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_incoming&w=740&q=80"
      authors="Alice Author, Bob Writer"
      link="https://example.com/book-info"
    />
  </React.StrictMode>
);
