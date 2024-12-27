const { Schema, model } = require("mongoose");

const driver = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, minLength: 8, maxLength: 1024, required: true },
    address: {
        state: { type: String, required: true },
        city: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        street: { type: String, required: true },
        zipcode: { type: Number, required: true },
    },
    passport: {
        type: String,
        validate: {
            validator: (value) => {
                // Validate that the URL starts with 'https://'
                return value.startsWith('https://');
            },
            message: 'Image URL must start with "https://"',
        }
    },
}, { timestamps: true });

module.exports = model("driver", driver);