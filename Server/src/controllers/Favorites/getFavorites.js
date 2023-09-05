const { User, Product } = require("../../DataBase");

const getFavorites = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    if (!userId) {
      return res.status(400).json({ message: "Falta el ID de usuario." });
    }

    const user = await User.findByPk(userId, {
      include: [{ model: Product, through: "FavoriteItem" }],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Filtrar los productos favoritos por la propiedad 'delete' igual a false
    const favoriteProducts = user.Products.filter((product) => !product.delete);

    // Ordenar los productos favoritos por ID de forma ascendente
    const favorites = favoriteProducts.sort((a, b) => a.id - b.id);

    return res.status(200).json({ favorites });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getFavorites;
