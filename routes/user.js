const router = require("express").Router();
const { validator } = require("../middlewares/validator")
const { is_user } = require("../middlewares/access")
const { auth } = require("../middlewares/auth");

const { 
    updateProfile, 
    getMyProfile,
    deleteMyAccount
} = require("../controllers/user.controller");

const { profile_schema } = require("../schemas/user");

router.get("/", [auth, is_user], getMyProfile);
router.put("/", [validator(profile_schema), auth, is_user], updateProfile);
router.delete("/", [auth, is_user], deleteMyAccount);

module.exports = router;