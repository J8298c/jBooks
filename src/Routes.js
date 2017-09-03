import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Library from './Library';
import Search from './Search';
import './App.css';

const Routes = () => (
  <Router>
    <div className="app">
      <Route exact path='/' component={Library} />
      <Route path='/search' component={Search} />
    </div>
  </Router>
)
export default Routes;