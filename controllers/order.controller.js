
const {
    CreateOrder,
    EditOrder,
    CancelOrder,
    GetOrder,
    GetOrders,
    GetUserOrders,
    UpdateOrder,
    OrderExist,
} = require("../services/OrderServices");

const Food = require("../models/food");
const Order = require("../models/order");

const { UserExist } = require("../services/UserServices");
const { RestaurantExist } = require("../services/RestaurantServices");

const { errorResponse, successResponse } = require("../utils/responseHandler");
const { GetFood } = require("../services/FoodServices");


exports.getUserOrders = async (req, res) => {
    try {
        const { _id } = req.user;
        
        if(!await UserExist({ _id })) {
            return errorResponse(res, 400, "Invalid Request Permissions!")
        }

        const response = await GetUserOrders(_id);
        successResponse(res, 200, response); 
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};

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

exports.createOrder = async (req, res) => {
    try {
        const { _id } = req.user;

        if(!await UserExist({ _id })) {
            return errorResponse(res, 403, "Permission denied!");
        }


        const groupedItems = {};
        for(const item of req.body.items) {
            const product = await GetFood(item.foodId);

            if(!groupedItems[product.createdBy.name]) groupedItems[product.createdBy.name] = [];
            groupedItems[product.createdBy.name].push({
                foodId: item.foodId,
                quantity: item.quantity
            })
        }

        console.log("grouped items", groupedItems);

        successResponse(res, 200, groupedItems);
    } catch(error) {
        return errorResponse(res, 500, "Something failed");
    }
};

// for restaurant
exports.updateOrder = async (req, res) => {
    try {
        const { _id } = req.user;

        const { status } = req.body;

        if(!await OrderExist({ _id: req.params.id})){
            return errorResponse(res, 400, 'Order not found!');
        }

        
    } catch(error) {
        return errorResponse(res, 500, "Something failed");
    }
};

exports.cancelOrder = async (req, res) => {
    try {
        const { _id } = req.user;

        const order = await Order.findOne({ _id: req.params.id, userId: _id });
        if(!order) {
            return errorResponse(res, 400, "Order not found!");
        }

        if(order.status === "pending") {
            const response = await CancelOrder(order._id, _id);
            return successResponse(res, 200, response);
        }

        else if(order.status === "cancelled") {
            return errorResponse(res, 400, "Order already cancelled!");
        }

        else if(order.status === "completed") {
            return errorResponse(res, 400, "Order already delivered!");
        }

        return errorResponse(res, 400, "Order cannot be cancelled at the moment");
    } catch(error) {
        return errorResponse(res, 500, "Something failed");
    }
};