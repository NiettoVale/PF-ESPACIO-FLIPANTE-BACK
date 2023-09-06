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

    // Buscar todos los productos en el carrito del usuario
    const cartProducts = await Cart.findAll({
      where: { userId },
      attributes: ["productId"],
    });

    if (!cartProducts || cartProducts.length === 0) {
      return res.status(404).json({
        message: "No se encontraron productos en el carrito de este usuario.",
      });
    }

    // Obtener los IDs de los productos en el carrito
    const productIds = cartProducts.map((cartProduct) => cartProduct.productId);

    // Contar la cantidad de cada producto en el carrito
    const productCountMap = {};
    productIds.forEach((productId) => {
      productCountMap[productId] = (productCountMap[productId] || 0) + 1;
    });

    // Buscar los detalles de los productos en el carrito y agregar la propiedad "cantidad"
    const cartProductsDetails = await Product.findAll({
      where: { id: productIds },
    });

    // Agregar la propiedad "cantidad" a los productos según la cuenta
    cartProductsDetails.forEach((product) => {
      product.dataValues.cantidad = productCountMap[product.id];
    });

    return res.status(200).json(cartProductsDetails);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCart;
