const { UserLogin, RestaurantLogin } = require("./LocalLogin");
const { UserSignup, RestaurantSignup } = require("./LocalSignup");
const { UserForgotPassword, RestaurantForgotPassword } = require("./ForgotPassword");

module.exports = {
    RestaurantLogin,
    RestaurantSignup,
    RestaurantForgotPassword,
    UserLogin,
    UserSignup,
    UserForgotPassword,
}