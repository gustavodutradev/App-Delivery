module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });
  
  Sale.associate = (models) => {
    models.Sale.hasMany(models.SalesProduct, { foreignKey: 'productId', as: 'product' });
    models.Sale.hasOne(models.User, { foreignKey: 'userId', as: 'user' });
    models.Sale.hasOne(models.User, { foreignKey: 'sellerId', as: 'seller' });
  }
  return Sale;
};
