import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Shelves from './Shelves';
import SearchBook from './SearchBook';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        read: [],
        wantToRead: [],
        currentlyReading: [],
      },
      searchResults: [],
    }
    this.openLibrary = this.openLibrary.bind(this);
    this.stockShelves = this.stockShelves.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.addShelftoBooks = this.addShelftoBooks.bind(this);
    this.onShelfChange = this.onShelfChange.bind(this);
    this.fixShelves = this.fixShelves.bind(this);
  }

  componentDidMount() {
    this.openLibrary();
  }

  openLibrary() {
    this.stockShelves();
  }

  stockShelves() {
    BooksAPI.getAll()
      .then(books => {
        let clearedBooks = this.fixShelves(books)
        console.log(clearedBooks);
        const read = this.librarian(clearedBooks, 'read');
        const wantToRead = this.librarian(clearedBooks, 'wantToRead');
        const currentlyReading = this.librarian(clearedBooks, 'currentlyReading');
        this.setState({
          books: {
            read,
            currentlyReading,
            wantToRead
          },
          results: [],
        })
      })
  }

  librarian(books, shelfName) {
    return books.filter(book => book.shelf === shelfName)
  }

  onSearch(query) {
    if(query !== ''){
      BooksAPI.search(query)
      .then(results => {
        this.addShelftoBooks(results);
        this.setState({searchResults: results});
      })
    }
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
  fixShelves(books) {
    let shelfed =[];
     books.map(book => { 
       book.shelf = book.shelf
       shelfed.push(book);
      });
      return shelfed;
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
          <Route path='/search' render={() => (
            <SearchBook 
              onChange={(event) => {this.onSearch(event.target.value)}} onShelfChange={this.onShelfChange} searchResults={this.state.searchResults}
            />
          )}/>
          <Route exact path='/' render={() => (
            <Shelves books={this.state.books} onShelfChange={this.onShelfChange}/>
          )}/>
      </div>
    )
  }
}
export default App;

