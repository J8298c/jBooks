import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Library from './Library';
import './App.css';

const Routes = () => (
  <Router>
    <div className="app">
      <Route path='/' component={Library} />
    </div>
  </Router>
)
export default Routes;