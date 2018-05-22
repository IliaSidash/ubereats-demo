import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { findIndex } from 'lodash/fp';

import Header from './Header';
import restaurants from '../api/restaurants';

const Title = styled.h1`
  padding: 32px 0;
  font-size: 32px;
  line-height: 48px;
  font-weight: 200;
  margin: 0;
`;

const Order = styled.div`
  color: #757575;
  font-size: 14px;
  line-height: 22px;
`;

const Restaurant = styled.h2`
  font-size: 22px;
  line-height: 34px;
  margin: 0 0 15px;
  color: #262626;
  font-weight: 200;
`;

const getProductsList = (productsInCart) => {};
// productsInCart.reduce((acc, curr) => {
//   const index = acc.findIndex(el => el.id === curr);

//   if (index !== -1) {
//     const { count } = acc[index];
//     acc[index].count = count + 1;
//   } else {
//     acc.push({ id: curr, count: 1 });
//   }
//   return acc;
// }, []);

export default class Basket extends React.Component {
  componentDidMount() {
    const { restaurantId, productsInCart } = this.props;

    const restaurant = restaurants.find(rest => rest.id === restaurantId);

    console.log(restaurant);
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Title>Оформление заказа</Title>
          <Order>Ваш заказ из ресторана</Order>
          <Restaurant>Osteria Mario — Манежная</Restaurant>
          {/* {getProductsList(this.props.productsInCart)} */}
          {/* {getProductsList(productsInCart).map(elem => (
        <p key={elem.id}>
          {elem.id} <span>{elem.count}</span>
        </p>
      ))} */}
        </Grid>
      </div>
    );
  }
}
