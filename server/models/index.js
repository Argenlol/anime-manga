// const sequelize = require('../database');
// const { DataTypes } = require('sequelize');

// const User = sequelize.define('user', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     password: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false, unique: true },
//     role: { type: DataTypes.STRING, defaultValue: 'teacher' },
//     isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
//     activationLink: { type: DataTypes.STRING },
// });

// const Product = sequelize.define('product', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true },
//     type: { type: DataTypes.STRING },
//     price: { type: DataTypes.INTEGER },
//     image: { type: DataTypes.STRING },
//     description: { type: DataTypes.STRING }
// });

// const Comment = sequelize.define('comment', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     content: { type: DataTypes.STRING }
// });

// const Favorite = sequelize.define('favorite', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

// const product_comment = sequelize.define('product_comment', {}, { timestamps: false });
// const product_favorite = sequelize.define('product_favorite', {}, { timestamps: false });


// User.hasOne(Favorite);
// Favorite.belongsTo(User);

// Comment.hasOne(Product, { through: product_comment });
// Product.belongsToMany(Comment, { through: product_comment });

// User.hasMany(Comment);
// Comment.belongsTo(User)

// Product.hasOne(Favorite, { through: product_favorite });
// Favorite.belongsToMany(Product, { through: product_favorite });

// module.exports = {
//     User,
//     Favorite,
//     Comment,
//     Product,
// };