const router = require("express").Router();
const { validator } = require("../middlewares/validator")
const { is_user } = require("../middlewares/access")
const { auth } = require("../middlewares/auth")

router.get("/myProfile", [auth, is_user]);
router.put("/updateProfile", [validator(), auth, is_user]);
router.post("/addPaymentCard", [validator(), auth, is_user]);
router.post("/favorites", [validator(), auth, is_user]);
router.delete("/myProfile", [auth, is_user]);

module.exports = router;