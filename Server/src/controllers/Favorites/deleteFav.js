const { User, Product } = require("../../DataBase");

const deletedFav = async (req, res) => {
  try {
    const { userId, productId } = req.params; // Obtén el userId del usuario autenticadoj

    // Verifica que el userId sea válido
    if (!userId) {
      return res.status(400).json({ message: "Falta el ID de usuario." });
    }

    const user = await User.findByPk(userId, {
      include: [{ model: Product, through: "FavoriteItem" }],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Filtra los productos favoritos por la propiedad 'deleted' igual a false
    const favoriteProducts = user.Products.filter(
      (product) => !product.deleted
    );

    // Ordena los productos favoritos por ID de forma ascendente
    const favorites = favoriteProducts.sort((a, b) => a.id - b.id);

    const favoritesFiltered = favorites.find((fav) => fav.id === productId);

    // Verifica si se encontró el producto y si no ha sido eliminado previamente
    if (favoritesFiltered && !favoritesFiltered.deleted) {
      await favoritesFiltered.update({ deleted: true });
      return res.status(200).json({ message: "Producto eliminado" });
    } else if (favoritesFiltered && favoritesFiltered.deleted) {
      return res.status(403).json({ message: "El producto ya fue eliminado" });
    } else {
      return res.status(403).json({ message: "No se encontró el producto" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deletedFav;
