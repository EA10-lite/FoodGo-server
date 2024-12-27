const Food = require("../../models/food");

exports.EditFood = async (foodId, update) => {
    const food = await Food.findOneAndUpdate(
        { _id: foodId },
        { update },
        { new: true }
    );

    return food;
}
