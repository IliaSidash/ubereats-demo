import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/';
import Stores from './Stores/';
import Restaurant from './Restaurant/';
import Card from './Card/';

import restaurants from './api/restaurants';

class App extends Component {
  state = {
    productsInCard: [],
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Stores
                  restaurants={restaurants}
                  productsInCard={this.state.productsInCard}
                  {...props}
                />
              )}
            />
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route path="/checkout" component={Card} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
