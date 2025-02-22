const joi = require("joi");

exports.profile_schema = {
    name: joi.string().required(),
    phone: joi.string().required(),
    about: joi.string(),

    state: joi.string().required(),
    city: joi.string().required(),
    street: joi.string().required(),
    zipcode: joi.number().required(),

}

exports.avatar = {
    picture: joi.string(),
}
