import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

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
        Library Component
      </div>
    )
  }
}
export default Library;
