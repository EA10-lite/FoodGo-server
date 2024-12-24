const Food = require("../../models/food");

exports.EditFood = async (restaurantId, data) => {
    const food = await Food.findOneAndUpdate({
        ...data,
    });

    return food;
}
