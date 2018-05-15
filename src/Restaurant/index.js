import React from 'react';

import Header from '../Stores/Header/';
import Footer from '../Stores/Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Offer from './Offer';
import Menu from './Menu';

import restaurants from '../api/restaurants';

class Stores extends React.Component {
  state = {
    restaurant: {},
  };

  componentWillMount() {
    const { id } = this.props.match.params;

    this.setState({
      restaurant: restaurants.find(restaurant => restaurant.id === parseInt(id, 10)),
    });
  }

  render() {
    const { restaurant } = this.state;
    return (
      <div>
        <Header />
        <Offer restaurant={restaurant} />
        <Menu menu={restaurant.menu} />
        <Footer />
        <ArrowUp />
      </div>
    );
  }
}
export default Stores;
