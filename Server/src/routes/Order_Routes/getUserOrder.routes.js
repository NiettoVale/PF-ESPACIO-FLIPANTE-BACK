const express = require("express");
const router = express.Router();
const getUserOrders = require("../../controllers/Order/getUserOrders");

router.get("/order", getUserOrders);

module.exports = router;
