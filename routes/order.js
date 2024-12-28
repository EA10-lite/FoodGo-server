const router = require("express").Router();
const {is_restaurant, is_user} = require("../middlewares/access")
const {auth} = require("../middlewares/auth")
const {validator} = require("../middlewares/validator");

const { 
    createOrder,
    editOrder,
    updateOrder,
    getOrder,
    getOrders,
    cancelOrder,
} = require("../controllers/order.controller");
const { order_schema, order_status } = require("../schemas/order");

router.get("/", [auth, is_restaurant], getOrders);
router.get("/:id", [auth, is_restaurant], getOrder);

router.post(
    "/",
    [validator(order_schema), auth, is_user],
    createOrder
);

router.put(
    "/:id", 
    [validator(order_schema), auth, is_user], 
    editOrder
);

router.put(
    "/:id", 
    [validator(order_status), auth, is_restaurant], 
    updateOrder
);

router.delete(
    "/:id",
    [auth, is_user],
    cancelOrder,
);

module.exports = router;