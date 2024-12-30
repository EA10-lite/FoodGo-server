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
    getUserOrders,
    cancelOrder,
} = require("../controllers/order.controller");
const { order_schema, order_status } = require("../schemas/order");

router.get("/", [auth, is_restaurant], getOrders);
router.get("/orders/:id", [auth, is_restaurant], getOrder);
router.get("/myOrders", [auth, is_user], getUserOrders);

router.post(
    "/",
    [validator(order_schema), auth, is_user],
    createOrder
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