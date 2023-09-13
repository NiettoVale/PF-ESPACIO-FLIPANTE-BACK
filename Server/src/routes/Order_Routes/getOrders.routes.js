const express = require("express");
const getOrder = require("../../controllers/Order/getOrders");
const router = express.Router();

router.get("/order", getOrder);

module.exports = router;
