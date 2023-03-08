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
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'productId',
      as: 'products',
      through: SalesProduct,
      otherKey: 'saleId'
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'saleId',
      as: 'sales',
      through: SalesProduct,
      otherKey: 'productId'
    });
  }
  return SalesProduct;
};
