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