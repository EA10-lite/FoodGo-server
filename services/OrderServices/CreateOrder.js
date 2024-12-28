const Order = require("../../models/order");

exports.CreateOrder = async (userId, foodId, restaurantId, data) => {
    const order = await Order.create({
        ...data,
        restaurantId,
        userId,
        foodId,
    });

    return order;
}
