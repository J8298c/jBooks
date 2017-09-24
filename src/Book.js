import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageUrl}")` }}></div>
        <div className="book-shelf-changer">
          <select onChange={(event) => { console.log(props, 'props in the book'), props.onShelfChange(props.bookID,event.target.value)}}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    </div>
   <Link to={props.pathTo}><div className="book-title">{props.bookTitle}</div></Link> 
      <div className="book-authors">{props.bookAuthor}</div>
    </div>
  </li>
);
export default Book;