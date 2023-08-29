const { Product } = require("../../DataBase");

const filter = async (req, res) => {
  try {
    const { name, size, price } = req.query;
    const products = await Prenda.findAll();
    if (name) {
      const nameFiltered = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.status(200).json({ nameFiltered });
    }

    if (price) {
      const priceFiltered = products.filter(
        (product) => product.price === price
      );
      return res.status(200).json({ priceFiltered });
    }

    if (size && Array.isArray(size)) {
      const sizeFiltered = products.filter((product) => {
        // Comprueba si al menos una talla del producto está en el arreglo de tallas buscadas
        return product.size.some((productSize) => size.includes(productSize));
      });
      return res.status(200).json({ sizeFiltered });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = filter;
