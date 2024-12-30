const router = require("express").Router();
const { validator } = require("../middlewares/validator");
const { 
    signup_schema, 
    login_schema,
    forgot_password,
    reset_password,
    verfiy_email,
} = require("../schemas/auth");

const {
    loginUser,
    loginRestaurant,
    forgotPassword,
    resetPassword,
    verifyEmail,
    signupUser,
    signupRestaurant
} = require("../controllers/auth.controller")

router.post("/loginUser", [validator(login_schema)], loginUser);
router.post("/loginRestaurant", [validator(login_schema)], loginRestaurant);
router.post("/signupUser", [validator(signup_schema)], signupUser);
router.post("/signupRestaurant", [validator(signup_schema)], signupRestaurant);
router.post("/forgotPassword", validator(forgot_password), forgotPassword);
router.post("/resetPassword", [validator(reset_password)], resetPassword);
router.post("/verifyEmail", [validator(verfiy_email)], verifyEmail);


module.exports = router;