const { addMinutes } = require("date-fns");
const { customAlphabet } = require("nanoid");
const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");
const { SendEmailFromTemplate } = require("../MailServices/SendEmailFromTemplate");

const nanoid = customAlphabet("01234567890");

exports.UserForgotPassword = async (email) => {
  const code = nanoid(4);

  const user = await User.findOne({ email });

  user.verification_code = code;
  user.verification_code_expires = addMinutes(Date.now(), 15);

  const newUser = await user.save();

  SendEmailFromTemplate({
    template: "reset-password",
    locals: { code },
    to: user.email,
  });

  return newUser;
};

exports.DriverForgotPassword = async (email) => {
  const code = nanoid(4);

  const driver = await Driver.findOne({ email });
  driver.verification_code = code;
  driver.verification_code_expires = addMinutes(Date.now(), 15);

  const newDriver = await driver.save();

  SendEmailFromTemplate({
    template: "reset-password",
    locals: { code },
    to: driver.email,
  });

  return newDriver;
};

exports.RestaurantForgotPassword = async (email) => {
  const code = nanoid(4);

  const restaurant = await Restaurant.findOne({ email });

  restaurant.verification_code = code;
  restaurant.verification_code_expires = addMinutes(Date.now(), 15);

  const newRestaurant = await restaurant.save();

  SendEmailFromTemplate({
    template: "reset-password",
    locals: { code },
    to: restaurant.email,
  });

  return newRestaurant;
};
