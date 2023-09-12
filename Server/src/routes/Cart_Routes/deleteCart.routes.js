const express = require("express");
const router = express.Router();
const deleteCart = require("../../controllers/Cart/deleteCart");

router.delete("/:userId/:productId/:sizeId", deleteCart);

module.exports = router;
