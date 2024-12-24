const Restaurant = require("../../models/restaurant");

exports.RestaurantExist = async (query) => {
    const restaurantExist = await Restaurant.exists(query);
  
    return restaurantExist;
};