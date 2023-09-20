const { User } = require("../../DataBase");

const getUsers = async (_req, res) => {
  try {
    const users = await User.findAll({
      where: {
        deleted: false,
      },
      order: [["id", "ASC"]],
      // attributes: ["name"], // Aquí especifica los campos que deseas incluir
    });

    const sliceUsers = users.slice(0, 51);

    return res.status(200).json(sliceUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUsers;
