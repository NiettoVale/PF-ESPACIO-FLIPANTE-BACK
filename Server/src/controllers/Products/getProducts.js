const { Product, Size, Stock } = require("../../DataBase");

// const getCategory = async (_req, res) => {
//   try {
//     // Especifica las columnas que deseas seleccionar, en este caso, solo la columna 'name'
//     const products = await Product.findAll({
//       attributes: ["name"],
//       include: [
//         {
//           model: Size,
//           through: Stock,
//         },
//       ], // Especifica las columnas que deseas seleccionar
//     });

//     if (products.length > 0) {
//       const arrayProducts = products.map((product) => product.name);
//       return res.status(200).json(arrayProducts);
//     }

//     return res.status(200).json({ message: "No hay categorias agregados" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// module.exports = getCategory;

// const { Product, Size, Stock } = require("../../DataBase");

const getProducts = async (req, res) => {
  try {
    // Obtén todos los productos de la tabla "Product" incluyendo las relaciones con "Size" y "Stock"
    const products = await Product.findAll({
      where: {
        deleted: false,
      },
      include: [
        {
          model: Size,
          through: Stock,
        },
      ],
    });

    // Retorna la lista de productos en formato JSON
    return res.status(200).json(products);
  } catch (error) {
    // En caso de error, retorna una respuesta JSON con el mensaje de error y un código de estado 500 (Error del servidor)
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProducts;
