const { Product } = require("../../database");

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Suponiendo que estás pasando el ID del producto a actualizar en los parámetros de la URL.
    const { name, gender, category, mainMaterial, images, price, deleted } =
      req.body;

    // Verifica si el producto existe en la base de datos
    const existingProduct = await Product.findByPk(id);

    if (!existingProduct) {
      res.status(404).json({ error: "Producto no encontrado." });
    }

    if (name !== undefined && name !== "") {
      existingProduct.name = name;
    }

    if (gender !== undefined && gender !== "") {
      existingProduct.gender = gender;
    }

    if (category !== undefined && category !== "") {
      existingProduct.name = name;
    }

    if (mainMaterial !== undefined && mainMaterial !== "") {
      existingProduct.gender = gender;
    }

    if (images !== undefined && images !== "") {
      existingProduct.name = name;
    }

    if (price !== undefined && price !== "") {
      existingProduct.price = price;
    }
    console.log(deleted);
    if (deleted !== undefined && deleted !== "") {
      existingProduct.deleted = deleted;
    }
    console.log(existingProduct);

    if (existingProduct.changed()) {
      await existingProduct.save();
      return res
        .status(200)
        .json({ message: "Producto actualizado con exito" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateProduct;
