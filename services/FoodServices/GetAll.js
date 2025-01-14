const Food = require("../../models/food");;

exports.GetAll = async () => {
    const foods = await Food
        .find()
        .populate("createdBy", "name pictures address")
        .select("-password -services -rates")

    return foods;
};