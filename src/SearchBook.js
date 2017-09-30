import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function SearchBook(props) {
  const results = props.searchResults.map(result => (
    <Book bookTitle={result.title} bookAuthor={result.author} 
      imageUrl={result.imageLinks.thumbnail} bookShelf={result.shelf} 
      onShelfChange={props.onShelfChange} key={result.id} bookID={result.id}
      />
  ))
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={event => props.onSearch(event.target.value)}/>
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