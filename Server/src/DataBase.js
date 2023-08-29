// Importa las dependencias necesarias
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;

// Importamos los modelos de la base de datos
const UserModel = require("./models/User");
const ProductModel = require("./models/Product");
const SizeModel = require("./models/Size");
const StockModel = require("./models/Stock");
const StockItemModel = require("./models/StockItem");

// Creamos una instancia de Sequelize con la configuración de la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // Desactivamos el registro de consultas SQL en la consola
  }
);

// Inicializa los modelos de la base de datos, pasando la instancia de Sequelize
StockItemModel(sequelize);
UserModel(sequelize);
ProductModel(sequelize);
SizeModel(sequelize);
StockModel(sequelize);

// Exporta los modelos y la instancia de Sequelize
module.exports = {
  ...sequelize.models, // Exporta todos los modelos individualmente
  connect: sequelize, // Exporta la instancia de Sequelize
};
