import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './Header';
import getRestaurantbyID from '../AC/';

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

const getContent = (props) => {
  const {
    restaurantsInit, dishes, productsInCard, restaurantID,
  } = props;

  const uniqueDishesID = productsInCard.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      return [...acc, cur];
    }
    return acc;
  }, []);

  const groupedProducts = productsInCard.reduce((acc, cur) => {
    if (cur in acc) {
      console.log({ ...acc, ...acc[cur], count: acc[cur].count + 1 });
      return { ...acc, ...acc[cur], count: acc[cur].count + 1 };
    }
    console.log({ ...acc, ...dishes[cur], count: 1 });
    return { ...acc, ...dishes[cur], count: 1 };
  }, {});

  console.log(groupedProducts);

  return (
    // const groupedProducts = products.reduce((acc, cur) => {
    //   if (acc.findIndex(elem => elem.id === cur.id) === -1) {
    //     cur.count = 1;
    //     acc.push(cur);
    //     console.log(cur);
    //   } else {
    //     cur.count += 1;
    //     console.log(cur);
    //   }
    //   return acc;
    // }, []);

    // console.log(groupedProducts);

    // if (products.length > 0) {
    //   const restaurant = restaurants[restaurantID];
    //   const dishes = restaurant.menu.filter(dish => products.includes(dish.id));
    //   return (
    //     <div>
    //       <Title>Оформление заказа</Title>
    //       <Order>Ваш заказ из ресторана</Order>
    //       <Restaurant>{restaurant.name}</Restaurant>
    //       {dishes.map(dish => (
    //         <p key={dish.id}>
    //           {dish.title} <span>{dish.price}</span>
    //         </p>
    //       ))}
    //     </div>
    //   );
    // }
    <Grid>
      <h2>Ваша корзина пустая</h2>
    </Grid>
  );
};
class Basket extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Grid>{getContent(this.props)}</Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants, card }) => ({
  restaurantsInit: restaurants.restaurantsInit,
  dishes: restaurants.dishes,
  productsInCard: card.productsInCard,
  restaurantID: card.restaurantID,
});

const mapDispatchProps = { getRestaurantbyID };

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Basket);
