
function BookCard({ book }) {
    return (
      <div className="book-card">
        <img
          src={book.image}
          alt={book.title}
          style={{ width: '120px', height: '180px', objectFit: 'cover' }}
        />
        <h3>{book.title}</h3>
        <p>By: {book.author}</p>
        <a href={book.detailsUrl} target="_blank" rel="noopener noreferrer">
          More Details
        </a>
      </div>
    );
  }
  
  export default BookCard;