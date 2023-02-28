module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  SalesProduct.associate = ({ Product, Sale }) => {
    SalesProduct.hasMany(Product, {
      foreignKey: 'productId',
      as: 'products',
      through: SalesProduct,
      otherKey: 'saleId'
    });
    SalesProduct.hasMany(Sale, {
      foreignKey: 'saleId',
      as: 'sales',
      through: SalesProduct,
      otherKey: 'productId'
    });
  }
  return SalesProduct;
};
