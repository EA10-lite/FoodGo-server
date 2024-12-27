const Food = require("../../models/food");;

exports.GetFood = async (id) => {
    const food = await Food
        .findOne({ _id: id })
        .select("-password -services -rates")

    return food;
};