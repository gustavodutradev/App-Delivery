const ConflictError = require('../errors/conflictError');
const InvalidParams = require('../errors/invalidParam');
const NotFound = require('../errors/notFound');

const registerValidations = ({ email, password, name }) => {
  validateName(name);
  validateEmail(email);
  validatePassword(password);
}

const checkUserExistence = (userFound) => {
  if (userFound) throw new ConflictError('Email already registered.');
}

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) throw new InvalidParams('Email must be: "email@domain.domain".');
}

const validatePassword = (password) => {
  if (password.length < 6) throw new InvalidParams('Password must have at least 6 characters long.');
}

const validateName = (name) => {
  if (name.length < 12) throw new InvalidParams('Name must be at least 12 characters long.');
}

const checkLoginEmail = (userFound) => {
  if (!userFound) throw new NotFound('Email or password is invalid!');
}

const checkLoingPassword = (isValidPassword) => {
  if (!isValidPassword) throw new NotFound('Email or password is invalid!');
}

module.exports = {
  registerValidations,
  checkUserExistence,
  checkLoginEmail,
  checkLoingPassword,
};