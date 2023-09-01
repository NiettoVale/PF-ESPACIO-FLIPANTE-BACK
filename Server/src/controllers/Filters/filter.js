const { Product } = require("../../DataBase");
const filterSizes = require("../Filters/sizeFilter");

const filter = async (req, res) => {
  try {
    const { name, size, price, gender, category } = req.query;
    const products = await Product.findAll();

    //Filtro por name
    if (name) {
      const nameFiltered = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      if (nameFiltered.length > 0) {
        return res.status(200).json(nameFiltered);
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Nombre" });
      }
    }
    //Filtro price
    if (price) {
      const numericPrice = parseFloat(price);
      const priceFiltered = products.filter(
        (product) => parseFloat(product.price) === numericPrice
      );
      if (priceFiltered.length > 0) {
        return res.status(200).json(priceFiltered);
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Precio" });
      }
    }

    //Filtro por size (Hay que modificarlo)
    if (size) {
      const sizeFiltered = await filterSizes(size.toUpperCase());
      if (sizeFiltered.length > 0) {
        console.log(sizeFiltered.length);
        return res.status(200).json({ sizeFiltered });
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Talle" });
      }
    }

    //Filtro por gender
    if (gender) {
      const genderFiltered = products.filter((product) =>
        product.gender.toLowerCase().includes(gender.toLowerCase())
      );
      if (genderFiltered.length > 0) {
        return res.status(200).json({ genderFiltered });
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos con ese Genero" });
      }
    }

    //Filtro por category
    if (category) {
      const categoryFiltered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      if (categoryFiltered.length > 0) {
        return res.status(200).json({ categoryFiltered });
      } else {
        return res
          .status(404)
          .json({ message: "No hay productos en esa Categoria" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = filter;
