const { hashPassword } = require("../../utils/hashing");
const { customAlphabet } = require("nanoid");

const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");
const { UserSignToken, DriverSignToken, RestaurantSignToken } = require("./SignToken");
const { SendEmailFromTemplate } = require("../MailServices/SendEmailFromTemplate");
const { addMinutes } = require("date-fns");

const nanoid = customAlphabet("0123456789");

exports.UserSignup = async ({
  email,
  password,
  name,
  phone,
}) => {
  const hashedPassword = await hashPassword(password);

  const verification_code = nanoid(4);
  const verification_code_expires = addMinutes(Date.now(), 15);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    verification_code,
    verification_code_expires,
  });

  const userWithToken = await UserSignToken({
    _id: user._id,
    name: user.name,
    is_user: true,
    is_email_verified: user.is_email_verified,
  });

  // await SendEmailFromTemplate({
  //   template: "email-verification",
  //   to: email,
  //   locals: { link: verification_code, name: name, email: email },
  // });

  return { user: userWithToken };
};

exports.DriverSignup = async ({
  email,
  password,
  name,
  phone,
}) => {
  const hashedPassword = await hashPassword(password);

  const verification_code = nanoid(10);
  const verification_code_expires = addMinutes(Date.now(), 15);

  const driver = await Driver.create({
    email,
    password: hashedPassword,
    name,
    phone,
    verification_code,
    verification_code_expires,
  });

  const driverWithToken = await DriverSignToken({
    _id: driver._id,
    name: driver.name,
    is_driver: true,
    is_email_verified: driver.is_email_verified,
    has_subscribed: driver.has_subscribed,
  });

  await SendEmailFromTemplate({
    template: "email-verification",
    to: email,
    locals: { link: verification_link, name: model_name, email: email },
  });

  return { driver: driverWithToken };
};

exports.RestaurantSignup = async ({
  email,
  password,
  name,
  phone,
}) => {
  const hashedPassword = await hashPassword(password);

  const verification_code = nanoid(4);
  const verification_code_expires = addMinutes(Date.now(), 15);

  const restaurant = await Restaurant.create({
    email,
    password: hashedPassword,
    name,
    phone,
    verification_code,
    verification_code_expires,
  });

  const restaurantWithToken = await RestaurantSignToken({
    _id: restaurant._id,
    name: restaurant.name,
    is_restaurant: true,
    is_email_verified: restaurant.is_email_verified,
  });

  // await SendEmailFromTemplate({
  //   template: "email-verification",
  //   to: email,
  //   locals: { code: verification_code, name: name, email: email },
  // });

  return { restaurant: restaurantWithToken };
};