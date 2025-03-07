const { Schema, model } = require("mongoose");

const user = new Schema({
    name: { type: String, minLength: 2, maxLength: 50, required: true },
    phone: { type: String, minLength: 5, maxLength: 20, required: true },
    email: { type: String, minLength: 5, maxLength: 100, required: true, unique: true },
    password: { type: String, minLength: 8, maxLength: 1024, required: true },
    about: { type: String, minLength: 50, maxLength: 1000 },
    address: {
        state: { type: String },
        city: { type: String },
        street: { type: String },
        zipcode: { type: Number },
    },
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
    last_login: { type: Date, default: null },
    is_email_verified: { type: Boolean, default: false },
    verification_code: { type: String, default: null },
    verification_code_expires: { type: Date, default: null },
}, { timestamps: true });

module.exports = model("User", user);
