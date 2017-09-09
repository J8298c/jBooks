import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function SearchBook(props) {
  console.log(props, 'props in booksearch');
  const results = props.searchResults.map((results) => (
    <Link to={`/book/${results.id}`}><Book bookTitle={results.title} bookAuthors={results.authors} imageUrl={results.imageLinks.thumbnail}
      onShelfChange={props.onShelfChange} key={results.id}
    /></Link>
  ))
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={props.onChange}/>
        </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {props.searchResults.length > 0 ? results : 'Sorry try a different search'}
          </ol>
        </div>
    </div>
  )
}

export default SearchBook;