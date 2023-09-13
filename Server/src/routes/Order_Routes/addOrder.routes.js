const express = require("express");
const addOrder = require("../../controllers/Order/addOrder");
const router = express.Router();

router.post("/order", addOrder);

module.exports = router;
