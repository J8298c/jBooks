import React from 'react';
import Book from './Book';

function Shelf(props) {
  console.log(props);
  const showBooks = props.books.map((book) => (
    <Book 
    bookTitle={book.title} bookAuthors={book.authors} imageUrl={book.imageLinks.thumbnail} onShelfChange={props.onShelfChange} bookID={book.id}
    key={book.id} bookShelf={book.shelf}
    />
  ))
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {showBooks}
        </ol>
      </div>
    </div>
  )
}
export default Shelf;