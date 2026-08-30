const express = require("express");
const router = express.Router();

const {
    getAllRestaurants,
    getRestaurant
} = require("../controllers/restaurantController");

router.get("/", getAllRestaurants);


router.get("/:storeId", getRestaurant);

module.exports = router;