const { User, Product, Cart } = require("../../DataBase");

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
    let cart = await Cart.findOne({ where: { userId } });

    if (!user || !product) {
      return res
        .status(404)
        .json({ message: "Usuario o producto no encontrado." });
    }

    // Si no existe un carrito para este usuario, créalo
    if (!cart) {
      cart = await Cart.create({
        userId,
        productId,
      });
    } else {
      // Si ya existe un carrito, agrega una nueva fila con el mismo userId y el nuevo productId
      await Cart.create({
        userId,
        productId,
      });
    }

    return res.status(200).json({ message: "Producto agregado al carrito." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCart;
