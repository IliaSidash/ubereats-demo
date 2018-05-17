import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Stores from './Stores/';
import Restaurant from './Restaurant/';
import Cart from './Cart/';

import restaurants from './api/restaurants';

class App extends Component {
  state = {
    productsInCart: [],
  };

  addToCart = (dishId, id) => {
    console.log(dishId, id);
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Stores
                restaurants={restaurants}
                productsInCart={this.state.productsInCart}
                {...props}
              />
            )}
          />
          <Route
            path="/restaurant/:id"
            render={props => (
              <Restaurant
                productsInCart={this.state.productsInCart}
                addToCart={this.addToCart}
                {...props}
              />
            )}
          />
          <Route path="/checkout" component={Cart} />
        </div>
      </Router>
    );
  }
}

export default App;
