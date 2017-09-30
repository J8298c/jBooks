import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelves from './Shelves';
import SearchBook from './SearchBook';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchResults: [],
    }
    this.stockShelves = this.stockShelves.bind(this);
    this.onShelfChange = this.onShelfChange.bind(this);
  }

  componentDidMount() {
    this.stockShelves();
  }

  onSearch(query) {
    BooksAPI.search(query)
      .then(books => {
        console.log(books);
      })
  }

  stockShelves() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  onShelfChange(id, shelf) {
    console.log(id, shelf);
    BooksAPI.update({id: id}, shelf).then((books) => {
      this.stockShelves();
    })
  }
  

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <Shelves books={this.state.books} onShelfChange={this.onShelfChange}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBook books={this.state.books} onShelfChange={this.onShelfChange}
              onSearch={this.onSearch} searchResults={this.state.searchResults} />
          )} />
      </div>
    )
  }
}
export default App;