const Order = require("../../models/order");;

exports.GetOrder = async (id, restaurantId) => {
    const order = await Order
        .findOne({ _id: id, restaurantId })
        .select("-password -services -rates")
        .populate("foodId", "name price pictures")
        .populate("userId", "name picture phone email")

    return order;
};