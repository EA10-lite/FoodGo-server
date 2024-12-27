const { RestaurantExist } = require("./RestaurantExist");
const { CreateRestaurant } = require("./CreateRestaurant");
const { GetRestaurant } = require("./GetRestaurant");
const { GetRestaurants } = require("./GetRestaurants");
const { UpdateRestaurant } = require("./UpdateRestaurant");
const { DeleteRestaurant } = require("./DeleteRestaurant");

module.exports = {
    RestaurantExist,
    CreateRestaurant,
    GetRestaurant,
    GetRestaurants,
    UpdateRestaurant,
    DeleteRestaurant
}