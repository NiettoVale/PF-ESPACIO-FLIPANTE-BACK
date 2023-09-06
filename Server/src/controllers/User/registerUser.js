const { User, Cart } = require("../../DataBase");
const { encrypt } = require("./handlers/handleCrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
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

    const hashPassword = await encrypt(password);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    await Cart.create({
      userId: newUser.id,
      productId,
    });

    return res.status(200).json({ message: "Usuario creado con éxito!!!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = registerUser;
