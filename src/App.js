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
      read: [],
    };
    this.onShelfChange = this.onShelfChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.getAllBookOnShelf = this.getAllBookOnShelf.bind(this);
    this.checkInBooks = this.checkInBooks.bind(this);
  }

  componentDidMount() {
    this.getAllBookOnShelf();
  }
  /**
   * handles switching the current shelf for books
   * 
   * 
   * @param {any} id
   * @param {any} shelf 
   * @memberof BooksApp
   */
  onShelfChange(id, shelf) {
    BooksAPI.update({id: id}, shelf).then((books) => {
      BooksAPI.getAll()
      .then((books) => { 
        this.setState({ books })
        this.checkInBooks(books);
      })
    })
  }

  /**
   * returns all books from current api endpoint
   * 
   * @memberof BooksApp
   */

  getAllBookOnShelf() {
    BooksAPI.getAll()
      .then((books) => { this.setState({books})});
  }

  /**
   * takes in user input when search for a book 
   * and displays the results has a helper function
   * called check in books
   * 
   * @param {any} query 
   * @memberof BooksApp
   */
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

  /**
   * takes in array of books from search results
   * maps through and adds key shelf and value none
   * to books which dont have a shelf value
   * 
   * @param {any} books 
   * @memberof BooksApp
   */
  checkInBooks(books) {
    const results = [];
    const read = [];
    books.map((book) => {
      if(!book.shelf){
        book.shelf = 'none';
        results.push(book);
        return results;
      } else if (book.shelf = read){
        read.push(book);
        this.setState({read})
      }    
    })
  }

  /**
   * finds a single book to display
   * within the bookdemo page
   * 
   * @param {any} id 
   * @memberof BooksApp
   */
  getABook(id) {
    console.log(id, 'param id')
    BooksAPI.get(id)
      .then((book) => { console.log(book), this.setState({book})})
  }

  
  render() {
    console.log(this.state.book, 'single book');
    console.log(this.state.read, 'read books');
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
