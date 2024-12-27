const { nanoid } = require("nanoid");
const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");

const { SendEmailFromTemplate } = require("../MailService");

exports.SendAUserEmailVerification = async (email) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid email address");

  const verification_code = nanoid(4);

  SendEmailFromTemplate({
    template: "email-verification",
    to: user.email,
    locals: { code: verification_code, name: user.name, email: user?.email},
  });

  user.verification_code = verification_code;
  const newuser = await user.save();

  return newuser;
};

exports.SendDriverEmailVerification = async (email) => {
  const driver = await Driver.findOne({ email });
  if (!driver) throw new Error("Invalid email address");

  const verification_code = nanoid(4);

  SendEmailFromTemplate({
    template: "email-verification",
    to: driver.email,
    locals: { code: verification_code, name: driver.name, email: driver?.email},
  });

  driver.verification_code = verification_code;
  const newdriver = await driver.save();

  return newdriver;
};

exports.SendRestaurantEmailVerification = async (email) => {
  const restaurant = await Restaurant.findOne({ email });

  if (!restaurant) throw new Error("Invalid email address");

  const verification_code = nanoid(10);
  const verification_link = `${process.env.APP_URL}/account/?code=${verification_code}&email=${email}`;

  SendEmailFromTemplate({
    template: "email-verification",
    to: restaurant.email,
    locals: { link: verification_link, name: restaurant.fullname, email: restaurant?.email},
  });

  restaurant.verification_code = verification_code;
  const newrestaurant = await restaurant.save();

  return newrestaurant;
};
