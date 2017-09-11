import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook';
import Shelves from './Shelves';
import BookDemo from './BookDemo';
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchResults: [],
    }
    this.onShelfChange = this.onShelfChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.getABook = this.getABook.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => { this.setState({ books })});
  }

  getABook(id, shelf) {
    BooksAPI.get(id)
    .then((data) => {
      this.setState( (state) => {
        console.log('in this setstate meth')
        this.state.books = this.state.books
          .filter( item => (data.id !== item.id)) //filters out current book, if present
          .concat(data); // concats new book with previous state
      });
    }).catch(err => {throw new Error(err)})
  }

  onShelfChange(id, shelf) {
    console.log(id, shelf, 'arguments being passed in')
    BooksAPI.update({id: id}, shelf).then((books) => {
        this.getABook(id, shelf)
      })
    }
  
  onSearch(query) {
    console.log(query, 'search query')
    if (query !== ''){
      BooksAPI.search(query, 10).then((results) => {this.setState({searchResults: results})})
    }
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
          <Route path='/book/:id' render={() => (
            <BookDemo />
          )}/>
      </div>
    )
  }
}

export default BooksApp
