const { Product } = require("../../DataBase");

const getPrendas = async (_req, res) => {
  try {
    const prendas = await Product.findAll({
      where: {
        delete: false, // Filtra solo las prendas que no están marcadas como eliminadas
      },
    });

    if (prendas.length > 0) {
      return res.status(200).json(prendas);
    }

    return res.status(200).json({ message: "No hay prendas almacenadas." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPrendas;
