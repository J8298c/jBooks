import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    searchResults: [],
  };
  updateQuery(query) {
    console.log(query);
    BooksAPI.search(query).then((books) => { this.setState({ searchResults: books})})
  }
  render() {
    const { searchResults } = this.state;
    const displayBooks = searchResults.map((book) => (
      <Book bookImage={book.imageLinks.thumbnail} bookAuthor={book.authors} bookTitle={book.title} key={book.id} />
    ))
    console.log(this.state.searchResults, 'the search results');
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <div className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
          <Link to='/'>Close</Link>
          </div>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" 
          onChange={(event) => {this.updateQuery(event.target.value)}}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { searchResults ? displayBooks : '..Search for a Book'  }
        </ol>
      </div>
    </div>
    )
  }
}
export default Search;
  

