const User = require("../../models/user");

exports.UpdateUser = async (userId, update) => {
    const user = await User.findByIdAndUpdate(
        { _id: userId },
        update,
        { new: true }
    );

    
    return user;
}
