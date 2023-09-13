require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const ProductModel = require("./models/Product");
const SizeModel = require("./models/Size");
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");
const CartModel = require("./models/Cart");
const StockModel = require("./models/Stock");
const ReviewModel = require("./models/Review");

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
StockModel(sequelize);
ReviewModel(sequelize);

const { Product, Size, User, Cart, Stock, Review } = sequelize.models;

// Configurar relaciones
Product.belongsToMany(Size, { through: Stock });
Size.belongsToMany(Product, { through: Stock });

User.belongsToMany(Product, { through: "FavoriteItem" });
Product.belongsToMany(User, { through: "FavoriteItem" });

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
