const { User, Product, Cart } = require("../../DataBase");

const getCart = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    if (!userId) {
      return res.status(400).json({ message: "Falta el ID de usuario." });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Buscar todos los productos en el carrito del usuario con sus cantidades
    const cartProducts = await Cart.findAll({
      where: { userId },
      attributes: ["productId", "quantity"], // Incluye la cantidad en la selección
    });

    if (!cartProducts || cartProducts.length === 0) {
      return res.status(404).json([]);
    }

    // Obtener los IDs de los productos en el carrito
    const productIds = cartProducts.map((cartProduct) => cartProduct.productId);

    // Buscar los detalles de los productos en el carrito
    const cartProductsDetails = await Product.findAll({
      where: { id: productIds },
    });

    // Agregar la propiedad "cantidad" a los productos según la cantidad en el carrito
    cartProductsDetails.forEach((product) => {
      const cartProduct = cartProducts.find(
        (cartItem) => cartItem.productId === product.id
      );
      if (cartProduct) {
        product.dataValues.cantidad = cartProduct.quantity;
      }
    });

    return res.status(200).json(cartProductsDetails);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCart;
