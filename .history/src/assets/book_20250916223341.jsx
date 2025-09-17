
import React from "react";
import "./BookComponent.css";

const BookComponent = ({ image, title, authors, link }) => (
  <div className="book-container">
    <img className="book-image" src={image} alt={title} />
    <div className="book-info">
      <h2 className="book-title">{title}</h2>
      <p className="book-authors">{authors}</p>
      <a className="book-link" href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  </div>
);

export default BookComponent;
