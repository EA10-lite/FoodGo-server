const Food = require("../../models/food");

exports.AddFood = async (restaurantId, data) => {
    const food = await Food.create({
        ...data,
        createdBy: restaurantId
    });

    return food;
}
