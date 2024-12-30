const joi = require("joi");

exports.order_schema = {
    items: joi.array().items(
        joi.object({
            foodId: joi.objectId().required(),
            quantity: joi.number().min(1).required(),
        })
    ).min(1).required(),
    totalAmount: joi.number().min(1).required(),
}

exports.order_status = {
    status: joi.string().required(),
}