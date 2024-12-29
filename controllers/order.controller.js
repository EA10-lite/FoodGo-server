
const {
    CreateOrder,
    EditOrder,
    DeleteOrder,
    GetOrder,
    GetOrders,
    UpdateOrder,
    OrderExist,
} = require("../services/OrderServices");

const { UserExist } = require("../services/UserServices");
const { RestaurantExist } = require("../services/RestaurantServices");

const { errorResponse, successResponse } = require("../utils/responseHandler");


exports.getOrders = async (req, res) => {
    try {
        const { _id } = req.user;
        
        if(!await RestaurantExist({ _id })) {
            return errorResponse(res, 400, "Invalid Request Permissions!")
        }

        const response = await GetOrders(_id);
        successResponse(res, 200, response); 
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};

exports.getOrder = async (req, res) => {
    try {
        const { _id } = req.user;
        
        if(!await RestaurantExist({ _id })) {
            return errorResponse(res, 400, "Invalid Request Permissions!")
        }

        if(!await OrderExist({ _id: req.params.id })) {
            return errorResponse(res, 400, "Order not found")
        }

        const response = await GetOrder(req.params.id, _id);
        successResponse(res, 200, response); 
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};
exports.createOrder = async (req, res) => {};
exports.updateOrder = async (req, res) => {};
exports.editOrder = async (req, res) => {};
exports.cancelOrder = async (req, res) => {};