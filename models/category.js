const { Schema, model } = require("mongoose");

const category = new Schema({
    title: { type: String, minLength: 2, maxLength: 50, required: true, unique: true },
}, { timestamps: true });

module.exports = model("category", category);