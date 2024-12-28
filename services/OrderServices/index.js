const { CreateOrder } = require("./CreateOrder");
const { EditOrder } = require("./EditOrder");
const { DeleteOrder } = require("./DeleteOrder");
const { GetOrder } = require("./GetOrder");
const { GetOrders } = require("./GetOrders");
const { UpdateOrder } = require("./UpdateOrder");
const { OrderExist } = require("./OrderExist");

module.exports = {
    CreateOrder,
    EditOrder,
    DeleteOrder,
    GetOrder,
    GetOrders,
    UpdateOrder,
    OrderExist,
}