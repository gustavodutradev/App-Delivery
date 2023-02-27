module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role : {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  })

  User.associate = (models) => {
    models.User.belongsToMany(models.Sales, { foreignKey: 'sellerId', as: 'seller' });
    models.User.belongsToMany(models.Sales, { foreignKey: 'userId', as: 'user' }); 
  }
  return User;
};
