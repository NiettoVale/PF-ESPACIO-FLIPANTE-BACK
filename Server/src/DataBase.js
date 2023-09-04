require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER, DB_PORT } = process.env;
const ProductModel = require("./models/Product");
const SizeModel = require("./models/Size");
const UserModel = require("./models/User");

const sequelize = new Sequelize(
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
  }
);

// Inicializar modelos
ProductModel(sequelize);
SizeModel(sequelize);
UserModel(sequelize);

const { Product, Size } = sequelize.models;

// Configurar relaciones
Product.belongsToMany(Size, { through: "ProductItem" });
Size.belongsToMany(Product, { through: "ProductItem" });

module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
