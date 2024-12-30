const express = require("express");

const auth = require("../routes/auth");
const food = require("../routes/food");
const order = require("../routes/order");
const restaurant = require("../routes/restaurant");
const user = require("../routes/user");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/auth", auth);
    app.use("/api/food", food);
    app.use("/api/order", order);
    app.use("/api/restaurant", restaurant);
    app.use("/api/user", user);
}