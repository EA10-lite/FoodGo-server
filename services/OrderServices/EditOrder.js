const Order = require("../../models/order");

exports.EditOrder = async (orderId, userId, update) => {
    const order = await Order.findByIdAndUpdate(
        { _id: orderId, userId },
        update,
        { new: true }
    );
    
    return order;
}
