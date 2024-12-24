const express = require("express");

const food = require("../routes/food");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/food", food);
}