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
      attributes: ["productId", "quantity", "sizeId"],
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

    // Crear un mapa para almacenar los productos únicos y sus tallas correspondientes
    const uniqueProducts = new Map();

    // Iterar sobre los productos en el carrito y asignar las tallas
    cartProductsDetails.forEach((product) => {
      const matchingCartProducts = cartProducts.filter(
        (cartItem) => cartItem.productId === product.id
      );

      matchingCartProducts.forEach((cartProduct) => {
        const sizeId = cartProduct.sizeId;
        const quantity = cartProduct.quantity;

        // Crear una copia del producto para evitar sobrescribirlo
        const productCopy = { ...product.dataValues };

        // Agregar la cantidad y el stock al producto
        productCopy.cantidad = quantity;
        productCopy.sizeId = sizeId;

        // Supongamos que tienes un modelo de Stock con una propiedad `quantity`
        const stockInfo = Stock.findOne({
          where: { ProductId: product.id, SizeId: sizeId },
        });

        if (stockInfo) {
          productCopy.stock = stockInfo.quantity;
        } else {
          productCopy.stock = 0; // Otra acción en caso de que no haya stock
        }

        // Almacenar el producto único en el mapa usando una clave única (por ejemplo, productId y sizeId concatenados)
        const uniqueKey = `${product.id}_${sizeId}`;
        uniqueProducts.set(uniqueKey, productCopy);
      });
    });

    // Obtener los valores únicos del mapa como resultado final
    const resultProducts = [...uniqueProducts.values()];

    return res.status(200).json(resultProducts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCart;
