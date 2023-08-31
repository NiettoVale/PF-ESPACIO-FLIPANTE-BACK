const { Product, Size } = require("../../DataBase");

const filterSizes = async (size) => {
  try {
    const products = await Product.findAll({
      where: {
        delete: false,
      },
      include: [
        {
          model: Size,
          as: "Sizes",
          attributes: ["name"],
        },
      ],
    });

    const formattedProducts = products.map((product) => {
      const totalStock = product.stock;
      const sizesWithStock = product.Sizes.map((size) => size.name);

      const totalSizes = sizesWithStock.length;
      const stockPerSize = Math.floor(totalStock / totalSizes);
      const remainder = totalStock % totalSizes;

      const formattedSizes = Object.fromEntries(
        sizesWithStock.map((size, index) => [
          size,
          stockPerSize + (index < remainder ? 1 : 0),
        ])
      );

      return {
        id: product.id,
        name: product.name,
        gender: product.gender,
        category: product.category,
        mainMaterial: product.mainMaterial,
        description: product.description,
        images: product.images,
        price: product.price,
        delete: product.delete,
        stock: product.stock,
        size: formattedSizes,
      };
    });

    const filteredProducts = formattedProducts.filter((product) => {
      return Object.keys(product.size).includes(size);
    });

    return filteredProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = filterSizes;
