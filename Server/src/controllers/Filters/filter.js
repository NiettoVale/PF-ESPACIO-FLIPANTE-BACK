const { Product } = require("../../DataBase");

const filter = async (req, res) => {
  try {
    const { name, size, price } = req.query;
    const products = await Product.findAll();
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
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = filter;
