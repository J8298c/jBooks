import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import BookSearch from './BookSearch';
import App from './App';
import './App.css';

const Routes = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={App} />
      <Route path='/search' component={BookSearch} />
    </div>
  </Router>
);

export default Routes;
