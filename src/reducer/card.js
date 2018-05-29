import { ADD_TO_CARD } from '../constants/';

const cardDefault = {
  productsInCard: [],
  restaurantID: null,
};

export default (card = cardDefault, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CARD:
      if (payload.restaurantID !== card.restaurantID && payload.id !== null) {
        return {
          ...card,
          productsInCard: [...[], payload.dishID],
          restaurantID: payload.restaurantID,
        };
      }
      return {
        ...card,
        productsInCard: [...card.productsInCard, payload.dishID],
        restaurantID: payload.restaurantID,
      };
    default:
      return card;
  }
};
