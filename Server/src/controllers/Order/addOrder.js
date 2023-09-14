const { Order } = require("../../DataBase");

const addOrder = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = addOrder;
