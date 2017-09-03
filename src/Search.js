import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
  };
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={(event) => { this.setState({query: event.target.value})}}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">

        </ol>
      </div>
    </div>
    )
  }
}
export default Search;
  

