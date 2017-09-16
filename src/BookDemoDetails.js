import React from 'react';

const BookDemoDetails = (props) => (
  <div className='book-demo-description'>
    <h2>Book Details</h2>
    <p>{props.bookDescription}</p>
    <p>{props.bookPublishedDate}</p>
  </div>
);

export default BookDemoDetails;

