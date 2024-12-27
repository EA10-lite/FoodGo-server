const { sign } = require("jsonwebtoken");
const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");

const { JWT_SECRET, REFRESH_TOKEN_SECRET } = process.env;

exports.UserSignToken = async (payload) => {
  const access_token = sign(payload, JWT_SECRET, { expiresIn: "24h" });

  const refresh_token = sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: "24h",
  });

  const user = await User.findOneAndUpdate(
    { _id: payload._id },
    { refresh_token },
    { new: true }
  )
    .select(
      "-__v -updatedAt -old_email -verification_code -verification_code_expires -device"
    )
    .lean()
    .exec();

  delete user.password;

  return { access_token, ...user,};
};

exports.DriverSignToken = async (payload) => {
  const access_token = sign(payload, JWT_SECRET, { expiresIn: "24h" });

  const refresh_token = sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: "24h",
  });

  const driver = await Driver.findOneAndUpdate(
    { _id: payload._id },
    { refresh_token },
    { new: true }
  )
    .select(
      "-__v -updatedAt -old_email -verification_code -verification_code_expires -device"
    )
    .lean()
    .exec();

  delete driver.password;

  return { access_token, ...driver,};
};

exports.RestaurantSignToken = async (payload) => {
  const access_token = sign(payload, JWT_SECRET, { expiresIn: "24h" });

  const refresh_token = sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: "24h",
  });

  const restaurant = await Restaurant.findOneAndUpdate(
    { _id: payload._id },
    { refresh_token },
    { new: true }
  )
    .select(
      "-__v -updatedAt -old_email -verification_code -verification_code_expires -device"
    )
    .lean()
    .exec();

  delete restaurant.password;

  return { access_token, ...restaurant,};
};
