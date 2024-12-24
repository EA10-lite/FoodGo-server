const Food = require("../../models/food");;

exports.GetFood = async (id) => {
    const foods = await Food
        .findOne({ _id: id })
        .select("-password -services -rates")

    return foods;
};