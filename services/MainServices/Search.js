const Restaurant = require('../../models/restaurant');
const Food = require("../../models/food");

exports.SearchAll = async (query_string) => {
    const foods = await Food.find({ query_string })
}