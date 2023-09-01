const { Product, Size } = require("../../DataBase");
const filterSizes = require("../Filters/sizeFilter");

const filter = async (req, res) => {
  try {
    console.log(req.body);
    const { name, size, price, gender, category } = req.body;
    const products = await Product.findAll({
      include: [
        {
          model: Size, // Nombre del modelo relacionado
          as: "sizes", // Alias que has definido para la relación
          attributes: ["name"], // Atributos que deseas seleccionar del modelo relacionado
        },
      ],
    });
    let filteredProducts = [...products];
    //Filtro por name
    if (name) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    //Filtro price
    if (price) {
      const numericPrice = parseFloat(price);
      filteredProducts = filteredProducts.filter(
        (product) => parseFloat(product.price) === numericPrice
      );
    }

    //Filtro por size
    if (size) {
      //const sizeFiltered = await filterSizes(size.toUpperCase());
      filteredProducts = filteredProducts.filter((product) =>
        product.includes(product.size)
      );
    }

    //Filtro por gender
    if (gender) {
      filteredProducts = filteredProducts.filter((product) =>
        product.gender.toLowerCase().includes(gender.toLowerCase())
      );
    }

    //Filtro por category
    if (category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    //Verifico que tenga algo adentro
    if (filteredProducts.length > 0) {
      return res.status(200).json(filteredProducts);
    } else {
      return res.status(404).json({
        message:
          "No se encontraron productos que cumplan con los criterios de búsqueda.",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = filter;
