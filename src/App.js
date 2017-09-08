import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook';
import Shelves from './Shelves';
import BookDemo from './BookDemo';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
  }
  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => { this.setState({ books })});
  }

  onShelfChange(book, shelf) {
    console.log(book, shelf, 'update params book and shelf');
    BooksAPI.update(book, shelf)
         
  }
  onSearch(query) {
    console.log(query, 'search query')
    BooksAPI.search(query, 10).then((results) => {this.setState({searchResults: results})})
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
