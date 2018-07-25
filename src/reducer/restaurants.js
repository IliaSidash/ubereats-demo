import data from '../api/restaurants';

const restaurantsDefault = {
  restaurantIDs: [],
  restaurantsInit: {},
};

export default (restaurants = restaurantsDefault) => ({
  ...restaurants,
  restaurantIDs: data.reduce((acc, cur) => {
    acc.push(cur.id);
    return acc;
  }, []),
  restaurantsInit: data.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {}),
});
