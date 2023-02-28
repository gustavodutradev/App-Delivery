module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING,
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  Product.associate = ({ SalesProducts }) => {
    Product.belongsToMany(SalesProducts, {
      foreignKey: 'productId', as: 'products'
    });
  }

  return Product;
};
