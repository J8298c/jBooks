import React from 'react';
import Book from './Book';

function Shelf(props) {
  const { books } = props;
  let currentlyReading =[];
  let read = [];
  let wantTo = [];
console.log(books, 'the books out of props');
  books.map((book) => {
    if (book.shelf === 'currentlyReading') {
      currentlyReading.push(
        <Book bookTitle={book.title} bookAuthor={book.authors} bookImage={book.imageLinks.thumbnail} key={book.id} />
      )
    } else if (book.shelf === 'read') {
      read.push(
        <Book bookTitle={book.title} bookAuthor={book.authors} bookImage={book.imageLinks.thumbnail} key={book.id} />
      )
    } else {
      wantTo.push(
        <Book bookTitle={book.title} bookAuthor={book.authors} bookImage={book.imageLinks.thumbnail} key={book.id} />
      )
    }
  })
  return(
    <div>
      <div>
      <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
         <ol className="books-grid">
          <li>
            {currentlyReading}
          </li>
        </ol>
      </div>
    </div>
        <div>
        <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
           <ol className="books-grid">
            <li>
              {read}
            </li>
          </ol>
        </div>
      </div>
          <div>
          <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
             <ol className="books-grid">
              <li>
                {wantTo}
              </li>
            </ol>
          </div>
        </div>
    </div>
    
  )
}
export default Shelf;