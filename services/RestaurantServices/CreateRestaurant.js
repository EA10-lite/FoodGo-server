const Restaurant = require("../../models/restaurant");

exports.CreateRestaurant = async (data) => {
    const restaurant = await Restaurant.create({
        ...data,
    });

    return restaurant;
}
