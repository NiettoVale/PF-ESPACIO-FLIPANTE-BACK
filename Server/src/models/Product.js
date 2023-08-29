const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainMaterial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      delete: {
        // Agrega este campo
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Por defecto, no está eliminado
      },
    },
    { timestamps: false }
  );

  // Una Product puede tener múltiples tallas.
  Product.associate = (models) => {
    // Relación con Size a través de StockItem
    Product.belongsToMany(models.Size, { through: "StockItem" });

    // Relación con Stock
    Product.hasMany(models.Stock);
  };
  return Product;
};
