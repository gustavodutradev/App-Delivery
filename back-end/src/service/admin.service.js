const { User } = require('../database/models');
const { checkPassword, encryptPassword } = require('../utils/md5');
const { generateToken, verifyToken } = require('../utils/token');
const {
  registerValidations,
  checkUserExistence,
  checkLoingPassword,
  checkLoginEmail,
  verifyAdminRole,
} = require('../utils/validations/loginValidations');

const findUser = async (name, email) => {
  const userFound = await User.findOne({ where: { email, name } });
  return userFound;
};

const allUsersNotAdmin = async (token) => {
  const { data: { role } } = verifyToken(token);
  verifyAdminRole(role);
  const users = await User.findAll({ where: { role: { [sequelize.Op.not]: 'administrator' } } });
  return users;
};

const createUser = async (user, token) => {
  const { data: { role } } = verifyToken(token);
  verifyAdminRole(role);

  const { name, email, password } = user;
  registerValidations(user);

  const foundUser = await findUser(name, email);
  checkUserExistence(foundUser);

  const passwordCrypt = encryptPassword(password);
  const { id } = await User.create({ ...user, password: passwordCrypt });
  const token = generateToken(newUser);

  return { name, email, role, token, id };
};

const deleteUser = async ({ name, email }) => {
  const { data: { role } } = verifyToken(token);
  verifyAdminRole(role);

  const foundUser = await findUser(name, email);
  checkUserExistence(foundUser);

  await User.destroy({ where: { id: foundUser.id } });
};

module.exports = {
  createUser,
  findUser,
  allUsersNotAdmin,
  deleteUser,
};