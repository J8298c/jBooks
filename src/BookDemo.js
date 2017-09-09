import React, { Component } from 'react';
import * as BookAPI from './BooksAPI';

class BookDemo extends Component {
  state = {}
  componentDidMount(props) {
    console.log(this.props, 'the props')
    // BookAPI.get(id).then((book) => {this.setState({book})});
    console.log('mounted fetch book from match.params.id')
  }
  render(props) {
    console.log(this.props, 'the props');
    console.log(this.state, 'bookdemo state');
    return (
      <div>
        BookDemo
      </div>
    )
  }
}
export default BookDemo;