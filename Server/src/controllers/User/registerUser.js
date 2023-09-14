const { User } = require("../../DataBase");
const arrayUsers = require("./arrayUsers");
const { encrypt } = require("./handlers/handleCrypt"); // Asegúrate de importar tu handler

const registerUser = async (req, res) => {
  try {
    // Verificar si la base de datos de usuarios está vacía
    const userCount = await User.count();
    if (userCount === 0 && arrayUsers.length > 0) {
      const bulkCreateData = arrayUsers.map(async (user) => {
        // Hashea la contraseña utilizando tu handler de encriptación
        const hashedPassword = await encrypt(user.password);

        return {
          name: user.name,
          email: user.email,
          password: hashedPassword,
        };
      });

      // Utiliza Promise.all para ejecutar todas las operaciones de hashing en paralelo
      const usersToCreate = await Promise.all(bulkCreateData);

      await User.bulkCreate(usersToCreate, { ignoreDuplicates: true });
      return res
        .status(200)
        .json({ message: "Usuarios ficticios cargados con éxito" });
    } else {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Faltan datos en la solicitud" });
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

      // Hashea la contraseña utilizando tu handler de encriptación
      const hashedPassword = await encrypt(password);

      await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(200).json({ message: "Usuario creado con éxito!!!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = registerUser;
