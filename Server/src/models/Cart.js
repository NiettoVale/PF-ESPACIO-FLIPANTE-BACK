const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Asegúrate de que siempre haya un usuario asociado
      },
      productId: {
        type: DataTypes.INTEGER, // O el tipo de dato adecuado para almacenar la lista de productos
        allowNull: false,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );
};
