import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Stores from './Stores/';
import Restaurant from './Restaurant/';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Stores} />
          <Route path="/restaurant" component={Restaurant} />
        </div>
      </Router>
    );
  }
}

export default App;
