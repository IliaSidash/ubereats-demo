import React from 'react';

import Header from './Header/';
import Search from './Search';
import Restaurant from './Restaurant';
import Footer from './Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Delivery from './Delivery';

class Stores extends React.Component {
  state = {
    searchValue: '',
  };

  getRestaurants = (value) => {
    const { restaurants } = this.props;

    return restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(value.toLowerCase()));
  };

  handleInput = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    const { restaurants, productsInCart } = this.props;
    const { searchValue } = this.state;
    return (
      <div>
        <Header productsInCart={productsInCart} />
        <Search searchValue={searchValue} handleInput={this.handleInput} />
        <Delivery />
        <Restaurant restaurants={this.getRestaurants(searchValue)} />
        <Footer />
        <ArrowUp />
      </div>
    );
  }
}

export default Stores;
