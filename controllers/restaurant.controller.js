
const {
    RestaurantExist,
    GetRestaurant,
    GetRestaurants,
    UpdateRestaurant,
    DeleteRestaurant,
 } = require("../services/RestaurantServices");
const { errorResponse, successResponse } = require("../utils/responseHandler");


exports.getRestaurants = async (req, res) => {
    try {
        const response = await GetRestaurants();
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500 , error.message);
    }
}
exports.getRestaurant = async (req, res) => {
    try {
        const _id = req.params.id

        if(!await RestaurantExist({ _id })) {
            return errorResponse(res, 400, "Restaurant not found!");
        }
        const response = await GetRestaurant(_id);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500 , error.message);
    }
}
exports.updateRestaurant = async (req, res) => {}
exports.deleteRestaurant = async (req, res) => {}