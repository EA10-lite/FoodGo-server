const Restaurant = require("../../models/restaurant");

exports.UpdateRestaurant = async (restaurantId, update) => {
    const restaurant = await Restaurant.findOneAndUpdate(
        { _id: restaurantId },
        { update },
        { new: true }
    );

    return restaurant;
}
