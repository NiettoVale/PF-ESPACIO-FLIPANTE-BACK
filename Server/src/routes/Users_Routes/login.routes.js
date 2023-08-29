const express = require("express");
const loginUser = require("../../controllers/User/loginUser");
const router = express.Router();
const rateLimit = require("express-rate-limit");

// Configura el límite de velocidad para evitar ataques de fuerza bruta
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Bloquea durante 15 minutos después de exceder el límite
  max: 3, // Número máximo de intentos permitidos en el período especificado
  message:
    "Demasiados intentos de inicio de sesión. Tu cuenta ha sido bloqueada temporalmente (15min).", // Mensaje de respuesta cuando se excede el límite
});

// Define una ruta POST para el inicio de sesión
router.post("/login", loginLimiter, loginUser); // Aplica el límite de velocidad al inicio de sesión

module.exports = router;
