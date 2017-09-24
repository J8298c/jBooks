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
  }

  componentDidMount() {
    this.getAllBookOnShelf();
  }
  onShelfChange(id, shelf) {
    console.log(id, shelf)
    BooksAPI.update({id}, shelf)
    this.getAllBookOnShelf();
  }
  getAllBookOnShelf() {
    BooksAPI.getAll()
      .then((books) => { this.setState({books})});
  }
  onSearch(query) {
    if (query !== ''){
      BooksAPI.search(query, 10).then((results) => {this.setState({searchResults: results})})
    }
  }
  getABook(bookID) {
    BooksAPI.get(bookID)
      .then((book) => { this.setState({book})})
  }
  render() {
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
