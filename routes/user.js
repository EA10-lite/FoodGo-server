const router = require("express").Router();
const { validator } = require("../middlewares/validator")
const { is_user } = require("../middlewares/access")
const { auth } = require("../middlewares/auth");

const { 
    updateProfile, 
    uploadProfilePicture,
    getMyProfile,
    deleteMyAccount
} = require("../controllers/user.controller");

const { profile_schema, avatar } = require("../schemas/user");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User profile management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateProfile:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User's full name
 *           example: John Doe
 *         phone:
 *           type: string
 *           description: User's phone number
 *           example: +1234567890
 *         about:
 *           type: string
 *           description: A brief description about the user
 *           example: "I am a software developer passionate about technology."
 *         state:
 *           type: string
 *           description: State of the user's address
 *           example: Lagos
 *         city:
 *           type: string
 *           description: City of the user's address
 *           example: Ikeja
 *         street:
 *           type: string
 *           description: Street of the user's address
 *           example: "123 Tech Avenue"
 *         zipcode:
 *           type: number
 *           description: Zip code of the user's address
 *           example: 100001
 *         longitude:
 *           type: number
 *           description: Longitude of the user's location
 *           example: 3.3792
 *         latitude:
 *           type: number
 *           description: Latitude of the user's location
 *           example: 6.5244
 *       required:
 *         - name
 *         - phone
 *         - state
 *         - city
 *         - street
 *         - zipcode
 *         - longitude
 *         - latitude
 *     Avatar:
 *       type: object
 *       properties:
 *         picture:
 *           type: string
 *           description: URL of the user's profile picture
 *           example: https://example.com/profile-picture.jpg
 */

/**
 * @swagger
 * /api/users/:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get the current user's profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: User ID
 *                 name:
 *                   type: string
 *                   description: User's name
 *                 email:
 *                   type: string
 *                   description: User's email
 *                 phone:
 *                   type: string
 *                   description: User's phone number
 *                 about:
 *                   type: string
 *                   description: About the user
 *                 picture:
 *                   type: string
 *                   format: url
 *                   description: User's profile picture
 *       401:
 *         description: Unauthorized
 */
router.get("/", [auth, is_user], getMyProfile);

/**
 * @swagger
 * /api/users/:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update the current user's profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProfile'
 *     responses:
 *       200:
 *         description: Profile successfully updated
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/", [validator(profile_schema), auth, is_user], updateProfile);

/**
 * @swagger
 * /api/users/uploadPicture:
 *   put:
 *     tags:
 *       - Users
 *     summary: Upload or update the user's profile picture
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Avatar'
 *     responses:
 *       200:
 *         description: Profile picture successfully uploaded/updated
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/uploadPicture", [validator(avatar), auth, is_user], uploadProfilePicture);

/**
 * @swagger
 * /api/users/:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete the current user's account
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account successfully deleted
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.delete("/", [auth, is_user], deleteMyAccount);

module.exports = router;