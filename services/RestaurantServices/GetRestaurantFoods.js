const Food = require("../../models/food");;

exports.GetRestaurantFoods = async (restaurant_id) => {
    const food = await Food
        .find({ createdBy: restaurant_id })
        .populate("createdBy", "name email phone address pictures")
        .select("-password -services -rates")

    return food;
};