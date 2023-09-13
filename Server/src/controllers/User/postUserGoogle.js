const { User } = require("../../database");
const { encrypt } = require("./handlers/handleCrypt");

const registerUserGoogle = async (req, res) => {
  try {
    const { name, email, imageProfile } = req.body;

    if (!name || !email || !imageProfile) {
      return res.status(400).json({ message: "Faltan datos en la solicitud" });
    }

    const existingUserByName = await User.findOne({ where: { name } });
    const existingUserByEmail = await User.findOne({ where: { email } });

    if (existingUserByName) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario ya existe" });
    }

    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya existe" });
    }

    const hashPassword = await encrypt("admin");
    await User.create({
      name,
      email,
      password: hashPassword,
      imageProfile,
    });
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = registerUserGoogle;
