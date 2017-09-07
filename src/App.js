import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook';
import Shelves from './Shelves';
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
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
    BooksAPI.search(query)
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
          <Route path='/search' render={() => (
            <SearchBook onChange={(event) => { this.onSearch(event.target.value)}}
            />
          )}/>
          <Route exact path='/' render={() => (
            <Shelves books={books}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
