const { UserExist } = require("../services/UserServices");
const { RestaurantExist } = require("../services/RestaurantServices");
const {
    RestaurantLogin,
    RestaurantSignup,
    RestaurantForgotPassword,
    UserLogin,
    UserSignup,
    UserForgotPassword,
} = require("../services/AuthServices");

const { errorResponse, successResponse } = require("../utils/responseHandler");


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!await UserExist({ email })) {
            return errorResponse(res, 400, "Incorrect email or password!");
        }
        
        const response = await UserLogin(email, password)
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};

exports.loginRestaurant = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!await RestaurantExist({ email })) {
            return errorResponse(res, 400, "Incorrect email or password!");
        }
        const response = await RestaurantLogin(email, password);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if(await RestaurantExist({ email })) {
            const response = await RestaurantForgotPassword(email);
            return successResponse(res, 200, response);
        }
        if(await UserExist({ email })) {
            const response = await UserForgotPassword(email);
            return successResponse(res, 200, response);
        }

        return errorResponse(res, 400, "No registered account with this email!")
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.resetPassword = async (req, res) => {}
exports.verifyEmail = async (req, res) => {}

exports.signupUser = async (req, res) => {
    try {
        const { email, name, phone, password } = req.body;
        if(await RestaurantExist({ email })) {
            return errorResponse(res, 400, "Email already registered!")
        }
        if(await UserExist({ email })) {
            return errorResponse(res, 400, "Email already registered!")
        }

        const response = await UserSignup({
            name,
            email,
            phone,
            password,
        });
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};

exports.signupRestaurant = async (req, res) => {
    try {
        const { email, name, phone, password } = req.body;
        if(await RestaurantExist({ email })) {
            return errorResponse(res, 400, "Email already registered!")
        }
        if(await UserExist({ email })) {
            return errorResponse(res, 400, "Email already registered!")
        }

        const response = await RestaurantSignup({
            name, 
            email,
            phone,
            password
        });
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
};