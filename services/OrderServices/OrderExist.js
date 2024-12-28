const Order = require("../../models/order");

exports.OrderExist = async (query) => {
    const orderExist = await Order.exists(query);
  
    return orderExist;
};