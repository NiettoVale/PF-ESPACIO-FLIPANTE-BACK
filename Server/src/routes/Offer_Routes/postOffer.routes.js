const express = require("express");
const router = express.Router();
const postVisit = require("../../controllers/Visit/postVisit");

// Ruta para marcar un producto como favorito por un usuario
router.post("/visit", postVisit);

module.exports = router;
