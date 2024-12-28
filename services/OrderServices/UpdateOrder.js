const Order = require("../../models/order");

exports.UpdateOrder = async (orderId, update) => {
    const order = await Order.findByIdAndUpdate(
        { _id: orderId },
        { update },
        { new: true }
    );
    
    return order;
}
