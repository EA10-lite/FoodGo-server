const Order = require("../../models/order");;

exports.GetOrders = async (restaurantId) => {
    const order = await Order
        .find({ restaurantId })
        .select("-password -services -rates")
        .populate("foodId", "name price pictures")
        .populate("userId", "name picture phone email")

    return order;
};

exports.GetUserOrders = async (userId) => {
    const order = await Order
        .find({ userId })
        .select("-password -services -rates")
        .populate("foodId", "name price pictures")
        .populate("userId", "name picture phone email")

    return order;
};