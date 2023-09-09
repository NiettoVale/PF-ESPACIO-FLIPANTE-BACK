const express = require("express");
const router = express.Router();
const payment = require("../../controllers/Cart/payment");

router.post("/payment", payment);

module.exports = router;
