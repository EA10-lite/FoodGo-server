const Food = require("../../models/food");

exports.FoodExist = async (query) => {
    const foodExist = await Food.exists(query);
  
    return foodExist;
};