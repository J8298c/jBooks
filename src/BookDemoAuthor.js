import React from 'react';

function BookDemoAuthors(props) {
  const { book } = props; 
  const theAuthors = book.authors.map((author) => (
    <h6>{author}</h6>
  ))
  return (
    <div>
      <h6>{book.authors ? theAuthors : 'Sorry no authors listed for book'}</h6>
    </div>
  )
}

export default BookDemoAuthors;