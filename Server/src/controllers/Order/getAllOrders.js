const { Order } = require("../../DataBase");

const getAllOrders = async (req, res) => {
  try {
    // Consulta todas las órdenes
    const orders = await Order.findAll();

    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error al obtener todas las órdenes:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = getAllOrders;
