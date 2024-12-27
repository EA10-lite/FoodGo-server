const Restaurant = require("../../models/restaurant");;

exports.GetRestaurants = async () => {
    const restaurants = await Restaurant
        .find()
        .select("-password -services -rates")

    return restaurants;
};