const joi = require("joi");

exports.order_schema = {
    userId: joi.string().required(),
    restaurantId: joi.string(),
    foodId: joi.number().min(1).required(),
    quantity: joi.array().min(1).required(),
}
exports.order_status = {
    status: joi.string().required(),
}