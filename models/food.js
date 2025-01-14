const { Schema, model, Types } = require("mongoose");

const food = new Schema({
    createdBy: { type: Types.ObjectId, ref: "Restaurant" },
    name: { type: String, minLength: 2, maxLength: 50, required: true, unique: true },
    price: { type: Number, min: 1, required: true },
    category: [{ type: String, ref: "Category" }],
    preparation_time: { type: Number },
    pictures: [{
        type: String,
        validate: {
            validator: (value) => {
                // Validate that the URL starts with 'https://'
                return value.startsWith('https://');
            },
            message: 'Image URL must start with "https://"',
        }
    }],
}, { timestamps: true });

module.exports = model("Food", food);