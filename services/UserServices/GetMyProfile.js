const User = require("../../models/user");;

exports.GetMyProfile = async (id) => {
    const user = await User
        .findOne({ _id: id })
        .select("-password -services -rates")

    return user;
};