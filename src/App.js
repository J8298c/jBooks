import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook';
import Shelves from './Shelves';
import BookDemo from './BookDemo';
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchResults: [],
    };
    this.onShelfChange = this.onShelfChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

      componentDidMount() {
          BooksAPI.getAll()
              .then((books) => { this.setState({ books })});
      }

      onShelfChange(id, shelf) {
        BooksAPI.update({id: id}, shelf).then((books) => {
            BooksAPI.getAll()
              .then((books) => { this.setState({ books })})
          })
    }
  
  onSearch(query) {
    if (query !== ''){
      BooksAPI.search(query, 10).then((results) => {this.setState({searchResults: results})})
    }
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
          <Route path='/search' render={() => (
            <SearchBook 
            onChange={(event) => { this.onSearch(event.target.value)}}
            onShelfChange={this.onShelfChange}
            searchResults={this.state.searchResults}
            />
          )}/>
          <Route exact path='/' render={() => (
            <Shelves books={books} onShelfChange={this.onShelfChange}/>
          )}/>
          <Route path='/book/:id' component={BookDemo} />
      </div>
    )
  }
}

export default BooksApp;
