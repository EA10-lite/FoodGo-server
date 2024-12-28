
const { errorResponse } = require("../utils/responseHandler");

exports.is_restaurant = (req, res, next) => {
    const is_restaurant = req?.user?.is_restaurant;
    if(!is_restaurant) errorResponse(res, 403, "Forbidden Request!");

    next();
}

exports.is_user = (req, res, next) => {
    const is_user = req?.user?.is_user;
    if(!is_user) errorResponse(res, 403, "Forbidden Request!");

    next();
}

exports.is_driver = (req, res, next) => {
    const is_driver = req?.user?.is_driver;
    if(!is_driver) errorResponse(res, 403, "Forbidden Request!");

    next();
}
