import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Library from './Library';

const Routes = () => (
  <Router>
    <div>
      <Route path='/' component={Library} />
    </div>
  </Router>
)
export default Routes;