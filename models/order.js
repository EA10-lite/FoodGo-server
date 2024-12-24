const { Schema, model, Types } = require("mongoose");

const order = new Schema({
    createdBy: { type: Types.ObjectId, ref: "user", required: true },
    foodId: { type: Types.ObjectId, ref: "food", required: true },
    restaurantId: { type: Types.ObjectId, ref: "restaurant", required: true },
    quantity: { type: Number, min: 1, required: true },
    discount: { type: Number, min: 1 },
    price: { type: Number, min: 1, required: true },
}, { timestamps: true });

module.exports = model("order", order);