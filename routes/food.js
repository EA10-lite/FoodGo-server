const router = require("express").Router();
const {is_restaurant} = require("../middlewares/access")
const {auth} = require("../middlewares/auth")
const {validator} = require("../middlewares/validator");

const { 
    getAllFoods,
    getFood,
    addFood,
    updateFood,
    deleteFood,
} = require("../controllers/food.controller");
const { food_schema } = require("../schemas/food");

/**
 * @swagger
 * components:
 *   schemas:
 *     Food:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           description: The name of the food item
 *         about:
 *           type: string
 *           description: Description of the food item
 *         price:
 *           type: number
 *           minimum: 1
 *           description: The price of the food item
 *         category:
 *           type: array
 *           items:
 *             type: string
 *           description: The categories the food belongs to
 *         pictures:
 *           type: array
 *           items:
 *             type: string
 *             format: url
 *           description: Array of URLs of food pictures (must start with "https://")
 *         preparation_time:
 *           type: number
 *           minimum: 1
 *           description: Preparation time in minutes
 *       required:
 *         - name
 *         - price
 *         - category
 *         - pictures
 *         - preparation_time
 *
 * tags:
 *   - name: Food
 *     description: API for managing food items
 *
 * paths:
 *   /api/food:
 *     get:
 *       tags:
 *         - Food
 *       summary: Get all food items
 *       responses:
 *         200:
 *           description: A list of all food items
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Food'
 *
 *     post:
 *       tags:
 *         - Food
 *       summary: Add a new food item
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Food'
 *       responses:
 *         201:
 *           description: Food item created successfully
 *
 *   /api/food/{id}:
 *     get:
 *       tags:
 *         - Food
 *       summary: Get a food item by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the food item
 *       responses:
 *         200:
 *           description: Food item found
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Food'
 *         404:
 *           description: Food item not found
 *
 *     put:
 *       tags:
 *         - Food
 *       summary: Update a food item by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the food item
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Food'
 *       responses:
 *         200:
 *           description: Food item updated successfully
 *         404:
 *           description: Food item not found
 *
 *     delete:
 *       tags:
 *         - Food
 *       summary: Delete a food item by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the food item
 *       responses:
 *         200:
 *           description: Food item deleted successfully
 *         404:
 *           description: Food item not found
 */


router.get("/", getAllFoods);
router.get("/:id", getFood);

router.post(
    "/",
    [validator(food_schema), auth, is_restaurant],
    addFood
);
router.put(
    "/:id", 
    [validator(food_schema), auth, is_restaurant], 
    updateFood
);
router.delete(
    "/:id",
    [auth, is_restaurant],
    deleteFood,
)

module.exports = router;