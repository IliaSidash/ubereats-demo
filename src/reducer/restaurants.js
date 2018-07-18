import data from '../api/restaurants';

const restaurantsDefault = {
  restaurantIDs: [],
  restaurantsInit: {},
};

export default (restaurants = restaurantsDefault) => ({
  ...restaurants,
  restaurantIDs: [1, 2, 3, 4, 5, 6],
  restaurantsInit: data.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {}),
});
