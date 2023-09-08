const { User } = require("../../DataBase");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, address, dni } = req.body;
    let DNI = dni;

    const updateUser = await User.findByPk(id);

    if (name !== undefined && name !== "") {
      updateUser.name = name;
    }

    if (phone !== undefined && phone !== "") {
      updateUser.phone = phone;
    }

    if (address !== undefined && address !== "") {
      updateUser.address = address;
    }

    if (DNI !== undefined && DNI !== "") {
      updateUser.DNI = DNI;
    }

    if (updateUser.changed()) {
      await updateUser.save();
      return res.status(200).json({ message: "Usuario actualizado con exito" });
    }
    return res.status(200).json({ message: "No hubo cambios para actualizar" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;

/*
const { encrypt } = require("./handlers/handleCrypt");

    if (password !== undefined && password !== "") {
      const hashPassword = await encrypt(password);
      updateUser.password = hashPassword;
    }
*/
