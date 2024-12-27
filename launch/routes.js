const express = require("express");

const auth = require("../routes/auth");
const food = require("../routes/food");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/auth", auth);
    app.use("/api/food", food);
}