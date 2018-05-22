import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { findIndex } from 'lodash/fp';

import Stores from './Stores/';
import Restaurant from './Restaurant/';
import Cart from './Cart/';

import restaurants from './api/restaurants';

class App extends Component {
  state = {
    productsInCart: [2, 2, 3, 4],
    restaurantId: 1,
  };

  addToCart = (dishId, id) => {
    const { productsInCart, restaurantId } = this.state;

    if (restaurantId === id || restaurantId === null) {
      this.setState({
        restaurantId: id,
        productsInCart: [...productsInCart, dishId],
      });
    } else {
      console.log('Change restaurant');
    }
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
          <Route
            path="/checkout"
            render={props => (
              <Cart
                productsInCart={this.state.productsInCart}
                restaurantId={this.state.restaurantId}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
