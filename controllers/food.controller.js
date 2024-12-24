const { errorResponse, successResponse } = require("../utils/responseHandler");
const {
    GetAll,
    GetFood,
    AddFood,
    EditFood,
    DeleteFood,
    FoodExist,
} = require("../services/FoodServices");

const { RestaurantExist } = require("../services/RestaurantServices")

exports.getAllFoods = async (req, res) => {
    try {
        const response = await GetAll();
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
    }
}

exports.getFood = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await GetFood(id);
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
    }
}

exports.addFood = async (req, res) => {
    try {
        const { restaurant } = req.user;

        if(!await RestaurantExist({ _id: restaurant._id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        const response = await AddFood(req.body);
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
    }
}

exports.updateFood = async (req, res) => {
    try {
        const { restaurant } = req.user;

        if(!await RestaurantExist({ _id: restaurant._id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        if(!await FoodExist({ _id: req.params.id })) {
            return errorResponse(res, 404, "Restaurant not found!");
        }

        const response = await EditFood(req.body);
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
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
        errorResponse(res, 500, "Something failed");
    }
}