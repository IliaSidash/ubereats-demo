import React from 'react';

import Header from '../Stores/Header/';
import Footer from '../Stores/Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Offer from './Offer';
import Menu from './Menu';

const Stores = () => (
  <div>
    <Header />
    <Offer />
    <Menu />
    <Footer />
    <ArrowUp />
  </div>
);

export default Stores;
