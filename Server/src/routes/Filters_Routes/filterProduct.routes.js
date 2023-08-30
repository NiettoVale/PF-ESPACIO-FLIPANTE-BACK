const express = require("express");
const filter = require("../../controllers/Filters/filter");

const router = express.Router();

router.get("/filter", filter);

module.exports = router;
