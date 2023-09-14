const { Order, User } = require("../../DataBase");

const addOrder = async (req, res) => {
  try {
    const { userId, productId, sizeId, quantity, totalPrice } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "Falta el ID de usuario." });
    }

    if (!productId) {
      return res.status(400).json({ message: "Falta el ID de Producto." });
    }

    if (!quantity) {
      return res.status(400).json({ message: "Falta Cantidad." });
    }
    const purchaseDate = new Date();
    await Order.create({
      userId,
      productId,
      quantity,
      totalPrice,
      purchaseDate,
      payment: false, // Establece el valor de payment en false
    });
    return res.status(201).json({ message: "Orden creada con éxito.", error });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = addOrder;
