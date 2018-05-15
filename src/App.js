import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Stores from './Stores/';
import Restaurant from './Restaurant/';

import restaurants from './api/restaurants';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => <Stores restaurants={restaurants} {...props} />} />
          <Route path="/restaurant/:id" component={Restaurant} />
        </div>
      </Router>
    );
  }
}

export default App;
