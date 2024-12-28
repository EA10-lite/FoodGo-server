const Order = require("../../models/order");

exports.DeleteOrder = async (orderId, userId) => {
    const data = await Order.findOneAndDelete({ _id: orderId, userId });
  
    return data;
};
  