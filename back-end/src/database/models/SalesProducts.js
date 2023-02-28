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
  
  SalesProduct.associate = (models) => {
    models.SalesProduct.hasMany(models.Product, {
      foreignKey: 'productId',
      as: 'products',
      through: models.SalesProduct,
      otherKey: 'saleId'
    });
    models.SalesProduct.hasMany(models.Sale, {
      foreignKey: 'saleId',
      as: 'sales',
      through: models.SalesProduct,
      otherKey: 'productId'
    });
  }
  return SalesProduct;
};
