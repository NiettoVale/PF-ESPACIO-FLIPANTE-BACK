const { User } = require("../../DataBase");

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const userFound = await User.findOne({
      where: {
        id,
      },
    });
    if (!userFound) {
      return res.status(400).json({ error: "Producto no encontrado" });
    }
    return res.status(200).json(userFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getUserByID;
