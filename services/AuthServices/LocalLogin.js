
const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");

const { UserSignToken, DriverSignToken, RestaurantSignToken } = require("./SignToken");
const { verifyPassword } = require("../../utils/hashing");

exports.UserLogin = async (email, password) => {
  let user = await User.findOneAndUpdate(
    { email },
    { verification_code: null, verification_code_expires: null },
    { new: true }
  )
    .select(
      "-__v -updatedAt -email -verification_code -verification_code_expires -device"
    )
    .exec();

  if (!(await verifyPassword(password, user.password))) {
    throw new Error("Incorrect Password");
  }

  user.last_login = Date.now();
  user = await user.save();

  const userWithToken = await UserSignToken({
    _id: user._id,
    name: user.name,
    is_user: true,
    is_email_verified: user.is_email_verified,
  });

  return { ...userWithToken };
};

exports.DriverLogin = async (email, password) => {
  let driver = await Driver.findOneAndUpdate(
    { email },
    { verification_code: null, verification_code_expires: null },
    { new: true }
  )
    .select(
      "-__v -updatedAt -email -verification_code -verification_code_expires -device"
    )
    .exec();

  if (!(await verifyPassword(password, Driver.password))) {
    throw new Error("Incorrect Password");
  }

  driver.last_login = Date.now();
  driver = await driver.save();

  const driverWithToken = await DriverSignToken({
    _id: driver._id,
    name: driver.name,
    is_driver: true,
    is_email_verified: driver.is_email_verified,
  });

  return { ...driverWithToken };
};

exports.RestaurantLogin = async (email, password) => {
  let restaurant = await Restaurant.findOneAndUpdate(
    { email},
    { verification_code: null, verification_code_expires: null },
    { new: true }
  )
    .select(
      "-__v -updatedAt -email -verification_code -verification_code_expires -device"
    )
    .exec();

  if (!(await verifyPassword(password, restaurant.password))) {
    throw new Error("Incorrect Password");
  }

  restaurant.last_login = Date.now();
  restaurant = await restaurant.save();

  const restaurantWithToken = await RestaurantSignToken({
    _id: restaurant._id,
    name: restaurant.name,
    is_restaurant: true,
    is_email_verified: restaurant.is_email_verified,
  });

  return { ...restaurantWithToken };
};
