const Restaurant = require("../../models/restaurant");;

exports.GetRestaurant = async (id) => {
    const restaurant = await Restaurant
        .findOne({ _id: id })
        .select("-password -services -rates")

    return restaurant;
};