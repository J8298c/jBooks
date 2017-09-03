import React, { Component } from 'react';
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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={this.state.books} />
          </div>
        </div>
      </div>

    )
  }
}
export default Library;
