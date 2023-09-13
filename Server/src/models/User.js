const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },

      DNI: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      imageProfile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted: {
        // Agrega este campo
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Por defecto, no está eliminado
      },
    },
    { timestamps: false }
  );
};
