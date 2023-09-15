const { Review, Product } = require("../../DataBase");

const getReviewsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const myReviews = await Review.findAll({
      where: { UserId: id },
      include: [
        {
          model: Product,
          attributes: ["name"], // Solo selecciona el atributo "name" del producto
        },
      ],
    });

    if (myReviews.length > 0) {
      return res.status(200).json(
        myReviews.map((review) => {
          return {
            id: review.id,
            rating: review.rating,
            comment: review.comment,
            User: review.UserId, // Puedes mantener el ID del usuario si lo deseas
            Product: review.Product.name,
          };
        })
      );
    }

    return res
      .status(404)
      .json({ error: "No se encontraron revisiones para este usuario" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getReviewsByUserId;
