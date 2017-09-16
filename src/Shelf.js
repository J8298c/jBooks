import React from 'react';
import Book from './Book';

function Shelf(props) {
  console.log(props, 'props in the shelf component');
  const showBooks = props.books.map((book) => (
    <Book bookTitle={book.title} bookAuthor={book.authors} bookID={book.id}
      imageUrl={book.imageLinks.thumbnail} key={book.id} onShelfChange={props.onShelfChange}
      pathTo={`/book/${book.id}`}
    />
  ))
  return(
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