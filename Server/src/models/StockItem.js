// models/StockItem.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const StockItem = sequelize.define(
    "StockItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { timestamps: false }
  );

  return StockItem;
};
