import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Book from './assets/book.jsx'; 
import HeaderComponent from "./assets/HeaderComponent.jsx";
import AddComponent from "./assets/AddComponent.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HeaderComponent />
    <div class="books">
      <Book class="book1"
        image="https://itbook.store/img/books/9781484289822.png"
        authors="	Sujay Raghavendra"
        link="https://itbook.store/books/9781484289822"
      />
      <Book class="book2"
        image="https://itbook.store/img/books/9781837630516.png"
        authors="Donald A. Tevault"
        link="https://example.com/book-info"
      />
      <AddComponent />
    </div>
  </React.StrictMode>
);
