import React, { Component } from 'react';
import * as BookAPI from './BooksAPI';

class BookDemo extends Component {
  componentWillMount() {
    console.log('mounted fetch book from match.params.id')
  }
  render(props) {
    return (
      <div>
        BookDemo
      </div>
    )
  }
}
export default BookDemo;