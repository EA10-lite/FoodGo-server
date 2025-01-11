const router = require("express").Router();

const { 
    connectApi,
    searchAll
} = require("../controllers/main.controlller");

router.get("/", connectApi);
router.get("/search", searchAll);

module.exports = router;