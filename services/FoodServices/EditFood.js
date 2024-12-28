const Food = require("../../models/food");

exports.EditFood = async (foodId, restaurantId, update) => {
    const food = await Food.findByIdAndUpdate(
        { _id: foodId, createdBy: restaurantId },
        update,
        { new: true }
    );
    
    return food;
}
