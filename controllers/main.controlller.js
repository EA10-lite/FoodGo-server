
const { SearchAll } = require("../services/MainServices");
const { errorResponse, successResponse } = require("../utils/responseHandler");


exports.searchAll = async (req, res) => {
    try {
        const { search } = req.query;

        if(!search) {
            return errorResponse(res, 400, "Please provide a valid search query!")
        }

        const response = await SearchAll(search);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed")
    }
}

exports.connectApi = async (req, res) => {
    try {
        successResponse(res, 200, "Welcome to FoodGo App");
    } catch (error) {
        return errorResponse(res, 500, "Something failed")
    }
}