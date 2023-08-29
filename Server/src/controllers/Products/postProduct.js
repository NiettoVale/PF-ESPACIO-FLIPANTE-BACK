const { Product } = require("../../DataBase");
const products = require("./arrayProducts");

const postProducts = async (req, res) => {
  try {
    const count = await Product.count();

    if (count === 0) {
      await Product.bulkCreate(products);
      return res.status(202).json({ message: "Productos agregados con éxito" });
    }

    const { name, gender, category, mainMaterial, images, price } = req.body;

    if (!name || !gender || !category || !mainMaterial || !images || !price) {
      return res.status(400).json({ error: "Faltan datos en la solicitud" });
    }

    await Product.create({
      name,
      gender,
      category,
      mainMaterial,
      images,
      price,
    });

    return res.status(200).json({ message: "Producto creada con éxito." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProducts;
