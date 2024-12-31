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

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication for users and restaurants
 */

/**
 * @swagger
 * /api/auth/loginUser:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid credentials
 */
router.post("/loginUser", [validator(login_schema)], loginUser);

/**
 * @swagger
 * /api/auth/loginRestaurant:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login a restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid credentials
 */
router.post("/loginRestaurant", [validator(login_schema)], loginRestaurant);

/**
 * @swagger
 * /api/auth/signupUser:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign up a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Email already exists
 */
router.post("/signupUser", [validator(signup_schema)], signupUser);

/**
 * @swagger
 * /api/auth/signupRestaurant:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign up a restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Restaurant successfully registered
 *       400:
 *         description: Bad request
 *       409:
 *         description: Email already exists
 */
router.post("/signupRestaurant", [validator(signup_schema)], signupRestaurant);

/**
 * @swagger
 * /api/auth/forgotPassword:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Request password reset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Password reset email sent
 *       400:
 *         description: Bad request
 */
router.post("/forgotPassword", validator(forgot_password), forgotPassword);

/**
 * @swagger
 * /api/auth/resetPassword:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Reset password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               newPassword:
 *                 type: string
 *                 minLength: 8
 *                 pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
 *               confirmPassword:
 *                 type: string
 *                 minLength: 8
 *             required:
 *               - email
 *               - newPassword
 *               - confirmPassword
 *     responses:
 *       200:
 *         description: Password successfully reset
 *       400:
 *         description: Bad request
 */
router.post("/resetPassword", [validator(reset_password)], resetPassword);

/**
 * @swagger
 * /api/auth/verifyEmail:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Verify user email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               verificationCode:
 *                 type: string
 *             required:
 *               - email
 *               - verificationCode
 *     responses:
 *       200:
 *         description: Email successfully verified
 *       400:
 *         description: Invalid verification code
 */
router.post("/verifyEmail", [validator(verfiy_email)], verifyEmail);

module.exports = router;



router.post("/loginUser", [validator(login_schema)], loginUser);
router.post("/loginRestaurant", [validator(login_schema)], loginRestaurant);
router.post("/signupUser", [validator(signup_schema)], signupUser);
router.post("/signupRestaurant", [validator(signup_schema)], signupRestaurant);
router.post("/forgotPassword", validator(forgot_password), forgotPassword);
router.post("/resetPassword", [validator(reset_password)], resetPassword);
router.post("/verifyEmail", [validator(verfiy_email)], verifyEmail);


module.exports = router;