const { Product } = require("../../DataBase");

const filter = async (req, res) => {
  try {
    const { name, size, price } = req.query;
    const products = await Product.findAll();
<<<<<<< HEAD

    if (name) {
      const nameFiltered = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      if (nameFiltered.length > 0) {
        return res.status(200).json({ nameFiltered });
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Nombre" });
      }
    }

    if (price) {
      const numericPrice = parseFloat(price);
      const priceFiltered = products.filter(
        (product) => parseFloat(product.price) === numericPrice
      );
      if (priceFiltered.length > 0) {
        return res.status(200).json({ priceFiltered });
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Precio" });
      }
    }

    if (size && Array.isArray(size)) {
      const sizeFiltered = products.filter((product) => {
        product.size.some((productSize) => size.includes(productSize));
      });
      if (sizeFiltered.length > 0) {
        return res.status(200).json({ sizeFiltered });
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Talle" });
      }
=======
    if (name) {
      const namefiltered = products.filter((product) => product.name === name);
      return res.status(200).json({ namefiltered });
    }

    if (price) {
      const pricefiltered = products.filter(
        (product) => product.price === price
      );
      return res.status(200).json({ pricefiltered });
    }

    if (size) {
      const sizefiltered = products.filter((product) => product.size === size);
      return res.status(200).json({ sizefiltered });
>>>>>>> main
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = filter;
