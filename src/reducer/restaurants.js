import restaurants from '../api/restaurants';
import dishes from '../api/dishes';
import { GET_RESTAURANT_BY_ID } from '../constants';

const defaultState = {
  restaurantsInit: {},
  dishes: {},
  restaurantsList: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_RESTAURANT_BY_ID:
      return null;
    default:
      return {
        ...state,
        restaurantsList: Object.keys(restaurants),
        restaurantsInit: restaurants,
        dishes,
      };
  }
};
