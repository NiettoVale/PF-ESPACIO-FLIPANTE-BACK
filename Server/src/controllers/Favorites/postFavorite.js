const { User, Product } = require("../../DataBase");

const postFavorites = async (req, res) => {
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

    if (!user || !product) {
      return res
        .status(404)
        .json({ message: "Usuario o producto no encontrado." });
    }

    // Crea un registro en la tabla FavoriteItem para establecer la relación
    await user.addProduct(product);

    return res
      .status(200)
      .json({ message: "Producto marcado como favorito con éxito." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFavorites;
