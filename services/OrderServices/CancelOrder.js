const Order = require("../../models/order");

exports.CancelOrder = async (orderId, userId) => {
    const data = await Order.findOneAndUpdate({ _id: orderId, userId, status: "cancelled" });
  
    return data;
};
  