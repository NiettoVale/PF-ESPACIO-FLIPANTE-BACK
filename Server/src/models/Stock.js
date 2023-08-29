// models/Stock.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Stock = sequelize.define(
    "Stock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  // El stock pertenece a un tamaño (Size).
  Stock.associate = (models) => {
    // Relación con Size
    Stock.belongsTo(models.Size);
  };

  return Stock;
};
