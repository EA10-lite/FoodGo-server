const Food = require("../../models/food");

exports.DeleteFood = async (food_id, restaurant_id) => {
    const data = await Food.findOneAndDelete({ _id: food_id, createdBy: restaurant_id });
  
    return data;
};
  