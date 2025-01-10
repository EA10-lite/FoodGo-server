
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.getAll = async (req, res) => {
    try {

    } catch (error) {
        return errorResponse(res, error?.status || 500, error?.message || "Something failed")
    }
};

exports.searchAll = async (req, res) => {
    try {

    } catch (error) {
        return errorResponse(res, error?.status || 500, error?.message || "Something failed")
    }
};

exports.searchForFood = async (req, res) => {
    try {

    } catch (error) {
        return errorResponse(res, error?.status || 500, error?.message || "Something failed")
    }
};

exports.searchForRestaurant = async (req, res) => {
    try {

    } catch (error) {
        return errorResponse(res, error?.status || 500, error?.message || "Something failed")
    }
};