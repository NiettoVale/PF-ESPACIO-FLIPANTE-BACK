const { User, Product } = require("../../DataBase");

const deleteFav = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const productId = parseInt(req.params.productId, 10);
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

    const favoritesFiltered = favorites.find((fav) => fav.id === productId);

    await favoritesFiltered.update({ delete: true });

    if (!favoritesFiltered) {
      return res.status(403).json({ message: "No se encontro el producto" });
    }
    return res.status(200).json({message: "Producto eliminado"});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
