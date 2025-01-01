const { UserLogin, RestaurantLogin } = require("./LocalLogin");
const { UserSignup, RestaurantSignup } = require("./LocalSignup");
const { UserForgotPassword, RestaurantForgotPassword } = require("./ForgotPassword");
const { UserResetPassword, RestaurantResetPassword } = require("./ResetPassword");
const { UserVerifyEmail, RestaurantVerifyEmail } = require("./VerifyEmail");
const { SendAUserEmailVerification, SendRestaurantEmailVerification } = require("./SendEmailVerification");

module.exports = {
    RestaurantLogin,
    RestaurantSignup,
    RestaurantForgotPassword,
    RestaurantResetPassword,
    RestaurantVerifyEmail,
    SendRestaurantEmailVerification,
    UserLogin,
    UserSignup,
    UserForgotPassword,
    UserResetPassword,
    UserVerifyEmail,
    SendAUserEmailVerification,
}