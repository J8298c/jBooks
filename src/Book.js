import React from 'react';

function Book(props) {
    console.log(props, 'props passed in');
    return(
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
            style={{ width: 128, height: 193, backgroundImage: `url(${props.imageUrl})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={props.onChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.bookTitle}</div>
          <div className="book-authors">{props.bookAuthor}</div>
        </div>
      </li>
    )
}

export default Book;
