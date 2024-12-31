const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");

const { hashPassword } = require("../../utils/hashing");

exports.UserResetPassword = async (email, code, password) => {
  const user = await User.findOne({ email, verification_code: code });
  if(!user) throw { message: "Verification code expired", status: 410 };

  user.verification_code = null;
  user.verification_code_expires = null;

  const hashedPassword = await hashPassword(password);
  user.password = hashedPassword;
  await user.save();

  return user;
};

exports.DriverResetPassword = async (email) => {
    const driver = await Driver.findOne({ email, verification_code: code });
    if(!driver) throw { message: "Verification code expired", status: 410 };
  
    driver.verification_code = null;
    driver.verification_code_expires = null;
  
    const hashedPassword = await hashPassword(password);
    driver.password = hashedPassword;
    await driver.save();
  
    return driver;
};

exports.RestaurantResetPassword = async (email, code, password) => {
    const restaurant = await Restaurant.findOne({ email, verification_code: code });
    if(!restaurant) throw { message: "Verification code expired", status: 410 };
  
    restaurant.verification_code = null;
    restaurant.verification_code_expires = null;
  
    const hashedPassword = await hashPassword(password);
    restaurant.password = hashedPassword;
    await restaurant.save();
  
    return restaurant;
};
