const User = require("../../models/user");

exports.UserExist = async (query) => {
    const userExist = await User.exists(query);
  
    return userExist;
};