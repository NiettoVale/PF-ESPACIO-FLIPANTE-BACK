const { User } = require("../../DataBase");
const { compare } = require("./handlers/handleCrypt");

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const regexEmail = "/^[w-]+(.[w-]+)*@([w-]+.)+[a-zA-Z]{2,7}$/";
    let user;

    if (regexEmail.test(name)) {
      const email = name;
      await User.findOne({ where: { email } });
    }

    await User.findOne({ where: { name } });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    const checkPassword = await compare(password, user.password);
    if (checkPassword) {
      // Si las credenciales son correctas, responder con éxito
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginUser;
