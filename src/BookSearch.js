import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component {
  state = {
    query: '',
  }
  onSearch(searchQuery) {
    BooksAPI.search(searchQuery);
  }
  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                onChange={(event) => { this.onSearch(event.target.value)}}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
    )
  }
}
export default BookSearch;