const { Order } = require("../../DataBase");

const getUserOrders = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    // Consulta todas las órdenes donde el ID de usuario coincide
    const userOrders = await Order.findAll({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(userOrders);
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = getUserOrders;
