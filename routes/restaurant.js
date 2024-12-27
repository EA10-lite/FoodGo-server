const router = require("express").Router();
const { validator } = require("../middlewares/validator");
const { is_restaurant } = require("../middlewares/access");
const { auth } = require("../middlewares/auth");

const {} = require("../controllers/restaurant.controller")


module.exports = router;