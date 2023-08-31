require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const ProductModel = require("./models/Product");
const SizeModel = require("./models/Size");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
  }
);

// Inicializar modelos
ProductModel(sequelize);
SizeModel(sequelize);

const { Product, Size } = sequelize.models;

// Configurar relaciones
Product.belongsToMany(Size, { through: "ProductItem" });
Size.belongsToMany(Product, { through: "ProductItem" });

module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
