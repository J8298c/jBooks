import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Apptitle from './AppTitle';
import Shelf from './Shelf';


function Shelves(props) {
  console.log(props, 'props being passed into shelves');
  const { books, onShelfChange } = props;
  const read =[];
  const currentlyReading = [];
  const wantToRead = [];
  books.map((book) => {
    if(book.shelf === 'read'){ read.push(book)}
    else if (book.shelf === 'currentlyReading') { currentlyReading.push(book)}
    else if(book.shelf === 'wantToRead') { wantToRead.push(book)}
  })
  console.log(read);
  return (
    <div className="list-books">
      <Apptitle />
      <div className="list-books-content">
        <Shelf shelfName="Read" books={read} onShelfChange={onShelfChange} />
        <Shelf shelfName="Currently Reading" books={currentlyReading} onShelfChange={onShelfChange} />
        <Shelf shelfName="Want to Read" books={wantToRead} onShelfChange={onShelfChange} />
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}
export default Shelves;

Shelves.PropTypes = {
  books: PropTypes.array
}