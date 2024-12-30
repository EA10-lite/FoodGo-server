const { Schema, model, Types } = require("mongoose");

const order = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant", required: true },
    items: [
        {
            foodId: { type: Types.ObjectId, ref: "Food", required: true },
            quantity: { type: Number, min: 1, required: true }
        }
    ],
    totalAmount: { type: Number, min: 1, required: true },
    status: { type: String, enum: ["pending", "ongoing", "cancelled", "completed"], default: "pending" },
}, { timestamps: true });

module.exports = model("Order", order);