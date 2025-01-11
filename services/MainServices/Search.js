const Restaurant = require('../../models/restaurant');
const Category = require('../../models/category');
const Food = require("../../models/food");

exports.SearchAll = async (query) => {
    const categoryResults = await Category.find({ title: { $regex: query, $options: 'i' } });
    const foodResults = await Food.find({ name: { $regex: query, $options: 'i' } });
    const restaurantResults = await Restaurant.find({ name: { $regex: query, $options: 'i' } });

    const results = {
        categories: categoryResults,
        foods: foodResults,
        restaurants: restaurantResults,
    };

    return results;
}