const joi = require("joi");

exports.food_schema = {
    name: joi.string().required(),
    about: joi.string(),
    price: joi.number().min(1).required(),
    category: joi.array().min(1).required(),
    pictures: joi.array().min(1).required(),
    preparation_time: joi.number().min(1).required(),
}