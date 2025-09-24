import './Book.css'
function Book ({image, author, url }) {
    return (
        <div className="Book">
            <img className='Image' src={image} alt={title} />
            <div className='BookContent'>
                <span className="By">by</span>
                <span className="author">{author}</span>
            </div>
            <a className='url' href={url}>Learn more...</a>
        </div>
    )
}
export default Book;
