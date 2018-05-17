import React from 'react';
import Modal from 'react-responsive-modal';

import Header from '../Stores/Header/';
import Footer from '../Stores/Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Offer from './Offer';
import Menu from './Menu';
import ModalContent from './Menu/Modal';

import restaurants from '../api/restaurants';

const styles = {
  modal: {
    maxWidth: '550px',
    padding: '0 0 32px',
  },
  closeButton: {
    outline: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    fill: '#fff',
  },
};

class Stores extends React.Component {
  state = {
    restaurant: {},
    modalIsOpen: false,
    currentId: null,
  };

  componentWillMount() {
    const { id } = this.props.match.params;

    this.setState({
      restaurant: restaurants.find(restaurant => restaurant.id === parseInt(id, 10)),
    });
  }

  onOpenModal = (id) => {
    this.setState({ modalIsOpen: true, currentId: id });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  getContent = (dishId) => {
    const { id } = this.props.match.params;
    const { menu } = this.state.restaurant;
    const dish = menu.find(dish => dish.id === dishId);
    return <ModalContent dish={dish} addToCart={dishId => this.props.addToCart(dishId, id)} />;
  };

  render() {
    const { productsInCart, addToCart } = this.props;
    const { restaurant, modalIsOpen, currentId } = this.state;

    return (
      <div>
        <Header productsInCart={productsInCart} />
        <Offer restaurant={restaurant} />
        <Menu menu={restaurant.menu} handleOpen={this.onOpenModal} />
        <Footer />
        <ArrowUp />
        <Modal open={modalIsOpen} onClose={this.onCloseModal} center styles={styles}>
          {currentId ? this.getContent(currentId) : null}
        </Modal>
      </div>
    );
  }
}
export default Stores;
