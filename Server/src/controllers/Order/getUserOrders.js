const { Order } = require("../../DataBase");

const getAllOrders = async (req, res) => {
  try {
    Order;
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = getAllOrders;
