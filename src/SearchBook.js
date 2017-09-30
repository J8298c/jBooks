
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: [],
    }
    this.onSearch = this.onSearch.bind(this);
    this.addShelftoBooks = this.addShelftoBooks.bind(this);
  }
  addShelftoBooks(books){
    const results =[];
    books.map(book => {
      if(!book.shelf){
        book.shelf = 'none';
        results.push(book);
      } 
      return results;
    })
  }
  onSearch(query) {
    query = this.state.query;
    console.log(query);
    if(query !== ''){
      BooksAPI.search(query)
      .then(results => {
        this.addShelftoBooks(results);
        this.setState({searchResults: results});
      })
    }
  }
  render() {
    const results = this.state.searchResults.map(result => {
      <Book bookID={result.id} bookShelf={result.shelf} bookTitle={result.title} 
        bookAuthor={result.authors} onShelfChange={this.props.onShelfChange} imageUrl={result.imageLinks.thumbnail} 
        />
    })
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={event => { this.setState({query: event.target.value})}}/>
        </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.length > 0 ? results : ''}
          </ol>
        </div>
    </div>
    )
  }
}
export default SearchBook;
