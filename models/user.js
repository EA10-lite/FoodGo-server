const { Schema, model } = require("mongoose");

const user = new Schema({
    name: { type: String, minLength: 2, maxLength: 50, required: true, unique: true },
    about: { type: String, minLength: 50, maxLength: 1000 },
    phone: { type: String, minLength: 5, maxLength: 20, required: true },
    email: { type: String, minLength: 5, maxLength: 100, required: true },
    picture: {
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

module.exports = model("user", user);