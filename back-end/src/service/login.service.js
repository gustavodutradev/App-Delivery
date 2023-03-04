const { User } = require('../database/models');
const { checkPassword, encryptPassword } = require('../utils/md5');
const { generateToken } = require('../utils/token');
const { 
  registerValidations, 
  checkUserExistence, 
  checkLoingPassword, 
  checkLoginEmail,
} = require('../utils/validations/loginValidations');

const findUser = async (email) => {
  const userFound = await User.findOne({ where: { email } });
  return userFound;
};

const createUser = async (user) => {
  const { name, email, password } = user;
  registerValidations(user);
  const foundUser = await findUser(email);
  checkUserExistence(foundUser);

  const passwordCrypt = encryptPassword(password);
  const newUser = await User.create({ 
    ...user, 
    password: passwordCrypt,
    role: user.role || 'costumer'
  });
  const token = generateToken(newUser);
  const { role } = newUser;

  return { name, email, role, token };
};

const loginUser = async (user) => {
  const { email, password } = user;
  const userFound = await findUser(email);
  checkLoginEmail(userFound);

  const { name, password: dbPassword, role } = userFound;

  const isValidPassword = checkPassword(password, dbPassword);
  checkLoingPassword(isValidPassword);

  const token = generateToken(userFound);

  return { name, email, role, token };
};

module.exports = {
  createUser,
  loginUser,
};