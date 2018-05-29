import { ADD_TO_CARD, GET_RESTAURANT_BY_ID } from '../constants/';

export function addToCard(restaurantID, dishID) {
  return {
    type: ADD_TO_CARD,
    payload: { restaurantID, dishID },
  };
}

export default function getRestaurantbyID(id) {
  return {
    type: GET_RESTAURANT_BY_ID,
    payload: { id },
  };
}
