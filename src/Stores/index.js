import React from 'react';

import Header from './Header/';
import Search from './Search';
import Restaurant from './Restaurant';
import Footer from './Footer/';
import ArrowUp from '../ui/ArrowUp/';
import Delivery from './Delivery';

const Stores = () => (
  <div>
    <Header />
    <Search />
    <Delivery />
    <Restaurant />
    <Footer />
    <ArrowUp />
  </div>
);

export default Stores;
