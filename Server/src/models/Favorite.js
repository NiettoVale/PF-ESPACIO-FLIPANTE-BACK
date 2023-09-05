const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("FavoriteItem", {}, { timestamps: false });
};
