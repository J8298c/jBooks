import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function SearchBook(props) {
  const {read, wantToRead, currentlyReading} = props.books;
  const stateBooks = read.concat(wantToRead, currentlyReading);
  console.log(stateBooks);
  props.searchResults.map(result => {
    stateBooks.map(book => {
      if(book.title === result.title){
        console.log(book.title);
      }
    })
  })
  const results = props.searchResults.map(book => (
    <Book bookTitle={book.title} bookAuthors={book.authors} imageUrl={book.imageLinks.thumbnail}
      onShelfChange={props.onShelfChange} key={book.id} bookID={book.id} bookShelf={book.shelf}
      />
  ))
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={props.onChange} />
        </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {props.searchResults.length > 0 ? results : ''}
          </ol>
        </div>
    </div>
  )
}
export default SearchBook;
