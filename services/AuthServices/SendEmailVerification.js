const { nanoid } = require("nanoid");
const User = require("../../models/user");
const Driver = require("../../models/driver");
const Restaurant = require("../../models/restaurant");

const { SendEmailFromTemplate } = require("../MailServices/SendEmailFromTemplate");
const { addMinutes } = require("date-fns");

exports.SendAUserEmailVerification = async (email) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid email address");

  const verification_code = nanoid(4);
   const verification_code_expires = addMinutes(Date.now(), 15);

  SendEmailFromTemplate({
    template: "email-verification",
    to: user.email,
    locals: { code: verification_code, name: user.name, email: user?.email},
  });

  user.verification_code = verification_code;
  user.verification_code_expires = verification_code_expires;
  const newuser = await user.save();

  return newuser;
};

exports.SendDriverEmailVerification = async (email) => {
  const driver = await Driver.findOne({ email });
  if (!driver) throw new Error("Invalid email address");

  const verification_code = nanoid(4);
  const verification_code_expires = addMinutes(Date.now(), 15);

  SendEmailFromTemplate({
    template: "email-verification",
    to: driver.email,
    locals: { code: verification_code, name: driver.name, email: driver?.email},
  });

  driver.verification_code = verification_code;
  driver.verification_code_expires = verification_code_expires;

  const newdriver = await driver.save();

  return newdriver;
};

exports.SendRestaurantEmailVerification = async (email) => {
  const restaurant = await Restaurant.findOne({ email });

  if (!restaurant) throw new Error("Invalid email address");

  const verification_code = nanoid(4);
  const verification_code_expires = addMinutes(Date.now(), 15);

  SendEmailFromTemplate({
    template: "email-verification",
    to: restaurant.email,
    locals: { code: verification_code, name: restaurant.name, email: restaurant?.email},
  });

  restaurant.verification_code = verification_code;
  restaurant.verification_code_expires = verification_code_expires;
  
  const newrestaurant = await restaurant.save();

  return newrestaurant;
};
