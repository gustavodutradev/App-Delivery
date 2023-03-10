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
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'products',
      through: SalesProduct,
      otherKey: 'productId'
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      as: 'sales',
      through: SalesProduct,
      otherKey: 'saleId'
    });
  }
  return SalesProduct;
};
