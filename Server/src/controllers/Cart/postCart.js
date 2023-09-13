const { User, Product, Cart } = require("../../database");

const postCart = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const productId = parseInt(req.params.productId, 10);

    if (!userId || !productId) {
      return res
        .status(400)
        .json({ message: "Falta el ID de usuario o producto." });
    }

    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    // Buscar si ya existe un registro en Cart para este usuario y producto
    const existingCartItem = await Cart.findOne({
      where: { userId, productId },
    });

    if (existingCartItem) {
      // Si el registro existe, aumenta la cantidad en 1
      existingCartItem.quantity += 1;
      await existingCartItem.save();
    } else {
      // Si el registro no existe, crea uno nuevo
      await Cart.create({ userId, productId });
    }

    return res.status(200).json({ message: "Producto agregado al carrito." });
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = postCart;
