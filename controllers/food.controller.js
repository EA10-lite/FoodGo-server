const {
    GetAll,
    GetFood,
    AddFood,
    EditFood,
    DeleteFood,
    FoodExist,
} = require("../services/FoodServices");

const { RestaurantExist } = require("../services/RestaurantServices");
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.getAllFoods = async (req, res) => {
    try {
        const response = await GetAll();
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.getFood = async (req, res) => {
    try {
        const { id } = req.params;
        if(!await FoodExist({ _id: id })) {
            return errorResponse(res, 404, "Food not found!");
        }
        
        const response = await GetFood(id);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.addFood = async (req, res) => {
    try {
        const { _id } = req.user;

        if(!await RestaurantExist({ _id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        if(await FoodExist({ name: req.body.name, createdBy: _id })) {
            return errorResponse(res, 400, "Food already added!");
        }

        const response = await AddFood(_id, req.body);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.updateFood = async (req, res) => {
    try {
        const { _id } = req.user;
        const { id: foodId } = req.params;

        if(!await RestaurantExist({ _id: _id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        if(!await FoodExist({ _id: foodId })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        const response = await EditFood(foodId, _id, req.body);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.deleteFood = async (req, res) => {
    try {
        const { restaurant } = req.user;
        const { id } = req.params;

        if(!await RestaurantExist({ _id: restaurant._id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        if(!await FoodExist({ _id: id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        const response = await DeleteFood(id, restaurant._id);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}