const Food = require("../../models/food");;

exports.GetFood = async (id) => {
    const food = await Food
        .findOne({ _id: id })
        .populate("createdBy", "name email phone address pictures")
        .select("-password -services -rates")

    console.log("food: ", food);
    return food;
};