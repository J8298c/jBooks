import React from 'react';

function Shelf(props) {
  console.log(props, 'props in the shelf component');
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        </ol>
      </div>
    </div>
  )
}
export default Shelf;