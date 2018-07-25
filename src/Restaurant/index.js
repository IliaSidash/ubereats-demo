import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

import Header from '../Stores/Header/';
import Footer from '../Stores/Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Offer from './Offer';
import Menu from './Menu';
import ModalContent from './Menu/Modal';

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
    modalIsOpen: false,
    currentId: null,
  };

  onOpenModal = (id) => {
    this.setState({ modalIsOpen: true, currentId: id });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  getContent = (dishId) => {
    const { id } = this.props.match.params;
    const { restaurantsInit } = this.props;
    const { menu } = restaurantsInit[id];
    const dish = menu.find(dishFromMenu => dishFromMenu.id === dishId);

    return <ModalContent restaurantID={id} dish={dish} />;
  };

  render() {
    const { modalIsOpen, currentId } = this.state;
    const { id } = this.props.match.params;
    const { restaurantsInit } = this.props;

    const restaurant = restaurantsInit[id];
    const { menu } = restaurant;

    return (
      <div>
        <Header />
        <Offer restaurant={restaurant} />
        <Menu menu={menu} handleOpen={this.onOpenModal} />
        <Footer />
        <ArrowUp />
        <Modal open={modalIsOpen} onClose={this.onCloseModal} center styles={styles}>
          {currentId ? this.getContent(currentId) : null}
        </Modal>
      </div>
    );
  }
}
export default connect(({ restaurants }) => restaurants)(Stores);
