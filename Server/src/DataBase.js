require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const ProductModel = require("./models/Product");
const SizeModel = require("./models/Size");
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");
const CartModel = require("./models/Cart");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
  }
);

// Inicializar modelos
ProductModel(sequelize);
SizeModel(sequelize);
UserModel(sequelize);
FavoriteModel(sequelize);
CartModel(sequelize);

const { Product, Size, User, Cart } = sequelize.models;

// Configurar relaciones
Product.belongsToMany(Size, { through: "ProductItem" });
Size.belongsToMany(Product, { through: "ProductItem" });

User.belongsToMany(Product, { through: "FavoriteItem" });
Product.belongsToMany(User, { through: "FavoriteItem" });

User.hasMany(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
