const express = require("express");
const postSize = require("../../../controllers/Products/Size/postSize");
const router = express.Router();

router.post("/size", postSize);

module.exports = router;
