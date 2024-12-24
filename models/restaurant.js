const { Schema, model } = require("mongoose");

const restaurant = new Schema({
    name: { type: String, minLength: 2, maxLength: 50, required: true, unique: true },
    email: { type: String, minLength: 5, maxLength: 100, required: true, unique: true },
    address: { type: String, minLength: 5, maxLength: 100, required: true },
    phone: { type: String, minLength: 5, maxLength: 100, required: true },
    about: { type: String, minLength: 50, maxLength: 1000 },
    rating: { type: Number, min: 1, max: 5 },
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

module.exports = model("restaurant", restaurant);