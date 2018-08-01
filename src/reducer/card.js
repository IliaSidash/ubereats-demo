import { ADD_TO_CARD } from '../constants/';

const cardDefault = {
  productsInCard: [1, 1, 2],
  restaurantID: 'res1',
};

export default (card = cardDefault, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CARD:
      if (payload.restaurantID !== card.restaurantID && payload.id !== null) {
        return {
          ...card,
          productsInCard: [...[], payload.dish],
          restaurantID: payload.restaurantID,
        };
      }
      return {
        ...card,
        productsInCard: [...card.productsInCard, payload.dish],
        restaurantID: payload.restaurantID,
      };
    default:
      return card;
  }
};
