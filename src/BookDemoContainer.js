import React, {Component} from 'react';
import * as BooksApi from './BooksAPI';
import BookDemo from './BookDemo';

class BookDemoContainer extends Component {
  state = {}
  
  componentDidMount() {
    const {id} = this.props.match.params;
    BooksApi.get(id)
      .then((book) => { this.setState(book)});
  }

  render() {
    console.log(this.state)
    return (
      <div>
         <BookDemo book={this.state} /> 
      </div>
    )
  }
}

export default BookDemoContainer;
