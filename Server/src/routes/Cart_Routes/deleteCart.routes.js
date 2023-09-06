const express = require("express");
const router = express.Router();
const deleteCart = require("../../controllers/Cart/deleteCart");

router.delete("/cart/:userId/:productId", deleteCart);

module.exports = router;
