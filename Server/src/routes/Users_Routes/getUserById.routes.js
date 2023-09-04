const express = require("express");
const getUserById = require("../../controllers/User/getUserById");
const router = express.Router();

router.get("/profile/:id", getUserById);

module.exports = router;
