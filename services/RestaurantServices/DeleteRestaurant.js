const Restaurant = require("../../models/restaurant");

exports.DeleteRestaurant = async (restaurant_id) => {
    const data = await Restaurant.findOneAndDelete({ _id: restaurant_id });
  
    return data;
};
  