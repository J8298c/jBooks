import React, { Component } from 'react';
import * as BookAPI from './BooksAPI';

class BookDemo extends Component {
  state = {}
  componentDidMount(props) {
    console.log(this.props, 'the props')
    const {id} = this.props.match.params;
    console.log(id);
    BookAPI.get(id).then((book) => {this.setState({book})});
  }
  render(props) {
    console.log(this.props, 'the props');
    console.log(this.state, 'bookdemo state');
    const { book } = this.state;
    console.log(book);
    return (
      <div className='book-demo'>
        <div className='book-demo-title'>
          <h1>{book ? book.title : '..loading'}</h1>
        </div>
        <div className='book-demo-image'>
        <img src={book ? book.imageLinks.thumbnail : '...loading'} className='bookImage' />
        </div>
        <div>
          <h6>{book ? book.authors : 'Sorry no author name available'}</h6>
        </div>
        <div>
          <h2>Book Details</h2>
          <p>{book ? book.description : '...loading'}</p>
          <p>{book ? book.publishedDate : '...loading'}</p>
        </div>
      </div>
    )
  }
}
export default BookDemo;