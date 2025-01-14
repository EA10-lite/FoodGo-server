const router = require("express").Router();
const { validator } = require("../middlewares/validator");
const { is_restaurant } = require("../middlewares/access");
const { auth } = require("../middlewares/auth");

const {
    getRestaurant,
    getRestaurants,
    getRestaurantFoods,
    updateRestaurant,
    deleteRestaurant
} = require("../controllers/restaurant.controller");

router.get("/", getRestaurants);
router.get("/foods/",[ auth, is_restaurant], getRestaurantFoods);
router.get("/:id", getRestaurant);
router.put("/:id", [validator(), auth, is_restaurant], updateRestaurant);
router.delete("/:id", [auth, is_restaurant], deleteRestaurant);

module.exports = router;