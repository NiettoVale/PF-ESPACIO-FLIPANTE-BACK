const { User, Product, Cart, Stock } = require("../../DataBase");

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

    // Buscar todos los productos en el carrito del usuario con sus cantidades y tallas
    const cartProducts = await Cart.findAll({
      where: { userId },
      attributes: ["productId", "quantity", "sizeId"], // Incluye la cantidad y el SizeId en la selección
    });

    if (!cartProducts || cartProducts.length === 0) {
      return res.status(404).json({
        message: "No se encontraron productos en el carrito de este usuario.",
      });
    }

    // Obtener los IDs de los productos en el carrito
    const productIds = cartProducts.map((cartProduct) => cartProduct.productId);

    // Obtener los SizeIds de los productos en el carrito
    const sizeIds = cartProducts.map((cartProduct) => cartProduct.sizeId);

    // Buscar los detalles de los productos en el carrito
    const cartProductsDetails = await Product.findAll({
      where: { id: productIds },
    });

    // Obtener la información de Stock para los productos en el carrito
    const stockInfo = await Stock.findAll({
      where: { ProductId: productIds, SizeId: sizeIds }, // Filtrar por ProductId y SizeId
    });

    // Crear un objeto que mapee el productId al stock correspondiente
    const stockMap = {};
    stockInfo.forEach((stock) => {
      stockMap[stock.ProductId] = stock.quantity;
    });

    // Agregar las propiedades "cantidad", "sizeId" y "stock" a los productos según la información en el carrito
    cartProductsDetails.forEach((product) => {
      const cartProduct = cartProducts.find(
        (cartItem) => cartItem.productId === product.id
      );
      if (cartProduct) {
        product.dataValues.cantidad = cartProduct.quantity;
        product.dataValues.sizeId = cartProduct.sizeId;
        product.dataValues.stock = stockMap[product.id]; // Agregar la propiedad "stock"
      }
    });

    return res.status(200).json(cartProductsDetails);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCart;
