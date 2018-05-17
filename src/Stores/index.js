import React from 'react';

import Header from './Header/';
import Search from './Search';
import Restaurant from './Restaurant';
import Footer from './Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Delivery from './Delivery';

const Stores = ({ restaurants, productsInCart }) => (
  <div>
    <Header productsInCart={productsInCart} />
    <Search />
    <Delivery />
    <Restaurant restaurants={restaurants} />
    <Footer />
    <ArrowUp />
  </div>
);

export default Stores;
