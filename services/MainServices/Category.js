
const Category = require("../../models/category");

exports.GetAllCategories = async () => {
    const category = await Category.find().sort()

    return category;
}