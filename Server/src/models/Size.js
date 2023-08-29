// models/Size.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Size = sequelize.define(
    "Size",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  // Un tamaño (Size) puede aplicarse a múltiples prendas.
  // Un tamaño puede tener múltiples existencias (stock).
  Size.associate = (models) => {
    // Relación con Prenda a través de StockItem
    Size.belongsToMany(models.Product, { through: "StockItem" });

    // Relación con Stock
    Size.hasMany(models.Stock);
  };

  return Size;
};
