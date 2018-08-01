import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/';
import Stores from './Stores/';
import Restaurant from './Restaurant/';
import Card from './Card/';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Stores} />
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route path="/checkout" component={Card} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
