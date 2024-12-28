const { Schema, model, Types } = require("mongoose");

const order = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    foodId: { type: Types.ObjectId, ref: "Food", required: true },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant", required: true },
    quantity: { type: Number, min: 1, required: true },
    discount: { type: Number, min: 1 },
    price: { type: Number, min: 1, required: true },
    status: { type: String, enum: ["pending", "ongoing", "cancelled", "completed"], default: "pending" },
}, { timestamps: true });

module.exports = model("order", order);