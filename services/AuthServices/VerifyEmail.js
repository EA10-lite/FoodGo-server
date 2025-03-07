const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");

exports.UserVerifyEmail = async (email, code) => {
  const user = await User.findOne({ email, verification_code: code });
  if(!user) throw { message: "Verification code expired", status: 410 };

  user.verification_code = null;
  user.verification_code_expires = null;

  user.is_email_verified = true;
  await user.save();

  return user;
};

exports.DriverVerifyEmail = async (email, code) => {
    const driver = await Driver.findOne({ email, verification_code: code });
    if(!driver) throw { message: "Verification code expired", status: 410 };
  
    driver.verification_code = null;
    driver.verification_code_expires = null;
  
    driver.is_email_verified = true;
    await driver.save();
  
    return driver;
};

exports.RestaurantVerifyEmail = async (email, code) => {
    const restaurant = await Restaurant.findOne({ email, verification_code: code });
    if(!restaurant) throw { message: "Verification code expired", status: 410 };
  
    restaurant.verification_code = null;
    restaurant.verification_code_expires = null;
  
    restaurant.is_email_verified = true;
    await restaurant.save();
  
    return restaurant;
};
