const { GetAll } = require("./GetAll");
const { GetFood } = require("./GetFood");
const { AddFood } = require("./AddFood");
const { EditFood } = require("./EditFood");
const { DeleteFood } = require("./DeleteFood");
const { FoodExist } = require("./FoodExist");

module.exports = {
    GetAll,
    GetFood,
    AddFood,
    EditFood,
    DeleteFood,
    FoodExist,
}