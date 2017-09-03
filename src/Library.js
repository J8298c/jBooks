import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelves';
class Library extends Component {
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books });
    })
  }
  render() {
    console.log(this.state, 'the state');
    return (
      <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <div className="bookshelf">
            <Shelf books={this.state.books} />
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
      </div>
      
    )
  }
}
export default Library;
