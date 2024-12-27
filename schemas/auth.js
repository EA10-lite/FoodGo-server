const joi = require("joi");

exports.login_schema = {
    email: joi.string().email().required(),
    password: joi.string().min(8).max(1024).required()
}
exports.forgot_password = {
    email: joi.string().email().required(),
}

exports.reset_password = {
    password: joi.string().min(8).max(1024).required(),
    new_password: joi.string().min(8).max(1024).required()
}

exports.verify_email = {
    code: joi.number().min(4).max(4).required(),
}

exports.signup_schema = {
    email: joi.string().email().required(),
    name: joi.string().required(),
    password: joi.string().min(8).max(1024).required(),
    phone: joi.string().required(),
}

exports.onboarding_schema = {
    country: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    zipcode: joi.number().required(),
    longitude: joi.number().required(),
    latitude: joi.number().required(),
    about: joi.string(),
    pictures: joi.array().min(1).required(),
}