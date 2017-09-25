import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook';
import Shelves from './Shelves';
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchResults: [],
      book: [],
    };
    this.onShelfChange = this.onShelfChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.getAllBookOnShelf = this.getAllBookOnShelf.bind(this);
    this.checkInBooks = this.checkInBooks.bind(this);
  }

  componentDidMount() {
    this.getAllBookOnShelf();
  }
  onShelfChange(book, shelf) {
    BooksAPI.update({id: book}, shelf).then((books) => {
      BooksAPI.getAll()
      .then((books) => { this.setState({ books })})
    })
  }

  getAllBookOnShelf() {
    BooksAPI.getAll()
      .then((books) => { this.setState({books})});
  }
  onSearch(query) {
    if (query !== ''){
      BooksAPI.search(query, 10)
      .then((results) => {
        //results dont have a shelf
        this.checkInBooks(results);
        console.log(results);
        this.setState({searchResults: results})
      })
    }
  }
  checkInBooks(books) {
    const results = [];
    books.map((book) => {
      if(!book.shelf){
        book.shelf = 'none';
        results.push(book);
      }
      return results;
    })
  }
  getABook(id) {
    console.log(id, 'param id')
    BooksAPI.get(id)
      .then((book) => { console.log(book), this.setState({book})})
  }
  render() {
    console.log(this.state.book, 'single book');
    const { books } = this.state;
    return (
      <div className="app">
          <Route path='/search' render={() => (
            <SearchBook 
            onChange={(event) => { this.onSearch(event.target.value)}}
            onShelfChange={this.onShelfChange}
            searchResults={this.state.searchResults}
            />
          )}/>
          <Route exact path='/' render={() => (
            <Shelves books={books} onShelfChange={this.onShelfChange}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp;
