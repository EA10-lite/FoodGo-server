const Food = require("../../models/food");;

exports.GetAll = async () => {
    const foods = await Food
        .find()
        .select("-password -services -rates")

    return foods;
};