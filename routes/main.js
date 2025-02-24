const router = require("express").Router();

const { 
    connectApi,
    searchAll,
    getAllCategories,
} = require("../controllers/main.controlller");

router.get("/", connectApi);
router.get("/search", searchAll);
router.get("/categories", getAllCategories);

module.exports = router;