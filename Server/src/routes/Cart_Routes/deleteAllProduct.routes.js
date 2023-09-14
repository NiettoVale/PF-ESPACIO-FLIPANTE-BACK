const express = require("express");
const router = express.Router();
const deleteAllProduct = require("../../controllers/Cart/deleteAllProduct");

router.delete("/all/:userId/:productId/:sizeId", deleteAllProduct);

module.exports = router;
