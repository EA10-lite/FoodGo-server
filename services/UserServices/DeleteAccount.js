const User = require("../../models/user");

exports.DeleteAccount = async (userId) => {
    const data = await User.findOneAndDelete({ _id: userId });
  
    return data;
};
  