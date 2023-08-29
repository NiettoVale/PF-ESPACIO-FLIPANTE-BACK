const express = require("express");
const filter = require("../../controllers/Filtros/filter");

const router = express.Router();

router.get("/filter", filter);

module.exports = router;
