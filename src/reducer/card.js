import { ADD_TO_CARD } from '../constants/';

const cardDefault = {
  productsInCard: [
    {
      id: 1,
      title: 'Куриные крылышки ',
      desc: 'Хрустящие куриные крылышки. Еще аппетитнее с соусом Барбекю!',
      price: '550 ',
      src: 'macdonalds/dish-1.jpg',
      alt: 'alt_text',
    },
    {
      id: 1,
      title: 'Куриные крылышки ',
      desc: 'Хрустящие куриные крылышки. Еще аппетитнее с соусом Барбекю!',
      price: '550 ',
      src: 'macdonalds/dish-1.jpg',
      alt: 'alt_text',
    },
  ],
  restaurantID: 1,
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
