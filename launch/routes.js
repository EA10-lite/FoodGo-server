const express = require("express");

const auth = require("../routes/auth");
const food = require("../routes/food");
const restaurant = require("../routes/restaurant");
const user = require("../routes/user");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/auth", auth);
    app.use("/api/food", food);
    app.use("/api/restaurant", restaurant);
    app.use("/api/user", user);
}