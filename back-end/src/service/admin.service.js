const sequelize = require('sequelize');
const { User } = require('../database/models');
const { encryptPassword } = require('../utils/md5');
const { verifyToken } = require('../utils/token');
const {
  verifyAdminRole,
  adminRegisterValidations,
  checkUserExistence,
} = require('../utils/validations/adminValidations');

const findUser = async (name, email) => {
  const userFound = await User.findOne({
    where: {
      [sequelize.Op.or]: [{ email }, { name }]
    }
  });
  return userFound;
};

const allUsersNotAdmin = async (token) => {
  const { data: { role } } = verifyToken(token);
  verifyAdminRole(role);
  const users = await User.findAll({
    where: {
      role: { [sequelize.Op.not]: 'administrator' }
    },
    attributes: { exclude: ['id'] },
  });
  return users;
};

const createUser = async (user, token) => {
  const { data: { role } } = verifyToken(token);
  verifyAdminRole(role);

  const { name, email, password } = user;
  adminRegisterValidations(user);

  const foundUser = await findUser(name, email);
  checkUserExistence(foundUser);

  const passwordCrypt = encryptPassword(password);
  const { id } = await User.create({ ...user, password: passwordCrypt });

  return { name, email, role: user.role, id };
};

const deleteUser = async ({ email }, token) => {
  const { data: { role } } = verifyToken(token);
  verifyAdminRole(role);

  await User.destroy({ where: { email } });
};

module.exports = {
  createUser,
  findUser,
  allUsersNotAdmin,
  deleteUser,
};