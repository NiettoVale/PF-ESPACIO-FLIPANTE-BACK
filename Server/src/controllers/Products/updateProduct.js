const { Product } = require("../../DataBase");

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, fashion, mainMaterial, image } = req.body;

    const updateProduct = await Product.findByPk(id);

    if (name !== undefined && name !== "") {
      updateProduct.name = name;
    }

    if (gender !== undefined && gender !== "") {
      updateProduct.gender = gender;
    }

    if (fashion !== undefined && fashion !== "") {
      updateProduct.fashion = fashion;
    }

    if (mainMaterial !== undefined && mainMaterial !== "") {
      updateProduct.mainMaterial = mainMaterial;
    }

    if (image !== undefined && image !== "") {
      updateProduct.image = image;
    }

    if (updateProduct.changed()) {
      await updateProduct.save();
      return res
        .status(200)
        .json({ message: "Producto actualizada con exito" });
    }
    return res.status(200).json({ message: "No hubo cambios para actualizar" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateProduct;
