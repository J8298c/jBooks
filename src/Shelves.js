import React from 'react';
import Shelf from './Shelf';
import Apptitle from './AppTitle';

function Shelves(props) {
  const read = props.books.filter(book => book.shelf === 'read');
  const currentlyReading = props.books.filter(book => book.shelf === 'currentlyReading');
  const wantToRead = props.books.filter(book => book.shelf === 'wantToRead');
  return (
    <div className="list-books">
      <Apptitle />
      <div className="list-books-content">
        <Shelf shelfName="Read" books={read} onShelfChange={props.onShelfChange}/>
        <Shelf shelfName="Currently Reading" books={currentlyReading}  onShelfChange={props.onShelfChange}/>
        <Shelf shelfName="Want to Read" books={wantToRead} onShelfChange={props.onShelfChange}/>
      </div>
      <div className="open-search">
        <a href='/search'>Add a book</a>
      </div>
    </div>
  )
}
export default Shelves;